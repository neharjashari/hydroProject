import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../products.module.scss"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

const Desktop = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulProduct(filter: { category: { eq: "Desktop" } }) {
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
  `)

  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
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
  )
}

export default Desktop
