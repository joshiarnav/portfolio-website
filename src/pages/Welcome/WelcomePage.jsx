import React from "react";
import PageBox from "../../components/PageBox/PageBox";
import { Typography } from "@mui/material";

const WelcomePage = (props) => {
  return (
    <PageBox id="welcome">
      <div
        style={{
          height: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10%",
        }}
      >
        <Typography variant="h6">Hi! My name is</Typography>
        <Typography variant="h1" fontWeight="bold">
          Arnav Joshi
        </Typography>
        <Typography variant="h3">Software Developer</Typography>
      </div>
    </PageBox>
  );
};

export default WelcomePage;
