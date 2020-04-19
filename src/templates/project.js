import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../components/layout"
import { Link } from "gatsby"

import { css } from "@emotion/core"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"
import urlBuilder from "@sanity/image-url"
import gsap from "gsap"
import SEO from "../components/seo"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import Header from "../components/HeaderProject"
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

  const projectImageStyle = theme => css`
    margin: 0 var(--size-1) var(--size-4);
    max-width: 800px;
    position: relative;
    overflow: hidden;

    @media (min-width: 700px) {
      margin: 0 var(--size-8) var(--size-4);
    }
    @media (min-width: 896px) {
      margin: 0 auto var(--size-4);
    }
  `
  const projectContent = css`
    margin: 0 auto;
    /* max-width: 800px; */
  `

  const projectContentText = css`
    margin: var(--size-8) var(--size-1);
    max-width: 800px;
    @media (min-width: 700px) {
      margin: var(--size-8) var(--size-8);
    }
    @media (min-width: 896px) {
      margin: var(--size-8) auto;
    }
  `

  const projectHeader = css`
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    mix-blend-mode: difference;
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

  const backToProjects = css`
    font-size: var(--size-3);
    color: var(--colour-white);
  `

  const infoLinkStyles = css`
    font-size: var(--size-3);
    color: var(--colour-white);
  `

  const serializers = {
    types: {
      image: ({ node }) => (
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
                                  <img
                                    sizes="(min-width: 800px) 800px, 100vw,"
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
      ),

      block: ({ node, children }) => {
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
                <h1>{children}</h1>
              </div>
            )
          case "h3":
            return (
              <div css={projectContentText}>
                <h1>{children}</h1>
              </div>
            )
          case "h4":
            return (
              <div css={projectContentText}>
                <h1>{children}</h1>
              </div>
            )
          case "h5":
            return (
              <div css={projectContentText}>
                <h1>{children}</h1>
              </div>
            )
          case "h6":
            return (
              <div css={projectContentText}>
                <h1>{children}</h1>
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
      },
    },
  }

  const urlFor = source =>
    urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

  const scrollTriggerLogic = event =>
    event.type === "enter" && event.scrollDirection === "FORWARD"
      ? "play"
      : event.type === "enter" && event.scrollDirection === "REVERSE"
      ? "reverse"
      : null

  let page = useRef(null)
  let coverWrapper = useRef(null)

  const [exitAnimation, setExitAnimation] = useState()
  const [exitCoverAnimation, setExitCoverAnimation] = useState()
  const [entryCoverAnimation, setEntryCoverAnimation] = useState()

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })
    setExitAnimation(timeline.to(page, 0.3, { autoAlpha: 0 }))

    setExitCoverAnimation(
      timeline
        // .to(page, { opacity: 0 })
        .set(coverWrapper, { y: "100%" })
        .to(coverWrapper, {
          y: "0%",
          ease: "power1.easeOut",
          duration: 0.5,
        })
        .to(coverWrapper, {
          y: "-100%",
          ease: "power1.easeIn",
          duration: 0.5,
        })
    )
    setEntryCoverAnimation(timeline.set(page, { opacity: 0 }))
  }, [setExitAnimation, setExitCoverAnimation, setEntryCoverAnimation])

  const { next } = pageContext

  return (
    <Layout>
      <SEO title={project.title} />
      <div
        css={{
          mixBlendMode: "difference",
          background: "#FAF8F6",
          overflow: "auto",
        }}
        ref={el => (page = el)}
      >
        <Header />
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
                          .fit("max")
                          .height(1400)
                          .width(3360) + ` 3360w`,
                        urlFor(project._rawProjectHero)
                          .fit("max")
                          .height(700)
                          .width(1680) + ` 1680w`,
                        urlFor(project._rawProjectHero)
                          .fit("max")
                          .height(900)
                          .width(600) + ` 600w`,
                      ]}
                      sizes="100vw"
                    />

                    <source
                      srcSet={[
                        urlFor(project._rawProjectHero)
                          .fit("crop")
                          .height(1060)
                          .width(750) + ` 750w`,
                        urlFor(project._rawProjectHero)
                          .fit("crop")
                          .height(1060)
                          .width(750) + ` 750w`,
                      ]}
                    />

                    <img
                      src={urlFor(project._rawProjectHero)
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
          serializers={serializers}
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
          exitAnimation={exitCoverAnimation}
          entryAnimation={entryCoverAnimation}
        />

        <TransitionPortal>
          <div
            ref={n => (coverWrapper = n)}
            style={{
              position: "fixed",
              background: "var(--colour-page-background)",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              transform: "translateY(100%)",
            }}
          />
        </TransitionPortal>
      </div>
    </Layout>
  )
}
