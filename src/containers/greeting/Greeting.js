import React from "react";
import "./Greeting.css";
import Type from "./Type";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Vũ Hòa Bình</strong>
              </h1>
              <div
                style={{
                  padding: "5%",
                  textAlign: "left",
                  fontSize: "40px",
                  paddingBottom: "15%",
                  fontWeight: "bold",
                  color: "#5E055C",
                }}
              >
                <Type />
              </div>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
