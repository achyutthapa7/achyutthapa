import { Typography, Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <>
      <section className="section" id="Contact">
        <Grid container>
          <Grid item md="6" xs="12" sx={{ padding: "0 20px" }}>
            <Fade left>
              <div>
                <img src="../images/capture.png" alt="" className="image" />

                <p
                  style={{
                    letterSpacing: "2px",
                    lineHeight: "40px",
                    padding: "0 20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolores labore saepe iste sed neque quos sapiente, deserunt
                  dolor! Placeat expedita quaerat dignissimos corrupti qui
                  fugiat odit culpa sunt aspernatur nam?
                </p>
              </div>
            </Fade>
          </Grid>

          <Grid item md="6" xs="12" sx={{ padding: "0 20px" }}>
            <Fade right>
              <div
                className="input_div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea
                  type="text"
                  placeholder="Message"
                  style={{
                    maxWidth: "100%",
                    minWidth: "100%",
                    minHeight: "250px",
                  }}
                />
              </div>
              <br />

              <div className="button" style={{ textAlign: "center" }}>
                <Button variant="Contained" sx={{ background: "#32BD40" }}>
                  Send Message
                </Button>
              </div>
            </Fade>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Contact;
