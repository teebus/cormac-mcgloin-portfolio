/** @jsx jsx */
import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"
import { FadeIn, FadeInOnScroll } from "../components/animation"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProject {
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
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const listStyle = css`
  flex: 1 100%;
  max-width: 100%;

  @media (min-width: 800px) {
    flex: 1 45%;
    max-width: 45%;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Projects</h1>
    <ul
      css={css`
        list-style: none;
        display: flex;
        flex-flow: row wrap;
        align-items: space-between;
        padding: 0;
      `}
    >
      <div id="test"></div>
      <FadeIn>
        {data.allSanityProject.edges.map(({ node: project }) => (
          <li key={project.slug.current} css={listStyle}>
            <h2>
              <Link to={`/project/${project.slug.current}`}>
                {project.title}
              </Link>
            </h2>
            <Link to={`/project/${project.slug.current}`}>
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
            <p>{project.description}</p>
          </li>
        ))}
      </FadeIn>
    </ul>
  </Layout>
)

export default IndexPage
