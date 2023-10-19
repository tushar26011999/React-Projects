import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [theme, setTheme] = useState("light")

  const darkTheme = () => {
    setTheme("dark")
  }

  const lightTheme = () => {
    setTheme("light")
  }

  //Actual Change in theme

  useEffect(() => {
    const doc = document.querySelector('html').classList
    doc.remove('light', 'dark')
    doc.add(theme)
  }, [theme])

  return (
    <>
      <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <Button />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
