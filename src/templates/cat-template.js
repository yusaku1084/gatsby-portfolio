import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../component/layout"
import SEO from "../component/seo"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import { media } from "../utils/style-utils"

export const query = graphql`
  query($catid: String!, $skip: Int!, $limit: Int!) {
    allContentfulBlogPost(sort: { order: DESC, fields:publishDate },
      skip: $skip,
      limit: $limit
      filter: { category: { elemMatch: { id: { eq: $catid } } } }
      ) {
      edges {
        node {
          title
          slug
          id
          publishDate
          publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
          category {
            category
            categorySlug
            id
          }
          eyecatch{
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`
const Blog = ({location,data,pageContext}) =>(
  <Layout>
    <SEO 
      pagetitle={`CATEGORY: ${pageContext.catname}`}
      pagedesc={`「${pageContext.catname}」カテゴリーの記事です`}
      pagepath={location.pathname}
    />
    <Content>
      <Container>
        <Bar>CATEGORY: {pageContext.catname}</Bar>
        <Post>
          {data.allContentfulBlogPost.edges.map(({node}) => (
            <PostArticle className="post" key={node.id}>
              <Link to={`/blog/post/${node.slug}/`}>
                <Postfigure>
                  <PostImg 
                  fluid={node.eyecatch.fluid} 
                  alt={node.eyecatch.description} 
                  style={{ height: "100%"}} 
                  loading="eager"
                  durationFadeIn={100}
                  />
                </Postfigure>
                <Ul>
                <Time dateTime={node.publishDate}>{node.publishDateJP}</Time>
                {node.category.map(cat => 
                  <Infoli className={cat.categorySlug} key={cat.id}>
                    <Link to={`/cat/${cat.categorySlug}`}>{cat.category}</Link>
                  </Infoli>
                )}
                </Ul>
                <Name>{node.title}</Name>
              </Link>
            </PostArticle>
          ))}
        </Post>
        <Pagenation>
          {!pageContext.isFirst && (
            <li className="prev">
              <Link to={
                pageContext.currentPage === 2
                  ? `/cat/${pageContext.catslug}`
                  : `/cat/${pageContext.catslug}/${pageContext.currentPage - 1}/`
              } rel="prev">
                <Icon icon={faChevronLeft} />
                <span>前のページ</span>
              </Link>
            </li>
          )}
          {!pageContext.isLast && (
            <Next>
              <Link to={`/cat/${pageContext.catslug}/${pageContext.currentPage + 1}/`} rel="next">
                <span>次のページ</span>
                <Icon className="right" icon={faChevronRight} />
              </Link>
            </Next>
          )}
        </Pagenation>
      </Container>
    </Content>

  </Layout>

)

export default Blog

const Content = styled.section`
margin-top: 60px;
margin-bottom: 60px;
${media.handheld768`
  margin-top: 100px;
  margin-bottom: 100px;
    `}
`
const Container = styled.div`
max-width: 1147px;
margin: 0 auto;
width: 84%;
`

const Bar = styled.h1`
color: #515151;
font-size: 22px;
margin-bottom: 21px;
${media.handheld768`
font-size: 28px;
    `}
`

const Post = styled.div`
  padding-top: 20px;
  ${media.handheld768`
  padding-top: 50px;
  display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
    `}
`

const PostArticle = styled.div`
width: 100%;
margin-bottom: 20px;
${media.handheld768`
  width: 30%;
  `}
`
const Time = styled.time`
font-size: 10px;
color: #515151;
line-height: 25px;
`

const Ul = styled.ul`
list-style: none;
display: flex;
`

const Infoli= styled.li`
font-size: 14px;
color: #515151;
border: solid 1px #515151;  
margin: 0 5px;
padding: 4px 8px;
border-radius: 2px;
`

const Postfigure = styled.figure`
max-height: 100%;
height: 150px;
width: 100%;
margin-bottom: 5px;
${media.handheld768`
  max-height: 100%;
  height: 150px;
  width: 100%;
  `}
`
const PostImg = styled(Img)`
border-radius: 5%;
`

const Name = styled.h3`
	margin-top: 10px;
	font-size: 14px;
`

const Icon = styled(FontAwesomeIcon)`
color: #515151;
margin-right: 10px;
&.right{
  margin-right: 0;
  margin-left: 10px;
}
`

const Pagenation = styled.ul`
margin-top: 1.8em;
list-style: none;
display: flex;
`

const Next = styled.li`
	margin-left: auto;
	justify-content: flex-end;
`
