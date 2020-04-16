import React from 'react'
import Layout from '../components/Layout'
import HomeView from '../components/HomeView'
import Products from '../components/Products' 

function home() {
    return (
        <Layout>
            <HomeView/>
            <Products/>
        </Layout>
    )
}

export default home
