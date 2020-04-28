import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import Header from "../components/Header/HeaderSection"

const contact = () => {
  return (
    <Layout>
      <Header page="Contact Us" />
      <Contact />
    </Layout>
  )
}

export default contact
