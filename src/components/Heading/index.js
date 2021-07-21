import React from "react"
import { css } from "@emotion/react"

const projectTitleStyle = css`
  font-family: var(--font-family-heading);
  font-size: var(--project-title);
  color: var(--colour-heading);
  margin-bottom: var(--size-1);
`

const Heading = ({ children, as: As = "h1" }) => (
  <As css={projectTitleStyle}>{children}</As>
)

export default Heading
