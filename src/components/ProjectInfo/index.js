/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import Heading from "../Heading"

const projectInfoWrapperStyles = css`
  margin: var(--size-10) auto;
  max-width: 800px;
`
const projectInfoStyles = css`
  display: flex;
`

const projectDescriptionStyles = css`
  flex: 0 1 calc(70% - (var(--size-8) / 2));
  margin-right: var(--size-8);
`

const projectMetaInfoStyles = css`
  flex: 0 0 calc(30% - (var(--size-8) / 2));
  display: flex;
  flex-flow: row nowrap;
`

const roleLabelStyles = css`
  font-size: var(--size-1);
  margin-right: var(--size-4);
`

const roleValueStyles = css`
  font-size: var(--size-1);
  font-weight: 700;
`

const ProjectInfo = ({ title, description, role }) => (
  <div css={projectInfoWrapperStyles}>
    <Heading as="h1">{title}</Heading>
    <div css={projectInfoStyles}>
      <p css={projectDescriptionStyles}>{description}</p>
      <div css={projectMetaInfoStyles}>
        <span css={roleLabelStyles}>Role</span>
        <span css={roleValueStyles}>{role}</span>
      </div>
      {/* <div css={projectMetaInfoStyles}>Lorem</div> */}
    </div>
  </div>
)

export default ProjectInfo
