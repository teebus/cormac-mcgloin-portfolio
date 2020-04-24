import React from "react"
import useDarkMode from "use-dark-mode"
import Sun from "../../images/dark-mode-sun.svg"
import Moon from "../../images/dark-mode-moon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: "darkMode",
  })

  console.log(darkMode.useDarkMode)

  return (
    <div>
      {darkMode.value === true ? (
        <img src={Moon} alt="Turn on dark mode" onClick={darkMode.disable} />
      ) : (
        <img src={Sun} alt="Turn on light mode" onClick={darkMode.enable} />
      )}
    </div>
  )
}

export default DarkModeToggle
