import React, { useEffect } from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

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
      _rawPageImage(resolveReferences: { maxDepth: 5 })
      pageImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
    }
  }
`

const InfoPage = ({ data }) => {
  const infoWrapper = css`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--size-10) var(--size-1);
    @media (min-width: 1025px) {
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      padding: var(--size-10) var(--size-6);
    }
  `

  const infoText = css`
    display: flex;
    flex-flow: column wrap;
    order: 2;
    flex: 100%;
    font-size: var(--size-5);
    color: var(--colour-heading);
    margin-bottom: var(--size-10);
    line-height: var(--line-height-heading);
    @media (min-width: 1024px) {
      order: 1;
      flex: 0 0 calc(60% - (var(--size-10)) / 2);
      margin: 0 var(--size-10) 0 0;
    }
    @media (min-width: 1025px) {
      font-size: var(--size-7);
    }
  `
  const infoImageWrapperStyles = css`
    display: flex;
    order: 1;
    max-height: 50vh;
    flex: 0 0 100%;
    width: 100%;
    margin-bottom: var(--size-4);
    overflow: hidden;
    visibility: hidden;
    @media (min-width: 1024px) {
      order: 2;
      height: auto;
      flex: 0 0 calc(40% - (var(--size-10)) / 2);
      margin-bottom: 0;
    }
  `
  const infoImageStyles = css`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `

  const textLine = css`
    margin-bottom: var(--size-6);
    visibility: hidden;
  `

  const page = { ...data.sanityPage }

  useEffect(() => {
    gsap.from(".textLine", 0.8, {
      css: { autoAlpha: 0, transform: "translateY(60px)" },
      delay: 0.5,
      stagger: 0.1,
      ease: "Power4.easeOut",
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
            Hey, I’m a <strong>product designer</strong> based in&nbsp;London.
          </div>
          <div css={textLine} className="textLine">
            I help companies <strong>understand their customers</strong> and{" "}
            <strong>grow their&nbsp;products</strong>.
          </div>
          <div css={textLine} className="textLine">
            I also enjoy photography.
          </div>
        </div>

        {page.pageImage && (
          <Tween
            duration={0.8}
            from={{ autoAlpha: 0, x: "100%" }}
            ease="Power4.easeOut"
            delay={0.5}
          >
            <div css={infoImageWrapperStyles}>
              <Tween
                duration={0.8}
                from={{ x: "-100%" }}
                ease="Power4.easeOut"
                delay={0.5}
              >
                <picture>
                  <source
                    sizes="(min-width: 800px) 400px, 100vw,"
                    srcSet={[
                      urlFor(page._rawPageImage)
                        // .fit("max")
                        .width(800)
                        .url() + ` 800w`,
                      urlFor(page._rawPageImage)
                        // .fit("max")
                        .width(400)
                        .url() + ` 400w`,
                    ]}
                  />

                  <img
                    css={infoImageStyles}
                    src={
                      urlFor(page._rawPageImage)
                        // .fit("max")
                        .width(400)
                        .url() + ` 400w`
                    }
                    alt={page._rawPageImage.asset._key}
                  />
                </picture>
              </Tween>
            </div>
          </Tween>
        )}
      </div>
    </Layout>
  )
}

export default InfoPage
