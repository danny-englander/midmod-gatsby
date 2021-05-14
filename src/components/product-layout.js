import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

// Placeholder.
// const ProductLayout = () => <p>Products</p>

// Debug info below.
// const Product = (props) => {
//   <pre>{JSON.stringify(props, null, 2)}</pre>
// }

const Product = ({ title, desc, imageData, ImageAlt }) => (
  <article>
    <h1>{title}</h1>
    <GatsbyImage image={imageData} alt={ImageAlt} />
    <div dangerouslySetInnerHTML={{ __html: desc }} />
  </article>
)

export default Product
