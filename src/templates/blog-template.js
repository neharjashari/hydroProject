import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Button from "@material-ui/core/Button"
import Header from "../components/Header/HeaderBlogs"

export default function BlogPost({ data }) {
  const blog = data.allSitePage.edges[0].node.context
  return (
    <Layout>
      <Header page={blog.title} />
      <div style={{ textAlign: "center" }}>
        <Button style={{ marginTop: "2rem" }}>
          <Link
            to="/blog/"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            back to blogs
          </Link>
        </Button>
      </div>
      <section className="single-product">
        <article>
          <img
            src={blog.image}
            className="img-responsive"
            alt=""
            style={{ width: "96%" }}
          />
        </article>
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <div style={{ textAlign: "right", marginTop: "8rem" }}>
            <h6>{blog.date}</h6>
            <h6>{blog.author}</h6>
          </div>
        </article>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            id
            author
            image
            title
            date
            excerpt
            body
          }
        }
      }
    }
  }
`
