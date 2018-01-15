import React from 'react'
import { getRouteProps } from 'react-static'
import universal from 'react-universal-component'
import Markdown from '../components/Markdown'

import '../css/github-markdown.css'

export default getRouteProps(({ file }) => {
  const markdown = require(`!json-loader!front-matter!../markdown/${file}`)
  const overrides = Object.assign({}, markdown.attributes.components)
  const filesName = Object.assign({}, markdown.attributes.components)
  Object.keys(overrides).map((key, index) => {
    const Example = universal(import(`../examples/${filesName[key]}`))
    overrides[key] = {
      component: Example,
    }
  })

  return (
    <div className="markdown-body">
      <Markdown
        options={{
          overrides,
        }}
      >
        {markdown.body}
      </Markdown>
      <div calssName='nextLink'><span className="previous"> previous</span> <span className="next"> previews</span></div>
      <div className="markdown-footer">
        {' '}
        built with 💚 by @yjose
        <a href={`https://github/yjose/reactjs-popup/docs/src/markdown/${file}`}>EDIT THIS PAGE</a>
      </div>
    </div>
  )
})
