import React from "react"
import Works from "../component/Works"
import Product2 from "../component/Product3"
import SubTitle from "../component/SubTitle"
import Layout from "../component/layout"
import Footer from "../component/Footer"


const ThirdPage = () => {

  return (
    <>
      <Layout>
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
        <Footer />
      </Layout>
    </>
  )
}


export default ThirdPage
