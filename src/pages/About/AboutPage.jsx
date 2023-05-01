import React from "react";
import TitledPageBox from "../../components/TitledPageBox/TitledPageBox";
import { Grid, Typography } from "@mui/material";
import "./AboutPage.css";
import portrait from "../../assets/portrait_2.jpg";

const AboutPage = () => {
  return (
    <TitledPageBox
      title="About Me"
      desc="Here's a little bit about who I am!"
      id="about"
    >
      <div className="aboutbody">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div
              style={{
                height: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img src={portrait} alt="Portrait" />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <div
              style={{
                height: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h5" style={{ marginBottom: "2.5%" }}>
                Hi! My name is Arnav and I am a software developer with a
                passion for problem solving!
              </Typography>
              I've been tinkering with computers since I was a kid, and I've
              always been fascinated by the way they work. I love to learn new
              things and I'm always looking for new challenges to tackle. I
              enjoy working with others and I'm always looking for ways to
              improve my skills.
              <br />
              <br />
              I've been lucky enough to have had the opportunity to work on a
              variety of projects, ranging from cloud computing to machine
              learning. I have currently completed one co-op and will soon be
              joining Verisk for my second!
              {/* <br />
              <Typography variant="h5" style={{ marginBottom: "2.5%" }}>
                Here are some of the technologies I've been working with
                recently:
              </Typography>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Flask</li>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>HTML & CSS</li>
              </ul> */}
            </div>
          </Grid>
        </Grid>
      </div>
    </TitledPageBox>
  );
};

export default AboutPage;
