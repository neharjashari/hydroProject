import React from "react"

const HeaderSection = props => {
  return (
    <section id="blogSection" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="home-info">
              <h1>{props.page}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection
