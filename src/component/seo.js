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
          }
      }
    }
  `)

    const title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

    const description = props.pagedesc || data.site.siteMetadata.description

    return(
        <Helmet>
            <html lang={data.site.siteMetadata.lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Helmet>
    )

}

export default SEO


