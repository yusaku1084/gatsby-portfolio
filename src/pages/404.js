import React from "react"
import Layout from "../component/layout"
import SEO from "../component/seo"

const PageNotFound = () =>(
  <Layout>
    <SEO 
      pagetitle="ページが見つかりません"
    />
    <h1 style={{ padding:"20vh 0", textAlign: "center" }}>お探しのページが見つかりませんでした</h1>
  </Layout>

)

export default PageNotFound