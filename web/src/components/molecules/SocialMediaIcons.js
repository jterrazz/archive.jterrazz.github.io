import React from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin, faSkype, faMedium,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialMediaIcons = props => {
  const socialLinks = [
    {component: faGithub, link: "https://github.com/jterrazz"},
    {component: faMedium, link: "https://medium.com/a-42-journey"},
    {component: faLinkedin, link: "https://www.linkedin.com/in/jterrazz"},
    {component: faTwitter, link: "https://twitter.com/jterrazz42"},
    {component: faEnvelope, link: "jterrazz@protonmail.com", type: "mailto"},
    {component: faSkype, link: "jterrazz@protonmail.com", type: "skype"},
  ]

  const cellClass = props.transparent ? "" : ("social-outer" + (props.variant === "primary" ? " bg-primary" : ""));

  return (
    <ul className={"m-0 d-flex " + (props.vertical ? "flex-column" : "")}>
      {socialLinks.map(social => (
        <a href={(social.type ? `${social.type}:` : "") + social.link}>
          <li>
            <div className={(props.vertical ? "mb-2 " : "mr-2 ") + cellClass}>
              <FontAwesomeIcon size="lg" icon={social.component} className="text-dark"/>
            </div>
          </li>
        </a>
      ))}
    </ul>
  )
}

export default SocialMediaIcons
