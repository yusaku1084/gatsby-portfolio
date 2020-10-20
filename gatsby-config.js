/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata :{
    title: `Yusaku Sogabe`,
    description: `曽我部祐作のポートフォリオサイト`,
    lang: `ja`,
    siteUrl: `https://yusakusogabe-gatsby-portfolio.netlify.app/`,
    locale: `ja_JP`,
    fbappid: `809110316520287`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `YusakuSogabe 曽我部祐作`,
        short_name: `YusakuSogabe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#007E86`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
}
