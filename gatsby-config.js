const {
  api: { projectId, dataset },
} = require("./portfolio-sanity-studio/sanity.json")

module.exports = {
  siteMetadata: {
    title: `Cormac McGloin | Product Designer`,
    description: `Product designer base in London. Helping businesses understand their customers and grow.`,
    author: `Cormac McGloin`,
    siteUrl: `https://www.cormacmcgloin.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cormac McGloin website`,
        short_name: `Cormac McGloin`,
        start_url: `/`,
        background_color: `#faf8f6`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cabin\:400,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cabin`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        token:
          "sk8a3ezCA9LB4CNA5KY169DHKJK7qCfN3jYAx5jmJ2S3p45Vkgx3hDPmXZXPKl5gOhmygHWEd3GWL73iWrJ50B5pFXcIeh2ueAlyenJWk9lilJ5Jn7B3V1ETDjN2Di91A3wkdOYche93pU390x8zMbDd0EtV0H0uCKFr8I9iiP2enOSoL8SK",
        overlayDrafts: false,
        watchMode: true,

        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        // graphqlTag: 'default',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // {
    //   resolve: "gatsby-plugin-use-dark-mode",
    //   options: {
    //     classNameDark: "darkMode",
    //     classNameLight: "lightMode",
    //     storageKey: "darkMode",
    //     minify: true,
    //   },
    // },
  ],
}
