import React from "react";
import Button from "react-bootstrap/Button";
import config from "../../config";

const MyIntroduction = props => {
  return (
    <div>
      <p className="mb-4">
        <h2 className="mb-5 font-weight-700">
          Hey there *waves*, my <br/> name is Jean-Baptiste, developer, <br/>XXX and XXX.
        </h2>
        <p className="mb-5 font-weight-500">I love connecting brands and companies with their customers through performant code, design cared interfaces.
          I can help you with ...<span>But enough about me, how can I help you ?</span></p>
      </p>

      <p className="text-uppercase font-weight-bold mb-5"><a href={"mailto:" + config.email} className="text-dark">{config.email}</a></p>

      <Button variant="dark" className="rounded-pill">My projects</Button>
      <Button>I also write stuff, want to check my articles</Button>
      <Button>Check out my hackathons !</Button>
    </div>
  )
}

export default MyIntroduction
