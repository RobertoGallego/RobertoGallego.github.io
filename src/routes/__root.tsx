import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import { ThemeProvider } from "../ThemeContext"
import { useTheme } from "../useTheme"
import "../i18n/config"
import "../App.css"


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <ThemeProvider>
      <RootContent />
    </ThemeProvider>
  )
}

function RootContent() {
  const { theme } = useTheme()

  return (
    <div className="container" data-theme={theme}>
      <Header />

      <Outlet />

      <Footer />

      <TanStackRouterDevtools />
    </div>
  )
}
