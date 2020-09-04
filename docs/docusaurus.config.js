module.exports = {
  title: 'ReactJs Popup: Modals, Tooltips and Menus, All in One ',
  tagline:
    'react-popup,react-modal,react-tooltip,tooltip,modal,react,react-menu',
  url: 'https://reactjs-popup.elazizi.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'yjose', // Usually your GitHub org/user name.
  projectName: 'reactjs-popup', // Usually your repo name.
  themeConfig: {
    //sidebarCollapsible: false,
    image:
      'https://user-images.githubusercontent.com/11137944/92184555-74556c00-ee49-11ea-81c5-eb2a0087e93a.gif',
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        '⭐️ If you like reactjs-popup, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/yjose/reactjs-popup/stargazers">GitHub!</a>  ⭐️ ',
    },
    navbar: {
      title: 'Reactjs-popup',
      logo: {
        alt: 'reactjs-logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://www.buymeacoffee.com/yjose',
          className: 'buy-me-coffee',
          position: 'right',
        },
        {
          href: 'https://github.com/yjose/reactjs-popup/stargazers',
          className: 'github-stars',
          position: 'right',
        },
        {
          href: 'https://github.com/yjose/reactjs-popup',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} reactjs-popup, Inc. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-127901499-1',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yjose/reactjs-popup/edit/master/docs/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yjose/reactjs-popup/edit/master/docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
};
