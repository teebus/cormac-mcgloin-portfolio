/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const projectTitleStyle = theme => css`
  font-family: ${theme.fonts.heading};
  font-size: var(--project-title);
  margin-bottom: var(--micro-size-2);
`

const Heading = ({ children, as: As = "h1" }) => (
  <As css={projectTitleStyle}>{children}</As>
)

export default Heading
