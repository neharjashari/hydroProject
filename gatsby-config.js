/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random description',
    author: '@neharjashari',
    data: ['item 1', 'item 2'],
    person:{name: 'Peter', age: 32},
  },
  plugins: [`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
