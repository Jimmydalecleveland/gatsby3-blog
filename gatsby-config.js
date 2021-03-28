module.exports = {
  siteMetadata: {
    siteUrl: "https://www.swashbucklingwithcode.com",
    author: "Jimmy Cleveland",
    title: 'Swashbuckling with Code',
    description:
      'A place where I can write down things I have learned for myself and others to reference',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: './src/markdown-pages/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    }
  ]
}
