import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDev} from "@fortawesome/free-brands-svg-icons";
import {faMedal} from "@fortawesome/free-solid-svg-icons";

const ProjectCell = props => {
  const firstLetter = props.project.name[0]
  const asciiValue = firstLetter.charCodeAt(0);
  const colors = ["#46b3e6", "#4d80e4", "#2e279d", "#4a47a3", "#413c69", "#fe346e"];

  const color = colors[asciiValue % colors.length]
  return (
    <a href={props.project.link} className="text-dark">
      <div className="border p-3  rounded project-cell">
        <div className="d-flex mb-3">
          <div className="rounded d-flex align-items-center justify-content-center text-white font-weight-bold mr-3" style={{width: 42, height: 42, background: color}}>
            {firstLetter}
          </div>
          <div>
            <div className="font-weight-bold">{props.project.name}</div>
            <div className="text-muted small">{props.project.date.toDateString()}</div>
          </div>
        </div>

        <p>{props.project.description}</p>

        <div className="d-flex align-items-center">
          <div className="project-cell__category">{props.project.category}</div>
          <FontAwesomeIcon size="lg" icon={faMedal} className="text-dark"/>
          <FontAwesomeIcon size="lg" icon={faGithub} className="text-dark"/>
          <FontAwesomeIcon size="lg" icon={faDev} className="text-dark"/>
        </div>
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
