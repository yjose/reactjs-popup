import React from 'react';
import {Link} from 'gatsby';
import img from '../../../static/logo.png';

import './index.css';

export default () => (
  <nav className="navbar navbar--light navbar--fixed-top">
    <div className="navbar__inner">
      <div className="navbar__items">
        <div
          aria-label="Navigation bar toggle"
          className="navbar__toggle"
          role="button"
          tabIndex="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            role="img"
            focusable="false">
            <title>Menu</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </div>
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
          href="https://github.com/yjose/reactjs-popup">
          GitHub
        </a>
      </div>
    </div>
  </nav>
);
