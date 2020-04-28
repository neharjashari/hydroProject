import React from "react"
import Layout from "../components/Layout"
import Blog from "../components/Blog/Blog"
import Header from "../components/Header/HeaderSection"

const blog = () => {
  return (
    <Layout>
      <Header page="Blog" />
      <Blog />
    </Layout>
  )
}

export default blog
