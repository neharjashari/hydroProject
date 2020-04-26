import React from "react"

const OurWorkCard = props => {
  return (
    <div className="col-md-3 col-sm-6">
      <div
        className="work-thumb"
        style={{ width: "262.5px", height: "262.5px" }}
      >
        <a href={props.image} className="image-popup">
          <img src={props.image} className="img-responsive" alt="Work" />

          <div className="work-info">
            <h3>{props.title}</h3>
            <small>{props.subtitle}</small>
          </div>
        </a>
      </div>
    </div>
  )
}

export default OurWorkCard
