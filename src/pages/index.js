import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SearchReactive from '../components/SearchReactive'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Ahoy hoy</h1>
    <p>Gatsby working with reactive search.</p>
    <SearchReactive />
  </Layout>
)

export default IndexPage
