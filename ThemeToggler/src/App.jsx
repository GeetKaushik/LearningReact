import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import "./App.css"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
          <div className="w-full max-w-sm mx-auto flex justify-center mt-4">
            <ThemeBtn />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
