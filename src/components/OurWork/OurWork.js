import React from "react"
import img1 from "../../images/work-image1.jpg"
import img2 from "../../images/work-image2.jpg"
import img3 from "../../images/work-image3.jpg"
import img4 from "../../images/work-image4.jpg"
import OurWorkCard from "./OutWorkCard"

const OurWork = () => {
  const cards = [
    {
      image: img1,
      title: "Clean & Minimal",
      subtitle: "Product Design",
    },
    {
      image: img2,
      title: "Studio Bag",
      subtitle: "Branding",
    },
    {
      image: img3,
      title: "Frame Design",
      subtitle: "Photography",
    },
    {
      image: img4,
      title: "Paint Work",
      subtitle: "Art, Design",
    },
  ]
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

          {cards.map(card => {
            return (
              <OurWorkCard
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurWork
