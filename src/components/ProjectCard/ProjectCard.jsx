import { Card } from "@mui/material";
import React, { useState } from "react";
import "./ProjectCard.css";
import { Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = (props) => {
  const [experienceTitle, setExperienceTitle] = useState("Verisk");

  function handleClick(e) {
    setExperienceTitle(e.target.innerText);
  }

  return (
    <div className="project-card">
      <Typography variant="h5">{props.title}</Typography>
      <Typography>{props.desc}</Typography>
      <div className="project-card-links">
        {props.github ? (
          <IconButton href={props.github}>
            <GitHubIcon />
          </IconButton>
        ) : null}
        {props.link ? (
          <IconButton href={props.link}>
            <OpenInNewIcon />
          </IconButton>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
