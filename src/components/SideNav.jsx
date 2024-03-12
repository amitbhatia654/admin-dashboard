import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import PeopleIcon from "@mui/icons-material/People";
import GradingIcon from "@mui/icons-material/Grading";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import StoreIcon from "@mui/icons-material/Store";

export default function SideNav({ isOpen }) {
  const location = useLocation();

  const routes = [
    { path: "employees", logo: <ContactEmergencyIcon /> },
    { path: "customers", logo: <PeopleIcon /> },
    { path: "orders", logo: <GradingIcon /> },
  ];
  return (
    <>
      <Box sx={{ mx: 2, my: 1 }}>
        <StoreIcon
          sx={{ color: "black", fontSize: "28px", fontWeight: "bold" }}
        />
        <Box
          component={"span"}
          sx={{
            display: `${isOpen && "none"}`,
            fontSize: 23,
            mx: 1,
            color: "black",
            fontWeight: "bold",
          }}
        >
          E-Kart
        </Box>
      </Box>

      <Box
        sx={{ mx: 1, my: 2 }}
        backgroundColor={`${location.pathname == "/" ? "grey" : ""}`}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            textTransform: "capitalize",
            fontSize: "17px",
            color: "black",
          }}
        >
          {/* {data?.logo} */}
          <WidgetsIcon />
          <Box
            component={"span"}
            sx={{ display: `${isOpen && "none"}`, mx: 1 }}
          >
            DASHBOARD
          </Box>
        </Link>
      </Box>
      {routes.map((data, index) => {
        return (
          <>
            <Box
              sx={{ mx: 1, my: 2 }}
              index={index}
              backgroundColor={`${
                location.pathname.slice(1) == data.path ? "grey" : ""
              }`}
            >
              <Link
                to={data?.path}
                style={{
                  textDecoration: "none",
                  textTransform: "capitalize",
                  fontSize: "17px",
                  color: "black",
                }}
              >
                {data?.logo}
                <Box
                  component={"span"}
                  sx={{ display: `${isOpen && "none"}`, mx: 1 }}
                >
                  {data?.path.toUpperCase()}
                </Box>
              </Link>
            </Box>
          </>
        );
      })}
    </>
  );
}
