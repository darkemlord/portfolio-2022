import React from "react";
import "./ContentBox.scss";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import MyProjects from "../MyExperience";
import ContactMe from "../ContactMe/ContactMe";

const ContentBox = ({ name }) => {
  const handleChange = (name) => {
    switch (name) {
      case "About Me":
        return <AboutMe />;
      case "Skills":
        return <Skills />;
      case "My Experience":
        return <MyProjects />;
      case "Contact Me":
        return <ContactMe />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <>
      <div className="title">
        <h1>{name}</h1>
      </div>
      {handleChange(name)}
    </>
  );
};

export default ContentBox;
