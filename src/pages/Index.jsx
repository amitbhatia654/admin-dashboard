import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import SideNav from "../components/SideNav";
import HomePage from "../components/HomePage";

export default function Index() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="main-div">
        <div className={isOpen ? "sidenav-full" : "sidenav-small"}>
          <SideNav></SideNav>
          <button onClick={() => setIsOpen(!isOpen)}>Show </button>
        </div>

        <div className="homepage">
          <HomePage></HomePage>
        </div>
      </div>
    </>
  );
}
