import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { profile } from "../../profile";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">{profile.fullName}</span>.
            <br />
            I build production web applications with an emphasis on{" "}
            <span className="purple">maintainability</span>,{" "}
            <span className="purple">performance</span>, and{" "}
            <span className="purple">clear communication</span>.
            <br />
            I enjoy taking ownership from requirements to delivery — and staying
            involved after launch to keep things stable and easy to extend.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Shipping features that are easy to maintain
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving performance & reliability
            </li>
            <li className="about-activity">
              <ImPointRight /> Building clean UI with predictable behavior
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
