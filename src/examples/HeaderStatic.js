import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
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
    `}
    // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    render={data => <h4>Description : {data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
