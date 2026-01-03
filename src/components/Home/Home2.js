import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { profile } from "../../profile";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              {profile.aboutBody?.[0]}
              <br />
              <br />
              {profile.aboutBody?.[1]}
              <br />
              <br />
              {profile.aboutBody?.[2]}
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid avatar" alt="avatar" />
            </Tilt>
            <p style={{ marginTop: 12, opacity: 0.9 }}>{profile.locationLine}</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
