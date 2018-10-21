/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                  }

                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allMdx.edges.forEach(async ({ node }) => {
          if (node.frontmatter.path === 'Home') {
            createPage({
              path: '/',
              component: componentWithMDXScope(
                path.resolve('./src/containers/Template.js'),
                node.code.scope
              ),
              context: {
                id: node.id,
                name: node.frontmatter.path,
              },
            })
          }
          createPage({
            path: node.frontmatter.path
              .replace(new RegExp(' ', 'g'), '-')
              .toLowerCase(),
            component: componentWithMDXScope(
              path.resolve('./src/containers/Template.js'),
              node.code.scope
            ),
            context: {
              id: node.id,
              name: node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}
