module.exports = {
  siteMetadata: {
    title: 'Mid-Century Modern Shop',
    description: ''
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/global/images/`,
      }
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://midmodsource.lndo.site/`,
      },
    },
  ]
};
