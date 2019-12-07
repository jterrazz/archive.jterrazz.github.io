import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import config from "../../config";

const IntroductionSection = props => {
  return (
    <div>
      <p className="mb-4">
        <span role="img" aria-label="hello">👋</span>
        Hey there *waves*, my name is Jean-Baptiste, developer, XXX and XXX.
        I love connecting brands and companies with their customers through performant code, design cared interfaces.
        I can help you with ...
        <span>But enough about me, how can I help you ?</span>
      </p>

      <p className="text-uppercase font-weight-bold mb-4 text-dark"><a href={"mailto:" + config.email}>{config.email}</a></p>

      <Button>My projects</Button>
      <Button>I also write stuff, want to check my articles</Button>
      <Button>Check out my hackathons !</Button>
    </div>
  )
}

export default IntroductionSection
