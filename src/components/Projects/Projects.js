import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import p from "../../Assets/Projects/p.png";
import tq from "../../Assets/Projects/tq.png";
import jm from "../../Assets/Projects/jm.png";

function Projects() {
  return (
    <Container id="projectsID" fluid className="project-section">
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
              imgPath={jm}
              isBlog={false}
              title="JobMaps"
              description="Displays IT jobs' in Pakistan on map.So you can find job nearest to you.Build with Django and PSQL. Have features which allows user for latest job search and apply easily by just one click."
              ghLink="https://github.com/Faakhir30/JobMaps"
              demoLink="https://faakir.pythonanywhere.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tq}
              isBlog={false}
              title="TradeQuest"
              description="My ecommerce site build with MERN Stack which allows users to buy watches of different catagories. Supports payment gateway by Paypal and much more."
              ghLink="https://github.com/Faakhir30/TrendQuest"
              demoLink="https://trendquest.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p}
              isBlog={false}
              title="LuminaSort"
              description="ReactJS app that shows visualizations of different type of sorts including bubble, insertion, merge and quick sort."
              ghLink="https://github.com/Faakhir30/LuminaSort"
              demoLink="https://lumina-sort.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
