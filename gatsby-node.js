/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityProject(sort: { fields: _updatedAt, order: DESC }) {
        edges {
          node {
            slug {
              current
            }
            title
          }
        }
      }
    }
  `)

  const projects = result.data.allSanityProject.edges

  projects.forEach(({ node }, index) => {
    actions.createPage({
      path: `/project/${node.slug.current}`,
      component: path.resolve("./src/templates/project.js"),
      context: {
        slug: node.slug.current,
        prev: index === 0 ? null : projects[index - 1].node,
        next: index === projects.length - 1 ? null : projects[index + 1].node,
      },
    })
  })
}
