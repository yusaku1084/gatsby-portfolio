import React from "react"
import Works from "../component/Works"
import Product3 from "../component/Product3"
import SubTitle from "../component/SubTitle"
import Layout from "../component/layout"
import Footer from "../component/Footer"


const FourthPage = () => {

  return (
    <>
      <Layout>
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
        <Footer />
      </Layout>
    </>
  )
}


export default FourthPage
