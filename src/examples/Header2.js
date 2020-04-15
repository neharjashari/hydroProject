import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info:siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`

const Header = () => {
    // Destructuring
    const {
        site: {
            info: {
                title, 
                person: {name},
            },
        },
    } = useStaticQuery(getData)

//   console.log(data)

    return (
        <div>
            <h2>Title : {title}</h2>
            <h2>Name : {name}</h2>
        </div>  
    )
}

export default Header

