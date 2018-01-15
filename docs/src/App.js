import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
import { Head } from 'react-static'
import NotFound from 'containers/404'
import Template from './containers/Template'
import './css/normalize.css'
import './css/app.css'
require('prismjs/themes/prism-solarizedlight.css')

import Sidebar from './containers/Sidebar'

import APPCONFIG from './config.json'

export default () => {
  const routes = Object.entries(APPCONFIG.menu).map(r => r[0])
  return (
    <Router>
      <div className="container">
        <div className="cover">
          <h1 className="title"> Reactjs-Popup </h1>
          <p className="description">
            {' '}
            A Simple React popup component.Use it as a tooltip,modal,sub-menu and match more ...
          </p>
          <div className="badges">
            <img src="https://travis-ci.org/yjose/reactjs-popup.svg?branch=master" />
            <img src="https://bettercodehub.com/edge/badge/yjose/reactjs-popup?branch=master" />
            <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
          </div>
        </div>
        <div className="main">
          <Sidebar />
          <Switch>
            {routes.map((r, i) => {
              const path = r.replace(new RegExp(' ', 'g'), '-')
              return <Route key={i} path={`/${path}/`} component={Template} />
            })}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
