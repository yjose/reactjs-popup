const path = require('path');
const sidebar = require('./data/sidebar');

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
                    id
                    path
                    title
                    position
                    redirects
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

        const pages = dd.map(
          n => edges.filter(({node}) => node.frontmatter.id === n)[0],
        );

        pages.forEach(async ({node}, i) => {
          const prev = i === 0 ? null : pages[i - 1].node;
          const next = i === pages.length - 1 ? null : pages[i + 1].node;

          createPage({
            path: getUrlFromPath(node.frontmatter.path),
            component: path.resolve('./src/template/Template.js'),
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
                component: path.resolve('./src/template/Template.js'),
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
