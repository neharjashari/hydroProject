import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header/HeaderSection"
import Tabs from "../components/Products/Tabs"

const products = () => {
  return (
    <Layout>
      <Header page="Products" />
      <Tabs />
    </Layout>
  )
}

export default products
