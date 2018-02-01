import React from 'react'
import { Router, Route, Switch, Link } from 'react-static'
import { Head } from 'react-static'
import NotFound from 'containers/404'
import Template from './containers/Template'
import ErrorBoundary from './components/ErrorBoundary'
import Cover from './containers/Cover'
import Sidebar from './containers/Sidebar'

import './css/normalize.css'
import './css/app.css'
import './css/examples.css'
import 'prismjs/themes/prism-solarizedlight.css'

import APPCONFIG from './config.json'

export default () => {
  const routes = Object.entries(APPCONFIG.menu).map(r => r[0])
  return (
    <ErrorBoundary>
      <Router>
        <div className="container">
          <Cover />
          <div className="main">
            <Sidebar />
            <Switch>
              {routes.map((r, i) => {
                const path = r.replace(new RegExp(' ', 'g'), '-').toLowerCase()
                return <Route key={i} path={`/${path}/`} component={Template} />
              })}
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </ErrorBoundary>
  )
}
