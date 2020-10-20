import React from 'react'
import styled from 'styled-components'
import ColumnTitle from "../component/ColumnTitle"
import { graphql,Link,useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {media} from "../utils/style-utils"
import { faBorderAll, faCalendarDay, faDesktop } from '@fortawesome/free-solid-svg-icons'

const Works = () => {

  const data = useStaticQuery(graphql`
    query {
      apple: file(relativePath: {eq: "Apple3.jpg"}) {
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
      <ColumnTitle title="12代目お茶の子祭々HP"  icon={faDesktop} />
      <Tx>友人のよさこいサークルのホームページを作成。
        <br />久しぶりに会った友人がよさこいサークルに本気で取り組んでおり、ホームページを作りたいとのことだったため自分の力試しも兼ねて作成しました。
        <br />動画の素材がとてもよく、見せてもらった時からヘッダーの背景にしたいと考えていたので実装。
        <br />また、各SNSのプラットフォームの役割としてのホームページになるというニーズに応えるための工夫を取り入れました。
        <br />メタデータなどもきちんと設定しSEO対策も取り入れ、レスポンシブ対応はもちろん、動画を取り入れることで重くなってしまいがちなサイトをいかに早くするかにこだわりました。
        <br /><br /><Link to="https://ochanokosaisai12th.netlify.app/">12代目お茶の子祭々HP</Link>
        </Tx>
      <ColumnTitle title="担当"  icon={faBorderAll}/>
      <Tx>デザイン/コーディング</Tx>
      <ColumnTitle title="制作期間" icon={faCalendarDay}/>
      <Tx>2020/10/11 - 10/20</Tx>
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

