import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header/Header"
import About from "../components/About/About"
import Blog from "../components/Blog/Blog"
import OurWork from "../components/OurWork/OurWork"
import Contact from "../components/Contact/Contact"

export default () => (
  <Layout>
    <Header />
    <About />
    <Blog />
    <OurWork />
    <Contact />
  </Layout>
)
