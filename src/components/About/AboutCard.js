import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faakhir Ul Hassan </span>
            from Islamabad, Pakistan.
            <br />I'm a <span className="purple"> web developer</span>  with an experience over 2 years pursuing Bachlors in <span className="purple"> Computer Sciences</span> from NUST, Islamabad.
            <br />
          </p>
          </blockquote>
    </Card.Body>
    </Card>
  );
}

export default AboutCard;
