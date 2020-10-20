import React from "react"
import Layout from "../component/layout"
import SEO from "../component/seo"
import SubTitle from "../component/SubTitle"
import Product4 from "../component/Product4"
import Works from "../component/Works"

const FifthPage = (location) => {

  return (
    <>
      <Layout>
        <SEO
          pagetitle="12代目お茶の子祭々HPの紹介"
          pagedesc="12代目お茶の子祭々HPの紹介です"
          pagepath={location.pathname}
        />
        <SubTitle
          subtitle= "WORKS"
          exp= "制作実績など"
        />
        <Product4 />
        <Works
          change = "true"
          pagenum2 = "2"
          pagenum3 = "3"
          pagenum4 = "4"
        />
      </Layout>
    </>
  )
}


export default FifthPage
