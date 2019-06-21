import React from 'react';
import Popup from 'reactjs-popup';
import {StaticQuery, graphql, Link} from 'gatsby';

import data from '../../../data/sidebar';
import './index.css';

const contentStyle = {
  background: 'rgba(255,255,255,0',
  width: 'auto',
  border: 'none',
};

const Sidebar = ({pages}) => (
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

      const routes = data
        .map(r => {
          if (r.children) {
            const children = r.children
              .map(r => ({
                ...r,
                ...(frontmatters.filter(f => f.id === r.id)[0] || {}),
              }))
              .map(r => ({
                ...r,
                path:
                  r.path &&
                  `/${r.path
                    .replace(new RegExp(' ', 'g'), '-')
                    .toLowerCase()}/`,
              }));
            return {...r, children};
          }
          return {
            ...r,
            ...(frontmatters.filter(f => f.id === r.id)[0] || {}),
          };
        })
        .map(r => ({
          ...r,
          path:
            r.path &&
            `/${r.path.replace(new RegExp(' ', 'g'), '-').toLowerCase()}/`,
        }));
      console.log(routes);
      // const routes

      return (
        <>
          <div className="sidebar website-sidebar" key="SW">
            <div className="sticky-sidebar">
              <Menu routes={routes} />
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

const Menu1 = ({routes, close}) => (
  <ul className="menu">
    {routes.map((r, i) => {
      if (r) {
        return (
          <Link
            activeClassName="current"
            className="link"
            onClick={close}
            key={i}
            to={`/${r.replace(new RegExp(' ', 'g'), '-').toLowerCase()}/`}>
            {r}
          </Link>
        );
      }
      return null;
    })}
  </ul>
);

const BurgerIcon = ({open, ...props}) => (
  <div className={open ? 'burger-menu open' : 'burger-menu'} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
);

const Menu = ({routes, close}) => {
  return (
    <div className="menu">
      <ul className="menu__list">
        {routes.map((r, i) => (
          <li className="menu__list-item" key={r.id}>
            <Link
              activeClassName="menu__link--active"
              className="menu__link"
              onClick={close}
              to={r.path === undefined ? '#' : r.path}>
              {r.label}
            </Link>

            {Array.isArray(r.children) && (
              <ul className="menu__list">
                {r.children.map(l => (
                  <li className="menu__list-item" key={l.id}>
                    <Link
                      activeClassName="menu__link--active"
                      className="menu__link"
                      onClick={close}
                      key={i}
                      to={l.path}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
