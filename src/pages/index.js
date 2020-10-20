import React from "react"
import Layout from "../component/layout"
import SEO from "../component/seo"
import Me from "../component/me"
import SubTitle from "../component/SubTitle"
import Works from "../component/Works"
import Career from "../component/Career"
import Activity from "../component/Activity"
import Sns from "../component/sns"


const Index = () => (
  <div>
    <Layout>
      <SEO />
      <Me isOpen="true"/>
      <SubTitle 
        subtitle= "WORKS"
        exp= "制作実績など"
      />
      <Works
        pagenum2 = "2"
        pagenum3 = "3"
        pagenum4 = "4"
        pagenum5 = "5"
      />
      <Career />
      <SubTitle
        subtitle= "ACTIVITY"
        exp= "活動"
      />
      <Activity />
      <Sns />
    </Layout>
  </div>
)

export default Index
