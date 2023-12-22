import React from "react";
import "./ContentBox.scss";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import MyProjects from "../MyExperience";
import ContactMe from "../ContactMe/ContactMe";
import { useSearchParams } from "react-router-dom";
import {
  NAVIGATION_PARAMS,
  NAVIGATION_SECTIONS,
} from "../Navigation/Navigation";

const ContentBox = () => {
  const [params] = useSearchParams();
  const currentView = params.get("view");

  const currentViewMap = {
    [NAVIGATION_PARAMS.aboutMe]: <AboutMe />,
    [NAVIGATION_PARAMS.skills]: <Skills />,
    [NAVIGATION_PARAMS.myExperience]: <MyProjects />,
    [NAVIGATION_PARAMS.contactMe]: <ContactMe />,
  };

  const currentViewTitle = {
    [NAVIGATION_PARAMS.aboutMe]: NAVIGATION_SECTIONS.aboutMe,
    [NAVIGATION_PARAMS.skills]: NAVIGATION_SECTIONS.skills,
    [NAVIGATION_PARAMS.myExperience]: NAVIGATION_SECTIONS.myExperience,
    [NAVIGATION_PARAMS.contactMe]: NAVIGATION_SECTIONS.contactMe,
  };

  const getCurrentTitle = () => {
    return currentViewTitle[currentView] ?? NAVIGATION_SECTIONS.aboutMe;
  };

  const handleChange = () => {
    return currentViewMap[currentView] ?? <AboutMe />;
  };

  const title = getCurrentTitle();

  const view = handleChange();
  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
      {view}
    </>
  );
};

export default ContentBox;
