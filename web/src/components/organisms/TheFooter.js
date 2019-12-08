import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const TheFooter = props => {
  const socialLinks = [
    { imgSrc: "email.svg", alt: "skype account",  link: "https://email.com" },
    { imgSrc: "012-github.svg", alt: "github account",  link: "https://github.com/jterrazz" },
    { imgSrc: "015-linkedin.svg", alt: "linkedin account",  link: "https://linkedin.com/in/jterrazz" },
    { imgSrc: "007-twitter.svg", alt: "twitter account",  link: "https://twitter.com/42jterrazz" },
    { imgSrc: "009-telegram.svg", alt: "telegram account",  link: "https://telegram.com" },
    { imgSrc: "018-whatsapp.svg", alt: "whatsapp account",  link: "https://whatsapp.com" },
    { imgSrc: "021-skype.svg", alt: "skype account",  link: "https://skype.com" },
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
          {socialLinks.map(social => <li><img src={"/images/social/" + social.imgSrc} alt={social.alt} height={24} width={24} className="mr-2"/></li>)}
        </ul>

        <div className="text-muted text-right small">
          <div>Made with <span role="img" aria-label="love">❤️</span> (and ReactJS)</div>
          <div>Hosted on GitHub Pages</div>
        </div>

      </Container>
    </footer>
  )
}

export default TheFooter
