import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "../css/templatemo-style.css"

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
