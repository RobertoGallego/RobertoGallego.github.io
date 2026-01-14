import { useState, useEffect, useDebugValue } from "react"
import { useDarkMode } from "@/hooks"
import "./useDebugValue.css"
import { BlogHeader, CodeBlock } from "@/blog-components"

const UseDebugValue = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useDebugValue">
      <BlogHeader
        title="🔍 useDebugValue Hook"
        subtitle="Te permite añadir una etiqueta a un Hook personalizado en las herramientas de desarrollo de React."
      />

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useDebugValue(value, format?)`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📦 Parámetros</h2>
        <div className="card">
          <p>
            <strong>value:</strong> valor que quieres mostrar
          </p>
        </div>

        <div className="card">
          <p>
            <strong>format:</strong> opcional: Una función de formateo. Cuando
            se inspecciona el componente, las herramientas de desarrollo de
            React llamarán a la función de formateo con value como argumento, y
            mostrarán el valor formateado devuelto (que puede tener cualquier
            tipo). Si no especificas la función de formateo, se mostrará el
            mismo valor value original.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📌 Uso</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useDebugValue(date, (date) => date.toDateString())`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useState, useEffect, useDebugValue } from "react"

// Hook personalizado que devuelve la hora actual cada segundo
function useCurrentTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Aquí usamos useDebugValue para mostrar el tiempo formateado en React DevTools
  useDebugValue(time, (date) => date.toLocaleTimeString())

  return time
}

// Uso en un componente
export default function Clock() {
  const time = useCurrentTime()

  return <div>Hora actual: {time.toLocaleTimeString()}</div>
}`}
          />
        </div>

        <DemoClock />
      </section>

      <section className="section">
        <h2>💡 Notas importantes</h2>

        <div className="card">
          <p>
            useDebugValue solo afecta a React DevTools, no al renderizado real.
          </p>
        </div>

        <div className="card">
          <p>
            Es útil para Hooks personalizados complejos donde quieres ver de
            manera rápida el estado interno.
          </p>
        </div>

        <div className="card">
          <p>
            Puedes usar una función de formateo para mostrar el valor de forma
            legible, como en el ejemplo con toLocaleTimeString().
          </p>
        </div>

        <div className="card">
          <p>
            Si el valor es simple o no necesitas depuración, no es obligatorio
            usarlo.
          </p>
        </div>
      </section>
    </div>
  )
}

// Hook personalizado que devuelve la hora actual cada segundo
function useCurrentTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Aquí usamos useDebugValue para mostrar el tiempo formateado en React DevTools
  useDebugValue(time, (date) => date.toLocaleTimeString())
  useDebugValue("Hello")

  return time
}

// Demo Clock Component
function DemoClock() {
  const time = useCurrentTime()

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
      <div>
        <h3>Hora actual: {time.toLocaleTimeString()}</h3>
        <p>
          <small>
            Abre React DevTools para ver el valor de useDebugValue en el Hook
            personalizado
          </small>
        </p>
      </div>
    </div>
  )
}

export default UseDebugValue
