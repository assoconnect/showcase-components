module.exports = {
  siteMetadata: {
    title: 'AssoConnect showcase components',
    siteUrl: 'https://www.assoconnect.com',
  },
  pathPrefix: `${__dirname}/img`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
      },
    },
  ],
}
