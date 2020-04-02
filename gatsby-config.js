module.exports = {
  siteMetadata: {
    title: 'AssoConnect',
    siteUrl: 'https://www.assoconnect.com',
  },
  pathPrefix: `${__dirname}/img`,
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-remove-trailing-slashes`,
    'gatsby-plugin-polyfill-io',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-K85KS29',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AssoConnect',
        short_name: 'AssoConnect',
        start_url: '/',
        background_color: '#316BF2',
        theme_color: '#316BF2',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mixpanel',
      options: {
        apiToken: '26d6b1adb7954aa17922156935ce5ada', // required
        pageViews: 'all',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            disallow: [
              '/services',
              '/infos',
              '/mentions-legales',
              '/cguv',
              '/plateforme',
              '/blocage',
              '/tableau-comparatif-logiciel-association',
            ],
            allow: '/infos/smoney',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [
          '/tests/*',
          '/mentions-legales',
          '/infos/cookie',
          '/cguv',
          '/infos/prelevement',
          '/tableau-comparatif-logiciel-association',
        ],
      },
    },
  ],
}
