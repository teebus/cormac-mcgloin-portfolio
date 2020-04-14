/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import Heading from "../Heading"

// const projectInfoWrapperStyles = css`
//   margin: var(--size-10) auto;
//   max-width: 800px;
// `
const projectInfoStyles = css`
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 700px) {
    flex-flow: row nowrap;
  }
`

const projectDescriptionStyles = css`
  flex: 0 0 100%;
  margin-right: var(--size-8);
  @media (min-width: 700px) {
    flex: 0 0 calc(70% - (var(--size-8) / 2));
  }
`

const projectMetaInfoStyles = css`
  flex: 0 0 100%;
  display: flex;
  flex-flow: row nowrap;
  @media (min-width: 700px) {
    flex: 0 0 calc(30% - (var(--size-8) / 2));
  }
`

const roleLabelStyles = css`
  font-size: var(--size-2);
  margin-right: var(--size-4);
`

const roleValueStyles = css`
  font-size: var(--size-2);
  font-weight: 700;
`

const ProjectInfo = ({ title, description, role, ...rest }) => (
  <div {...rest}>
    <Heading as="h1">{title}</Heading>
    <div css={projectInfoStyles}>
      <p css={projectDescriptionStyles}>{description}</p>
      <div css={projectMetaInfoStyles}>
        <span css={roleLabelStyles}>Role:</span>
        <span css={roleValueStyles}>{role}</span>
      </div>
      {/* <div css={projectMetaInfoStyles}>Lorem</div> */}
    </div>
  </div>
)

export default ProjectInfo
