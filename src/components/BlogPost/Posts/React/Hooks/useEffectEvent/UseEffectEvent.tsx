import { useDarkMode } from "@/hooks"
import "./useEffectEvent.css"

const UseEffectEvent = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <h1>🎯 useEffectEvent Hook</h1>
        <p className="subtitle">
          Extrae lógica no reactiva de tus efectos en una función reutilizable.
        </p>
      </header>
      
      <section className="section">
        <div className="info-box">
          <strong>⚠️ Experimental:</strong> Este hook está en desarrollo y no está disponible en versiones estables de React.
        </div>
        
        <div className="card">
          <p>
            <strong>useEffectEvent</strong> te permite extraer lógica no reactiva
            de tus efectos en una función reutilizable que puede acceder a las últimas
            props y state sin causar re-renderizados.
          </p>
        </div>
      </section>
    </div>
  )
}

export default UseEffectEvent