/** @jsx jsx */
// import React from "react"
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
      description
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid_noBase64
          }
        }
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
      <Image
        fluid={{
          ...data.sanityProject.image.asset.fluid,
          sizes: "(max-width: 800px) 100vw, 1440px",
        }}
        alt={data.sanityProject.title}
        imgStyle={{ objectFit: "cover" }}
      />
    </div>
    <h1>{data.sanityProject.title}</h1>
    <p>{data.sanityProject.description}</p>
    <AniLink fade to="/">
      Back to projects
    </AniLink>
  </Layout>
)
