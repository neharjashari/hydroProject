import React, { Component } from 'react'
import Layout from '../components/Layout'

// import css module for this page
import styles from '../components/products.module.css'
// console.log(styles)

export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.page}>
                    <h1>this is our products</h1>
                    <p className={styles.text}>Commodo irure pariatur mollit sunt excepteur dolore sit commodo. Exercitation non id id anim aliqua adipisicing minim dolore. Laborum et irure commodo ipsum ad reprehenderit id tempor officia. Labore dolor laborum do reprehenderit sint nostrud Lorem consequat labore aliqua.</p>
                </div>
            </Layout>
        )
    }
}
