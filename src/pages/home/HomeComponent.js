import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Projects from "../../containers/projects/Projects";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import "../experience/Experience.css";

class Home extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={theme} />
        <Greeting theme={theme} />
        <div className="basic-experience" style={{ padding: "10px 0" }}>
          <Fade bottom duration={2000} distance="40px">
            <h1 className="experience-heading-text" style={{ color: theme.text, marginTop: "40px", marginBottom: "20px" }}>
              Experience
            </h1>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Projects theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Home;
