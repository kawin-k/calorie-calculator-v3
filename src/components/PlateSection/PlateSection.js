import React, { useState, useEffect } from 'react'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { debounce } from "lodash"

import Plate from "components/Plate"
import { LABEL } from "utils/constants"
import { RoomTypes } from "utils/types";

const useStyles = makeStyles(theme => ({
  plateSection: {
    marginBottom: theme.spacing(1),
  },
  label: {
    paddingTop: 12,
    textAlign: "right",
    paddingRight: theme.spacing(2),
  },
  slider: {
    paddingRight: theme.spacing(3),
  },
  row: {
    marginBottom: theme.spacing(1),
  }
}))

export const PlateSection = ({ onChangePlate, roomType }) => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const bowlCount = roomType === RoomTypes.NORMAL ? 6 : 5
  const [plate, setPlate] = useState(Array(bowlCount).fill({ rice: 0, meat: 0, fat: 0, fruit: 0, dessert: 0 }))
  useEffect(() => {
    onChangePlate(plate)
  }, [])

  const handleChange = index => debounce((event, value) => {
    setPlate([
      ...plate.slice(0, selectedIndex),
      {
        ...plate[selectedIndex],
        [LABEL[index].name]: value
      },
      ...plate.slice(selectedIndex + 1)
    ])
    onChangePlate([
      ...plate.slice(0, selectedIndex),
      {
        ...plate[selectedIndex],
        [LABEL[index].name]: value
      },
      ...plate.slice(selectedIndex + 1)
    ])
  }, 10)
  return (
    <Box className={classes.plateSection}>
      <Plate
        roomType={roomType}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        plate={plate}
      />
      {
        [...Array(5).keys()].map(index => 
          <Grid container key={index} className={classes.row}>
            <Grid item xs={4} className={classes.label}>{LABEL[index].label}</Grid>
            <Grid item xs={8} className={classes.slider}>
              <Slider
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={4}
                value={plate[selectedIndex][LABEL[index].name]}
                onChange={handleChange(index)}
              />
            </Grid>
          </Grid>
        )
      }
    </Box>
  )
}