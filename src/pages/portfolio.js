import React from "react"
import Works from "../component/Works"
import Product3 from "../component/Product3"
import SubTitle from "../component/SubTitle"
import Layout from "../component/layout"
import SEO from "../component/seo"

const FourthPage = (location) => {

  return (
    <>
      <Layout>
        <SEO
          pagetitle="ポートフォリオサイトの紹介"
          pagedesc="ポートフォリオサイトの紹介です"
          pagepath={location.pathname}
        />
        <SubTitle
          subtitle= "WORKS"
          exp= "制作実績など"
        />
        <Product3 />
        <Works
          change = "true"
          pagenum2 = "2"
          pagenum3 = "3"
        />
      </Layout>
    </>
  )
}


export default FourthPage
