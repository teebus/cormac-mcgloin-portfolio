/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const projectTitleStyle = theme => css`
  font-family: var(--font-family-heading);
  font-size: var(--project-title);
  margin-bottom: var(--size-1);
`

const Heading = ({ children, as: As = "h1" }) => (
  <As css={projectTitleStyle}>{children}</As>
)

export default Heading
