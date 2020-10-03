import React from 'react'
import styled from 'styled-components'
import ColumnTitle from './ColumnTitle.js'
import { graphql,useStaticQuery,Link } from "gatsby"
import Img from "gatsby-image"
import { media } from "../utils/style-utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
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
        <div className="posts">
          {data.allContentfulBlogPost.edges.map(({node}) => (
            <Blog key={node.id}>
              <Link to={`/blog/post/${node.slug}/`}>
                <time dateTime={node.publishDate}>{node.publishDateJP}</time>
                <Blogtitle>{node.title}</Blogtitle>
              </Link>
            </Blog>
          ))}
        </div>
      </div>
      </Content>
      <Content>
        <ColumnTitle title="INTEREST" />
          <Items>
            <Item>
              <IntImg fluid = {data.edu01.childImageSharp.fluid} />
              <TextBold3>Anime・Manga</TextBold3>
            </Item>
            <Item>
              <IntImg fluid = {data.edu02.childImageSharp.fluid} />
              <TextBold3>Fashion</TextBold3>
            </Item>
            <Item>
              <IntImg fluid = {data.edu03.childImageSharp.fluid} />
              <TextBold3>Game</TextBold3>
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
  width: 85%;
  padding-left: 25px;
  position: relative;
`


const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 17px;
  top: 13px;
`
const Blog = styled.article`
  display:-webkit-box;
  display:-ms-flexbox;
  display: inline-flex;
  margin-bottom: 15px;
  padding-left: 25px;
`
const Blogtitle = styled.p`
  font-weight: bold;
  display: inline;
  margin-left : 30px;
`

/*const Block = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
`

const Border = styled.div`
  margin-top: 19px;
  margin-bottom: -8px;
  border-left: 1px solid #C4C4C4;  
`

const TextDetail = styled.div`
  padding-left: 25px;
  margin-bottom: 40px;
`

const Text = styled.p`
  font-size: 16px;
  line-height: 28px;
`*/

/*const TextBold = styled(Text)`
  position: relative;
  font-weight: bold;
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 8px;
    left: -28px;
    width: 5px;
    height: 5px;
    background: #C4C4C4;
    border-radius: 50%;
    margin: 3px 0;

  }
`*/

/*const TextBold2 = styled(TextBold)`
&::before {
  left: -27.2px;
}
`

const SkillText = styled(Text)`
  padding-left: 25px;
  font-size: 14px;
  width: 20%;
  min-width: 110px;
`

const Dots = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin: 10px 3% 0 5%;
  width: 15%;

`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #C4C4C4;
  border-radius: 50%;  
  margin-right: 6px;
`

const GDot = styled(Dot)`
  background: #00A1AB;
`

const SkillComment = styled(SkillText)`
  width: 70%;
  max-width: 270px;
  font-weight: 500;
  padding-left: 0;
`*/

const Items = styled.div`
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
`

const Item = styled.div`
  width: 50%;
  text-align: center;
`

const IntImg = styled(Img)`
max-width: 128px;
width: 85%;
height: auto;
border-radius: 50%;
margin: 0 auto auto
`

const TextBold3 = styled.p`
  font-size: 16px;
  line-height: 28px;
  font-weight: bold;
  margin-top: 20px
`