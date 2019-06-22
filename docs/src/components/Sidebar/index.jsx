import React from 'react';
import Popup from 'reactjs-popup';
import {StaticQuery, graphql} from 'gatsby';
import {BurgerIcon, normalizeRoutes, Menu} from './Utils';

import sidebar from '../../../data/sidebar';
import './index.css';

const contentStyle = {
  background: 'rgba(255,255,255,0',
  width: 'auto',
  border: 'none',
};

const Sidebar = () => (
  <StaticQuery
    query={graphql`
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
              }
              code {
                scope
              }
            }
          }
        }
      }
    `}
    render={({allMdx}) => {
      const frontmatters = allMdx.edges.map(
        ({node: {frontmatter}}) => frontmatter,
      );

      const routes = normalizeRoutes(sidebar.docs, frontmatters);

      return (
        <>
          <div className="sidebar website-sidebar" key="SW">
            <div className="sticky-sidebar">
              <Menu routes={routes} />
            </div>
          </div>
          <div className="sidebar mobile-sidebar" key="SM">
            <Popup
              modal
              overlayStyle={{background: 'rgba(255,255,255,0.98'}}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              lockScroll
              trigger={open => <BurgerIcon open={open} />}>
              {close => <Menu close={close} routes={routes} />}
            </Popup>
          </div>
        </>
      );
    }}
  />
);

export default Sidebar;
