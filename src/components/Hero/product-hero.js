import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import ProductTitle from '../Title/product-title'

// Debug info below.
// const Product = (props) => {
//   <pre>{JSON.stringify(props, null, 2)}</pre>
// }

// ... Or an example of a placeholder.
// const ProductLayout = () => <p>Products</p>

// Define the product array from the data file.
const ProductHero = ({ title, desc, imageData, ImageAlt }) => (
  <article>
    <ProductTitle></ProductTitle>
    <GatsbyImage image={imageData} alt={ImageAlt} />
    <div className="foo" dangerouslySetInnerHTML={{ __html: desc }} />
  </article>
)

export default ProductHero
