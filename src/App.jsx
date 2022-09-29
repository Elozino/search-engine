import { useContext } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RouteApp from './components/Routes'
import { ContextApp } from "./context/ContextAPI"


function App() {
  const { darkTheme, setDarkTheme } = useContext(ContextApp)
  return (
    <main className={darkTheme ? "dark" : ""}>
      <div className="flex flex-col justify-between min-h-screen dark:bg-gray-600">
        <Navbar
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <RouteApp />
        <Footer />
      </div>
    </main>
  )
}

export default App
