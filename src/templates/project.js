/** @jsx jsx */
import { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../components/layout"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"
// import styled from "@emotion/styled"
import TransitionLink from "gatsby-plugin-transition-link"
import urlBuilder from "@sanity/image-url"
import gsap from "gsap"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import ProjectInfo from "../components/ProjectInfo"

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

import { FadeInFromLeft } from "../components/animation"

// import { FadeIn, FadeInOnScroll } from "../components/animation"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      projectDescription
      projectRole
      _rawProjectSection(resolveReferences: { maxDepth: 5 })
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
const heroStyle = css`
  width: 100%;
  height: 80vh;
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

const mask = css`
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
  background: #faf8f5;
  transform: scaleX(1);
  transform-origin: left;
  /* visibility: hidden; */
`

const urlFor = source =>
  urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

export default ({ data }) => {
  const project = { ...data.sanityProject }

  const serializers = {
    types: {
      image: ({ node }) => (
        <div css={projectImageStyle}>
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
            />
          </Zoom>

          <div css={mask}></div>
        </div>
      ),
      block: ({ children }) => (
        <div css={projectContentText}>
          <p>{children}</p>
        </div>
      ),
    },
  }

  let page = useRef(null)

  const [ExitAnimation, setExitAnimation] = useState()

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })
    setExitAnimation(timeline.to(page, 0.3, { autoAlpha: 0 }))
  }, [setExitAnimation])

  return (
    <Layout>
      <div ref={el => (page = el)}>
        <div css={heroStyle}>
          {project.projectHero && (
            // <Image
            //   fluid={[
            //     project.projectHero.asset.fluid,
            //     `sizes: (min-width: 1200px) 1680px, 100vw`,
            //   ]}
            //   alt={project.title}
            //   imgStyle={{ objectFit: "cover", objectPosition: "center center" }}
            // />

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
                    // .focalPoint(0.7, 0.5)
                    .height(1060)
                    .width(750) + ` 750w`,
                  urlFor(project._rawProjectHero)
                    .fit("crop")
                    // .focalPoint(0.7, 0.5)
                    .height(1060)
                    .width(750) + ` 750w`,
                ]}
              />

              <img
                src={urlFor(project._rawProjectHero)
                  .width(1060)
                  .height(750)
                  .fit("crop")
                  // .focalPoint(0.7, 0.5)
                  .url()}
              />
            </picture>
          )}
        </div>

        <ProjectInfo
          title={project.title}
          description={project.projectDescription}
          role={project.projectRole}
          css={projectInfoStyles}
        />

        {project._rawProjectSection &&
          project._rawProjectSection.map((project, index) => (
            <div css={projectImageStyle} key={index} id={`${project.asset.id}`}>
              <Zoom>
                <img
                  sizes="(min-width: 800px) 800px, 100vw,"
                  srcSet={[
                    urlFor(project.asset)
                      .width(1600)
                      .url() + ` 1600w`,
                    urlFor(project.asset)
                      .width(800)
                      .url() + ` 800w`,
                  ]}
                  src={urlFor(project.asset)
                    .width(800)
                    .url()}
                />
              </Zoom>
              <Controller key={index}>
                <Scene
                  triggerElement={`#${project.asset.id}`}
                  indicators={false}
                  duration={1}
                  offset={-100}
                  reverse={true}
                >
                  {(progress, event) => {
                    return (
                      <Tween
                        duration={0.5}
                        to={{ autoAlpha: 1, scaleX: 0 }}
                        ease="Power2.easeOut"
                        paused
                        playState={
                          event.type === "enter" &&
                          event.scrollDirection === "FORWARD"
                            ? "play"
                            : event.type === "enter" &&
                              event.scrollDirection === "REVERSE"
                            ? "reverse"
                            : null
                        }
                      >
                        <div css={mask}></div>
                      </Tween>
                    )
                  }}
                </Scene>
              </Controller>
            </div>
          ))}

        {/* <BlockContent
          blocks={project._rawProjectContent}
          serializers={serializers}
          css={projectContent}
          className="projectContent"
        /> */}

        <TransitionLink
          to={`/`}
          exit={{
            trigger: ({ exit }) => ExitAnimation.play(),
            length: 0.3,
          }}
          entry={{
            delay: 0.3,
          }}
          preventScrollJump
        >
          Back to projects
        </TransitionLink>
      </div>
    </Layout>
  )
}
