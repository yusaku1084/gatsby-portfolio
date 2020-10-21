import { Link,graphql,useStaticQuery } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { media } from "../utils/style-utils"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../component/slider.css";

const Works = (props) => {

  const data = useStaticQuery(graphql`
    query {
      out01: file(relativePath: {eq: "output01.png"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      out02: file(relativePath: {eq: "output02.png"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      out03: file(relativePath: {eq: "output03.png"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      out04: file(relativePath: {eq: "output04.png"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

      return(
        <>
          {props.change ? 
          <Work change="true">
          <WorksWrapper change="true">
            <Box change="true">
              <Slider 
              {...settings}
              >
              {props.pagenum2 &&
                <WorksContent
                  href="/rixis"
                  fluid={data.out01.childImageSharp.fluid}
                  alt="実績①"
                  site="RIXIS SPsite"
                  cording="design / Sketch"
                />
              }
              {props.pagenum3 &&
                <WorksContent
                  href="/hakamabijinn"
                  fluid={data.out02.childImageSharp.fluid}
                  alt="実績②"
                  site="袴美人サイト"
                  cording="design / Sketch"
                />
              }
              {props.pagenum4 &&
                <WorksContent
                  href="/portfolio"
                  fluid={data.out03.childImageSharp.fluid}
                  alt="実績③"
                  site="Portfolio"
                  cording="coding / GatsbyJS"
                />
              }
              {props.pagenum5 &&
                <WorksContent
                  href="/ochanokosaisai"
                  fluid={data.out04.childImageSharp.fluid}
                  alt="実績④"
                  site="12代目お茶の子祭々HP"
                  cording="coding / GatsbyJS"
                />
              }
              </Slider>
            </Box>
          </WorksWrapper>
          </Work>
          :
          <Work>
          <WorksWrapper>
            <Box>
            <Slider 
              {...settings}
            >
              {props.pagenum2 &&
                <WorksContent
                  href="/rixis"
                  fluid={data.out01.childImageSharp.fluid}
                  alt="実績①"
                  site="RIXIS SPsite"
                  cording="design / Sketch"
                />
              }
              {props.pagenum3 &&
                <WorksContent
                  href="/hakamabijinn"
                  fluid={data.out02.childImageSharp.fluid}
                  alt="実績②"
                  site="袴美人サイト"
                  cording="design / Sketch"
                />
              }
              {props.pagenum4 &&
                <WorksContent
                  href="/portfolio"
                  fluid={data.out03.childImageSharp.fluid}
                  alt="実績③"
                  site="Portfolio"
                  cording="coding / GatsbyJS"
                />
              }
              {props.pagenum5 &&
                <WorksContent
                  href="/ochanokosaisai"
                  fluid={data.out04.childImageSharp.fluid}
                  alt="実績④"
                  site="12代目お茶の子祭々HP"
                  cording="coding / GatsbyJS"
                />
              }
            </Slider>
            </Box>
          </WorksWrapper>
          </Work>
          }
        </ >
      )

}

export default Works

const WorksContent = props => (
  <Content>
    <Link2 to={props.href}>
      <WorksImg 
      fluid = {props.fluid}
      loading="eager"
      durationFadeIn={100}
      />   
      <TextBold>{props.site}</TextBold>
      <Text>{props.cording}</Text>
      <Icon icon={faAngleLeft} size="2x" />
    </Link2>
  </Content>
)



const Link2 = styled(Link)`
  color: transparent;
  width: 100%;
  height: auto;
  display: block;
`

const Work = styled.div`
  background-color: ${props => props.change ? '#f7f7f7' : 'white'};
`

const WorksWrapper = styled.div`
  margin: 0 auto;
  width: 84%;
  padding-top: 80px;
  padding-bottom: 80px;
  max-width: 1147px;
  ${media.handheld768`
    padding-top: 100px;
    padding-bottom: 100px;
    `}
  
`

const Box = styled.div`
  margin: 0 auto; 
  
`

const Content = styled.div`
  max-width: 200px;
  width: 70%;
  text-align: center;
  margin: 60px auto 0px;
  ${media.handheld768`
    margin: 0 auto;
    max-width: 320px;
    width: 50%
  `}
`



const WorksImg = styled(Img)`
  overflow: hidden;
  width: 100%;
  height: auto;
  position: relative;
  transition: all 0.3s ease 0s;
  &:before{
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    background: inherit;
    filter: blur(4px);
  }
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-0.1875em);
  }
`

const Text = styled.p`
  font-size: 15px;
  line-height: 28px;
  padding-top: 0;
  margin-bottom: 53px;
  color: #000;
`

const TextBold = styled(Text)`
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 24px;
  color: #000;
`

const Icon = styled(FontAwesomeIcon)`
  color: #000;
  display: inline-block;
  padding-bottom: 40px;
`