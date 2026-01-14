import { useId } from "react"
import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock } from "@/blog-components"
import "./useId.css"

const UseId = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useId">
      <BlogHeader
        title="🆔 useId Hook"
        subtitle="generar IDs únicos que se pueden pasar a los atributos de accesibilidad."
      />

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock language="typescript" code={`const id = useId()`} />
        </div>

        <div className="info-box">
          <strong>⚠️ Advertencia:</strong> useId no debe usarse para generar
          keys en una lista.
        </div>

        <div className="info-box">
          <strong>⚠️ Advertencia:</strong> useId currently cannot be used in
          async Server Components.
        </div>
      </section>

      <section className="section">
        <h2>📌 Uso</h2>

        <div className="card">
          <p>
            Atributos de accesibilidad HTML como aria-describedby te permiten
            especificar que dos etiquetas están relacionadas entre sí. Por
            ejemplo, puedes especificar que un determinado elemento
          </p>
        </div>

        <h3>Ejemplo</h3>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useId } from "react"

function PasswordField() {
  const passwordHintId = useId()
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  )
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  )
}`}
          />
        </div>

        <DemoPasswordField />
      </section>

      <section className="section">
        <h2>⚠️ Atención</h2>

        <div className="card">
          <p>
            useId requiere un árbol de componentes idéntico en el servidor y el
            cliente cuando utilizas renderizado en el servidor. Si los árboles
            que se renderizan en el servidor y el cliente no coinciden
            exactamente, los IDs generados no coincidirán.
          </p>
        </div>
      </section>
    </div>
  )
}

// Demo Component
function PasswordField() {
  const passwordHintId = useId()
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label>
        Password:
        <input
          type="password"
          aria-describedby={passwordHintId}
          style={{
            marginLeft: "0.5rem",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </label>
      <p id={passwordHintId} style={{ fontSize: "0.875rem", color: "#666" }}>
        The password should contain at least 18 characters
      </p>
    </div>
  )
}

function DemoPasswordField() {
  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </div>
  )
}

export default UseId
