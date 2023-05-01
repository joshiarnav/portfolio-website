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

      {/* <div className="experience-titles">
        <div className="exp-title" onClick={handleClick}>
          Verisk
        </div>
        <div className="exp-title" onClick={handleClick}>
          Mythics
        </div>
        <div className="exp-title" onClick={handleClick}>
          Khoury
        </div>
      </div>
      <div className="vl"></div>
      <div className="experience-content" style={{ width: "66%" }}>
        <Typography variant="h5">
          {experiences[experienceTitle].title}
        </Typography>
        <br />
        <Typography>{experiences[experienceTitle].date}</Typography>
        <br />
        <Typography color="gray">
          {experiences[experienceTitle].desc}
        </Typography>
      </div> */}
    </div>
  );
};

export default ProjectCard;
