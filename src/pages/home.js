import React from "react"
import Layout from "../components/Layout"
import HomeView from "../components/HomeView"
import { graphql } from "gatsby"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

const home = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <HomeView />
      <div>
        <h1 style={{ textAlign: "center", paddingTop: "40px" }}>
          Main Products
        </h1>
        <section className={styles.page}>
          {products.map(product => {
            return (
              <article key={product.id}>
                <Image fluid={product.image.fluid} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>
                  <span>${product.price}</span>
                </h4>
                <Button color="primary">
                  <Link to={`/products/${product.slug}`}>more details</Link>
                </Button>
              </article>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default home
