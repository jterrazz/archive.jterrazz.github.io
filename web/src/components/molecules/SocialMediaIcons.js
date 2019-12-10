import React from "react";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin, faSkype, faTelegram,
  faTwitter, faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialMediaIcons = props => {
  const socialLinks = [
    {component: faEnvelope, link: "https://email.com"},
    {component: faGithub, link: "https://email.com"},
    {component: faLinkedin, link: "https://email.com"},
    {component: faTwitter, link: "https://email.com"},
    {component: faTelegram, link: "https://email.com"},
    {component: faWhatsapp, link: "https://email.com"},
    {component: faSkype, link: "https://email.com"},
  ]

  return (
    <ul className={"m-0 d-flex " + (props.vertical ? "flex-column" : "")}>
      {socialLinks.map(social => (
        <li>
          <div className={(props.vertical ? "mb-2 " : "mr-2 ") + (!props.transparent ? "social-outer" : "")}>
            <FontAwesomeIcon size="lg" icon={social.component} className="text-dark"/>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SocialMediaIcons
