import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const WelcomeMessage = props => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="small text-uppercase font-weight-500 text-muted">
        Hello
      </div>
      <h1 className="mb-4">
        I create <b>clean, robust, scalable and powerful</b> applications for the new world, same quality from backend to frontend.
      </h1>
      <Button variant="dark" className="rounded-pill font-weight-500 px-3" onClick={props.handleScrollToProjects}>Check my work</Button>
      <Link to="/contact">
        <Button variant="transparent" className="font-weight-500 px-3 text-gradient-0">Contact me</Button>
      </Link>
    </div>
  )
}

export default WelcomeMessage
