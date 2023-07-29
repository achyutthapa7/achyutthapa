import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <>
      <section className="section" id="About">
        <Typography
          variant="h4"
          sx={{ marginTop: "100px", marginBottom: "50px", padding: "0 20px" }}
        >
          About Me
        </Typography>
        <p
          style={{
            letterSpacing: "2px",
            lineHeight: "40px",
            padding: "0 20px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          maiores ut deserunt ad neque soluta aliquam repellat sequi harum,
          autem quas, ab dolore obcaecati accusamus at ducimus magni nulla.
          Reiciendis.
        </p>
        <br />
        <Grid container sx={{ padding: "0 20px" }}>
          <Grid item md="5" xs="12">
            <Fade left>
              <div
                style={{
                  background: `url('images/about.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "350px",
                }}
              ></div>
            </Fade>
          </Grid>

          <Grid item md="7" xs="12" sx={{ padding: "0 20px" }}>
            <Fade right>
              <h1
                style={{
                  letterSpacing: "5px",
                  color: "indigo",
                  fontSize: "30px",
                }}
              >
                UI/UX Designer and web developer
              </h1>
            </Fade>

            <Fade right>
              <Grid container sx={{ gap: { md: "0", xs: "15px" } }}>
                <Grid
                  item
                  md="6"
                  xs="12"
                  sx={{
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Name: </span> Achyut
                    Thapa
                  </div>
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>
                      Date Of Birth:{" "}
                    </span>
                    jan 17, 2004
                  </div>
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Address: </span>
                    Dang,Narayanpur
                  </div>
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Email: </span>
                    achyut777thapa@gmail.com
                  </div>
                </Grid>

                <Grid
                  item
                  md="6"
                  xs="12"
                  sx={{
                    height: "auto",

                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Degree: </span>
                    Bachelor in Computer Application
                  </div>
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Contact: </span>
                    9748356365
                  </div>
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Name: </span> Achyut
                    Thapa
                  </div>
                  <div className="my_info">
                    <span style={{ fontWeight: "bolder" }}>Name: </span> Achyut
                    Thapa
                  </div>
                </Grid>
                <p style={{ letterSpacing: "2px", lineHeight: "40px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores labore saepe iste sed neque quos sapiente, deserunt
                  dolor! Placeat expedita quaerat dignissimos corrupti qui
                  fugiat odit culpa sunt aspernatur nam?
                </p>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default About;
