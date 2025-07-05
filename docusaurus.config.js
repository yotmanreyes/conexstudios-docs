// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conexstudios - Plataforma Integral de Gestión Escolar',
  tagline: 'Sistema de Gestión Escolar, Control de Estudios, Planillas Oficiales y más para instituciones educativas en Venezuela',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.conexstudios.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'conexstudios', // Usually your GitHub org/user name.
  projectName: 'conexstudios-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // SEO Configuration
  noIndex: false, // Set to true to prevent search engines from indexing

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/conexstudiosLogo.jpg',
      metadata: [
        {name: 'keywords', content: 'gestión escolar, sistema escolar, control de estudios, planillas oficiales, administración escolar, docentes, representantes, Venezuela, conexstudios, ERP académico, plataforma educativa'},
        {name: 'author', content: 'Conexstudios'},
        {name: 'robots', content: 'index, follow'},
        {name: 'googlebot', content: 'index, follow'},
        {property: 'og:type', content: 'website'},
        {property: 'og:locale', content: 'es_VE'},
        {property: 'og:site_name', content: 'Conexstudios'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:site', content: '@conexstudios'},
        {name: 'twitter:creator', content: '@conexstudios'},
        {name: 'twitter:image', content: 'img/conexstudios-og-image.jpg'},
        {property: 'og:image', content: 'img/conexstudios-og-image.jpg'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:image:alt', content: 'Conexstudios - Plataforma Integral de Gestión Escolar'}
      ],
      navbar: {
        title: 'Conexstudios',
        logo: {
          alt: 'Conexstudios Logo',
          src: 'img/conexstudiosLogo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://api.conexstudios.com/docs',
            label: 'API Docs',
            position: 'right',
          },
          {
            href: 'https://api.conexstudios.com/reference',
            label: 'API Reference',
            position: 'right',
          },
          {
            href: 'https://conexstudios.com',
            label: 'Web Oficial',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Conexstudios',
            items: [
              {
                label: 'Web Oficial',
                href: 'https://conexstudios.com',
              },
              {
                label: 'API Docs',
                href: 'https://api.conexstudios.com/docs',
              },
              {
                label: 'API Reference',
                href: 'https://api.conexstudios.com/reference',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/conexstudios',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/conexstudios',
              },
              {
                label: 'Contacto',
                href: 'mailto:info@conexstudios.com',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Conexstudios. Todos los derechos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
