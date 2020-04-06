import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import CalculatorContainer from "components/CalculatorContainer";
import { RoomTypes } from "utils/types";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const App = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (event, value) => {
    setTab(value)
  };
  return (
    <div className="App">
      <CssBaseline />
        <AppBar position="static">
          <Container maxWidth="xs">
            <Tabs value={tab} onChange={handleChange}>
              <Tab label="อาคารผู้ป่วยสามัญ" {...a11yProps(0)} />
              <Tab label="อาคารผู้ป่วยพิเศษ" {...a11yProps(1)} />
            </Tabs>
          </Container>
        </AppBar>
        <Container maxWidth="xs">
          <TabPanel value={tab} index={0}>
            <CalculatorContainer roomType={RoomTypes.NORMAL}/>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <CalculatorContainer roomType={RoomTypes.SPECIAL}/>
          </TabPanel>
        </Container>
    </div>
  );
}

export default App;
