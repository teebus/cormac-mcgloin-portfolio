/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

const Typography = theme => (
  <Global
    styles={css`
      h2 {
        font-size: 10px};
      }
    `}
  />
)

export default Typography
