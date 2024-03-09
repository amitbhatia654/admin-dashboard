import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import PeopleIcon from "@mui/icons-material/People";
import GradingIcon from "@mui/icons-material/Grading";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import StoreIcon from "@mui/icons-material/Store";

export default function SideNav({ isOpen }) {
  return (
    <div>
      <Box sx={{ mx: 2 }}>
        <StoreIcon sx={{ color: "grey", fontSize: "28px" }} />
        <Box
          component={"span"}
          sx={{
            display: `${isOpen && "none"}`,
            fontSize: 23,
            mx: 1,
            color: "grey",
            fontWeight: "bold",
          }}
        >
          E-Kart
        </Box>
      </Box>
      <hr />

      <br></br>
      <Box sx={{ mx: 2 }}>
        <Link to={"/dashboard"}>
          <WidgetsIcon />
          <Box
            component={"span"}
            sx={{ display: `${isOpen && "none"}`, mx: 1 }}
          >
            Dashboard
          </Box>
        </Link>
      </Box>

      <Box sx={{ mx: 2, my: 1 }}>
        <Link to={"/employees"}>
          <ContactEmergencyIcon />

          <Box
            component={"span"}
            sx={{ display: `${isOpen && "none"}`, mx: 1 }}
          >
            Employees
          </Box>
        </Link>
      </Box>
      <Box sx={{ mx: 2, my: 1 }}>
        <Link to={"/customers"}>
          <PeopleIcon />

          <Box
            component={"span"}
            sx={{ display: `${isOpen && "none"}`, mx: 1 }}
          >
            Customers
          </Box>
        </Link>
      </Box>
      <Box sx={{ mx: 2, my: 1 }}>
        <Link to={"/orders"}>
          <GradingIcon />

          <Box
            component={"span"}
            sx={{ display: `${isOpen && "none"}`, mx: 1 }}
          >
            Orders
          </Box>
        </Link>
      </Box>
    </div>
  );
}
