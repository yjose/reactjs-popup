import React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import {Link, graphql} from 'gatsby';
import {MDXProvider} from '@mdx-js/tag';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Popup from '../examples/reactjs-popup.es';
import Warper from '../examples/Warper';

const MyCodeComponent = ({children}) => {
  if (children.includes('react-live')) {
    return (
      <LiveProvider code={children} scope={{React, Popup, Warper}} noInline>
        <div className="example-warper">
          <LivePreview />
        </div>
        <LiveError />
        <LiveEditor />
      </LiveProvider>
    );
  }
  return (
    <LiveProvider code={children} scope={{React, Popup, Warper}} noInline>
      <LiveEditor />
    </LiveProvider>
  );
};

export default ({data: {mdx}, pageContext: {next, prev}}) => (
  <Layout>
    <SEO location={mdx.frontmatter.path}>{mdx.frontmatter.title}</SEO>
    <div className="markdown markdown-body">
      <a
        className=" edit-page"
        href="https://github.com/yjose/reactjs-popup/tree/master/docs/src/mdPages/">
        EDIT
      </a>

      <MDXProvider components={{code: MyCodeComponent}}>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </MDXProvider>
      <div className="margin-top--xl margin-bottom--lg">
        <nav className="pagination-nav">
          <div className="pagination-nav__item">
            {prev && (
              <Link className="pagination-nav__link" to={`/${prev.path}/`}>
                <h5 className="pagination-nav__link--sublabel">Previous</h5>
                <h4 className="pagination-nav__link--label">« {prev.name} </h4>
              </Link>
            )}
          </div>
          <div className="pagination-nav__item pagination-nav__item--next">
            {next && (
              <Link className="pagination-nav__link" to={`/${next.path}/`}>
                <h5 className="pagination-nav__link--sublabel">Next</h5>
                <h4 className="pagination-nav__link--label">{next.name} »</h4>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        path
        title
      }
      code {
        body
        scope
      }
    }
  }
`;
