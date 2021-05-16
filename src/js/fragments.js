import { graphql } from 'gatsby';

// Custom product query fragment.
// Note gatsbyImageData(layout: FULL_WIDTH)
// is using the new gatsby-plugin-image.
export const ProductFragment = graphql`
  fragment ProductFragment on node__product {
    title
    field_product_description {
      processed
    }
    relationships {
      field_product_hero {
        field_media_image {
          alt
        }
        relationships {
          field_media_image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
