import React from "react";
import Button from "react-bootstrap/Button";

const WelcomeMessage = props => {
  return (
    <div>
      <div className="small text-uppercase font-weight-500 text-muted">
        Hello
      </div>
      <h1 className="mb-4">
        I create <b>clean, robust, scalable and powerful</b> applications for the new world, same quality from backend to frontend.
      </h1>
      <Button variant="dark" className="rounded-pill font-weight-500 px-3">My work</Button>
      <Button className="rounded-pill font-weight-500 px-3 text-gradient-0">Contact me</Button>
    </div>
  )
}

export default WelcomeMessage
