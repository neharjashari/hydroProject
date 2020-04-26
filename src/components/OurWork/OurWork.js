import React from "react"
import img1 from "../../images/work-image1.jpg"
import img2 from "../../images/work-image2.jpg"
import img3 from "../../images/work-image3.jpg"
import img4 from "../../images/work-image4.jpg"
import OurWorkCard from "./OutWorkCard"
import { useStaticQuery, graphql } from "gatsby"

const OurWork = () => {
  const data = useStaticQuery(graphql`
    query GetCards {
      allDataJson {
        nodes {
          ourwork {
            image
            subtitle
            title
          }
        }
      }
    }
  `)

  // console.log(data)

  const cardss = []
  data.allDataJson.nodes.forEach(card => {
    cardss.push(card.ourwork)
  })
  console.log(cardss)

  const cards = [
    {
      id: "1",
      image: img1,
      title: "Clean & Minimal",
      subtitle: "Product Design",
    },
    {
      id: "2",
      image: img2,
      title: "Studio Bag",
      subtitle: "Branding",
    },
    {
      id: "3",
      image: img3,
      title: "Frame Design",
      subtitle: "Photography",
    },
    {
      id: "4",
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
                key={card.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurWork
