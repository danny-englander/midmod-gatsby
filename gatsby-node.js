exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(
    `query {
        products: allNodeProduct {
          edges {
            node {
              field_product_description {
                value
              }
              path {
                alias
              }
              id
            }
          }
        }
      }
    `
    )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  result.data.products.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.path.alias,
      component: require.resolve("./src/templates/d-product.js"),
      context: {
        productId: node.id,
      },
    })
  })
}
