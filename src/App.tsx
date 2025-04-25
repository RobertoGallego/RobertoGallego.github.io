import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./pages/home/Home"
import "./i18n/config"
import { ThemeProvider } from "./ThemeContext"
import { useTheme } from "./useTheme"

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const { theme } = useTheme()

  return (
    <div className="container" data-theme={theme}>
      <Header />

      <Home />
      
      <Footer />
    </div>
  )
}

export default App
