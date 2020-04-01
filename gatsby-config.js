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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Source Sans Pro",
            variants: ["400", "700"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "z8jm8zku",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token:
          "skmh9B1h7bMrsFR3wTJWKi3kexpZZ34CM4tFikOvRumg2FqAUl0qehlAQxXZMivVo6QH1bYT6tPohkDa1XcotNepFWcifddEI46Y97FFGLS8ALznxQhZy36ZK5IZqKnEg8r3Ork7CZp3KiKrHypKSLXn5PMdAc68lUauPrd8P0HhqGHuUrnm",

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
