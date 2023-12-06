import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import DrawerComp from "../components/Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#fff" }}>
        <Toolbar>
          <ConnectingAirportsIcon sx={{ transform: "scale(2)", color:"#000"}} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", color:"#000" }}>
                Indulge
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" , color:"#000"}}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Honemoon Packages" />
                <Tab label="Holidays" />
                <Tab label="Visa" />
              </Tabs>
              <Button sx={{ marginLeft: "auto", color:"#fff"}} variant="contained">
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