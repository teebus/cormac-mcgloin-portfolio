import React, { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import Sun from "../../images/dark-mode-sun.svg"
import Moon from "../../images/dark-mode-moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "darkMode",
    classNameLight: "lightMode",
  })

  const toggleModeKeyboard = e => {
    if (e.keyCode === 13) darkMode.toggle()
  }

  return (
    <div
      onClick={darkMode.toggle}
      onKeyDown={toggleModeKeyboard}
      role="button"
      tabIndex="0"
      style={{ cursor: "pointer" }}
    >
      {darkMode.value === true ? (
        <img src={Moon} alt="Turn on light mode" />
      ) : (
        <img src={Sun} alt="Turn on dark mode" />
      )}
    </div>
  )
}

export default DarkModeToggle
