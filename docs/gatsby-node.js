const path = require('path');
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const sidebar = require('./data/sidebar');

const getUrlFromPath = p => p.replace(new RegExp(' ', 'g'), '-').toLowerCase();

exports.createPages = ({graphql, actions}) => {
  const {createPage, createRedirect} = actions;
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
                    id
                    path
                    title
                    position
                    redirects
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
        const dd = sidebar.docs.reduce((a, b) => {
          if (b.children)
            return [...a, ...b.children.reduce((e, f) => [...e, f.id], [])];
          return [...a, b.id];
        }, []);

        const pages = edges.sort(
          ({node: a}, {node: b}) =>
            dd.indexOf(a.frontmatter.id) > dd.indexOf(b.frontmatter.id),
        );

        pages.forEach(async ({node}, i) => {
          const prev = i === 0 ? null : edges[i - 1].node;
          const next = i === edges.length - 1 ? null : edges[i + 1].node;
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

          if (node.frontmatter.redirects) {
            node.frontmatter.redirects.forEach(fromPath => {
              createPage({
                path: getUrlFromPath(fromPath),
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
          }
        });
      }),
    );
  });
};
