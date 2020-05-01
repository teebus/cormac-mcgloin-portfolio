import React, { useEffect } from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Layout from "../components/layout"
import { css } from "@emotion/core"
import urlBuilder from "@sanity/image-url"
import SEO from "../components/seo"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import Header from "../components/Header/index"
import ProjectInfo from "../components/ProjectInfo"
import NextProject from "../components/NextProject"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      projectDescription
      projectRole
      slug {
        current
      }
      _rawProjectHero(resolveReferences: { maxDepth: 5 })
      projectHero {
        asset {
          fluid {
            ...GatsbySanityImageFluid_noBase64
          }
        }
      }
      _rawProjectContent(resolveReferences: { maxDepth: 5 })
    }
  }
`

export default ({ data, pageContext }) => {
  const project = { ...data.sanityProject }

  const urlFor = source =>
    urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

  useEffect(() => {})

  const heroStyle = css`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    * {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  `

  const projectInfoStyles = css`
    margin: var(--size-8) var(--size-1);
    max-width: 800px;
    @media (min-width: 700px) {
      margin: var(--size-10) var(--size-8);
    }
    @media (min-width: 896px) {
      margin: var(--size-10) auto;
    }
  `

  const projectImageStyle = css`
    margin: var(--size-4) var(--size-1);
    max-width: 800px;
    position: relative;
    overflow: hidden;
    text-align: center;

    @media (min-width: 700px) {
      margin: var(--size-4) var(--size-8);
    }
    @media (min-width: 896px) {
      margin: var(--size-8) auto;
    }
  `
  const projectContent = css`
    margin: 0 auto;
    /* max-width: 800px; */
  `

  const projectContentText = css`
    margin: 0 var(--size-1);
    max-width: 800px;
    @media (min-width: 700px) {
      margin: 0 auto;
    }
  `

  const projectHeaderStyles = css`
    font-size: var(--project-sub-title);
    color: var(--colour-heading);
  `

  const imageWidthCheck = ({ node }) => {
    const imageWidth = node.galleryImage.asset.metadata.dimensions.width
    // console.log(imageWidth)

    return (
      <Controller key={node._key}>
        <Scene
          triggerElement={`#trigger-${node._key}`}
          indicators={false}
          duration={1}
          offset={-200}
          reverse={false}
        >
          {(progress, event) => {
            return (
              <Tween
                duration={0.8}
                from={{ autoAlpha: 0, x: "100%" }}
                ease="Power4.easeOut"
                paused
                playState={scrollTriggerLogic(event)}
              >
                <div
                  css={projectImageStyle}
                  key={node._key}
                  id={`trigger-${node._key}`}
                >
                  <Controller key={node._key}>
                    <Scene
                      triggerElement={`#trigger-${node._key}`}
                      indicators={false}
                      duration={1}
                      offset={-200}
                      reverse={false}
                    >
                      {(progress, event) => {
                        return (
                          <Tween
                            duration={0.8}
                            from={{ x: "-100%" }}
                            ease="Power4.easeOut"
                            paused
                            playState={scrollTriggerLogic(event)}
                          >
                            <div>
                              <Zoom>
                                {imageWidth > 800 ? (
                                  <img
                                    sizes="(min-width: 800px) 1600px, 100vw,"
                                    srcSet={[
                                      urlFor(node.galleryImage.asset)
                                        .auto("format")
                                        .format("webp")
                                        .width(3200)
                                        .url() + ` 3200w`,
                                      urlFor(node.galleryImage.asset)
                                        .auto("format")
                                        .format("webp")
                                        .width(1600)
                                        .url() + ` 1600w`,
                                      urlFor(node.galleryImage.asset)
                                        .auto("format")
                                        .format("webp")
                                        .width(800)
                                        .url() + ` 800w`,
                                    ]}
                                    src={urlFor(node.galleryImage.asset)
                                      .auto("format")
                                      .format("webp")
                                      .width(800)
                                      .url()}
                                    alt={node.imageDescription}
                                  />
                                ) : (
                                  <img
                                    sizes="(min-width: 800px) 400px, 100vw,"
                                    srcSet={[
                                      urlFor(node.galleryImage.asset)
                                        .auto("format")
                                        .format("webp")
                                        .width(1600)
                                        .url() + ` 1600w`,
                                      urlFor(node.galleryImage.asset)
                                        .auto("format")
                                        .format("webp")
                                        .width(800)
                                        .url() + ` 800w`,
                                    ]}
                                    src={urlFor(node.galleryImage.asset)
                                      .auto("format")
                                      .format("webp")
                                      .width(800)
                                      .url()}
                                    alt={node.imageDescription}
                                  />
                                )}
                              </Zoom>
                            </div>
                          </Tween>
                        )
                      }}
                    </Scene>
                  </Controller>
                </div>
              </Tween>
            )
          }}
        </Scene>
      </Controller>
    )
  }

  const blockRenderer = ({ node, children }) => {
    switch (node.style) {
      case "h1":
        return (
          <div css={projectContentText}>
            <h1>{children}</h1>
          </div>
        )
      case "h2":
        return (
          <div css={projectContentText}>
            <h2 css={projectHeaderStyles}>{children}</h2>
          </div>
        )
      case "h3":
        return (
          <div css={projectContentText}>
            <h3 css={projectHeaderStyles}>{children}</h3>
          </div>
        )
      case "h4":
        return (
          <div css={projectContentText}>
            <h4 css={projectHeaderStyles}>{children}</h4>
          </div>
        )
      case "h5":
        return (
          <div css={projectContentText}>
            <h5 css={projectHeaderStyles}>{children}</h5>
          </div>
        )
      case "h6":
        return (
          <div css={projectContentText}>
            <h6 css={projectHeaderStyles}>{children}</h6>
          </div>
        )
      case "blockquote":
        return (
          <div css={projectContentText}>
            <blockquote>{children}</blockquote>
          </div>
        )
      default:
        return (
          <div css={projectContentText}>
            <p>{children}</p>
          </div>
        )
    }
  }

  const scrollTriggerLogic = event =>
    event.type === "enter" && event.scrollDirection === "FORWARD"
      ? "play"
      : event.type === "enter" && event.scrollDirection === "REVERSE"
      ? "reverse"
      : null

  return (
    <Layout>
      <SEO title={project.title} description={project.projectDescription} />
      <div
        css={{
          // mixBlendMode: "difference",
          // background: "var(--colour-page-background)",
          overflow: "hidden",
        }}
      >
        <Header
          leftText="Back to projects"
          leftTextLink="/"
          rightText="Info"
          rightTextLink="/info"
          pageType="photography"
        />
        {project.projectHero && (
          <Tween
            duration={1}
            from={{ autoAlpha: 0, y: "-100%" }}
            ease="Power4.easeOut"
          >
            <div css={heroStyle}>
              <Tween
                duration={1}
                from={{ autoAlpha: 0, y: "100%" }}
                ease="Power4.easeOut"
              >
                <div>
                  <picture>
                    <source
                      media="(min-width: 800px)"
                      srcSet={[
                        urlFor(project._rawProjectHero)
                          .auto("format")
                          .format("webp")
                          .fit("max")
                          .height(1400)
                          .width(3360) + ` 3360w`,
                        urlFor(project._rawProjectHero)
                          .auto("format")
                          .format("webp")
                          .fit("max")
                          .height(700)
                          .width(1680) + ` 1680w`,
                        urlFor(project._rawProjectHero)
                          .auto("format")
                          .format("webp")
                          .fit("max")
                          .height(900)
                          .width(600) + ` 600w`,
                      ]}
                      sizes="100vw"
                    />

                    <source
                      srcSet={[
                        urlFor(project._rawProjectHero)
                          .auto("format")
                          .format("webp")
                          .fit("crop")
                          .height(1060)
                          .width(750) + ` 750w`,
                        urlFor(project._rawProjectHero)
                          .auto("format")
                          .format("webp")
                          .fit("crop")
                          .height(1060)
                          .width(750) + ` 750w`,
                      ]}
                    />

                    <img
                      src={urlFor(project._rawProjectHero)
                        .auto("format")
                        .format("webp")
                        .width(1060)
                        .height(750)
                        .fit("crop")
                        .url()}
                      alt={project._rawProjectHero.asset.id}
                    />
                  </picture>
                </div>
              </Tween>
            </div>
          </Tween>
        )}
        <ProjectInfo
          title={project.title}
          description={project.projectDescription}
          role={project.projectRole}
          css={projectInfoStyles}
        />
        <BlockContent
          blocks={project._rawProjectContent}
          serializers={{
            types: { galleryItem: imageWidthCheck, block: blockRenderer },
          }}
          css={projectContent}
          className="projectContent"
        />
        <NextProject
          css={css`
            margin: var(--size-4) 0;
            @media (min-width: 700px) {
              margin: var(--size-11) 0;
            }
          `}
          pageContext={pageContext}
        />
      </div>
    </Layout>
  )
}
