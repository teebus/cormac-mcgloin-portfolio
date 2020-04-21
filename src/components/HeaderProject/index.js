import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from "@emotion/core"

const infoLinkStyles = css`
  font-size: var(--size-3);
  color: var(--colour-text);
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

const backToProjectsStyles = css`
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

const HeaderProject = () => (
  <>
    <AniLink fade="true" duration={0.2} css={backToProjectsStyles} to="/">
      Back to projects
    </AniLink>

    <Link fade="true" duration={0.2} css={infoLinkStyles} to="/info">
      Info
    </Link>
  </>
)

export default HeaderProject
