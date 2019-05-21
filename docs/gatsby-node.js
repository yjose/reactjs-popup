const path = require('path');
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');

const getUrlFromPath = p => p.replace(new RegExp(' ', 'g'), '-').toLowerCase();

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(sort: {order: ASC, fields: [frontmatter___position]}) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    position
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const {edges} = result.data.allMdx;
        console.log(edges);

        edges.forEach(async ({node}, i) => {
          const prev = i === 0 ? null : edges[i - 1].node;
          const next = i === edges.length - 1 ? null : edges[i + 1].node;
          if (node.frontmatter.path === 'Home') {
            createPage({
              path: '/',
              component: componentWithMDXScope(
                path.resolve('./src/template/Template.js'),
                node.code.scope,
              ),
              context: {
                id: node.id,
                name: node.frontmatter.path,
                prev: prev && {
                  path: getUrlFromPath(prev.frontmatter.path),
                  name: prev.frontmatter.path,
                },
                next: next && {
                  path: next && getUrlFromPath(next.frontmatter.path),
                  name: next.frontmatter.path,
                },
              },
            });
          }
          createPage({
            path: getUrlFromPath(node.frontmatter.path),

            component: componentWithMDXScope(
              path.resolve('./src/template/Template.js'),
              node.code.scope,
            ),
            context: {
              id: node.id,
              name: node.frontmatter.path,
              prev: prev && {
                path: getUrlFromPath(prev.frontmatter.path),
                name: prev.frontmatter.path,
              },
              next: next && {
                path: getUrlFromPath(next.frontmatter.path),
                name: next.frontmatter.path,
              },
            },
          });
        });
      }),
    );
  });
};
