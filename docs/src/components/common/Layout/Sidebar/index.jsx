import React from 'react'
import Popup from 'reactjs-popup'
import { Link } from 'gatsby'

const contentStyle = {
	background: 'rgba(255,255,255,0',
	width: 'auto',
	border: 'none',
}

const Sidebar = ({ pages }) => {
	const routes = pages
		.map(({ node }) => node.frontmatter)
		.sort((a, b) => {
			const nameA = a.position // ignore upper and lowercase
			const nameB = b.position // ignore upper and lowercase
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
	return (
      <>
        <div className="sidebar website-sidebar" key="SW">
        	<div className="sticky-sidebar">
        		<Menu routes={routes} />
        		<script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CK7D52QE&placement=react-popupelazizicom" id="_carbonads_js" />
        	</div>

        </div>
        <div className="sidebar mobile-sidebar" key="SM">
        	<Popup
        		modal
        		overlayStyle={{ background: 'rgba(255,255,255,0.98' }}
        		contentStyle={contentStyle}
        		closeOnDocumentClick={false}
        		lockScroll
        		trigger={open => <BurgerIcon open={open} />}
        	>
        		{close => <Menu routes={routes} close={close} />}
        	</Popup>
        </div>
      </>
	)
}

const Menu = ({ routes, close }) => (
	<ul className="menu">
		{routes.map((r, i) => {
			if (r) {
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
			return null
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

export default Sidebar
