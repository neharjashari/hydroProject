import React from 'react'
import Header from '../examples/Header'
import Header2 from '../examples/Header2'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'

const examples = ({data}) => {
    // console.log(props)

    const {site:{info:{author}}} = data

    return (
        <Layout>
            <p>Hello from examples page</p>
            <Header />
            <Header2 />
            <HeaderStatic />
            <h5>Author: {author}</h5>
        </Layout>
    )
}

export const data = graphql`
    query MyQuery {
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

export default examples
