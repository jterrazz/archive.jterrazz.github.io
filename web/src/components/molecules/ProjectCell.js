import React from "react";
import Col from "react-bootstrap/Col";

const ProjectCell = props => {
  return (
    <Col xs={4}>
      <li className="bg-white p-4 rounded border">
        <div>
          <div className="bg-primary">
            {props.project.name[0]}
          </div>
          <div>
            <h5>{props.project.name}</h5>
            <p>{props.project.date.toDateString()}</p>
          </div>

          <p>{props.project.description}</p>

          <h6>Skills</h6>
          <div>OK</div>
        </div>
      </li>
    </Col>
  )
}

export default ProjectCell
