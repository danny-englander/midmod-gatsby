import React from "react"
import {graphql } from 'gatsby';

// Debug the output using JSON.stringify.
const Product = (props) => <pre>{JSON.stringify(props, null, 2)}</pre>

export const prodQuery = graphql`
query Product($productId: String!) {
  nodeProduct(id: {eq: $productId}) {
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
                fluid {
                   ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}
`;


export default Product
