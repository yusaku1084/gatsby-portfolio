import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../component/layout"
import SEO from "../component/seo"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

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
                  <Img 
                  fluid={node.eyecatch.fluid} 
                  alt={node.eyecatch.description} 
                  style={{ height: "100%"}} 
                  loading="eager"
                  durationFadeIn={100}
                  />
                </Postfigure>
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
margin-top: 120px;
margin-bottom: 100px;
`
const Container = styled.div`
max-width: 785px;
margin: 0 auto;
`

const Bar = styled.h1`
font-size: 28px;
margin-bottom: 21px;
`

const Post = styled.div`
  display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 50px;
`

const PostArticle = styled.div`
width: 48%;
margin-bottom: 20px;
`

const Postfigure = styled.figure`
max-height: 100%;
height: 150px;
}
`
const Name = styled.h3`
	margin-top: 10px;
	font-size: 14px;
}
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