import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import About from "../About/About";
import Projects from "../Projects/Projects"
import Resume from "../Resume/ResumeNew";
import Type from "./Type";
import Img from "../../Assets/hero.png";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> FAAKHIR </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} id="hero-img" style={{ paddingBottom: 20 }}>
            <img src={Img} alt="hero-img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <About/>
      <Projects/>
      <Resume/>
    </section>
  );
}

export default Home;
