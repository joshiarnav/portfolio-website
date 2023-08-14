import React from "react";
import PageBox from "../../components/PageBox/PageBox";
import { Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./WelcomePage.css";

const WelcomePage = (props) => {
  return (
    <PageBox id="welcome">
      <div className="welcomebody">
        <Typography variant="h6">Hi! My name is</Typography>
        <Typography variant="h1" fontWeight="bold">
          Arnav Joshi
        </Typography>
        <Typography variant="h3">Software Developer</Typography>
        <span style={{ marginTop: "1rem" }}>
          <IconButton href="https://linkedin.com/in/arnav--joshi">
            <LinkedInIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton href="https://github.com/joshiarnav">
            <GitHubIcon sx={{ color: "white" }} />
          </IconButton>
        </span>
      </div>
    </PageBox>
  );
};

export default WelcomePage;
