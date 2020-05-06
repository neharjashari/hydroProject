import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query GetBlogs {
      allBlogsJson {
        edges {
          node {
            id
            image
            title
            date
            excerpt
            buttonText
          }
        }
      }
    }
  `)

  function getBlogsData(data) {
    const blogsArray = []
    data.allBlogsJson.edges.forEach(element => {
      blogsArray.push(element.node)
    })
    return blogsArray
  }

  const blogs = getBlogsData(data)

  return (
    <section id="blog" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Our Blog</h2>
              <span className="line-bar">...</span>
            </div>
          </div>

          {blogs.map(blog => {
            return (
              <BlogCard
                image={blog.image}
                date={blog.date}
                title={blog.title}
                excerpt={blog.excerpt}
                buttonText={blog.buttonText}
                key={blog.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
