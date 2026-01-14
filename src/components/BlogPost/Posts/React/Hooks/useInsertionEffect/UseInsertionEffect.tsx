import { useState } from "react"
import { useDarkMode } from "@/hooks"
import "./useInsertionEffect.css"
import { BlogHeader, CodeBlock } from "@/blog-components"

const UseInsertionEffect = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useInsertionEffect">
      <BlogHeader
        title="💉 useInsertionEffect Hook"
        subtitle="⚠️ Hook especializado para bibliotecas CSS-en-JS. permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout)."
      />

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useInsertionEffect(setup, dependencies?)`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📦 Parámetros</h2>
        <div className="card">
          <p>
            <strong>setup:</strong> función con la lógica de efectos. Puede
            devolver opcionalmente una función de limpieza.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>dependencies:</strong> opcional. Lista de valores reactivos
            referenciados dentro de setup.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📤 Devuelve</h2>
        <div className="card">
          <p>undefined</p>
        </div>
      </section>

      <section className="section">
        <h2>⚠️ Advertencias</h2>
        <div className="card">
          <ul>
            <li>Solo se ejecuta en el cliente, no en el servidor</li>
            <li>No puedes actualizar estado desde dentro</li>
            <li>Las referencias aún no se han adjuntado cuando se ejecuta</li>
            <li>Puede ejecutarse antes o después de que el DOM se actualice</li>
            <li>
              Dispara limpieza y setup un componente a la vez (intercalado)
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>📌 Uso</h2>
        <h3>Inyección de estilos dinámicos desde bibliotecas CSS-en-JS</h3>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useInsertionEffect } from 'react'

// Dentro de tu biblioteca CSS-en-JS
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inyecta las etiquetas <style> aquí ...
  })
  return rule
}`}
          />
        </div>

        <h3>Ejemplo completo:</h3>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`// En tu biblioteca CSS-en-JS
let isInserted = new Set()

function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule)
      document.head.appendChild(getStyleForRule(rule))
    }
  })
  return rule
}

function Button() {
  const className = useCSS('...')
  return <div className={className} />
}`}
          />
        </div>

        <h3>Con SSR (Server-Side Rendering):</h3>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`let collectedRulesSet = new Set()

function useCSS(rule) {
  if (typeof window === 'undefined') {
    collectedRulesSet.add(rule)
  }
  useInsertionEffect(() => {
    // inyectar en cliente
  })
  return rule
}`}
          />
        </div>

        <DemoButton />
      </section>

      <section className="section">
        <h2>✅ Buenas prácticas</h2>

        <div className="card">
          <p>
            <strong>✅ Usar solo en bibliotecas CSS-en-JS</strong>
          </p>
          <p>
            <strong>✅ Inyectar estilos antes de efectos de layout</strong>
          </p>
          <p>
            <strong>
              ✅ Combinar con estilos estáticos y en línea cuando sea posible
            </strong>
          </p>
        </div>

        <div className="card">
          <p>
            <strong>
              ❌ No usar en componentes normales (usar useEffect o
              useLayoutEffect)
            </strong>
          </p>
          <p>
            <strong>❌ No inyectar estilos durante el renderizado directo</strong>
          </p>
          <p>
            <strong>❌ No actualizar estado dentro de useInsertionEffect</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <h2>🤔 ¿Por qué es mejor que useEffect o useLayoutEffect?</h2>

        <div className="card">
          <p>
            Asegura que las etiquetas <code>&lt;style&gt;</code> estén añadidas
            antes de que otros efectos se ejecuten, evitando cálculos de layout
            incorrectos por estilos desactualizados.
          </p>
        </div>
      </section>
    </div>
  )
}

function DemoButton() {
  const [color, setColor] = useState("blue")

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva - CSS-in-JS</h4>
      <div>
        <button
          className={`demo-button-${color}`}
          onClick={() => setColor("blue")}
        >
          Azul
        </button>
        <button
          className={`demo-button-${color}`}
          onClick={() => setColor("red")}
        >
          Rojo
        </button>
        <button
          className={`demo-button-${color}`}
          onClick={() => setColor("green")}
        >
          Verde
        </button>
        <p>
          <small>
            Los estilos se inyectan dinámicamente usando useInsertionEffect
          </small>
        </p>
      </div>
    </div>
  )
}

export default UseInsertionEffect
