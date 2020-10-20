import PropTypes from "prop-types"
import React from "react"
import { graphql,useStaticQuery } from "gatsby"
import styled,{keyframes} from "styled-components"
import Img from "gatsby-image"
import { media } from "../utils/style-utils"
import { useWindowDimensions } from "../utils/windowsize"

const Clickdesign = keyframes`
    0% {
      opacity: 1;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      transform: scale(1.3, 1.3);
    }
`;

const Headerbox = styled.header`
width: 100%;
height: 430px;
font-family: Roboto;
${media.handheldunder767`
  &.OFF{
  height: 670px;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
`}
`

const Inner = styled.div`
width: 100%;
height: 430px;
position: relative;
`

const Headerback = styled.figure`
height: 430px;
${media.handheldunder767`
  &.OFF{
  height: 670px;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
`}
}
`

const Top = styled(Img)`
object-fit: contain;
z-index: -3;
`

const Headerinner = styled.div`
max-width: 960px;
width: 84%;
max-height: 276px;
height: auto;
position: absolute;
margin: auto;
top: 0;
right: 0;
bottom: 0;
left: 0;

  ${media.handheld768`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    `}
`
const Container = styled.div`
position:relative;
width: 100%;
`
const Headerleft = styled.div`
margin: 0 auto;
max-width: 275px;
width: 100%;
height: auto;
color: white;
border: 2px solid rgba(255, 255, 255, 0.5);
box-sizing: border-box;
text-align: center;
position: absolute;
left:0;
right:0;
z-index: 1;
cursor: pointer;
${media.handheld768`
  &.OFF{
  transform: translateX(-${props => props.site}px);
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
  `}
}
`

const LeftContainer = styled.div`
position:relative;
width: 100%;
box-sizing: border-box;
padding-top: 31px;
&.ON{
  &::before{
    position: absolute;
    display: inline-block;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 276px;
    content: "";
    border: 1px solid rgba(255, 255, 255, 0.5);
    animation: ${Clickdesign} infinite 1.5s;
  }
}
`

const Headerright1 = styled.div`
opacity:0;
padding-top: 22px;
position: absolute;
margin: 0 auto;
max-width: 612px;
width: 45%;
height: auto;
color:white;
font-style: normal;
font-weight: normal;
left:0;
right:0;
${media.handheld768`
&.OFF {
  opacity:1;
  transform: translateX(140px);
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
}`
}
`

const Headerright2 = styled.div`
max-width: 275px;
width: 100%;
opacity: 0;
position: absolute;
margin: 0 auto;
height: auto;
color:white;
font-style: normal;
font-weight: normal;
left:0;
right:0;
z-index: -2;
${media.handheldunder767`
&.OFF {
  opacity:1;
  transform: translateY(300px);
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
}`
}
`

const Line = styled.div`
position: absolute;
width: 100%;
height: 0px;
left: 0;
top: 0;
margin-top:35%;
border: 1px solid rgba(255, 255, 255, 0.5);
box-sizing: border-box;
z-index: -1;
${media.handheld768`
&.OFF {
  width: ${props => props.site}px;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
}`
}
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
font-size: 15px;
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
const PersonText = styled.p`
font-size: 12px;
padding: 20px 0 20px;
`
const TextDetail = styled.div`
  padding-left: 10px;
  border-left: 1px #C4C4C4 solid;
  &::before{
    content: '';
    width: 5px;
    height: 5px;
    background: #C4C4C4;
    position: absolute;
    left: -2px;
    top: 24px;
    border-radius: 100%;
  }
`

const Block = styled.div`
  position: relative;
  height: auto;
`

const Header = (props) => {

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: false
      }));
    }
  
    render() {
      return (
        <Headerbox className={this.state.isToggleOn ? 'ON' : 'OFF'}>
          <Inner>
            <Headerback className={this.state.isToggleOn ? 'ON' : 'OFF'}>
              <Top
                fluid={data.top.childImageSharp.fluid}
                alt=""
                style={{ height: "100%" }}
                loading="eager"
                durationFadeIn={100}
              />
            </Headerback>
            <Headerinner>
              <Container>
                <Headerleft 
                onClick={this.handleClick}
                site={widthchange(width)}
                className={this.state.isToggleOn ? 'ON' : 'OFF'}
                >
                  <LeftContainer className={this.state.isToggleOn ? 'ON' : 'OFF'}>
                    <Thumb
                      fluid={data.thumb.childImageSharp.fluid}
                      alt=""
                      loading="eager"
                      durationFadeIn={100}
                    />
                    <Name1>Yusaku Sogabe</Name1>
                    <Career>Front Engineer</Career>
                    <Line site={widthchange2(width)} className={this.state.isToggleOn ? 'ON' : 'OFF'}/>
                  </LeftContainer>
                </Headerleft>
                <Headerright1 className={this.state.isToggleOn ? 'ON' : 'OFF'}>
                <Des>好きなことを仕事にするため勉強中。
                <br /> 現在はJavaScriptの奥深さに悪戦苦闘中。
                </Des>
                <Name2>曽我部 祐作 : ソガベ ユウサク</Name2>
                <Table
                main = "性別"
                sub = "男性"
                />
                <Table
                main = "生年月日"
                sub = "1998年08月04日(22歳)"
                />
                <Table
                main = "出身地"
                sub = "兵庫県川西市"
                />
                </Headerright1>
                <Headerright2 className={this.state.isToggleOn ? 'ON' : 'OFF'}>
                <Block>
                  <TextDetail>
                    <PersonText>小学校2年から高校3年まで野球部に所属</PersonText>
                  </TextDetail>
                </Block>
                <Block>
                  <TextDetail>
                    <PersonText>中学校では生徒会長を経験</PersonText>
                  </TextDetail>
                </Block>
                <Block>
                  <TextDetail>
                    <PersonText>Youtubeで動画投稿をしてみる</PersonText>
                  </TextDetail>
                </Block>
                <Block>
                  <TextDetail>
                    <PersonText>大学生活では新入生のための学生団体に注力</PersonText>
                  </TextDetail>
                </Block>
                </Headerright2>
              </Container>
              </Headerinner>
            </Inner>
          </Headerbox>
      );
    }
  }

  const { width } = useWindowDimensions();
  const widthchange = (width) => (
    (width >= 1143) ?　342.5:
    (width >= 768) ? 342.5-((1143-width)*0.42):
    0
  )

  const widthchange2 = (width) => (
    (width >= 1143) ?　960:
    (width >= 768) ? 960-((1143-width)*0.84):
    0
  )

  const data = useStaticQuery(graphql`
    query {
      top: file(relativePath: {eq: "Rectangle.jpg"}) {
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
        <Toggle />
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
