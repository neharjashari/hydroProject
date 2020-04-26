import React from "react"
import img1 from "../../images/work-image1.jpg"
import img2 from "../../images/work-image2.jpg"
import img3 from "../../images/work-image3.jpg"
import img4 from "../../images/work-image4.jpg"

const OurWork = () => {
  return (
    <section id="work" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Our work</h2>
              <span className="line-bar">...</span>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div
              className="work-thumb"
              style={{ width: "262.5px", height: "262.5px" }}
            >
              <a href={img1} className="image-popup">
                <img src={img1} className="img-responsive" alt="Work" />

                <div className="work-info">
                  <h3>Clean &amp; Minimal</h3>
                  <small>Product Design</small>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div
              className="work-thumb"
              style={{ width: "262.5px", height: "262.5px" }}
            >
              <a href={img2} className="image-popup">
                <img src={img2} className="img-responsive" alt="Work" />

                <div className="work-info">
                  <h3>Studio Bag</h3>
                  <small>Branding</small>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div
              className="work-thumb"
              style={{ width: "262.5px", height: "262.5px" }}
            >
              <a href={img3} className="image-popup">
                <img src={img3} className="img-responsive" alt="Work" />

                <div className="work-info">
                  <h3>Frame Design</h3>
                  <small>Photography</small>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div
              className="work-thumb"
              style={{ width: "262.5px", height: "262.5px" }}
            >
              <a href={img4} className="image-popup">
                <img src={img4} className="img-responsive" alt="Work" />

                <div className="work-info">
                  <h3>Paint Work</h3>
                  <small>Art, Design</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurWork
