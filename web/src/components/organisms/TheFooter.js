import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faSkype,
  faTelegram,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

const TheFooter = props => {
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
    <footer className="bg-dark text-white py-5">
      <Container className="d-flex align-items-center justify-content-between">
        <div className="small">
          <Link to="/" className="text-white">
            <h5 className="font-weight-800">jterrazz.com</h5>
          </Link>
          <div>@2019</div>
        </div>

        <ul className="d-flex m-0">
          {socialLinks.map(social => (
            <li>
              <div className="social-outer mr-3">
                <FontAwesomeIcon size="lg" icon={social.component}/>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-muted text-right small">
          <div>Made with <span role="img" aria-label="love">❤️</span> (and
            ReactJS)
          </div>
          <div>Hosted on GitHub Pages</div>
        </div>

      </Container>
    </footer>
  )
}

export default TheFooter
