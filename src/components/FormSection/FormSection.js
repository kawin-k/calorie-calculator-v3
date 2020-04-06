import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";

import { RoomTypes, PatientTypes, FoodTypes, FoodTime } from "utils/types";

const useStyles = makeStyles(theme => ({
  conditionForm: {
    marginBottom: theme.spacing(3)
  },
  formControl: {
    marginBottom: theme.spacing(2),
    width: "100%",
    "&:last-child": {
      marginBottom: 0,
    }
  }
}));

export const FormSection = ({ onChangeForm }) => {
  const classes = useStyles();
  const [condition, setCondition] = useState({
    roomType: RoomTypes.NORMAL,
    patientType: PatientTypes.SPECIALIZE,
    foodType: FoodTypes.REGULAR,
    foodTime: FoodTime.MORNING,
  })
  useEffect(() => {
    onChangeForm(condition)
  }, [])

  const handleChangeForm = conditionName => event => {
    setCondition({
      ...condition,
      [conditionName]: event.target.value
    });
    onChangeForm({
      ...condition,
      [conditionName]: event.target.value
    });
  };

  return (
    <Box className={classes.conditionForm}>
      <FormControl className={classes.formControl}>
        <InputLabel>ประเภทผู้ป่วย</InputLabel>
        <Select
          value={condition.patientType}
          onChange={handleChangeForm("patientType")}
        >
          <MenuItem value={PatientTypes.SPECIALIZE}>เฉพาะโรค</MenuItem>
          <MenuItem value={PatientTypes.DIABETES}>เบาหวาน</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>ประเภทอาหาร</InputLabel>
        <Select
          value={condition.foodType}
          onChange={handleChangeForm("foodType")}
        >
          <MenuItem value={FoodTypes.REGULAR}>อาหารปกติ</MenuItem>
          <MenuItem value={FoodTypes.SOFT}>อาหารอ่อน</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>เวลาอาหาร</InputLabel>
        <Select
          value={condition.foodTime}
          onChange={handleChangeForm("foodTime")}
        >
          <MenuItem value={FoodTime.MORNING}>เช้า</MenuItem>
          <MenuItem value={FoodTime.NOON}>กลางวัน</MenuItem>
          <MenuItem value={FoodTime.EVENING}>เย็น</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
