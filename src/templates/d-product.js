import React from "react"
// Import graphQL
import { graphql } from "gatsby"

// Import the component.
// This helps separate data from layout.
// import Product from "../components/c-product.js"

export const prodQuery = graphql`
  query Product($productId: String!) {
    nodeProduct(id: { eq: $productId }) {
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
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

// Debug the output using JSON.stringify.
// This gets all the data.
// const Product = (props) => <pre>{JSON.stringify(props, null, 2)}</pre>

// This pulls in our specific query above.
/**

const ProductTemplate = ({ data }) => {

  // Data "Layercake", we create an abstraction of the product
  // and pass it to a component and then the component gets props.
  // Array of items for the product.
  // These get passed to
  const product = {
    title: data.nodeProduct.title,
    desc: data.nodeProduct.field_product_description.processed,
    imageData: data.nodeProduct.relationships.field_product_hero.relationships.field_media_image.localFile.childImageSharp.fluid,
    ImageAlt: data.nodeProduct.relationships.field_product_hero.field_media_image.alt,
  }

  return <Product {...product} />;

   //
}

**/

const Product = props  => {
<pre>{JSON.stringify(props, null, 2)}</pre>
}

export default Product
