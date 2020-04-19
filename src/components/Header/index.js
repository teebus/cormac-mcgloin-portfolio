import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from "@emotion/core"
import Logo from "../../images/cormac-mcgloin-logo.svg"

const headerStyles = css`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const linkStyles = css`
  font-size: var(--size-3);
  color: var(--colour-text);
  position: fixed;
  top: 0%;
  right: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const imageLinkStyles = css`
  position: fixed;
  top: 0%;
  left: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const Header = ({ text, textLink, imageLink = null }) => (
  // <div css={headerStyles}>
  <>
    {imageLink ? (
      <AniLink css={imageLinkStyles} to={imageLink}>
        <img src={Logo} alt="Cormac McGloin logo" />
      </AniLink>
    ) : (
      <img src={Logo} alt="Cormac McGloin logo" css={imageLinkStyles} />
    )}
    <AniLink css={linkStyles} to={textLink}>
      {text}
    </AniLink>
    {/* </div> */}
  </>
)

export default Header
