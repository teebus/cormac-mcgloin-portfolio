const {
  api: { projectId, dataset },
} = require("./portfolio-sanity-studio/sanity.json")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cormac McGloin - Product Designer`,
    description: `Product designer based in London, helping businesses understand their customers and improve their products.`,
    author: `Cormac McGloin`,
    siteUrl: `https://www.cormacmcgloin.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-48570651-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 1,
      },
    },
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
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Cabin\:400,700`, `Crimson Text\:400,700`],
    //     display: "swap",
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Cabin`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     google: {
    //       families: ["Cabin:400,700", "Crimson Text:400,700"],
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        token: process.env.SANITY_TOKEN,
        overlayDrafts: process.env.OVERLAY_DRAFTS,
        watchMode: process.env.WATCH_MODE,

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
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "darkMode",
        classNameLight: "lightMode",
        storageKey: "darkMode",
        minify: true,
      },
    },
  ],
}
