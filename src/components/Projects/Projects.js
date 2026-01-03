import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", maxWidth: 760, margin: "0 auto" }}>
          Recruiter-friendly summaries: what it is, who it’s for, my role, and the outcome.
          (Replace these with your real work.)
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SaaS Admin Platform"
              description="A production admin dashboard for managing users, roles, billing, and operational workflows.

My role: owned the implementation, kept the UI predictable under edge cases, and improved maintainability for long-term changes.

Result: faster internal operations and fewer support issues."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-commerce Integrations"
              description="Integrated third-party services (payments, email, analytics) into a business web app.

My role: designed clean API boundaries, handled failure modes, and kept performance stable as traffic grew.

Result: reliable integrations with clear monitoring and safer deployments."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Customer Analytics Dashboard"
              description="A dashboard used by a small team to understand product usage and subscription metrics.

My role: built data visualizations, optimized queries and rendering, and improved clarity of the UX for daily decision-making.

Result: stable performance with growing datasets."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
