import React from "react"
import { Link } from "gatsby"
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>

          <a href="index.html" class="navbar-brand">
            Hydro
          </a>
        </div>

        <div class="navigation">
          <ul class="nav navbar-nav navbar-nav-first">
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

          <ul class="nav navbar-nav navbar-right">
            <div class="social-icons">
              <li>
                <a href="#">
                  <i class="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </div>

            <div>
              <li class="section-btn">
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
