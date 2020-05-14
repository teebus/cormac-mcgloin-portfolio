import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import urlBuilder from "@sanity/image-url"

import { Link } from "gatsby"

import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

const NextProject = ({
  pageContext,

  ...rest
}) => {
  const { next } = pageContext

  const urlFor = source =>
    urlBuilder({ projectId: "z8jm8zku", dataset: "production" }).image(source)

  const nextProject = css`
    position: relative;
    /* height: 300px; */
    overflow: hidden;
    max-width: 800px;
    margin: 0 var(--size-1) var(--size-8);

    @media (min-width: 700px) {
      margin: 0 var(--size-8) var(--size-8);
    }
    @media (min-width: 896px) {
      margin: 0 auto var(--size-8);
      width: 100%;
    }
  `

  const nextProjectImage = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(2px);
  `

  const nextProjectText = css`
    font-size: var(--size-3);
    font-family: var(--font-family-heading);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 400;
    letter-spacing: 2px;
    color: #ccc;
    @media (min-width: 500px) {
      font-size: var(--size-6);
    }
  `

  const NextProjectLink = styled(Link)`
    /* transition: all 0.5s; */
  `
  const NextProjectOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(23, 27, 36, 0.8);
    transform: scaleX(1);
    transition: all 0.5s;
    /* ${NextProjectLink}:hover & {
      transform: scaleX(0);
    } */
  `

  const scrollTriggerLogic = event =>
    event.type === "enter" && event.scrollDirection === "FORWARD"
      ? "play"
      : event.type === "enter" && event.scrollDirection === "REVERSE"
      ? "reverse"
      : null

  return (
    <div {...rest} id="trigger-nextProject">
      {/* {prev && (
            <Link to={`/project/${prev.slug.current}`}>Prev: {prev.title}</Link>
          )} */}
      {next && (
        <Controller>
          <Scene
            triggerElement={`#trigger-nextProject`}
            indicators={false}
            duration={1}
            offset={-350}
            reverse={false}
          >
            {(progress, event) => {
              return (
                <Tween
                  duration={0.8}
                  from={{ autoAlpha: 0, y: "-100%" }}
                  ease="Power4.easeInOut"
                  paused
                  playState={scrollTriggerLogic(event)}
                >
                  <div css={nextProject}>
                    <Controller>
                      <Scene
                        triggerElement={`#trigger-nextProject`}
                        indicators={false}
                        duration={1}
                        offset={-350}
                        reverse={false}
                      >
                        {(progress, event) => {
                          return (
                            <Tween
                              duration={0.8}
                              from={{ y: "100%" }}
                              ease="Power4.easeInOut"
                              paused
                              playState={scrollTriggerLogic(event)}
                            >
                              <div>
                                <NextProjectLink
                                  // css={nextProjectLink}
                                  to={`/project/${next.slug.current}`}
                                >
                                  <img
                                    css={nextProjectImage}
                                    sizes="(min-width: 800px) 1680px, 100vw,"
                                    srcSet={[
                                      urlFor(next._rawProjectHero)
                                        .auto("format")
                                        .width(1600)
                                        .height(600)
                                        .url() + ` 1600w`,
                                      urlFor(next._rawProjectHero)
                                        .auto("format")
                                        .width(800)
                                        .height(300)
                                        .url() + ` 800w`,
                                    ]}
                                    src={urlFor(next._rawProjectHero)
                                      .auto("format")
                                      .width(800)
                                      .height(300)
                                      .url()}
                                    alt={next.title}
                                  />

                                  <NextProjectOverlay>
                                    <span css={nextProjectText}>
                                      Next project
                                    </span>
                                  </NextProjectOverlay>
                                  {/* </Link> */}
                                </NextProjectLink>
                              </div>
                            </Tween>
                          )
                        }}
                      </Scene>
                    </Controller>
                  </div>
                </Tween>
              )
            }}
          </Scene>
        </Controller>
      )}
    </div>
  )
}

export default NextProject
