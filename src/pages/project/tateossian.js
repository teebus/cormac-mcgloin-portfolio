/** @jsx jsx */
import { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../../components/layout"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"
// import styled from "@emotion/styled"
import TransitionLink from "gatsby-plugin-transition-link"
import urlBuilder from "@sanity/image-url"
import gsap from "gsap"

import ProjectInfo from "../../components/ProjectInfo"

// import { FadeIn, FadeInOnScroll } from "../components/animation"

export const query = graphql`
  query {
    sanityProject(slug: { current: { eq: "tateossian" } }) {
      title
      projectDescription
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

const projectImageStyle = theme => css`
  margin: 0 ${theme.space[4]}px;
`
const testStyle = css`
  background: #000;
`

const urlFor = source =>
  urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

export default ({ data }) => {
  const project = { ...data.sanityProject }

  const serializers = {
    types: {
      image: ({ node }) => (
        <div css={projectImageStyle}>
          <img
            sizes="(min-width: 800px) 600px, 100vw,"
            srcSet={[
              urlFor(node.asset)
                .width(1400)
                .url() + ` 1400w`,
              urlFor(node.asset)
                .width(600)
                .url() + ` 600w`,
            ]}
            src={urlFor(node.asset)
              .width(600)
              .url()}
          />
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
        />

        {/* <BlockContent
          blocks={project._rawProjectContent}
          serializers={serializers}
          css={testStyle}
        /> */}

        <TransitionLink
          to={`/`}
          exit={{
            trigger: ({ exit }) => ExitAnimation.play(),
            length: 0.3,
          }}
          entry={{
            // trigger: ({ entry, node }) => EntryAnimation.play(),
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
