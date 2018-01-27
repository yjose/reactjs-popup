import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-static'
import APPCONFIG from '../config.json'

import '../css/sidebar.css'

export default class Sidebar extends React.Component {
  render () {
    const routes = Object.entries(APPCONFIG.menu).map(r => r[0])
    return (
        <ul className="sidebar">
          {routes.map((r, i) => {
            if (r !== '') {
              return (
                <li key={i}>
                  <NavLink
                    activeClassName="current"
                    to={`/${r.replace(new RegExp(' ', 'g'), '-')}/`}
                  >
                    {r}
                  </NavLink>
                </li>
              )
            }
          })}
        </ul>
    )
  }
}
