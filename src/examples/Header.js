import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)

//   return <pre>{JSON.stringify(data, null, 4)}</pre>
    return <div>
        <h2>{data.site.siteMetadata.person.name}</h2>
        <h2>{data.site.siteMetadata.person.age}</h2>
    </div>  
}

// Since we're exporting this as a default it doesn't matter how we name this component
// we can use this default name, it's not a problem
export default ComponentName

