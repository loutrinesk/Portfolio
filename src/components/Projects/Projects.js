import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import botts from "../../Assets/Projects/botts.png";
import sgc from "../../Assets/Projects/sgc.png";
import cutecat from "../../Assets/Projects/cutecat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={botts}
              isBlog={false}
              title="Template Discord Bot TypeScript"
              description="Little self made Discord Bot template made in TypeScript."
              ghLink="https://github.com/loutrinesk/Template-Discord-Bot-Typescript"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sgc}
              isBlog={false}
              title="ShibaGamesCrack"
              description="Crack website I worked on the BackEnd."
              demoLink="https://sgcrack.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cutecat}
              isBlog={false}
              title="CuteCat"
              description="Certfified Discord Bot I worked on."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
