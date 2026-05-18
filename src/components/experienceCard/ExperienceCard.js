import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    const accent = theme.imageHighlight || theme.headerColor;
    const isLast = index === totalCards - 1;

    return (
      <div
        className={`experience-list-item${isLast ? " is-last" : ""}`}
        style={{ "--exp-accent": accent }}
      >
        <div
          className="experience-timeline"
          aria-hidden="true"
          style={{ background: accent }}
        />

        <Fade left duration={1600} distance="30px">
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              style={{ background: theme.body }}
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt={experience["company"]}
            />
          </div>
        </Fade>

        <Fade right duration={1600} distance="30px">
          <div
            className="experience-card"
            style={{ background: theme.body }}
          >
            <div className="experience-card-header">
              <div className="experience-card-heading-left">
                <h3
                  className="experience-card-title"
                  style={{ color: theme.text }}
                >
                  {experience["title"]}
                </h3>
                <p
                  className="experience-card-company"
                  style={{ color: theme.text }}
                >
                  <a
                    href={experience["company_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: accent }}
                  >
                    {experience["company"]}
                  </a>
                </p>
              </div>
              <div className="experience-card-heading-right">
                <span
                  className="experience-card-duration"
                  style={{
                    color: accent,
                    background: `${accent}1A`,
                  }}
                >
                  {experience["duration"]}
                </span>
                <p
                  className="experience-card-location"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["location"]}
                </p>
              </div>
            </div>

            <div className="experience-card-description-wrap">
              {experience["description"].split("\n").map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                const cleaned = trimmed.replace(/^[–\-•]\s*/, "");
                return (
                  <p
                    key={i}
                    className="experience-card-description"
                    style={{ color: theme.text }}
                  >
                    <span
                      className="experience-card-bullet"
                      style={{ background: accent }}
                      aria-hidden="true"
                    />
                    {cleaned}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
