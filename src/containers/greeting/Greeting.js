import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "greeting-text" : "dark-mode greeting-text"}>
                {greeting.title} {emoji("👋")}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                Hey there! I'm a third-year B.Tech student in Computer Science and Business Systems, 
                passionate about turning ideas into innovative projects and diving deep into the 
                world of competitive coding. With a solid grasp of Java and Data Structures, I'm 
                constantly honing my problem-solving skills through coding challenges and real-world 
                projects.
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Focused student working at desk"
              src={require("../../assets/images/im.jpg")}
              className="greeting-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
