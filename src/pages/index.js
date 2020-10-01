import React from "react"
import Layout from "../component/layout"
import SubTitle from "../component/SubTitle"
import Works from "../component/Works"
import Career from "../component/Career"
import Activity from "../component/Activity"
import Sns from "../component/sns"
import Me from "../component/me"
import SEO from "../component/seo"

const Index = () => (
  <div>
    <Layout>
      <SEO />
      <Me />
      <SubTitle 
        subtitle= "WORKS"
        exp= "制作実績など"
      />
      <Works />
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
