import "./App.css"
import Footer from "./components/Footer/Footer"

import Header from "./components/Header/Header"
import Home from "./pages/home/Home"
import './i18n/config';

function App() {
  return (
    <div className="container">
      <div className="content">
        <Header />

        <Home />

        <Footer />
      </div>

      {/* <div style={{ height: "100vh" }}>Portfolio</div>
      <div style={{ height: "100vh" }}>About</div>
      <div style={{ height: "100vh" }}>Contact</div> */}
    </div>
  )
}

export default App
