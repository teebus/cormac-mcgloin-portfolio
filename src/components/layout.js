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

import { jsx } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"

import theme from "../theme"
import Header from "../components/Header/index"

import BaseStyles from "./BaseStyles.js"
import DarkModeToggle from "./DarkModeToggle"

const Layout = ({ children, pageContext, pageType }) => {
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
        {/* <DarkModeSwitch pageContext={pageContext} /> */}

        <DarkModeToggle />
      </div>

      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

      <div
        style={{
          margin: `0 auto`,
          position: "relative",
        }}
      >
        <main
          css={{
            transition: "all 0.5s",
            background: "var(--colour-page-background)",
          }}
        >
          <Header pageType={pageType} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
