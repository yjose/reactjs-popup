import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <div className="index-hero">
      <div className="index-hero-inner">
        <h1 className="index-hero-project-tagline">
          <span
            role="img"
            className="index-hero-logo"
            style={{
              fontSize: '200px',
            }}>
            🎀
          </span>
          React Popup Component - Modals,Tooltips and Menus —  All in one
        </h1>
        <div className="index-ctas">
          <Link className="index-ctas-get-started-button" to="/home/">
            Get Started
          </Link>

          <span className="index-ctas-github-button">
            <iframe
              src="https://ghbtns.com/github-btn.html?user=yjose&amp;repo=reactjs-popup&amp;type=star&amp;count=true&amp;size=large"
              frameBorder="0"
              scrolling="0"
              width="160"
              height="30"
              title="GitHub Stars"
            />
          </span>

          <a
            href="https://www.npmjs.com/package/reactjs-popup"
            className="index-ctas-github-button">
            <img
              src="https://img.shields.io/npm/v/reactjs-popup.svg?style=for-the-badge"
              alt="npm"
            />
          </a>
          <a
            href="http://www.npmtrends.com/reactjs-popup"
            className="index-ctas-github-button">
            <img
              src="https://img.shields.io/npm/dt/reactjs-popup.svg?style=for-the-badge"
              alt="npm trends"
            />
          </a>

          <a
            className="index-ctas-github-button"
            href="https://twitter.com/intent/tweet?text=Check%20out%20reactjs-popup%20by%20%40ElaziziYoussouf%20https%3A%2F%2Fgithub.com%2Fyjose%2Freactjs-popup%20%F0%9F%91%8D">
            <img
              src="https://img.shields.io/twitter/url/https/github.com/yjose/reactjs-popup.svg?style=social"
              alt="tweet"
            />
          </a>
        </div>
      </div>
    </div>

    <div className="section">
      <div className="container text--center margin-bottom--xl">
        <div className="row">
          <div className="col">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: '100px',
              }}>
              ⚡️
            </span>

            <h3>Supper Small</h3>
            <p className="padding-horiz--md">
              All these clocks in at around 3 kB zipped.
            </p>
          </div>
          <div className="col">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: '100px',
              }}>
              🏋️
            </span>

            <h3>All in one</h3>
            <p className="padding-horiz--md">
              Modal, Tooltip, Menu : All in one{' '}
            </p>
          </div>
          <div className="col">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: '100px',
              }}>
              💪
            </span>

            <h3>Full Control</h3>
            <p className="padding-horiz--md">
              Function as children pattern to take control over your popup
              anywhere in your code.
            </p>
          </div>
        </div>
      </div>
      <div className="container text--center">
        <div className="row">
          <div className="col col--4 col--offset-2">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: '100px',
              }}>
              💪
            </span>

            <h3>Full Control</h3>
            <p className="padding-horiz--md">
              Function as children pattern to take control over your popup
              anywhere in your code.
            </p>
          </div>
          <div className="col col--4">
            <span
              alt="Ready for Translations"
              className="featureImage"
              style={{
                fontSize: '100px',
              }}>
              💪
            </span>

            <h3>Full Control</h3>
            <p className="padding-horiz--md">
              Function as children pattern to take control over your popup
              anywhere in your code.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
