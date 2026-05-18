import React from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import ProjectsData from "../../shared/opensource/projects.json";

export default function Projects(props) {
  const theme = props.theme;

  return (
    <div className="main" id="opensource">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Projects
          </h1>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} theme={theme} key={repo.id} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href="/projects"
        newTab={false}
        theme={theme}
      />
    </div>
  );
}
