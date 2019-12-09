import React from "react";
import Col from "react-bootstrap/Col";

const ProjectCell = props => {
  const asciiValue = props.project.name[0].charCodeAt(0);
  return (
    <a href={props.project.link} className="text-dark">
      <div className="border p-3 rounded project-cell">
        <div className="d-flex">
          <div className="bg-primary rounded d-flex align-items-center justify-content-center text-white font-weight-bold mr-3" style={{width: 42, height: 42}}>
            {props.project.name[0]}
          </div>
          <div>
            <div className="font-weight-bold">{props.project.name}</div>
            <div className="text-muted small">{props.project.date.toDateString()}</div>
          </div>
        </div>

        <p>{props.project.category}</p>
        <p>{props.project.description}</p>
        <div className="mb-3">
          Github / Devpost / Profesional
          Rewards: 4 bounties
        </div>

        {props.project.tags.map(tag => (
          <li className="tag">{tag}</li>
        ))}
      </div>
    </a>
  )
}

export default ProjectCell
