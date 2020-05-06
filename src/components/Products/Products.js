import React from "react"
import Desktops from "./ProductTypes/Desktop"
import Laptops from "./ProductTypes/Laptop"
import Tablets from "./ProductTypes/Tablet"
import Smartphones from "./ProductTypes/Smartphone"

const Products = props => {
  switch (props.category) {
    case 0:
      return <Desktops />
      break

    case 1:
      return <Laptops />
      break

    case 2:
      return <Tablets />
      break

    case 3:
      return <Smartphones />
      break

    default:
      return (
        <h2 style={{ textAlign: "center" }}>
          No Products available for the moment
        </h2>
      )
      break
  }
}

export default Products
