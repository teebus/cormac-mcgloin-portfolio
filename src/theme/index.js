export const theme =
  // {
  //   colors: {
  //     text: "var(--colour-grey-steel)",
  //     primary: "var(--colour-brand-primary)",
  //     secondary: "black",
  //     background: "#ffffff",
  //   },
  //   buttonSize: {
  //     small: "10px",
  //   },
  // }

  {
    space: [2, 4, 8, 16, 24, 32, 48, 64, 80],
    fonts: {
      body: '"Lato", "Helvetica Neue", sans-serif',
      heading: "Source Sans Pro",
      monospace: "Menlo, monospace",
    },
    fontSizes: [16, 18, 22, 24, 28, 32, 40, 48, 80],
    smallfontSizes: [12, 14],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.625,
      heading: 1.25,
    },
    colors: {
      text: "#262630",
      white: "#ffffff",
      primary: "#6a148e",
      primaryLight: "#901fbf",
      helm: "#1D7B8A",
      greyAlabaster: "#f8f8f8",
      pageBackground: "#f9f8f4",
    },
    styles: {
      root: {
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
      },
      h1: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 5,
      },
      h2: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 4,
      },
      h3: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 3,
      },
      h4: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 2,
      },
      h5: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 1,
      },
      h6: {
        color: "text",
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: 0,
      },
      p: {
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
      },
      a: {
        color: "primary",
      },
      pre: {
        fontFamily: "monospace",
        overflowX: "auto",
        code: {
          color: "inherit",
        },
      },
      code: {
        fontFamily: "monospace",
        fontSize: "inherit",
      },
      table: {
        width: "100%",
        borderCollapse: "separate",
        borderSpacing: 0,
      },
      th: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      td: {
        textAlign: "left",
        borderBottomStyle: "solid",
      },
      img: {
        maxWidth: "100%",
      },
    },
  }

export default theme
