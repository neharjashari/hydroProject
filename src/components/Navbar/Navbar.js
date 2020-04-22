import React from "react"
import { Link } from "gatsby"
import "../../sass/Navbar.css"

const Navbar = () => {
  return (
    <section
      className="navbar custom-navbar navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>

          <a href="index.html" className="navbar-brand">
            Hydro
          </a>
        </div>

        <div className="navigation">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/our-work">Our Work</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <div className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </div>

            <div>
              <li className="section-btn">
                <a href="#" data-toggle="modal" data-target="#modal-form">
                  Sign in / Join
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
