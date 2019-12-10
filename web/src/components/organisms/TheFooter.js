import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import SocialMediaIcons from "../molecules/SocialMediaIcons";

const TheFooter = props => {

  return (
    <footer className="bg-dark text-white py-5">
      <Container className="d-flex align-items-center justify-content-between">
        <div className="small">
          <Link to="/" className="text-white">
            <h5 className="font-weight-800">jterrazz.com</h5>
          </Link>
          <div>@2019</div>
        </div>

        <SocialMediaIcons/>

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
