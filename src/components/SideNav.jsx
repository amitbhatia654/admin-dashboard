import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import PeopleIcon from "@mui/icons-material/People";
import GradingIcon from "@mui/icons-material/Grading";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { useFirebase } from "../context/FireBase";
// import { useFirebase } from "../context/Firebase";

export default function SideNav({ isOpen }) {
  const location = useLocation();
  const firebase = useFirebase();


  const routes = [
    { path: "employees", logo: <ContactEmergencyIcon /> },
    { path: "customers", logo: <PeopleIcon /> },
    { path: "orders", logo: <GradingIcon /> },
  ];
  return (
    <>
      <Box
        sx={{ mx: 1, my: 1 }}
        backgroundColor={`${location.pathname == "/dashboard" ? "grey" : ""}`}
      >
        <Link
          to={"/dashboard"}
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
                location.pathname.slice(11) == data.path ? "grey" : ""
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
