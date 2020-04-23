/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import { jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
// import { ThemeProvider } from "theme-ui"
import DarkModeSwitch from "../components/DarkModeSwitch"

import theme from "../theme"

// import Header from "./header"
// import "./layout.css"
import BaseStyles from "./BaseStyles.js"

const Layout = ({ children, pageContext }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />

      <div
        css={{
          position: "fixed",
          bottom: "10px",
          right: "var(--size-1)",
          zIndex: "1",
        }}
      >
        <DarkModeSwitch pgaeContext={pageContext} />
      </div>

      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <div
        style={{
          margin: `0 auto`,
          position: "relative",
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          css={{
            transition: "all 0.5s",
            background: "var(--colour-page-background)",
          }}
        >
          {children}
        </main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
