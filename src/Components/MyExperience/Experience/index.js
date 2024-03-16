import React from "react";
import {
  experienceContainer,
  infoContainer,
  title,
  titleSection,
} from "./experienceStyles";

const Experience = ({ currentInfo }) => {
  return (
    <div style={experienceContainer}>
      {currentInfo.map((experience) => (
        <div style={infoContainer} key={experience.id}>
          <div style={titleSection}>
            <h5 style={title}>{experience.title}</h5>
            <span>{experience.year}</span>
          </div>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
