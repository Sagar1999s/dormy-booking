import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Toolbar,
  Tab,
  useMediaQuery,
  useTheme,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComp from "../drawer/DrawerComp";


const PAGES = ["Help"];
const PATHS = ["#"];

export const NavBar = () => {
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          background: "#1E1E2F", 
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <Toolbar>
          
          
          {isMatch ? (
            <>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFFFF", 
                  fontWeight: "bold", 
                }}
              >
                DOMSTAY
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                DOMSTAY
              </Typography>
              
              <Tabs
                sx={{ ml: "auto", color: "#FFFFFF" }} 
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
              >
                {PAGES.map((page, index) => (
                  <Tab
                    label={page}
                    key={index}
                    component={Link}
                    to={PATHS[index]}
                    selected={value === index}
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: "500",
                      textTransform: "capitalize", 
                      fontSize: "1rem",
                      "&:hover": {
                        color: "#69F0AE", 
                      },
                    }}
                  />
                ))}
                <Tab
                  label="Login"
                  onClick={handleClick}
                  sx={{
                    py: 1,
                    px: 2,
                    borderColor: "#1e88e5",
                    color: "#fff",
                    borderRadius: "10px", 
                    textTransform: "none", 
                    fontWeight: "bold",
                    transition: "0.3s", 
                    "&:hover": {
                      backgroundColor: "#1E1E2F",
                      color: "#69F0AE",
                      borderColor: "#1e88e5",
                    },
                  }}
                />
              </Tabs>
              
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  sx: {
                    backgroundColor: "#FFFFFF",
                    color: "#000000", 
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
                    borderRadius: "8px", 
                  },
                }}
              >
                <MenuItem
                  component={Link}
                  to="/loginwithpassword"
                  onClick={handleClose}
                  sx={{
                    color: "#000000",
                    "&:hover": {
                      color: "#1E88E5", 
                      backgroundColor: "#f5f5f5", 
                    },
                  }}
                >
                  Sign In / Sign Up
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};
