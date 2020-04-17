const {
  api: { projectId, dataset },
} = require("./portfolio-sanity-studio/sanity.json")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Playfair Display`,
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
    // `gatsby-plugin-offline`,
  ],
}
