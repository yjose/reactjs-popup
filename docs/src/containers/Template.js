import React from 'react'
import { getRouteProps } from 'react-static'
import { Helmet } from 'react-helmet'
import universal from 'react-universal-component'
import Markdown from '../components/Markdown'

import '../css/github-markdown.css'

const Loader = () => (
  <div className="example-warper">
    <div className="loader" />
  </div>
)

const Head = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
)

export default getRouteProps(({ file }) => {
  const markdown = require(`!json-loader!front-matter!../markdown/${file}`)
  const overrides = Object.assign({}, markdown.attributes.components)
  const filesName = Object.assign({}, markdown.attributes.components)
  Object.keys(overrides).map((key, index) => {
    const Example = universal(import(`../examples/${filesName[key]}`), { loading: Loader })
    overrides[key] = {
      component: Example,
    }
  })

  const { title, description } = markdown.attributes

  return (
    <div className="markdown-body">
      <Head title={title} description={description} />
      <Markdown
        className="content"
        options={{
          overrides,
        }}
      >
        {markdown.body}
      </Markdown>
      <div className="markdown-footer">
        {' '}
        built with 💚 by
        <a href="https://github.com/yjose" target="_blank">
          {' '}
          @yjose
        </a>
        <a
          className="edit"
          href={`https://github.com/yjose/reactjs-popup/tree/master/docs/src/markdown/${file}`}
        >
          EDIT THIS PAGE
        </a>
      </div>
    </div>
  )
})
