/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = (props) => {

    const data = useStaticQuery(graphql`
    query {
      site {
          siteMetadata {
              title
              lang
              description
              siteUrl
              locale
              fbappid
          }
      }
    }
  `)

    const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

    const description = props.pagedesc || data.site.siteMetadata.description

    const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl

    const imgurl = props.pageimg
    ? `${data.site.siteMetadata.siteUrl}${props.pageimg}`
    : props.blogimg || `${data.site.siteMetadata.siteUrl}/thumb.jpg`

    const imgw = props.pageimgw || 1280

    const imgh = props.pageimgh || 640

    return(
        <Helmet>
            <html lang={data.site.siteMetadata.lang} />
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel="canonical" href={url} />

            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:url" content="website" />
            <meta property="og:locale" content={data.site.siteMetadata.locale} />
            <meta property="og:fbappid" content={data.site.siteMetadata.fbappid} />

            <meta property="og:image" content={imgurl} />
            <meta property="og:imagewidth" content={imgw} />
            <meta property="og:imageheight" cotent={imgh} />

            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    )

}

export default SEO


