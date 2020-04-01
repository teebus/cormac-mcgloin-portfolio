/** @jsx jsx */
import { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
// import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"
import { FadeInFromLeft } from "../components/animation"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionPortal } from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from "gsap"

export const query = graphql`
  {
    allSanityProject(sort: { fields: _updatedAt, order: DESC }) {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
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
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
`

const projectListStyle = css`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  text-align: left;
  margin: 0;
  padding: 0;
  transform: translateX(50%);
  max-width: 400px;
  list-style: none;
`
const projectListItemStyle = theme => css`
  flex: 1 100%;
  max-width: 100%;
  font-size: ${theme.fontSizes[8]}px;
`

const IndexPage = ({ data }) => {
  let testing = useRef(null)

  const [interestingExitAnimation, setinterestingExitAnimation] = useState()
  const [interestingEntryAnimation, setinterestingEntryAnimation] = useState()

  const timeline = gsap.timeline({ paused: true })

  useEffect(() => {
    setinterestingExitAnimation(
      timeline.set(testing, { y: "-100%" }).to(testing, {
        y: "0%",
        ease: "power1.easeInOut",
        duration: 0.6,
      })
    )
    setinterestingEntryAnimation(
      timeline.to(testing, {
        y: "100%",
        ease: "power1.easeIn",
        duration: 0.6,
      })
    )
  }, [])

  useEffect(() => {
    setinterestingEntryAnimation(timeline.to(testing, 1, { autoAlpha: 0 }))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        // ref={el => (testing = el)}
        id="test"
        css={projectListWrapperStyle}
      >
        <ul css={projectListStyle}>
          <div id="test"></div>
          <FadeInFromLeft duration={0.7} stagger={0.2}>
            {data.allSanityProject.edges.map(({ node: project }) => (
              <li key={project.slug.current}>
                <h2 css={projectListItemStyle}>
                  <TransitionLink
                    to={`/project/${project.slug.current}`}
                    exit={{
                      trigger: ({ exit }) => interestingExitAnimation.play(),
                      length: 1.6,
                    }}
                    entry={{
                      trigger: ({ entry, node }) =>
                        interestingEntryAnimation.play(),
                      delay: 0.6,
                    }}
                  >
                    {project.title}
                  </TransitionLink>
                  {/* <AniLink fade to={`/project/${project.slug.current}`}>
                    {project.title}
                  </AniLink> */}
                </h2>
                {/* <Link to={`/project/${project.slug.current}`}>
                <Image
                  fluid={{
                    ...project.image.asset.fluid,
                    sizes: "(max-width: 800px) 100vw, 400px",
                  }}
                  alt={project.title}
                  // sizes={sizes}
                  css={{
                    height: "300px",
                  }}
                  imgStyle={{ objectPosition: "top center" }}
                />
              </Link>
              <p>{project.description}</p> */}
              </li>
            ))}
          </FadeInFromLeft>
          <TransitionPortal>
            <div
              ref={n => (testing = n)}
              style={{
                position: "fixed",
                background: "#f9f8f4",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                transform: "translateY(-100%)",
              }}
            />
          </TransitionPortal>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
