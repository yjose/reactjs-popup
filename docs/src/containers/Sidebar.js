import React from "react";
import { NavLink } from "react-static";
import Popup from "../../../lib/reactjs-popup.es";
import config from "../config.json";

import "../css/sidebar.css";

export default class Sidebar extends React.Component {
  render() {
    const routes = Object.entries(config.menu).map(r => r[0]);
    return [
      <div className="sidebar website-sidebar" key="SW">
        <Menu routes={routes} />
      </div>,
      <div className="sidebar mobile-sidebar" key="SM">
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          lockScroll={true}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu routes={routes} close={close} />}
        </Popup>
      </div>
    ];
  }
}

const Menu = ({ routes, close }) => (
  <ul>
    {routes.map((r, i) => {
      if (r !== "") {
        return (
          <li key={i}>
            <NavLink
              onClick={close}
              activeClassName="current"
              to={`/${r.replace(new RegExp(" ", "g"), "-").toLowerCase()}/`}
            >
              {r}
            </NavLink>
          </li>
        );
      }
    })}
  </ul>
);

const BurgerIcon = ({ open, ...props }) => (
  <div className={open ? "burger-menu open" : "burger-menu"} {...props}>
    <div className="bar1" key="b1" />
    <div className="bar2" key="b2" />
    <div className="bar3" key="b3" />
  </div>
);

const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "80%",
  border: "none"
};
