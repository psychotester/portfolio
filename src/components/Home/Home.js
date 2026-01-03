import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../profile";

function Home() {
  const socials = profile.socials || {};

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* Particles are optional; set to subtle/off in Particle config if desired */}
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading" style={{ paddingBottom: 15 }}>
                Hi — welcome{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I’m <strong className="main-name"> {profile.fullName}</strong>
              </h1>

              <h2 className="home-title" style={{ marginTop: 12 }}>
                {profile.titleLine}
              </h2>

              <p className="home-subtitle" style={{ marginTop: 10, maxWidth: 520 }}>
                {profile.subtitleLine}
              </p>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type strings={profile.typewriter} />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container fluid className="home-about-section" id="skill">
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.3em" }}>
                What I <span className="purple">focus</span> on
              </h1>
              <p className="home-about-body">
                {profile.focus?.join(" • ") || "React • Node.js • APIs • SaaS"}
              </p>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-social">
              <h1>Connect</h1>
              <p>
                I’m open to long-term product work and collaboration.
              </p>
              <ul className="home-about-social-links">
                {socials.github ? (
                  <li className="social-icons">
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                ) : null}
                {socials.twitter ? (
                  <li className="social-icons">
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                ) : null}
                {socials.linkedin ? (
                  <li className="social-icons">
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                ) : null}
                {socials.instagram ? (
                  <li className="social-icons">
                    <a
                      href={socials.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                ) : null}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Keep existing sections */}
      <Techstack />
      <Github />
    </section>
  );
}

export default Home;
