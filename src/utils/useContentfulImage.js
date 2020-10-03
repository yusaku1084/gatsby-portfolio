
import { useStaticQuery, graphql } from "gatsby"

const useContentfulImage = assetUrl => {
  const { allContentfulAsset } = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        nodes {
          file {
            url
          }
          fluid(maxWidth: 785) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  `)

  return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}

export default useContentfulImage
