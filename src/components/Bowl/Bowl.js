import React from 'react'
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";

import { LABEL } from "utils/constants"

const useStyles = makeStyles(theme => ({
  bowl: {
   border: (props) => props.isActive ? `2px solid ${theme.palette.primary.main}` : "1px solid lightgrey",
   padding: theme.spacing(1),
   borderRadius: 4,
   width: "100%",
   height: "100%",
   cursor: "pointer",
  },
  row: {
    marginBottom: theme.spacing(1),
    "&:last-child" : {
      marginBottom: 0,
    }
  },
  label: {
    fontSize: 10,
    paddingRight: 4,
  },
  progress: {
    margin: "auto"
  },
}))

export const Bowl = ({ isActive, currentIndex, setSelectedIndex, bowl }) => {
  const props = { isActive } 
  const classes = useStyles(props);
  return (
    <Box className={classes.bowl} onClick={() => setSelectedIndex(currentIndex)}>
      {
        [...Array(5).keys()].map(index => 
          <Grid container key={index} className={classes.row}>
            <Grid item xs={8} className={classes.label}>{LABEL[index].label}</Grid>
            <Grid item xs={4} className={classes.progress}>
              <LinearProgress variant="determinate" value={bowl[LABEL[index].name] * 25}/>
            </Grid>
          </Grid>
        )
      }
    </Box>
  )
}