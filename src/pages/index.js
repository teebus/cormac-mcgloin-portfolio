/** @jsx jsx */
import { useRef, useState, useEffect } from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
// import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"
import { FadeInFromLeft } from "../components/animation"
import Header from "../components/header"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionPortal } from "gatsby-plugin-transition-link"
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
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  // background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  background: #f5f5f5;
`

const projectListStyle = theme => css`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  text-align: left;
  margin: ${theme.space[4]}px;
  padding: 0;
  width: 100%;
  max-width: 400px;
  list-style: none;
  @media (min-width: 600px) {
    transform: translateX(50%);
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

const elasticWrapperStyle = css`
  height: 100vh;
  width: 100vw;
  background: #f5f5f5;
  transform: translateX(-100%);
`

const IndexPage = ({ data }) => {
  let elastic = useRef(null)
  let elasticWrapper = useRef(null)
  let page = useRef(null)
  let logo = useRef(null)

  const [ExitAnimation, setExitAnimation] = useState()

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })

    setExitAnimation(
      timeline
        .to(logo, 1, { autoAlpha: 0 }, 0)
        .to(elasticWrapper, 0, {
          display: "block",
          autoAlpha: 1,
        })
        .to(
          elasticWrapper,
          1,
          {
            x: "155%",
            ease: "Power1.InOut",
          },
          0
        )
        .to(
          elastic,
          0.4,
          {
            attr: {
              d:
                "M73.637 0.5H365.137V1023.5H73.637C-172.363 777.5 295.637 222.5 73.637 0.5Z",
            },

            ease: "Elastic.easeInOut",
          },
          "-=0.3"
        )
        .to(page, 0.1, { autoAlpha: 0 }, "-=2")
        .to(
          elastic,
          0.5,
          {
            attr: {
              d: "M0 0.5H291.5V1023.5H0C0.363037 774 0 256.5 0 0Z",
            },
            ease: "Elastic.easeInOut",
          },
          "-=0.3"
        )
    )
  }, [setExitAnimation])

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        ref={el => (logo = el)}
        siteTitle={data.site.siteMetadata.title}
      />

      <div ref={el => (page = el)} css={projectListWrapperStyle}>
        <ul css={projectListStyle}>
          <div id="test"></div>

          <FadeInFromLeft duration={0.4} stagger={0.1}>
            {data.allSanityProject.edges.map(({ node: project }) => (
              <li css={{ visibility: "hidden" }} key={project.slug.current}>
                <h2 css={projectListItemStyle}>
                  <TransitionLink
                    preventScrollJump
                    to={`/project/${project.slug.current}`}
                    exit={{
                      length: 1.2,
                      trigger: ({ exit }) => ExitAnimation.play(),
                    }}
                    entry={{
                      delay: 0.4,
                    }}
                  >
                    {project.title}
                  </TransitionLink>
                </h2>
              </li>
            ))}
          </FadeInFromLeft>
          <TransitionPortal>
            <div css={elasticWrapperStyle} ref={n => (elasticWrapper = n)}>
              <svg
                style={{ height: "100vh", transform: "translateX(-200px)" }}
                viewBox="0 0 400 1023"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  ref={n => (elastic = n)}
                  d="M40.0656 0.5H331.566V1023.5H40.0656C216.066 527 -106.934 299 40.0656 0.5Z"
                  fill="#f5f5f5"
                />
              </svg>
            </div>
          </TransitionPortal>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
