/* eslint-disable no-unused-vars */
import {
  Avatar,
  Badge,
  Box,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useFirebase } from "../context/FireBase";

import user from "../images/dp.jpeg";
import toast from "react-hot-toast";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const firebase = useFirebase();

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          lg={2}
          sx={{ color: "blue", fontSize: "28px", fontWeight: "bold", m: 2 }}
        >
          E-Kart
          {/* <StoreIcon sx={{ fontSize: "30px" }} /> */}
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item lg={4} md={3} sm={3} xs={3}>
          <Box
            sx={{
              border: "0px solid",
              // backgroundColor: "silver",
              my: 1,
            }}
          >
            <TextField
              sx={{ width: "360px" }}
              variant="standard"
              placeholder="Search .."
            />
            <SearchIcon sx={{ my: 1, fontSize: 22 }}></SearchIcon>{" "}
          </Box>
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item lg={1} sx={{ my: 1 }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Grid>
        <Grid item lg={0} sx={{ my: 1 }}>
          <Tooltip title="My Profile">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Aemy Sharp" src={user} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>

            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Account</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Dashboard</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography
                textAlign="center"
                onClick={() => {
                  firebase.SignOutUser(), navigate("/");
                }}
              >
                Logout
              </Typography>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <div className="main-div ">
        <Box
          className={!isOpen ? "sidenav-full" : "sidenav-small"}
          sx={{ borderTop: 2, borderRight: 2 }}
        >
          {" "}
          <SideNav isOpen={isOpen}></SideNav>
        </Box>
        <Box className="homepage " sx={{ borderTop: 2 }}>
          <Grid item lg={4}>
            <button onClick={() => setIsOpen(!isOpen)}>
              {<MenuIcon fontSize="small" />}
            </button>
          </Grid>
          <Outlet></Outlet>
        </Box>
      </div>
    </>
  );
}
