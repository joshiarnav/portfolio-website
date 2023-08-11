import React from "react";
import TitledPageBox from "../../components/TitledPageBox/TitledPageBox";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Grid } from "@mui/material";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const projects = [
    {
      title: "TruCanvas",
      desc: "Live networked paint application with multiple tools.",
      github: "https://github.com/joshiarnav/TruCanvas",
    },
    {
      title: "Valiant Analysis",
      desc: "An NLP pipeline for Q&A analysis in the classroom.",
      github: "https://github.com/joshiarnav/Valiant_Analysis",
    },
    {
      title: "Portfolio Website",
      desc: "Exactly what you're looking at! Built using MUI and React.",
      github: "https://github.com/joshiarnav/portfolio-website",
      link: "#",
      linkAlert: "Recursion!",
    },
    {
      title: "GAN",
      desc: "Generative Adversarial Network that generates images of faces.",
      github: "#projects",
      githubAlert: "This link will be added soon!",
    },
    {
      title: "MBTI Text Classifier",
      desc: "Text classifier to predict personality type on writing style.",
      github: "https://github.com/joshiarnav/MBTI",
    },
    {
      title: "NBA Player Clustering",
      desc: "Clustering algorithm to group NBA players based on playstyle.",
      github: "https://github.com/joshiarnav/ds4400project",
    },
  ];

  const projectCards = projects.map((project) => (
    // <Grid item xs={6} md={4}>
    //   <ProjectCard
    //     title={project.title}
    //     desc={project.desc}
    //     github={project.github}
    //     link={project.link}
    //   ></ProjectCard>
    // </Grid>
    <div class="grid-item">
      <ProjectCard
        title={project.title}
        desc={project.desc}
        github={project.github}
        githubAlert={project.githubAlert}
        link={project.link}
        linkAlert={project.linkAlert}
      ></ProjectCard>
    </div>
  ));

  return (
    <TitledPageBox
      title="My Projects"
      desc="Here are a few things I've been working on!"
      id="projects"
    >
      <div style={{ marginLeft: "7.5%", marginRight: "7.5%" }}>
        {/* <Grid container spacing={6} marginTop="0.5rem">
          {projectCards}
        </Grid> */}
        <div class="grid-container">{projectCards}</div>
      </div>
    </TitledPageBox>
  );
};

export default ProjectsPage;
