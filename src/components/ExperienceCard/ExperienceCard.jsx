import { Card } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  //   return <Card>Test</Card>;
  //   const [title, setTitle] = ["Verisk", "Mythics", "TA"];
  const [experienceTitle, setExperienceTitle] = useState("Verisk");
  const experiences = {
    Verisk: {
      title: "Software Development Co-op",
      desc: "Implementing CI/CD pipelines with Python, DotNet, and Angular projects for 30+ company repositories. Designing & testing AWS lambda deployment to maintain 99.99%+ uptime for company services.",
      // desc: "Verisk is a data analytics company that provides data, analytics, and decision-support services for professionals in insurance, natural resources, financial services, and risk management.",
      date: "July 2023 - Present",
      // bullets: [
      //     "Developed a web application using React and Material UI to display data from a REST API",
      //     "Implemented a REST API using Node.js and Express.js to retrieve data from a MongoDB database",
      //     "Created a Python script to automate the process of generating a JSON file from a CSV file",
      //     "Utilized Git and GitHub for version control and collaboration",
      //     "Used Jira to track progress and manage tasks",
      // ],
    },
    Mythics: {
      title: "Software Development Co-op",
      desc: "Worked on Oracle Landing Zone code to automate the creation of Oracle Cloud Infrastructure resources and decrease engineering overhead by up to 80%",
      date: "June 2022 - December 2022",
    },
    Khoury: {
      title: "Teaching Assistant",
      desc: "Introduced 330+ students to principles of systematic problem solving, rules of computation, and design principles through office hours, labs, grading, and online forums.",
      date: "October 2021 - July 2023",
    },
  };
  function handleClick(e) {
    setExperienceTitle(e.target.innerText);
  }
  //   function handleMouseEnter(e) {
  //     e.target.style.color = "#f5f5f5";
  //   }
  //     function handleMouseLeave(e) {
  //         e.target.style.color = ;
  //     }

  return (
    <div className="main-card">
      <div className="experience-titles">
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
      <div className="experience-content">
        <Typography variant="h5">
          {experiences[experienceTitle].title}
        </Typography>
        <br />
        <Typography>{experiences[experienceTitle].date}</Typography>
        <br />
        <Typography color="gray">
          {experiences[experienceTitle].desc}
        </Typography>
      </div>
    </div>
  );
};

export default ExperienceCard;
