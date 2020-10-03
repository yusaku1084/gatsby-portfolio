import React from "react"
import Works from "../component/Works"
import Product from "../component/Product"
import SubTitle from "../component/SubTitle"
import Layout from "../component/layout"
import Footer from "../component/Footer"


const SecondPage = () => {

  return (
    <>
      <Layout>
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
        <Footer />
      </Layout>
    </>
  )
}


export default SecondPage
