// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReplMC',
  tagline: 'Friends of Replit Minecraft Servers',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://replmc.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DillonB07', // Usually your GitHub org/user name.
  projectName: 'ReplMC-Site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DillonB07/ReplMC-Site/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/DillonB07/ReplMC-Site/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ReplMC',
        logo: {
          alt: 'Friends of Replit Logo',
          src: 'img/logo.gif',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebar',
            position: 'left',
            label: 'Wiki',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/DillonB07/ReplMC-Site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modded SMP',
            items: [
              {
                label: 'Get Started',
                to: '/docs/category/modded-smp',
              },
              {
                label: 'Rules',
                to: '/docs/modded/rules',
              },
              {
                label: 'FAQ',
                to: '/docs/modded/faq',
              }
            ],
          },
          {
            title: 'Vanilla-esque SMP',
            items: [
              {
                label: 'Get Started',
                to: '/docs/category/smp',
              },
              {
                label: 'Rules',
                to: '/docs/smp/rules',
              },
              {
                label: 'FAQ',
                to: '/docs/smp/faq',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/friendsofreplit',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DillonB07/ReplMC-Site',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Friends of Replit. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
