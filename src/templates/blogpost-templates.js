import React from "react"
import Layout from "../component/layout"
import SEO from "../component/seo"
import useContentfulImage from "../utils/useContentfulImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock,faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { faChevronRight,faChevronLeft,faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { graphql,Link } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import styled from "styled-components"

export const query = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY年MM月DD日")
      publishDate
      category {
        category
        categorySlug
        id
      }
      eyecatch {
        fluid(maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
        description
        file {
          details {
            image {
              height
              width
            }
          }
          url
        }
      }
      content {
        json
      }
    }
  }
`

const options = {
  renderNode: {
    //<h2>がある時にiconを表示
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2>
        <Icon className="blogicon" icon={faCheckSquare} />
        {children}
      </h2>
    ),
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <Img 
        fluid={useContentfulImage(node.data.target.fields.file["ja-JP"].url)}
        alt={
          node.data.target.fields.description
            ? node.data.target.fields.description["ja-JP"]
            : node.data.target.fields.title["ja-JP"]
        }
        loading="eager"
        durationFadeIn={100}
      />
    ),
  },
  //改行の適用
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return[...children,index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

const BlogSpot = ({data,location,pageContext}) =>(
  <Layout>
    <SEO 
      pagetitle={data.contentfulBlogPost.title}
      pagedesc={`${documentToPlainTextString(
        data.contentfulBlogPost.content.json
      ).slice(0,70)}…`}
      pagepath={location.pathname}
      blogimg={`https:${data.contentfulBlogPost.eyecatch.file.url}`}
      pageimgw={data.contentfulBlogPost.eyecatch.file.details.image.width}
      pageimgh={data.contentfulBlogPost.eyecatch.file.details.image.height}
    />
      <div>
        <Content>
          <Container>
            <Bar>{data.contentfulBlogPost.title}</Bar>
            <Info>
              <Time dateTime={data.contentfulBlogPost.publishDate}><Icon icon={faClock} />{data.contentfulBlogPost.publishDateJP}</Time>
              <Cat className="cat">
                <Icon icon={faFolderOpen} />
                <Ul>
                  {data.contentfulBlogPost.category.map(cat =>
                    <Infoli className={cat.categorySlug} key={cat.id}>
                      <Link to={`/cat/${cat.categorySlug}`}>{cat.category}</Link>
                    </Infoli>
                  )}
                </Ul>
              </Cat>
            </Info>
            <Line />
            <Postbody>
              {documentToReactComponents(data.contentfulBlogPost.content.json,options
              )}
            </Postbody>
            <Postlink>
              {pageContext.next && (
                <li className="prev">
                  <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                    <Icon icon={faChevronLeft} />
                    <span>前の記事</span>
                  </Link>
                </li>
              )}
              {pageContext.previous && (
                <Next>
                  <Link to={`/blog/post/${pageContext.previous.slug}/`} rel="next">
                    <span>次の記事</span>
                    <Icon className="right" icon={faChevronRight} />
                  </Link>
                </Next>
              )}
            </Postlink>
          </Container>
        </Content>
      </div>
  </Layout>

)

export default BlogSpot

const Content = styled.article`
margin-top: 120px;
margin-bottom: 100px;
`
const Container = styled.div`
max-width: 1147px;
width: 84%;
margin: 0 auto;
`
const Bar = styled.h1`
font-size: 28px;
margin-bottom: 16px;
`
const Info = styled.aside`
margin-bottom: 21px;
font-size: 16px;
color: #515151;
`

const Time = styled.time`
`

const Cat = styled.div`
margin-top : 10px;
`

const Line = styled.div`
width: 100%;
border-bottom : 1px solid #515151;
margin-bottom: 2em;
`

const Ul = styled.ul`
list-style: none;
display: inline-flex;
`
const Infoli= styled.li`
color: #515151;
border: solid 1px #515151;  
margin: 0 5px;
padding: 4px 8px;
border-radius: 2px; 
`

const Postbody = styled.div`
> * {
	margin-bottom: 2em;
}

> h2{
  font-size: 20px;
  margin-top: 2.5em;
	margin-bottom: 1.5em;
}
`
const Icon = styled(FontAwesomeIcon)`
color: #515151;
margin-right: 10px;
&.blogicon{
  color: #00A1AB;
  margin-right: 15px;
}
&.right{
  margin-right: 0;
  margin-left: 10px;
}
`

const Postlink = styled.ul`
  margin-top: 4em;
	list-style: none;
	color: #515151;
	font-size: 14px;
  display: flex;
  > li{
    width: 48%;
	  display: flex;
	  align-items: center;
  }
  > a{
    display: flex;
	  align-items: center;
  }
`

const Next = styled.li`
	margin-left: auto;
	justify-content: flex-end;
`