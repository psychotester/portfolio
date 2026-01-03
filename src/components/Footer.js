import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../profile";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const socials = profile.socials || {};

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Built by {profile.fullName}</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>© {year} {profile.brandMark}</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {socials.github ? (
              <li className="social-icons">
                <a
                  href={socials.github}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
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
  );
}

export default Footer;
