const path = require("path")
const data = require("./src/data/blogs.json")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  //   console.log("#########")
  //   console.log(JSON.stringify(result))
  //   console.log("#########")

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })

  // Creating Blog Pages Automatically
  const template = path.resolve(`src/templates/blog-template.js`)

  data.forEach(blog_object => {
    var path = blog_object.id
    createPage({
      path: `/blog/${path}`,
      component: template,
      context: blog_object,
    })
  })
}
