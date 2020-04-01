import React from "react"
import { Controller, Scene } from "react-scrollmagic"
import { Tween } from "react-gsap"

// Animations

export const FadeIn = ({ duration = 0.5, stagger = 0.3, children }) => (
  <Tween
    duration={duration}
    stagger={stagger}
    staggerFrom={{
      css: { autoAlpha: 0, transform: "translateY(60px)" },
    }}
    ease="Power2.easeOut"
  >
    {children}
  </Tween>
)
export const FadeInFromLeft = ({ duration = 0.5, stagger = 0.3, children }) => (
  <Tween
    duration={duration}
    stagger={stagger}
    staggerFrom={{
      css: { autoAlpha: 0, transform: "translateX(60px)" },
    }}
    ease="Power2.easeOut"
  >
    {children}
  </Tween>
)

export const FadeInOnScroll = ({
  children,
  triggerElement,
  reverse,
  duration,
}) => (
  <Controller>
    <Scene
      triggerElement={triggerElement}
      indicators={true}
      duration={1}
      // offset={"300%"}
      triggerHook="onCenter"
      reverse={reverse || false}
    >
      {(progress, event) => {
        return (
          <Tween
            duration={duration || 0.5}
            stagger={0.1}
            staggerFrom={{
              css: { autoAlpha: 0, transform: "translateY(60px)" },
            }}
            ease="Power2.easeOut"
            paused
            playState={
              event.type === "enter" && event.scrollDirection === "FORWARD"
                ? "play"
                : event.type === "enter" && event.scrollDirection === "REVERSE"
                ? "reverse"
                : null
            }
          >
            {children}
          </Tween>
        )
      }}
    </Scene>
  </Controller>
)

// Animation logic

export function checkAnimationType(
  animation,
  triggerElement,
  animationReverse,
  children
) {
  switch (animation) {
    case "FadeInOnScroll":
      return (
        <FadeInOnScroll
          triggerElement={triggerElement}
          reverse={animationReverse}
        >
          {children}
        </FadeInOnScroll>
      )
    default:
      return null
  }
}

export const AnimationWrap = ({
  condition,
  wrap,
  animation,
  triggerElement,
  animationReverse,
  children,
}) =>
  condition ? (
    wrap(children, animation, triggerElement, animationReverse)
  ) : (
    <>{children}</>
  )
