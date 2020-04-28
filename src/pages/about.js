import React from "react"
import Layout from "../components/Layout"
import About from "../components/About/About"
import OurWork from "../components/OurWork/OurWork"
import Header from "../components/Header/HeaderSection"

const about = () => {
  return (
    <Layout>
      <Header page="About Us" />
      <About />
      <OurWork />
    </Layout>
  )
}

export default about
