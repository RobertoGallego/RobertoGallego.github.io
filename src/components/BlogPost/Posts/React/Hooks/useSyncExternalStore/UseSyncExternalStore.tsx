import { useDarkMode } from "@/hooks"
import "./useSyncExternalStore.css"

const UseSyncExternalStore = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <h1>🔄 useSyncExternalStore Hook</h1>
        <p className="subtitle">
          Te permite suscribirte a una fuente de almacenamiento de datos (store) externa.
        </p>
      </header>
      
      <section className="section">
        <div className="card">
          <p>
            <strong>useSyncExternalStore</strong> te permite suscribirte a stores
            externos como bibliotecas de gestión de estado de terceros o APIs del navegador
            que exponen valores mutables.
          </p>
        </div>
        
        <div className="info-box">
          <strong>💡 Nota:</strong> La mayoría de componentes de React solo leen datos
          de props, estado y contexto. Este hook es útil para integraciones con
          fuentes de datos externas.
        </div>
      </section>
    </div>
  )
}

export default UseSyncExternalStore