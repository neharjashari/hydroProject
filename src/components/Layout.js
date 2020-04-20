import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../css/Layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.js"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
