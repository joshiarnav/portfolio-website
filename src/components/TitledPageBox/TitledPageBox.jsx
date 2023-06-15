import React from "react";
import PageBox from "../PageBox/PageBox";
import { Typography } from "@mui/material";

const TitledPageBox = (props) => {
  return (
    <PageBox id={props.id}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2.5%",
        }}
      >
        <Typography variant="h4">{props.title}</Typography>
        <br />
        <Typography
          variant="h6"
          style={{
            marginLeft: "7.5%",
            marginRight: "7.5%",
            textAlign: "center",
          }}
        >
          {props.desc}
        </Typography>
      </div>
      <br />
      {props.children}
    </PageBox>
  );
};

export default TitledPageBox;
