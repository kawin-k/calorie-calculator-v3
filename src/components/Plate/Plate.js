import React from 'react'
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import { RoomTypes } from "utils/types"

import Bowl from "components/Bowl" 

const useStyles = makeStyles(theme => ({
  plate: {
    marginRight: "auto",
    marginLeft: "auto",
    border: "1px solid lightgrey",
    borderRadius: 4,
    backgroundColor: "white",
    marginBottom: theme.spacing(1),
  },
  bowlContainer: {
    justifyContent: "space-between"
  },
  bowlItem: {
    padding: theme.spacing(1),
  }
}))

export const Plate = ({ selectedIndex, setSelectedIndex, plate, roomType }) => {
  const classes = useStyles();
  const bowlCount = roomType === RoomTypes.NORMAL ? 6 : 5
  return (
    <Box className={classes.plate}>
      <Grid container className={classes.bowlContainer}>
        {
          [...Array(bowlCount).keys()].map(index => 
            <Grid item xs={4} key={index} className={classes.bowlItem}>
              <Bowl 
                isActive={selectedIndex === index}
                currentIndex={index}
                setSelectedIndex={setSelectedIndex}
                bowl={plate[index]}
              />
            </Grid>
          )
        }   
      </Grid>
    </Box>
  )
}

