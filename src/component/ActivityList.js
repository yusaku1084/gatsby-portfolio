import React from 'react'
import styled from 'styled-components'
import ColumnTitle from './ColumnTitle.js'
import { graphql,useStaticQuery,Link } from "gatsby"
import Img from "gatsby-image"
import { media } from "../utils/style-utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const CareerList = () => {

  const data = useStaticQuery(graphql`
    query {
      edu01: file(relativePath: {eq: "interest01.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      edu02: file(relativePath: {eq: "interest02.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      edu03: file(relativePath: {eq: "interest03.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 285, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      allContentfulBlogPost(sort: { order: DESC, fields:publishDate },
        skip: 0,
        limit: 4
        ) {
        edges {
          node {
            publishDateJP: publishDate(formatString: "YYYY.MM.DD")
            publishDate
            title
            slug
            id
          }
        }
      }
    }
  `)

  return (
    <List>
      <Content>
        <ColumnTitle title="BLOG" />
        <div className="container">
        <Posts>
          {data.allContentfulBlogPost.edges.map(({node}) => (
            <Blog key={node.id}>
              <Link to={`/blog/post/${node.slug}/`}>
                <time dateTime={node.publishDate}>{node.publishDateJP}</time>
                <Blogtitle>{node.title}</Blogtitle>
              </Link>
            </Blog>
          ))}
        </Posts>
      </div>
      </Content>
      <Content>
        <ColumnTitle title="INTEREST" />
          <Items>
            <Item>
              <IntImg 
              fluid = {data.edu01.childImageSharp.fluid} 
              loading="eager"
              durationFadeIn={100}
              />
              <IntContainer>
                <TextBold3>Manga</TextBold3>
                <Intdetail>おすすめはキングダムです。</Intdetail>
              </IntContainer>
            </Item>
            <Item>
              <IntImg 
              fluid = {data.edu02.childImageSharp.fluid} 
              loading="eager"
              durationFadeIn={100}
              />
              <IntContainer>
                <TextBold3>Fashion</TextBold3>
                <Intdetail>最近はプチプラで楽しんでます。</Intdetail>
              </IntContainer>
            </Item>
            <Item>
              <IntImg 
              fluid = {data.edu03.childImageSharp.fluid} 
              loading="eager"
              durationFadeIn={100}
              />
              <IntContainer>
                <TextBold3>Game</TextBold3>
                <Intdetail>ポケモンを本気でしたいです。</Intdetail>
              </IntContainer>
            </Item>
          </Items>
      </Content>
    </List>
  )
}

export default CareerList

const List = styled.div`
  ${media.handheld768`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  `}
`

const Content = styled.div`
  margin-top: 23px;
  max-width: 550px;
  width : 100%;
  ${media.handheld768`
    width : 48%;
    `}
`


const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 17px;
  top: 13px;
`
const Blog = styled.article`
  margin-bottom: 15px;
  padding-left: 25px;
  ${media.handheld1024`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    `}
`
const Blogtitle = styled.p`
  font-weight: bold;
  ${media.handheld1024`
    display: inline;
    margin-left:30px;
    `}
`

const Posts = styled.div`
`

const Intdetail = styled.p`
  line-height: 26px;
  font-size: 13px;
  ${media.handheld768`
  max-width: 150px;
  width: 84%;
  `}
`

const IntContainer = styled.div`
${media.handheldunder767`
  padding: 16px;
  `}
`

const Items = styled.div`
${media.handheld768`
display:-webkit-box;
display:-ms-flexbox;
display:flex;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`}
`

const Item = styled.div`
  width: 100%;
  margin-bottom: 14px;
  ${media.handheldunder767`
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    justify-content: flex-start;
  `}
  
`

const IntImg = styled(Img)`
  max-width: 100px;
  width: 85%;
  height: auto;
  border-radius: 5%;
  ${media.handheld768`
  max-width: 150px;
  width: 100%
  margin: 0 auto;
  `}
`

const TextBold3 = styled.p`
  line-height: 28px;
  font-weight: bold;
`