import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <div className="footer-thumb footer-info">
              <h2>Hydro Company</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="footer-thumb">
              <h2>Company</h2>
              <ul className="footer-link">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/ourwork">Join our team</Link>
                </li>
                <li>
                  <Link to="/blog">Read Blog</Link>
                </li>
                <li>
                  <Link to="/">Press</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 col-sm-4">
            <div className="footer-thumb">
              <h2>Services</h2>
              <ul className="footer-link">
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Documentation</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-4">
            <div className="footer-thumb">
              <h2>Find us</h2>
              <p>
                123 Grand Rama IX, <br />
                Krung Thep Maha Nakhon 10400
              </p>
            </div>
          </div>

          <div className="col-md-12 col-sm-12">
            <div className="footer-bottom">
              <div className="col-md-6 col-sm-5">
                <div className="copyright-text">
                  <p>Copyright &copy; 2017 Your Company</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-7">
                <div className="phone-contact">
                  <p>
                    Call us <span>(+66) 010-020-0340</span>
                  </p>
                </div>
                <ul className="social-icon">
                  <li>
                    <Link
                      to="/"
                      className="fa fa-facebook-square"
                      attr="facebook icon"
                    ></Link>
                  </li>
                  <li>
                    <Link to="/" className="fa fa-twitter"></Link>
                  </li>
                  <li>
                    <Link to="/" className="fa fa-instagram"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
