import React, { useState, useCallback, useLayoutEffect } from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import urlBuilder from "@sanity/image-url"

const projectImageWrapper = css`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-90%, -50%);
  width: 100%;
  max-width: 40vw;
  height: 100%;
  max-height: 50vh;
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  transition: opacity 0.5s;
`

const projectImageWrapperActive = css`
  @media (hover: hover) and (pointer: fine) {
    opacity: 1;
  }
`
const projectImage = css`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.2s;
`

const getDimensionsObject = node => {
  const rect = node.getBoundingClientRect()
  return {
    width: rect.width,
    height: rect.height,
  }
}

const useSize = () => {
  const [dimensions, setDimensions] = useState({})
  const [node, setNode] = useState(null)

  const ref = useCallback(node => {
    setNode(node)
  }, [])

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionsObject(node))
      measure()
    }
  }, [node])

  return [ref, dimensions]
}

export default ({ image, active, imageKey, x, y }) => {
  const [ref, { width, height }] = useSize()

  const urlFor = source =>
    urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

  return (
    <div css={[projectImageWrapper, active && projectImageWrapperActive]}>
      <img
        sizes="(min-width: 800px) 1600px, 100vw"
        srcSet={[
          urlFor(image)
            .auto("format")
            .width(3200)
            .url() + ` 3200w`,
          urlFor(image)
            .auto("format")
            .width(1600)
            .url() + ` 1600w`,
          urlFor(image)
            .auto("format")
            .width(800)
            .url() + ` 800w`,
        ]}
        src={urlFor(image)
          .auto("format")
          .width(800)
          .url()}
        alt=""
        // src={image}
        css={projectImage}
        // fluid={image}
        key={imageKey}
        // style={{
        //   transform: `translate(${x - width / 2}px, ${y - height / 2}px)`,
        // }}
        ref={ref}
      />
    </div>
  )
}
