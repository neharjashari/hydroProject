import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import Button from "@material-ui/core/Button"
import Header from "../components/Header/HeaderSection"

const productsTemplate = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <Header page="Product" />
      <div style={{ textAlign: "center" }}>
        <Button style={{ marginTop: "2rem" }}>
          <Link
            to="/products"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            back to products
          </Link>
        </Button>
        <h1>{title}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          <h2>${price}</h2>
          <p>{info}</p>
          <Button variant="contained" color="secondary" disableElevation>
            ADD TO CART
          </Button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default productsTemplate
