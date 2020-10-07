import React from "react"
import Works from "../component/Works"
import Product2 from "../component/Product2"
import SubTitle from "../component/SubTitle"
import Layout from "../component/layout"
import SEO from "../component/seo"


const ThirdPage = (location) => {

  return (
    <>
      <Layout>
        <SEO
          pagetitle="袴美人の紹介"
          pagedesc="袴美人の紹介です"
          pagepath={location.pathname}
        />
        <SubTitle
          subtitle= "WORKS"
          exp= "制作実績など"
        />
        <Product2 />
        <Works
          change = "true"
          pagenum2 = "2"
          pagenum4 = "4"
        />
      </Layout>
    </>
  )
}


export default ThirdPage
