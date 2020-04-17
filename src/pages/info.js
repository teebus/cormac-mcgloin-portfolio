import React, { useRef, useState, useEffect } from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

import BlockContent from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"

import { css } from "@emotion/core"
import gsap from "gsap"
import { Tween } from "react-gsap"

import Header from "../components/Header/index"

export const query = graphql`
  {
    sanityPage(slug: { current: { eq: "info" } }) {
      slug {
        current
      }
      title
      _rawPageContent(resolveReferences: { maxDepth: 5 })
    }
  }
`

const InfoPage = ({ data }) => {
  const infoHeader = css`
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

  const infoLink = css`
    font-size: var(--size-3);
    color: var(--colour-text);
  `

  const infoWrapper = css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
  `

  const infoText = css`
    display: flex;
    flex-flow: column wrap;
    order: 2;
    font-size: var(--size-7);
    color: var(--colour-heading);
    color: var(--colour-heading);
    flex: 0 0 60%;
    margin-right: var(--size-10);
    @media (min-width: 700px) {
      order: 1;
    }
  `
  const infoImageStyles = css`
    display: flex;
    flex-flow: column wrap;
    order: 1;
    flex: 0 0 auto;
    @media (min-width: 700px) {
      order: 2;
    }
  `

  const textLine = css`
    margin-bottom: var(--size-6);
  `

  const page = { ...data.sanityPage }
  let infoImage = useRef(null)

  const serializers = {
    container: ({ node, children }) => (
      <div css={{ marginTop: "100px" }}>{children}</div>
    ),

    types: {
      image: ({ node, children }) => (
        <div css={infoImageStyles} ref={el => (infoImage = el)}>
          <img
            sizes="(min-width: 800px) 400px, 100vw,"
            srcSet={[
              urlFor(node.asset)
                .width(1600)
                .url() + ` 1600w`,
              urlFor(node.asset)
                .width(800)
                .url() + ` 800w`,
            ]}
            src={urlFor(node.asset)
              .width(800)
              .url()}
            alt={node.asset.id}
          />
        </div>
      ),
    },
  }

  useEffect(() => {
    gsap.from(".textLine", 0.2, {
      css: { autoAlpha: 0, transform: "translateY(60px)" },
      stagger: 0.1,
    })
  }, [])

  const urlFor = source =>
    urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

  return (
    <Layout>
      <SEO title="Info" />
      <Header text="Back to projects" imageLink="/" textLink="/" />

      <div css={infoWrapper}>
        <div css={infoText}>
          <div css={textLine} className="textLine">
            Hey, I’m a <strong>product</strong> designer based in&nbsp;London.
          </div>
          <div css={textLine} className="textLine">
            I help companies <strong>understand their customers</strong> and{" "}
            <strong>grow their&nbsp;products</strong>.
          </div>
          <div css={textLine} className="textLine">
            I enjoy photography and&nbsp;travelling.
          </div>
        </div>

        <BlockContent blocks={page._rawPageContent} serializers={serializers} />
      </div>
    </Layout>
  )
}

export default InfoPage
