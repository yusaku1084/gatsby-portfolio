import PropTypes from "prop-types"
import React from "react"
import { graphql,useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Headerbox = styled.header`
width: 100%;
height: 430px;
margin: 0 auto;
font-family: Roboto;
position: relative;
`

const Headerback = styled.figure`
max-height: 100%;
height: 430px;
`

const Top = styled(Img)`
width: 100%;
height: 430px;
object-fit: cover;
`

const Headerinner = styled.div`
width: 960px;
height: 276px;
margin: auto;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
`

const Headerleft = styled.div`
width: 275px;
height: 276px;
color: white;
float: left;
border: 2px solid rgba(255, 255, 255, 0.5);
box-sizing: border-box;
text-align: center;
z-index: 1;
position: absolute;
left: 0;
padding-top: 31px;
`

const Headerright = styled.div`
width: 612px;
height: 276px;
color:white;
float: right;
font-style: normal;
font-weight: normal;
`

const Line = styled.div`
position: absolute;
width: 271px;
height: 0px;
left: 0;
top: 97px;
border: 1px solid rgba(255, 255, 255, 0.5);
box-sizing: border-box;
z-index:-1;
`


const Thumb = styled(Img)`
margin: 0 auto 30px auto;
width: 128px;
height: 128px;
`

const Name1 = styled.p`
font-size: 24px;
height: 26px;
margin-bottom: 12px;
`

const Career = styled.p`
font-size: 14px;
height: 26px;
margin-bottom: 19px;
`

const Des = styled.p`
font-size: 14px;
line-height: 28px;
height: 86px;
margin-bottom: 29px;
`

const Name2 = styled.p`
font-size: 16px;
font-weight: 500;
margin-bottom: 10px;
height: 25px;
`

const Tatd = styled.td`
font-size: 14px;
line-height: 28px;
padding-left: 20px;
width:auto;
`
const Tath = styled.td`
font-weight: bold;
font-size: 14px;
line-height: 28px;
width: 147px;
`

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      top: file(relativePath: {eq: "Rectangle.png"}) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      thumb: file(relativePath: {eq: "thumb.png"}) {
        childImageSharp {
          fluid(maxWidth: 128, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return(
    <Headerbox>
      <Headerback>
          <Top
            fluid={data.top.childImageSharp.fluid}
            alt=""
            style={{ height: "100%" }}
          />
      </Headerback>
      <Headerinner>
        <Headerleft>
          <Thumb
            fluid={data.thumb.childImageSharp.fluid}
            alt=""
          />
          <Name1>Yusaku Sogabe</Name1>
          <Career>Front Engineer</Career>
          <Line />
        </Headerleft>
        <Headerright>
        <Des>デザインとコーディングの勉強をしています。
        <br /> 現在はJavaScriptの奥深さに悪戦苦闘中。
        </Des>
        <Name2>曽我部 祐作 : ソガベ ユウサク</Name2>
        <Table
        main = "性別"
        sub = "男性"
        />
        <Table
        main = "生年月日"
        sub = "1998年08月04日(21歳)"
        />
        <Table
        main = "現住所"
        sub = "兵庫県川西市"
        />
        </Headerright>
      </Headerinner>
    </Headerbox>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const Table = (props) => (
  <table>
    <tbody>
        <tr>
            <Tath>{props.main}</Tath>
            <Tatd>{props.sub}</Tatd>
        </tr>
    </tbody>
  </table>
)

export default Header
