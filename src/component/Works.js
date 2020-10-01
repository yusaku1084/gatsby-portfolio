import { Link,graphql,useStaticQuery } from "gatsby"
import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Works = () => {

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
    }
  `)

  return(
    <WorksWrapper>
      <Box>
        <WorksContent
          href="/page-2"
          fluid={data.out01.childImageSharp.fluid}
          alt="実績①"
          site="RIXIS SPsite"
          cording="design / Sketch"
        />
        <WorksContent
          href="/page-3"
          fluid={data.out02.childImageSharp.fluid}
          alt="実績②"
          site="袴美人サイト"
          cording="design / Sketch"
        />
        <WorksContent
          href="/page-4"
          fluid={data.out03.childImageSharp.fluid}
          alt="実績③"
          site="Portfolio"
          cording="coding / GatsbyJS"
        />
      </Box>
    </WorksWrapper>
  )
}

export default Works

const WorksContent = props => (
  <Content>
    <Link2 to={props.href}>
      <WorksImg fluid = {props.fluid} />   
      <TextBold>{props.site}</TextBold>
      <Text>{props.cording}</Text>
      <Icon icon={faAngleLeft} size="2x" />
    </Link2>
  </Content>
)



const Link2 = styled(Link)`
  color: transparent;
  width: 100%;
  height: 275px;
  display: block;
`


const WorksWrapper = styled.div`
  margin: 75px 0 267px;
`

const Box = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
  width: auto;
  max-width: 888px;
  margin: 0 auto;
`

const Content = styled.div`
  width: 275px;
  text-align: center;
`



const WorksImg = styled(Img)`
  overflow: hidden;
  width: 275px;
  height: 275px;
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
  font-size: 16px;
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
`