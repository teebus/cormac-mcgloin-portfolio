import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import Sun from "../../images/dark-mode-sun.svg"
import Moon from "../../images/dark-mode-moon.svg"

const themeType = {
  dark: "darkMode",
  light: "lightMode",
}

const DarkModeSwitch = ({ pageContext }) => {
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem("theme")
      return val ? JSON.parse(val) : themeType.light
    }
    return themeType.light
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(mode))
    }
  }, [mode])

  const toggleMode = () => {
    setMode(mode === themeType.light ? themeType.dark : themeType.light)
  }

  function toggleModeKeyboard(e) {
    if (e.key === "Enter" || e.keyCode == "32") {
      setMode(mode === themeType.light ? themeType.dark : themeType.light)
    }
  }

  return (
    <>
      <Helmet>
        <body className={mode} />
      </Helmet>
      <div
        className="theme-mode"
        onClick={toggleMode}
        role="button"
        tabIndex="0"
        onKeyDown={toggleModeKeyboard}
      >
        {mode === themeType.light ? (
          <img src={Sun} alt="dark mode" />
        ) : (
          <img src={Moon} alt="light mode" />
        )}
      </div>
    </>
  )
}

export default DarkModeSwitch
