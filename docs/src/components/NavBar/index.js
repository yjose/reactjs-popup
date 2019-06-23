import React from 'react';
import {Link} from 'gatsby';
import img from '../../../static/logo.png';

import './index.css';

export default () => (
  <nav className="navbar navbar--light navbar--fixed-top">
    <div className="navbar__inner">
      <div className="navbar__items">
        <Link aria-current="page" className="navbar__brand" to="/">
          <img role="img" className="navbar__logo" src={img} />

          <strong>Reactjs-Popup</strong>
        </Link>
        <Link
          className="navbar__item navbar__link"
          label="Docs"
          position="left"
          to="/home/">
          Docs
        </Link>

        <a
          className="navbar__item navbar__link"
          label="GitHub"
          position="left"
          target="_blank"
          href="https://github.com/yjose/reactjs-popup">
          GitHub
        </a>
      </div>
    </div>
  </nav>
);
