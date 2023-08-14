import React from "react";
import TitledPageBox from "../../components/TitledPageBox/TitledPageBox";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import "./ExperiencePage.css";

const ExperiencePage = () => {
  return (
    <TitledPageBox
      title="My Experience"
      desc="Here's what I've been up to!"
      id="experience"
    >
      <div className="card-holder">
        <ExperienceCard />
      </div>
    </TitledPageBox>
  );
};

export default ExperiencePage;
