import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { FadeInFromRight } from "../components/animation"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"
import HomeImages from "../components/HomeImages"

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
          _rawProjectHero(resolveReferences: { maxDepth: 5 })
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
  min-height: 100vh;
  /* background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%); */
  /* mix-blend-mode: difference; */
  /* background: var(--colour-page-background); */
  /* padding: var(--size-10) 0; */
`

// const projectListItemActiveStyle = css`
//   color: #ff0000;
//   &:hover {
//     opacity: 1;
//   }
// `

const ProjectListItemStyle = styled(TransitionLink)`
  flex: 1 100%;
  max-width: 100%;
  font-size: var(--size-6);
  color: #ccc;
  opacity: 1;
  transition: opacity 0.5s;
  margin: 0 var(--size-2);

  @media (min-width: 600px) {
    font-size: var(--size-9);
  }
`

const ProjectListStyle = styled.ul`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  text-align: right;
  margin: var(--size-4) auto;
  padding: 0;
  width: 100%;
  max-width: 80vw;
  list-style: none;
  z-index: 2;
  font-weight: 400;
  mix-blend-mode: difference;

  & > li ${ProjectListItemStyle} {
    font-weight: 400;
    /* color: #666; */
  }

  @media (min-width: 600px) {
    /* transform: translateX(-25vw); */
  }

  &:hover ${ProjectListItemStyle} {
    opacity: 0.3;
  }
  &:hover ${ProjectListItemStyle}:hover {
    opacity: 1;
  }
`

const Divider = styled.div`
  font-size: var(--size-8);
  color: var(--colour-heading);
  margin-bottom: var(--size-2);
`

const projectImageWrapper = css`
  position: fixed !important;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  width: 100%;
  max-width: 70vw;
  height: 100%;
  max-height: 50vh;
  opacity: 0;
  z-index: 1;
  pointer-events: none;
  transition: opacity 0.5s;
`
const projectImageWrapperActive = css`
  opacity: 1;
`
const projectImage = css`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 100%;
  height: auto;
`

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = event => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)

    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return mousePosition
}

const IndexPage = ({ data }) => {
  const pageType = "home"

  let divWrapper = useRef([])
  divWrapper.current = []

  let coverWrapper = useRef(null)
  // let page = useRef(null)

  const [coverAnimation, setCoverAnimation] = useState()
  const [coverAnimationPhotography, setCoverAnimationPhotography] = useState()

  const [activeIndex, setActiveIndex] = useState(-1)

  const { x, y } = useMousePosition()

  // console.log(x, y)

  useEffect(() => {
    // console.log(divWrapper.current)

    gsap.from(divWrapper.current, {
      autoAlpha: 0,
      transform: "translateY(30px)",
      ease: "power4.easeOut",
      duration: 0.6,
      stagger: 0.1,
    })
  }, [])

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })

    setCoverAnimation(
      timeline
        .to(coverWrapper, {
          y: "0%",
          ease: "power4.easeOut",
          duration: 0.5,
        })

        .to(
          coverWrapper,
          {
            y: "100%",
            ease: "power4.easeIn",
            duration: 0.5,
          },
          "+=0.5"
        )
    )
  }, [setCoverAnimation])

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })
    setCoverAnimationPhotography(
      timeline
        .set(coverWrapper, { y: "100%" })
        .to(coverWrapper, {
          y: "0%",
          ease: "power4.easeOut",
          duration: 0.5,
        })

        .to(
          coverWrapper,
          {
            y: "-100%",
            ease: "power4.easeIn",
            duration: 0.5,
          },
          "+=0.5"
        )
    )
  }, [setCoverAnimationPhotography])

  let addToRefs = el => {
    if (el && !divWrapper.current.includes(el)) {
      divWrapper.current.push(el)
    }
  }

  return (
    <Layout pageType={pageType}>
      <SEO description="Product designer based in London, helping businesses understand their customers and improve their products." />

      <div css={projectListWrapperStyle}>
        <ProjectListStyle>
          {data.allSanityProject.edges.map(({ node: project }, index) => {
            return (
              <>
                <li
                  ref={addToRefs}
                  css={css`
                    visibility: hidden;
                    display: flex;
                    align-items: center;
                  `}
                  key={project.slug.current}
                >
                  <h2 key={project.slug.current}>
                    <ProjectListItemStyle
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(-1)}
                      index={index}
                      preventScrollJump
                      key={project.slug.current}
                      to={`/project/${project.slug.current}`}
                      exit={{
                        length: 2,
                        trigger: ({ exit }) => coverAnimation.play(),
                      }}
                      entry={{
                        delay: 0.5,
                        // length: 1,
                      }}
                    >
                      {project.title}
                    </ProjectListItemStyle>
                  </h2>
                  <Divider>/</Divider>
                </li>
              </>
            )
          })}

          <li css={{ visibility: "hidden" }} ref={addToRefs}>
            <h2>
              <ProjectListItemStyle
                preventScrollJump
                to="/photography"
                exit={{
                  length: 2,
                  trigger: ({ exit }) => coverAnimationPhotography.play(),
                }}
                entry={{
                  delay: 0.5,
                }}
              >
                Photography
              </ProjectListItemStyle>
            </h2>
          </li>

          <TransitionPortal>
            <div
              ref={n => (coverWrapper = n)}
              style={{
                position: "fixed",
                background: "var(--colour-animated-cover)",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: "100",
                transform: "translateY(-100%)",
              }}
            />
          </TransitionPortal>
        </ProjectListStyle>

        {data.allSanityProject.edges.map(({ node: project }, index) => {
          const isActive = index === activeIndex
          const xPos = x
          const yPos = y

          const image = project._rawProjectHero.asset

          return (
            <HomeImages
              image={image}
              // key={project.slug.current}
              imageKey={project.slug.current}
              active={isActive}
              x={xPos}
              y={yPos}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
