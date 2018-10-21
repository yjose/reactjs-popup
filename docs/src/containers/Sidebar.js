import React from 'react'
import Popup from 'reactjs-popup'
import { Link } from 'gatsby'

import '../css/sidebar.css'

export default class Sidebar extends React.Component {
  render() {
    const { pages } = this.props
    const routes = pages
      .map(({ node }) => node.frontmatter)
      .sort((a, b) => {
        var nameA = a.position // ignore upper and lowercase
        var nameB = b.position // ignore upper and lowercase
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        // names must be equal
        return 0
      })
      .map(r => r.path)

    return [
      <div className="sidebar website-sidebar" key="SW">
        <Menu routes={routes} />
      </div>,
      <div className="sidebar mobile-sidebar" key="SM">
        <Popup
          modal
          overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          lockScroll={true}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu routes={routes} close={close} />}
        </Popup>
      </div>,
    ]
  }
}

const Menu = ({ routes, close }) => (
  <ul>
    {routes.map((r, i) => {
      if (!!r) {
        return (
          <Link
            activeClassName="current"
            className="link"
            onClick={close}
            key={i}
            to={`/${r.replace(new RegExp(' ', 'g'), '-').toLowerCase()}/`}
          >
            {r}
          </Link>
        )
      }
    })}
  </ul>
)

const BurgerIcon = ({ open, ...props }) => (
  <div className={open ? 'burger-menu open' : 'burger-menu'} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
)

const contentStyle = {
  background: 'rgba(255,255,255,0',
  width: '80%',
  border: 'none',
}
