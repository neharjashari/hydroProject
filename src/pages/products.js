import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Tabs from "../components/Tabs"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  //   console.log(products)

  return (
    <Layout>
      <Tabs />
      <section className={styles.page}>
        {products.map(product => {
          //   console.log(product)
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

export default ComponentName
