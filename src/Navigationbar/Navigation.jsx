import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Hamnavbar from "./Hamnavbar";

const Navigation = () => {
  return (
    <BrowserRouter>
      <>
        {/* sx={{ background: "none", boxShadow: "none" }} */}
        <AppBar position="fixed">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-around",
              padding: "10px 0",
            }}
          >
            <Hamnavbar />
            <Link to="#Home" smooth className="link">
              <Avatar
                src="../images/profile.jpg"
                sx={{
                  display: { md: "flex", xs: "none" },
                  cursor: "pointer",
                }}
              ></Avatar>
            </Link>
            <Box sx={{ display: { md: "flex", xs: "none" } }}>
              <div
                style={{ listStyle: "none", display: "flex", gap: "20px" }}
                className="nav_content"
              >
                <Link to="#Home" smooth className="link">
                  <Button variant="Contained">Home</Button>
                </Link>
                <Link to="#About" smooth className="link">
                  <Button variant="Contained">About</Button>
                </Link>
                <Link to="#Work" smooth className="link">
                  <Button variant="Contained">Work</Button>
                </Link>
                <Link to="#Contact" smooth className="link">
                  <Button variant="Contained">Contact</Button>
                </Link>
              </div>
            </Box>

            <Button
              variant="contained"
              sx={{
                color: "white",
                background: "#BC9E32",
                letterSpacing: "3px",
              }}
            >
              Download CV
            </Button>
          </Toolbar>
        </AppBar>
      </>
    </BrowserRouter>
  );
};

export default Navigation;
