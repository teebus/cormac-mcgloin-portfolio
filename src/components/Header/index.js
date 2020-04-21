import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from "@emotion/core"

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

const leftTextLinkStyles = css`
  position: fixed;
  top: 0%;
  left: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  font-size: var(--size-3);
  color: #ffffff;
  mix-blend-mode: difference;
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const rightTextlinkStyles = css`
  font-size: var(--size-3);
  /* color: var(--colour-text); */
  position: fixed;
  top: 0%;
  right: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  color: #ffffff;
  mix-blend-mode: difference;
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const Header = ({
  logo,
  leftText,
  rightText,
  leftTextLink = "/",
  rightTextLink = "/info",
  logoLink = "/",
  pageType = "workPage",
}) => (
  // <div css={headerStyles}>
  <>
    {pageType === "home" || pageType === "info" ? (
      <>
        {logoLink ? (
          <AniLink
            fade="true"
            duration={0.2}
            css={imageLinkStyles}
            to={logoLink}
          >
            <img src={logo} alt="Cormac McGloin logo" />
          </AniLink>
        ) : (
          <img src={logo} alt="Cormac McGloin logo" css={imageLinkStyles} />
        )}

        <AniLink
          fade="true"
          duration={0.2}
          css={rightTextlinkStyles}
          to={rightTextLink}
        >
          {rightText}
        </AniLink>
      </>
    ) : (
      <>
        <AniLink
          fade="true"
          duration={0.2}
          css={leftTextLinkStyles}
          to={leftTextLink}
        >
          {leftText}
        </AniLink>

        <AniLink
          fade="true"
          duration={0.2}
          css={rightTextlinkStyles}
          to={rightTextLink}
        >
          {rightText}
        </AniLink>
      </>
    )}
  </>
)

export default Header
