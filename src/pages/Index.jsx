/* eslint-disable no-unused-vars */
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import { Outlet, Route, Routes } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="main-div">
        <div className={!isOpen ? "sidenav-full" : "sidenav-small"}>
          <SideNav isOpen={isOpen}></SideNav>
        </div>

        <div className="homepage border">
          <button onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <span fontSize="large"> X {""}</span>
            ) : (
              <MenuIcon fontSize="small" />
            )}
          </button>

          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
