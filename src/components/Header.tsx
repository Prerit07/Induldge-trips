import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme
} from "@mui/material";
import DrawerComp from "../components/Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff" }}>
        <Toolbar>
          <img src="src/assets/indulge_trips_logo.png" alt="image logo" width={200} height={150}></img>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ margin: "auto" , color:"#000"}}
                indicatorColor="secondary"
                textColor="primary"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab sx={{color:"#100D37", '&:hover':{borderBottom: "2px solid #B971F0"}}} label="Holidays" />
                <Tab sx={{color:"#100D37", '&:hover':{borderBottom: "2px solid #B971F0"}}} label="Flight" />
                <Tab sx={{color:"#100D37", '&:hover':{borderBottom: "2px solid #B971F0"}}} label="Hotel" />
                <Tab sx={{color:"#100D37", '&:hover':{borderBottom: "2px solid #B971F0"}}} label="Honeymoon Packages" />
                <Tab sx={{color:"#100D37", '&:hover':{borderBottom: "2px solid #B971F0"}}} label="Visa" />
                <Tab sx={{color:"#100D37", '&:hover':{borderBottom: "2px solid #B971F0"}}} label="About us" />
              </Tabs>
              <Button sx={{ marginLeft: "auto", color:"#fff", backgroundColor:"#1b959a"}} variant="contained">
                Contact
              </Button>
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;