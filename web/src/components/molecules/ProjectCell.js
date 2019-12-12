import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faDev} from "@fortawesome/free-brands-svg-icons";
import {faMedal, faHeart, faFlag} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "react-bootstrap/ProgressBar";
import DropdownLabel from "./DropdownLabel";
import {useTranslation} from "react-i18next";

const ProjectCell = props => {
  const {t} = useTranslation()
  const firstLetter = props.project.name[0]
  const colors = {
    "4": "#083358",
    e: "#6bd5e1",
    m: "#ffb677",
    d: "#ff8364",
    j: "#ffb677",
    f: "#ffb677",
    c: "#ffb677",
    r: "#583c87",
  }

  const githubLinks = props.project.githubLinks ? props.project.githubLinks : [props.project.githubLink];
  const color = colors[firstLetter] || "#000";

  return (
    <a href={props.project.link} className="text-dark">
      <div className="border p-3 rounded project-cell">
        <div className="d-flex mb-3">
          <div className="rounded d-flex align-items-center justify-content-center text-white font-weight-bold mr-3" style={{width: 42, height: 42, background: color}}>
            {firstLetter}
          </div>
          <div>
            <div className="font-weight-bold">{props.project.name}</div>
            <div className="text-muted small">{props.project.date.getFullYear()}</div>
          </div>
        </div>

        <p>{t(`projects.${props.project.name.replace(".", "-")}`)}</p>

        {props.project.tags.map(tag => (
          <li className="tag">{tag}</li>
        ))}

        <div className="mb-3 d-flex align-items-center mt-2">
          <FontAwesomeIcon icon={faFlag}/>
          <ProgressBar variant="dark" now={props.project.progress * 100} style={{height: 4}} className="flex-grow-1 ml-3"/>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <div className="project-cell__category">{props.project.category}</div>
          <div className="d-flex align-items-center">
            { props.project.rewards &&
              <li className="ml-2">
                <span className="mr-2 small font-weight-500">{props.project.rewards}</span>
                <FontAwesomeIcon size="lg" icon={faMedal} className="text-warning"/>
              </li>
            }
            { props.project.loved &&
            <li className="ml-2">
              <DropdownLabel label={t(`projects.${props.project.name.replace(".", "-")}/loved`)}>
                  <FontAwesomeIcon size="lg" icon={faHeart} className="text-warning"/>
              </DropdownLabel>
            </li>
            }
            {githubLinks.map(gLink => {
              return gLink && (
                <a href={gLink} className="ml-2" target="_blank">
                  <FontAwesomeIcon size="lg" icon={faGithub} className="text-dark"/>
                </a>
              )
            })}
            {props.project.devpostLink &&
            <a href={props.project.devpostLink} className="ml-2" target="_blank">
              <FontAwesomeIcon size="lg" icon={faDev} className="text-dark"/>
            </a>
            }
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCell
