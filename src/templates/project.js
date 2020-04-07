/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import { FadeIn, FadeInOnScroll } from "../components/animation"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      projectDescription
      slug {
        current
      }
      projectHero {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      projectImages {
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
      }
    }
  }
`

const heroStyle = css`
  width: 100%;
  height: 70vh;
  overflow: hidden;
`

export default ({ data }) => (
  <Layout>
    <div css={heroStyle}>
      {data.sanityProject.projectHero && (
        <Image
          fluid={{
            ...data.sanityProject.projectHero.asset.fluid,
            sizes: "(max-width: 800px) 100vw, 1440px",
          }}
          alt={data.sanityProject.title}
          imgStyle={{ objectFit: "cover" }}
        />
      )}
    </div>
    <h1>{data.sanityProject.title}</h1>
    <p>{data.sanityProject.projectDescription}</p>

    {data.sanityProject.projectImages.map((project, index) => (
      <React.Fragment key={index}>
        <Image
          key={project.image.asset.assetId}
          fluid={{
            ...project.image.asset.fluid,
            sizes: "(max-width: 800px) 100vw, 400px",
          }}
          alt={project.description}
          // sizes={sizes}
          css={{
            height: "300px",
          }}
          imgStyle={{ objectPosition: "top center" }}
        />
        <p key={index}>{project.description}</p>
      </React.Fragment>
    ))}
    <AniLink fade to="/">
      Back to projects
    </AniLink>
  </Layout>
)
