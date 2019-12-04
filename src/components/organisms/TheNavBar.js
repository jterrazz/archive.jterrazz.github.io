import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import "./TheNavBar.scss"

const TheNavBar = props => {
  return (
    <Navbar bg="transparent" className="p-3">
      <Link to="/users">
        <Navbar.Brand className="navbar-brand text-dark">jterrazz</Navbar.Brand>
      </Link>

      <Nav class="mx-auto">
        <div className="small font-weight-500">Available for work</div>
      </Nav>

      <div className="small font-weight-600">
        <span className="mr-1">EN</span>
        <span>FR</span>
      </div>

      <button className="hamburger hamburger--collapse p-0" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"/>
        </span>
      </button>
    </Navbar>
  )
}

export default TheNavBar
