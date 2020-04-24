import React, { useState } from "react"
import useDarkMode from "use-dark-mode"
import Sun from "../../images/dark-mode-sun.svg"
import Moon from "../../images/dark-mode-moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "darkMode",
  })

  const [mode, setMode] = useState(() => {
    return darkMode.value
  })

  const toggleModeKeyboard = e => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      setMode(darkMode.toggle)
    }
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
        <img src={Moon} alt="Turn on dark mode" />
      ) : (
        <img src={Sun} alt="Turn on light mode" />
      )}
    </div>
  )
}

export default DarkModeToggle
