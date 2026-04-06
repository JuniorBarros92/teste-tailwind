import { useState, useEffect } from "react"
import { Hero } from "./components/Hero"
import { Highlight } from "./components/Highlight"
import { Intro } from "./components/Intro"
import { NavBar } from "./components/NavBar"
import { Colors } from "./components/Colors"
import { Footer } from "./components/Footer"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-zinc-50 dark:bg-zinc-950">
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Intro />
      <Highlight />
      <Colors /> 
      <Footer /> 
    </div>
  )
}

export default App
