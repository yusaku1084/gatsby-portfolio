import React from "react"
import Works from "../component/Works"
import Product from "../component/Product"
import SubTitle from "../component/SubTitle"
import Layout from "../component/layout"
import SEO from "../component/seo"

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
        />
      </Layout>
    </>
  )
}


export default SecondPage
