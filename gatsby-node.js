const kebabcase = require("lodash.kebabcase")

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blog-post.js`)

  const { data } = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(post => {
    createPage({
      name: post.frontmatter.title,
      path: `/blog-posts/${kebabcase(post.frontmatter.title)}`,
      component: blogPostTemplate,
      context: {
        title: post.frontmatter.title,
      },
    })
  })
}
