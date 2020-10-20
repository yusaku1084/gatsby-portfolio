import React from "react"
import Layout from "../component/layout"
import SEO from "../component/seo"
import SubTitle from "../component/SubTitle"
import Product from "../component/Product"
import Works from "../component/Works"

const SecondPage = (location) => {

  return (
    <>
      <Layout>
        <SEO
          pagetitle="RIXISの紹介"
          pagedesc="RIXISの紹介です"
          pagepath={location.pathname}
        />
        <SubTitle
          subtitle= "WORKS"
          exp= "制作実績など"
        />
        <Product />
        <Works
          change = "true"
          pagenum3 = "3"
          pagenum4 = "4"
          pagenum5 = "5"
        />
      </Layout>
    </>
  )
}


export default SecondPage
