import { Typography, Grid, Button } from "@mui/material";
import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import emailjs from "@emailjs/browser";
const Contact = () => {
  useEffect(() => {
    const form = document.querySelector("form");
    form.onsubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_8bszc7j",
          "template_82y6qmb",
          e.target,
          "oTE4QSzQjWSGP6kt2"
        )
        .then((res) => {
          alert("your message is submitted");
        })
        .catch((err) => alert("Your message is not submitted"));
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const subject = form.querySelector('input[name="subject"]');
      const message = form.querySelector('textarea[name="message"]');
      console.log("Name:", name.value);
      console.log("Email:", email.value);
      console.log("Subject:", subject.value);
      console.log("Message:", message.value);
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
      // alert("Your form is submitted");
    };
  }, []);

  return (
    <>
      <section className="section" id="Contact">
        <Grid container>
          <Grid item md="6" xs="12" sx={{ padding: "0 20px" }}>
            <Fade left>
              <div>
                <img src="../images/Capture.png" alt="" className="image" />
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
              <form>
                <div
                  className="input_div"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <input type="text" placeholder="Name" name="name" />
                  <input type="text" placeholder="Email" name="email" />
                  <input type="text" placeholder="Subject" name="subject" />
                  <textarea
                    type="text"
                    placeholder="Message"
                    name="message"
                    style={{
                      maxWidth: "100%",
                      minWidth: "100%",
                      minHeight: "250px",
                    }}
                  />
                </div>
                <br />

                <div className="button" style={{ textAlign: "center" }}>
                  <button className="send_button">Send Message</button>
                </div>
              </form>
            </Fade>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default Contact;
