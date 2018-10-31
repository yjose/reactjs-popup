import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Cover from './Cover'
import Sidebar from './Sidebar'
import './css/layout.css'
import './css/app.css'
import './css/examples.css'
import './css/sidebar.css'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`{
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

export { Layout }
