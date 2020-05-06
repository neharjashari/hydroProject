import React from "react"
import { Link } from "gatsby"
import "./Navbar.css"

const Navbar = () => {
  return (
    <section
      className="navbar custom-navbar navbar-fixed-top top-nav-collapse"
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

          <Link to="/" className="navbar-brand">
            Hydro
          </Link>
        </div>

        <div className="navigation">
          <ul className="nav navbar-nav navbar-nav-first">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/ourwork">Our Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/products/">Products</Link>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            <div className="social-icons">
              <li>
                <Link to="/">
                  <i className="fa fa-facebook-square"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
              </li>
            </div>

            <div>
              <li className="section-btn">
                <Link to="/" data-toggle="modal" data-target="#modal-form">
                  Sign in / Join
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
