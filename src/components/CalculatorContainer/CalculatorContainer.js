import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import TableBody from "@material-ui/core/TableBody"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

import FormSection from 'components/FormSection'
import PlateSection from 'components/PlateSection'
import { LABEL, CALORIE_FACTOR, CALORIE_PER_UNIT } from "utils/constants";
import { RoomTypes, PatientTypes, FoodTypes, FoodTime } from "utils/types";

const useStyles = makeStyles(theme => ({
  table: {
    marginBottom: theme.spacing(2),
  },
  subResult: {
    fontWeight: "bold",
  },
  result: {
    justifyContent: "flex-end",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
    marginBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
    "&:last-child": {
      marginBottom: theme.spacing(4),
    }
  }
}));

const initialCalorieData = { 
  rice: {
    divider: 0,
    divisor: 0,
    calorie: 0,
  }, 
  meat:{
    divider: 0,
    divisor: 0,
    calorie: 0,
  },
  fat: {
    divider: 0,
    divisor: 0,
    calorie: 0,
  },
  fruit: {
    divider: 0,
    divisor: 0,
    calorie: 0,
  },
  dessert: {
    divider: 0,
    divisor: 0,
    calorie: 0,
  }
}

const calculateCalorie = (condition, plate, calorieData) => {
  if (condition && plate) {
    const calorieDataNew = JSON.parse(JSON.stringify(calorieData))
    for (const { name: labelName } of LABEL) {
      const divider = plate.reduce((total, bowl) => (total += bowl[labelName]), 0)
      const divisor = plate.filter(bowl => bowl[labelName] > 0).length * 4
      const calorie = divisor > 0 ? (divider / divisor) * CALORIE_FACTOR[condition.roomType][condition.patientType][condition.foodType][condition.foodTime][labelName] * CALORIE_PER_UNIT[labelName] : 0
      calorieDataNew[labelName].divider = divider
      calorieDataNew[labelName].divisor = divisor
      calorieDataNew[labelName].calorie = calorie
    }
    return calorieDataNew
  }
  return calorieData
}

export const CalculatorContainer = ({ roomType }) => {
  const classes = useStyles()
  const [calorieData, setCalorieData] = useState(initialCalorieData)
  const [conditionData, setConditionData] = useState({
    roomType,
    patientType: PatientTypes.SPECIALIZE,
    foodType: FoodTypes.REGULAR,
    foodTime: FoodTime.MORNING,
  })
  const bowlCount = roomType === RoomTypes.NORMAL ? 6 : 5
  const [plateData, setPlateData] = useState(
    Array(bowlCount).fill({ rice: 0, meat: 0, fat: 0, fruit: 0, dessert: 0 })
  )
  return (
    <Box className="calculator-container">
      <FormSection
        onChangeForm={condition => {
          setConditionData({...condition})
          setCalorieData(calculateCalorie(condition, plateData, calorieData))
        }}
      />
      <PlateSection
        roomType={roomType}
        onChangePlate={plate => {
          setPlateData([...plate])
          setCalorieData(calculateCalorie(conditionData, plate, calorieData))
        }}
      />
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>สารอาหาร</TableCell>
            <TableCell align="center">ผลลัพธ์</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            LABEL.map(({ label, name }, index) => 
              <TableRow key={index}>
                <TableCell>{label}</TableCell>
                <TableCell>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>ส่วนที่เหลือ</Grid>
                    <Grid item xs={4}>{calorieData[name].divider}</Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>ส่วนทั้งหมด</Grid>
                    <Grid item xs={4}>{calorieData[name].divisor}</Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>แฟกเตอร์</Grid>
                    <Grid item xs={4}>{CALORIE_FACTOR[conditionData.roomType][conditionData.patientType][conditionData.foodType][conditionData.foodTime][name]}</Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item xs={8}>แคลอรี่ต่อหน่วย</Grid>
                    <Grid item xs={4}>{CALORIE_PER_UNIT[name]}</Grid>
                  </Grid>
                  <Grid container spacing={1} className={classes.subResult}>
                    <Grid item xs={8}>แคลอรี่ (kcal)</Grid>
                    <Grid item xs={4}>{calorieData[name].calorie.toFixed(2)}</Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
      {/* <Grid container className={classes.result}>
        <Grid item xs={8}>โปรตีน (g)</Grid>
        <Grid item xs={3}>{calorieData.meat.divisor > 0 ? (calorieData.meat.divider / calorieData.meat.divisor * CALORIE_FACTOR[conditionData.roomType][conditionData.patientType][conditionData.foodType][conditionData.foodTime]['meat']).toFixed(2) : 0.0.toFixed(2)}</Grid>
      </Grid> */}
      <Grid container className={classes.result}>
        <Grid item xs={8}>รวมแคลอรี่ (kcal)</Grid>
        <Grid item xs={3}>{Object.keys(calorieData).reduce((total, labelName) => total += calorieData[labelName].calorie, 0).toFixed(2)}</Grid>
      </Grid>
    </Box>
  ) 
}