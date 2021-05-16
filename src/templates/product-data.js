import React from "react"
import {graphql } from 'gatsby';
import "normalize.css"

// Import components.
import ProductHero from '../components/product-hero'

// Debug the output using JSON.stringify.
// const Product = props  => {
//   <pre>{JSON.stringify(props, null, 2)}</pre>
//   }

// Here we create a fragment for the product node query.
// The first few lines are derived from a custom graphQL query.
export const prodQuery = graphql`
query Product($productId: String!) {
  nodeProduct(id: {eq: $productId}) {
    ...ProductFragment
  }
}
`;

// This pulls in our specific query above.
const ProductPage = ({ data }) => {
  // Data "Layercake", we create an abstraction of the product
  // and pass it to a component and then the component gets props.
  // Array of items for the product.
  // These get passed to the layout.
  const productHero = {
    title: data.nodeProduct.title,
    desc: data.nodeProduct.field_product_description.processed,
    imageData: data.nodeProduct.relationships.field_product_hero.relationships.field_media_image.localFile.childImageSharp.gatsbyImageData,
    ImageAlt: data.nodeProduct.relationships.field_product_hero.field_media_image.alt,
  }

  // Point to the fragment.
  return <ProductHero {...productHero} />;
}

export default ProductPage
