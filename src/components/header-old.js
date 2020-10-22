/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = React.forwardRef(({ siteTitle }, ref) => (
  <header ref={ref}>
    <div
      css={css`
        position: absolute;
        background: rebeccapurple;
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
))

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
