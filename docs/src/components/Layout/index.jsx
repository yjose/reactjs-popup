import React from 'react';
import {StaticQuery, graphql} from 'gatsby';
import Sidebar from '../Sidebar';

import NavBar from '../NavBar';
import Footer from '../Footer';

// import './css/layout.css';

// import './css/sidebar.css';
import 'infima/dist/css/default/default.css';
import './index.css';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      {
        pages: allMdx(sort: {order: ASC, fields: [frontmatter___position]}) {
          edges {
            node {
              id
              frontmatter {
                path
                title
                position
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="main-container">
        <NavBar />
        <div className="main">
          <Sidebar pages={data.pages.edges} />
          {children}
          <div style={{width: '220px'}}>
            <div id="carbon_container">
              <script
                async
                type="text/javascript"
                src="//cdn.carbonads.com/carbon.js?serve=CK7D52QE&placement=react-popupelazizicom"
                id="_carbonads_js"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )}
  />
);

export default Layout;
