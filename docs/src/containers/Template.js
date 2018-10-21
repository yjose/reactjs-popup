import React from 'react'
import Layout from './Layout'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Popup from '../examples/reactjs-popup.es'
import Warper from '../examples/Warper'

const MyCodeComponent = ({ children, ...props }) => {
  if (children.includes('react-live')) {
    return (
      <LiveProvider code={children} scope={{ React, Popup, Warper }} noInline>
        <div className="example-warper">
          <LivePreview />
        </div>
        <LiveError />
        <LiveEditor />
      </LiveProvider>
    )
  }
  return (
    <LiveProvider code={children} scope={{ React, Popup, Warper }} noInline>
      <LiveEditor />
    </LiveProvider>
  )
}

export default props => {
  const { children, data } = props

  return (
    <Layout>
      <div className="markdown-body">
        <div className="content">
          <MDXProvider components={{ code: MyCodeComponent }}>
            <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <div className="markdown-footer">
          {' '}
          built with 💚 by
          <a href="https:/elazizi.com" target="_blank">
            @yjose
          </a>
          <a
            className="edit"
            href={`https://github.com/yjose/reactjs-popup/tree/master/docs/src/markdown/`}
          >
            EDIT THIS PAGE
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
        scope
      }
    }
  }
`
