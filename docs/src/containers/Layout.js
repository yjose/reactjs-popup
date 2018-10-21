import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Cover from './Cover'
import Sidebar from './Sidebar'

import '../css/layout.css'
import '../css/app.css'
import '../css/examples.css'
import '../css/sidebar.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleRoot {
            site {
              siteMetadata {
                title
              }
            }
            pages: allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    position
                    path
                    title
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Template for creating design system documentatation',
                },
                {
                  name: 'keywords',
                  content: 'design system, style guide, documentation',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <div className="container">
              <Cover />
              <div className="main">
                <Sidebar pages={data.pages.edges} />
                {children}
              </div>
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
