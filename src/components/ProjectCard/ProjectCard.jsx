import { Card } from "@mui/material";
import React, { useState } from "react";
import "./ProjectCard.css";
import { Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <Typography variant="h5">{props.title}</Typography>
      <Typography>{props.desc}</Typography>
      <div className="project-card-links">
        {props.github ? (
          <IconButton
            href={props.github}
            onClick={() => {
              if (props.githubAlert) alert(props.githubAlert);
            }}
          >
            <GitHubIcon />
          </IconButton>
        ) : null}
        {props.link ? (
          <IconButton
            href={props.link}
            onClick={() => {
              if (props.linkAlert) alert(props.linkAlert);
            }}
          >
            <OpenInNewIcon />
          </IconButton>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
