import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Navigation from "../Navigationbar/Navigation";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Fade from "react-reveal";
const Home = () => {
  useEffect(() => {
    window.onscroll = () => {
      const background_image = document.querySelector("#Home");
      let offset = window.pageYOffset;
      background_image.style.backgroundPositionY = offset * -0.2 + "px";
    };
  }, []);
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <section className="section" id="Home">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              marginTop: "200px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "white",
                  letterSpacing: "3.5px",
                  fontSize: { md: "2rem", xs: "1rem" },
                }}
              >
                NAMASTE🙏 I'M
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  letterSpacing: "0.3rem",
                  fontSize: { md: "5rem", xs: "2rem" },
                }}
              >
                ACHYUT THAPA
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <Fade bottom>
                <Link to="#Contact" smooth className="link">
                  <div
                    style={{
                      border: "1px solid white",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "65px",
                      cursor: "pointer",
                    }}
                  >
                    <Button
                      variant="Contained"
                      sx={{
                        color: "white",
                        letterSpacing: "2px",
                      }}
                    >
                      Hire ME
                    </Button>
                  </div>
                </Link>
                <Link to="#Work" smooth className="link">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="Contained"
                      sx={{ color: "white", letterSpacing: "2px" }}
                    >
                      My Work
                    </Button>
                  </div>
                </Link>
              </Fade>
            </Box>
          </Box>
        </section>
      </BrowserRouter>
    </>
  );
};

export default Home;
