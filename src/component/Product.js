import React from 'react'
import styled from 'styled-components'
import ColumnTitle from "../component/ColumnTitle"
import {media} from "../utils/style-utils"
import { graphql,useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Works = () => {

  const data = useStaticQuery(graphql`
    query {
      iphone: file(relativePath: {eq: "iPhone.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  
  return(
  <WorksWrapper>
    <Box>
      <Content>
      <WorksImg
        fluid={data.iphone.childImageSharp.fluid}
        alt=""
        />
      </Content>
      <Content2>
      <ColumnTitle title="担当" />
      <Tx>BootCampの課題で作成しました。<br />課題は提示されたサイトのスマートフォン版のデザインを作成するというもので、<br />難易度は比較的易しめでしたが、デザインソフト使用の良い練習になったと思います。</Tx>
      <ColumnTitle title="制作期間" />
      <Tx>2020/2/16 (5時間)</Tx>
      </Content2>
    </Box>
  </WorksWrapper>
  )
}

export default Works


const Content2 = styled.div`
  max-width: 550px;
  width:100%;
  height: auto;
  box-sizing:border-box;
  ${media.handheld768`
  width:45%;
    `}
`
const WorksWrapper = styled.div`
  background: #fff;
  padding: 60px 0 80px;
  ${media.handheld768`
    padding: 100px 0 100px;
    `}
`
const Tx = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #515151;
margin-top: 26px;
margin-bottom: 100px;
`

const Box = styled.div`
max-width:1147px;
width: 84%;
margin: 0 auto;
${media.handheld768`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
  `}
`

const Content = styled.figure`
  max-width: 550px;
  height: auto;
  width: 100%;
  ${media.handheld768`
  width: 50%;
      `}
`


const WorksImg = styled(Img)`
  width: 80%;
  height: auto;
  box-sizing: border-box;
  margin: 0 auto;
`

/*const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding-top: 0;
  margin-bottom: 53px;
`*/

/*const TextBold = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 24px;
`*/