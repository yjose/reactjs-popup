import React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live';
import {Link} from 'gatsby';
import {MDXProvider} from '@mdx-js/tag';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import {graphql} from 'gatsby';
import {Layout, SEO} from '../components/common';
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
    <div className="markdown-body">
      <div className="content">
        <MDXProvider components={{code: MyCodeComponent}}>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </MDXProvider>
        <div className="next-prev">
          {prev === null ? (
            <div />
          ) : (
            <Link className="prev" to={`/${prev.path}/`}>
              {`<-`} {prev.name}
            </Link>
          )}
          {next === null ? (
            <div />
          ) : (
            <Link className="next" to={`/${next.path}/`}>
              {next.name} {`->`}
            </Link>
          )}
        </div>
      </div>
      <div className="markdown-footer">
        {' '}
        built with 💚 by
        <a href="https:/elazizi.com" rel="noopener noreferrer" target="_blank">
          @yjose
        </a>
        <a
          className="edit"
          href="https://github.com/yjose/reactjs-popup/tree/master/docs/src/mdPages/">
          EDIT THIS PAGE
        </a>
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
