import React from "react";
import TitledPageBox from "../../components/TitledPageBox/TitledPageBox";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const ExperiencePage = () => {
  return (
    <TitledPageBox
      title="My Experience"
      desc="Here's what I've been up to!"
      id="experience"
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: "auto",
          marginTop: "2.5%",
          paddingBottom: "10%",
        }}
      >
        <ExperienceCard />
      </div>
    </TitledPageBox>
  );
};

export default ExperiencePage;
