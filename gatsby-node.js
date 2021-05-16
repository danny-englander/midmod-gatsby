/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// Basic query for products.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(
    `query Product {
      allNodeProduct {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }`
    )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  result.data.allNodeProduct.nodes.forEach( product  => {
    actions.createPage({
      path: product.path.alias,
      component: require.resolve("./src/templates/product-data.js"),
      context: {
        productId: product.id,
      },
    })
  })
}
