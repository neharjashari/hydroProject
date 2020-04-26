import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query GetBlogs {
      allDataJson {
        nodes {
          blogs {
            title
            image
            date
            excerpt
            buttonText
          }
        }
      }
    }
  `)

  console.log(data)

  const blogs = [
    {
      id: "1",
      image: "images/blog-image1.jpg",
      date: "December 22, 2017",
      title: "How To Find Out Beautiful Workspace",
      excerpt: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
      buttonText: "Read article",
    },
    {
      id: "2",
      image: "images/blog-image2.jpg",
      date: "December 14, 2017",
      title: "woman sportwear",
      excerpt: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
      buttonText: "Read more",
    },
    {
      id: "3",
      image: "images/blog-image3.jpg",
      date: "December 18, 2017",
      title: "new creative fashion",
      excerpt: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
      buttonText: "Read article",
    },
    {
      id: "4",
      image: "images/blog-image4.jpg",
      date: "December 10, 2017",
      title: "minimalist design trend in 2018",
      excerpt: "Lorem ipsum dolor sit consectetur adipiscing morbi venenatis",
      buttonText: "View Detail",
    },
  ]
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
