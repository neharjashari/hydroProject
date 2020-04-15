import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

function blog() {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>this is our blog page</h1>
                <p className={styles.text}>Commodo irure pariatur mollit sunt excepteur dolore sit commodo. Exercitation non id id anim aliqua adipisicing minim dolore. Laborum et irure commodo ipsum ad reprehenderit id tempor officia. Labore dolor laborum do reprehenderit sint nostrud Lorem consequat labore aliqua.</p>
            </div>
        </Layout>
    )
}

export default blog
