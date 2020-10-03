import React from "react"
import Layout from "../component/layout"
import SEO from "../component/seo"

const PageNotFound = ({location}) =>(
  <Layout>
    <SEO 
      pagetitle="ページが見つかりません"
      pagepath={location.pathname}
    />
    <h1 style={{ padding:"20vh 0", textAlign: "center" }}>お探しのページが見つかりませんでした</h1>
  </Layout>

)

export default PageNotFound