import React from 'react'
import styled from 'styled-components'
import ColumnTitle from "../component/ColumnTitle"
import { graphql,useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {media} from "../utils/style-utils"
import { faBorderAll, faCalendarDay, faDesktop } from '@fortawesome/free-solid-svg-icons'

const Works = () => {

  const data = useStaticQuery(graphql`
    query {
      apple: file(relativePath: {eq: "Apple2.jpg"}) {
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
      <Topin>
        <Top
        fluid={data.apple.childImageSharp.fluid}
        alt=""
        loading="eager"
        durationFadeIn={100}
        />
      </Topin>
      <Content2>
      <ColumnTitle title="ポートフォリオ"  icon={faDesktop} />
      <Tx>就活でのポートフォリオサイトのために作成。
        <br />同時にReactJSなども学びたかったかつGraphQLによりバックエンドも少し触れる、またポートフォリオサイトのためページを早い静的サイトにしたかったためGatsbyJSを用いて作成しました。今まで扱ったことのない言語だったので、初めてのコンポーネントの理解にとても時間がかかりました。フロントエンドエンジニアを目指す自分にとって、エンジニアの難しさと楽しさの両方を改めて知る機会になりました。このサイトをベースにBlogなども書いていこうと思います。
        <br />(2020/10/7 追記)
        <br />ヘッドレスCMSのContentfulを用いてブログを実装しました。
        <br />またメタデータなどもきちんと設定しSEO対策も取り入れ、以前までの課題であったサイトのレスポンシブ対応を完了。
        </Tx>
      <ColumnTitle title="担当"  icon={faBorderAll}/>
      <Tx>コーディング</Tx>
      <ColumnTitle title="制作期間" icon={faCalendarDay}/>
      <Tx>2020/3/21 - 3/25</Tx>
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

const Topin = styled.figure`
max-width: 550px;
height: auto;
width: 100%;
${media.handheld768`
width: 50%;
    `}
`

const Top = styled(Img)`
width: 100%;
height: auto;
`

/*const Link = styled.a`
  color: #000000;
  width: 100%;
  display: block;
`*/

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

