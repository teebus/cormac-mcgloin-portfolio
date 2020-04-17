import React, { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { FadeInFromRight } from "../components/animation"
import Logo from "../images/cormac-mcgloin-logo.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Header from "../components/Header/index"

import gsap from "gsap"

import "./test.css"

export const query = graphql`
  {
    allSanityProject(sort: { fields: _updatedAt, order: DESC }) {
      edges {
        node {
          _rawProjectContent(resolveReferences: { maxDepth: 5 })
          title
          projectDescription
          slug {
            current
          }
          projectHero {
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`

const projectListWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100vh;
  // background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  /* background: #f5f5f5; */
  mix-blend-mode: difference;
  background: #faf8f6;
`

const projectListStyle = theme => css`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  text-align: left;
  margin: ${theme.space[4]}px;
  padding: 0;
  width: 100%;
  max-width: 400px;
  list-style: none;
  @media (min-width: 600px) {
    transform: translateX(-25vw);
  }
`
const projectListItemStyle = theme => css`
  flex: 1 100%;
  max-width: 100%;
  font-size: ${theme.fontSizes[6]};
  @media (min-width: 600px) {
    font-size: ${theme.fontSizes[8]};
  }
`

// const elasticWrapperStyle = css`
//   height: 100vh;
//   width: 100vw;
//   background: #f5f5f5;
//   transform: translateX(-100%);
// `

const IndexPage = ({ data }) => {
  // let elastic = useRef(null)
  let coverWrapper = useRef(null)
  let page = useRef(null)
  // let logo = useRef(null)

  const [exitAnimation, setExitAnimation] = useState()
  const [entryAnimation, setEntryAnimation] = useState()
  const [coverAnimation, setCoverAnimation] = useState()

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })

    setExitAnimation(timeline.to(page, 0.3, { autoAlpha: 0 }))
    // setEntryAnimation(timeline.to(page, 0.3, { autoAlpha: 1 }))
  }, [setExitAnimation])

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })

    setCoverAnimation(
      timeline
        .set(coverWrapper, { y: "100%" })
        .to(coverWrapper, {
          y: "0%",
          ease: "power1.easeInOut",
          duration: 0.5,
        })
        .set(page, { opacity: 0 })
        .to(coverWrapper, {
          y: "-100%",
          ease: "power1.easeIn",
          duration: 0.5,
        })
    )
  }, [setCoverAnimation])

  const homeHeader = css`
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

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Header
        ref={el => (logo = el)}
        siteTitle={data.site.siteMetadata.title}
      /> */}

      {/* <div css={homeHeader}>
        <img src={Logo} />
        <AniLink fade duration={0.5} css={infoLink} to={`/info`}>
          Info
        </AniLink> */}
      {/* <TransitionLink
          css={infoLink}
          to={`/info`}
          exit={{
            trigger: ({ exit }) => exitAnimation.play(),
            length: 0.3,
          }}
          entry={{
            // trigger: ({ entry }) => entryAnimation.play(),
            delay: 0.3,
          }}
          preventScrollJump
        >
          Info
        </TransitionLink> */}
      {/* </div> */}

      <Header text="Info" textLink="/info" />
      <div ref={el => (page = el)} css={projectListWrapperStyle}>
        <ul css={projectListStyle}>
          <div id="test"></div>
          <FadeInFromRight duration={0.4} stagger={0.1}>
            {data.allSanityProject.edges.map(({ node: project }) => (
              <li css={{ visibility: "hidden" }} key={project.slug.current}>
                <h2 css={projectListItemStyle}>
                  <TransitionLink
                    css={{ color: "var(--colour-heading)" }}
                    preventScrollJump
                    to={`/project/${project.slug.current}`}
                    exit={{
                      length: 1,
                      trigger: ({ exit }) => coverAnimation.play(),
                    }}
                    entry={{
                      delay: 0.5,
                    }}
                  >
                    {project.title}
                  </TransitionLink>
                </h2>
              </li>
            ))}
          </FadeInFromRight>
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
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
