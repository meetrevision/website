// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Revision',
  tagline: 'Where knowledge and technology unite.',
  url: 'https://revi.cc',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/faq',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'Revision',
        logo: {
          alt: 'Revision Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'ReviOS',
            position: 'right',
            items: [
              {
                label: 'Downloads',
                to: '/downloads'
              },
              {
                label: 'Changelog',
                to: '/changelog'
              },
              {
                label: 'Verification',
                to: '/downloads/verification'
              },
              {
                label: 'Post-Install',
                to: '/post-install'
              },
              //
              // COMMENTED OUT DUE TO DEPRICATED FILES UNCOMMENT WHEN UPDATED
              //
              //{
              //  label: 'Workspace',
              //  to: '/workspace'
              //},
              //{
              //  label: ' • Languages',
              //  to: '/workspace/languages'
              //},
              //{
              //  label: ' • Updating',
              //  to: '/workspace/updating'
              //}
            ]
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'FAQ',
          },
          {
            to: '/blog',
            label: 'News',
            position: 'right'
          },
          {
            to: '/about',
            label: 'About',
            position: 'right'
          },
          {
            type: 'dropdown',
            label: 'Policies',
            position: 'right',
            items: [
              {
                to: '/legal',
                label: 'Legal',
              },
              {
                to: '/terms',
                label: 'Terms of Use',
              },
              {
                to: '/guidelines',
                label: 'Guidelines',
              },
              {
                to: '/credits',
                label: 'Credits',
              },
            ]
          },
          {
            href: 'https://discord.gg/962y4pU',
            position: 'right',
            label: ' Join Discord',
            className: 'fa-brands fa-discord discord',
            'aria-label': 'Community Discord',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal Notice',
            items: [
              {
                html: `
                <div>
                  <p>By downloading any of these images (ISOs), you agree to Microsoft's <a
                    href="https://www.microsoft.com/en-us/Useterms/Retail/Windows/10/UseTerms_Retail_Windows_10_English.htm"
                    target="_blank">Terms of Service</a> with respect to <em>(5.) Authorized Software and
                    Activation</em>. None of these pre-tweaked image files are pre-activated, to activate your Windows install,
                    you must use a genuine Microsoft key. </p>
                  <p>For more information, please click <a href="/legal">here</a>.</p>
                </div>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © 2019 - ${new Date().getFullYear()} | Revision.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'changelog',
        routeBasePath: '/changelog',
        path: 'changelog',
        blogTitle: 'Changelog',
        blogSidebarTitle: 'Recent changes',
        blogDescription: 'Revision Changelog',
        showReadingTime: false,
        blogSidebarCount: 'ALL',
      },
    ],
  ],
};

module.exports = config;
