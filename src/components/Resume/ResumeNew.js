import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/cv.pdf";
import { AiOutlineDownload, AiOutlineWhatsApp } from "react-icons/ai";
// "@testing-library/jest-dom": "^5.16.2",
// "@testing-library/react": "^12.1.4",
// "@testing-library/user-event": "^13.5.0",
    // "debug": "^4.3.4",

function ResumeNew() {
  return (
    <div>
      <Container id="resumeID" fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <Button
            variant="primary"
            href="https://wa.me/923015010607"
            target="_blank"
            style={{ maxWidth: "250px", marginLeft:"10px"}}
          >
            <AiOutlineWhatsApp/>
            &nbsp;Wattsapp
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
