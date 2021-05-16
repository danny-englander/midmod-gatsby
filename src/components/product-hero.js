import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

// Placeholder.
// const ProductLayout = () => <p>Products</p>
// Debug info below.
// const Product = (props) => {
//   <pre>{JSON.stringify(props, null, 2)}</pre>
// }

// Define the product array from the data file.
const ProductHero = ({ title, desc, imageData, ImageAlt }) => (
  <article>
    <GatsbyImage image={imageData} alt={ImageAlt} />
    <div dangerouslySetInnerHTML={{ __html: desc }} />
  </article>
)

export default ProductHero
