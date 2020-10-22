import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { css } from "@emotion/core"

const imageLinkStyles = css`
  position: fixed;
  top: 0%;
  left: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const leftTextLinkStyles = css`
  position: fixed;
  top: 0%;
  left: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  font-size: var(--size-3);
  color: #ffffff;
  mix-blend-mode: difference;
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const rightTextlinkStyles = css`
  font-size: var(--size-3);
  /* color: var(--colour-text); */
  position: fixed;
  top: 0%;
  right: 0;
  padding: var(--size-3) var(--size-1);
  z-index: 1;
  font-family: var(--font-family-heading);
  color: #ffffff;
  mix-blend-mode: difference;
  @media (min-width: 700px) {
    padding: var(--size-3) var(--size-8);
  }
`

const Header = ({
  leftText,
  rightText,
  leftTextLink = "/",
  rightTextLink = "/info",
  logoLink = "/",
  pageType,
}) => {
  const Logo = () => (
    <svg
      width="95"
      height="31"
      viewBox="0 0 95 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="var(--colour-logo)" id="logo">
        <path d="M7.77999 14.24C10.72 14.24 12.4 12.62 13.36 10.96L10.92 9.78C10.36 10.88 9.15999 11.72 7.77999 11.72C5.35999 11.72 3.59999 9.86 3.59999 7.34C3.59999 4.82 5.35999 2.96 7.77999 2.96C9.15999 2.96 10.36 3.82 10.92 4.9L13.36 3.7C12.42 2.04 10.72 0.440002 7.77999 0.440002C3.77999 0.440002 0.679993 3.24 0.679993 7.34C0.679993 11.44 3.77999 14.24 7.77999 14.24Z" />
        <path d="M23.1705 14.24C27.2105 14.24 30.1505 11.36 30.1505 7.34C30.1505 3.32 27.2105 0.440002 23.1705 0.440002C19.1505 0.440002 16.2105 3.32 16.2105 7.34C16.2105 11.36 19.1505 14.24 23.1705 14.24ZM23.1705 11.72C20.7105 11.72 19.1305 9.82 19.1305 7.34C19.1305 4.84 20.7105 2.96 23.1705 2.96C25.6305 2.96 27.2305 4.84 27.2305 7.34C27.2305 9.82 25.6305 11.72 23.1705 11.72Z" />
        <path d="M44.7434 14L41.7434 8.92C43.1834 8.58 44.6634 7.32 44.6634 4.96C44.6634 2.48 42.9634 0.660002 40.1834 0.660002H33.9434V14H36.7834V9.26H38.8634L41.4834 14H44.7434ZM39.7634 6.76H36.7834V3.16H39.7634C40.9034 3.16 41.7634 3.84 41.7634 4.96C41.7634 6.08 40.9034 6.76 39.7634 6.76Z" />
        <path d="M63.055 14V0.660002H59.055L55.815 8.72L52.575 0.660002H48.595V14H51.435V4.66L55.195 14H56.435L60.195 4.66V14H63.055Z" />
        <path d="M79.9444 14L74.8044 0.660002H71.2444L66.0844 14H69.3244L70.1644 11.74H75.8844L76.7044 14H79.9444ZM75.1044 9.24H70.9444L73.0244 3.5L75.1044 9.24Z" />
        <path d="M88.7526 14.24C91.6926 14.24 93.3726 12.62 94.3326 10.96L91.8926 9.78C91.3326 10.88 90.1326 11.72 88.7526 11.72C86.3326 11.72 84.5726 9.86 84.5726 7.34C84.5726 4.82 86.3326 2.96 88.7526 2.96C90.1326 2.96 91.3326 3.82 91.8926 4.9L94.3326 3.7C93.3926 2.04 91.6926 0.440002 88.7526 0.440002C84.7526 0.440002 81.6526 3.24 81.6526 7.34C81.6526 11.44 84.7526 14.24 88.7526 14.24Z" />
        <path d="M15.78 30V16.66H11.78L8.53999 24.72L5.29999 16.66H1.31999V30H4.15999V20.66L7.91999 30H9.15999L12.92 20.66V30H15.78Z" />
        <path d="M25.6894 30.24C28.6294 30.24 30.3094 28.62 31.2694 26.96L28.8294 25.78C28.2694 26.88 27.0694 27.72 25.6894 27.72C23.2694 27.72 21.5094 25.86 21.5094 23.34C21.5094 20.82 23.2694 18.96 25.6894 18.96C27.0694 18.96 28.2694 19.82 28.8294 20.9L31.2694 19.7C30.3294 18.04 28.6294 16.44 25.6894 16.44C21.6894 16.44 18.5894 19.24 18.5894 23.34C18.5894 27.44 21.6894 30.24 25.6894 30.24Z" />
        <path d="M40.2198 30.26C42.6398 30.26 44.5398 29.26 45.8998 27.74V22.62H39.5398V25.1H43.0598V26.7C42.5198 27.2 41.3998 27.72 40.2198 27.72C37.7998 27.72 36.0398 25.86 36.0398 23.34C36.0398 20.82 37.7998 18.96 40.2198 18.96C41.6398 18.96 42.7798 19.76 43.3798 20.7L45.7398 19.42C44.7398 17.84 42.9998 16.44 40.2198 16.44C36.3198 16.44 33.1198 19.12 33.1198 23.34C33.1198 27.54 36.3198 30.26 40.2198 30.26Z" />
        <path d="M57.4344 30V27.5H51.7944V16.66H48.9544V30H57.4344Z" />
        <path d="M65.9962 30.24C70.0362 30.24 72.9762 27.36 72.9762 23.34C72.9762 19.32 70.0362 16.44 65.9962 16.44C61.9762 16.44 59.0362 19.32 59.0362 23.34C59.0362 27.36 61.9762 30.24 65.9962 30.24ZM65.9962 27.72C63.5362 27.72 61.9562 25.82 61.9562 23.34C61.9562 20.84 63.5362 18.96 65.9962 18.96C68.4562 18.96 70.0562 20.84 70.0562 23.34C70.0562 25.82 68.4562 27.72 65.9962 27.72Z" />
        <path d="M78.6092 30V16.66H75.7692V30H78.6092Z" />
        <path d="M93.9975 30V16.66H91.1575V25.04L84.9775 16.66H82.0575V30H84.8975V21.3L91.2575 30H93.9975Z" />
      </g>
    </svg>
  )

  return (
    // <div css={headerStyles}>
    <>
      {pageType === "home" || pageType === "info" ? (
        <>
          {logoLink ? (
            <Link css={imageLinkStyles} to="/">
              {/* <img src={logo} alt="Cormac McGloin logo" /> */}
              <Logo />
            </Link>
          ) : (
            <div css={imageLinkStyles}>
              <Logo />
            </div>

            // <img src={logo} alt="Cormac McGloin logo" css={imageLinkStyles} />
          )}

          <Link css={rightTextlinkStyles} to={rightTextLink}>
            Info
          </Link>
        </>
      ) : (
        <>
          <Link css={leftTextLinkStyles} to={leftTextLink}>
            Back to projects
          </Link>

          <Link css={rightTextlinkStyles} to={rightTextLink}>
            Info
          </Link>
        </>
      )}
    </>
  )
}

export default Header
