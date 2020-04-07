/** @jsx jsx */
import { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import { css, jsx } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const elasticWrapperStyle = css`
  height: 100vh;
  width: 100%;
  background: #2f80ed;
  transform: translateX(200px);
`

const SecondPage = () => {
  let elastic = useRef(null)
  let elasticWrapper = useRef(null)

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })

    timeline
      .to(elasticWrapper, 2, {
        x: "115%",
        ease: "Power4.easeInOut",
      })
      .to(
        elastic,
        0.8,
        {
          attr: {
            d:
              "M73.637 0.5H365.137V1023.5H73.637C-172.363 777.5 295.637 222.5 73.637 0.5Z",
          },

          ease: "Elastic.easeOut",
        },
        "-=1.2"
      )
      .to(
        elastic,
        2,
        {
          attr: {
            d: "M0 0.5H291.5V1023.5H0C0.363037 774 0 256.5 0 0Z",
          },
          ease: "Elastic.easeOut",
        },
        "-=0.8"
      )
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      <div css={elasticWrapperStyle} ref={n => (elasticWrapper = n)}>
        <svg
          style={{ height: "100vh", transform: "translateX(-200px)" }}
          viewBox="0 0 400 1023"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            ref={n => (elastic = n)}
            d="M40.0656 0.5H331.566V1023.5H40.0656C216.066 527 -106.934 299 40.0656 0.5Z"
            fill="#2F80ED"
            // transform="translate(-420 0)"
          />
        </svg>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
