import React from "react"
import styles from "./products.module.scss"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import { useStaticQuery, graphql } from "gatsby"

const AllProducts = () => {
  const data = useStaticQuery(graphql`
    query GetAllProducts {
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
          category
        }
      }
    }
  `)
  const {
    allContentfulProduct: { nodes: products },
  } = data

  const [value, setValue] = React.useState(6)
  const handleChange = event => {
    if (value == 6) {
      setValue(12)
    } else {
      setValue(6)
    }
  }

  return (
    <div>
      <div
        className="section-title"
        style={{ textAlign: "center", margin: "4rem auto -2rem auto" }}
      >
        <h2>Main Products</h2>
        <span className="line-bar">...</span>
      </div>
      <section className={styles.page}>
        {products.slice(0, value).map(product => {
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
      <article style={{ margin: "-4rem 0 4rem 0", textAlign: "center" }}>
        <Button
          onClick={handleChange}
          color="secondary"
          variant="contained"
          style={{ padding: "1rem", borderRadius: "1rem" }}
        >
          show more / less
        </Button>
      </article>
    </div>
  )
}

export default AllProducts
