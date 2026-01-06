import { useRef, useState } from "react"
import "./useRef.css"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"

const CodeBlock = ({
  code,
  language = "typescript",
}: {
  code: string
  language?: string
}) => {
  const { isDarkMode } = useDarkMode()

  return (
    <Highlight
      theme={isDarkMode ? themes.nightOwl : themes.github}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

const UseRef = () => {
  const { isDarkMode } = useDarkMode()
  const inputRef = useRef<HTMLInputElement>(null)
  const intervalRef = useRef<number | null>(null)
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  function handleFocusClick() {
    inputRef.current?.focus()
  }

  function handleStartClick() {
    if (isRunning) return

    const intervalId = setInterval(() => {
      setCount((c) => c + 1)
    }, 1000)
    intervalRef.current = intervalId
    setIsRunning(true)
  }

  function handleStopClick() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      setIsRunning(false)
    }
  }

  function handleResetClick() {
    handleStopClick()
    setCount(0)
  }

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <header className={`useState-header ${isDarkMode ? "dark" : "light"}`}>
        <h1>🔗 useRef Hook</h1>
        <p className="subtitle">
          Permite a un componente conservar información que no se usa para el
          renderizado, y referenciar valores del DOM.
        </p>
      </header>

      <section className="section">
        <h2>📚 ¿Qué es useRef?</h2>
        <div className="card">
          <p>
            <code>useRef</code> te permite <strong>referenciar un valor</strong>{" "}
            que no es necesario para el renderizado. Las refs son perfectas para
            almacenar información que no afecta a la salida visual de tu
            componente.
          </p>
          <div className="highlight-box">
            <strong>✨ Diferencia clave:</strong> A diferencia del estado, las
            refs son <strong>mutables</strong> y su cambio no causa
            re-renderizado.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const ref = useRef(initialValue)

// Devuelve un objeto con una propiedad:
ref.current // Valor actual (mutable)`}
          />
        </div>

        <div className="card">
          <h3>Propiedades del Objeto Ref</h3>
          <ul className="anatomy-list">
            <li>
              <span className="param">current</span> - Inicialmente contiene el{" "}
              <code>initialValue</code>. Puedes cambiarlo después.
            </li>
            <li>
              <span className="param">Mutable</span> - Puedes modificar{" "}
              <code>ref.current</code> sin causar re-renderizado.
            </li>
            <li>
              <span className="param">Persistente</span> - Se mantiene entre
              renderizados (a diferencia de variables regulares).
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>⏱️ Ejemplo: Cronómetro con intervalRef</h2>
        <div className="card">
          <p>
            Al utilizar ref puedes{" "}
            <strong>almacenar información entre renderizados</strong> (a
            diferencia de las variables regulares, que se reinician en cada
            renderizado).
          </p>
        </div>

        <div className="demo-card">
          <div className="demo-display">
            <div className="demo-value">
              <span className="label">⏱️ Tiempo:</span>
              <span className="value large">{count}s</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              className="btn-primary"
              onClick={handleStartClick}
              disabled={isRunning}
            >
              ▶️ Iniciar
            </button>
            <button
              className="btn-secondary"
              onClick={handleStopClick}
              disabled={!isRunning}
            >
              ⏸️ Pausar
            </button>
            <button className="btn-secondary" onClick={handleResetClick}>
              🔄 Reiniciar
            </button>
          </div>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const intervalRef = useRef<number | null>(null)
const [count, setCount] = useState(0)

function handleStartClick() {
  const intervalId = setInterval(() => {
    setCount((c) => c + 1)
  }, 1000)
  intervalRef.current = intervalId // Guardar ID del interval
}

function handleStopClick() {
  const intervalId = intervalRef.current
  clearInterval(intervalId) // Usar el ID guardado
  intervalRef.current = null
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚠️ No leas ni escribas refs durante el renderizado</h2>
        <div className={"warning-card"}>
          <h3>🚫 Incorrecto: Leer/Escribir durante renderizado</h3>
          <div className={`code-block error ${isDarkMode ? "dark" : "light"}`}>
            <CodeBlock
              language="typescript"
              code={`function MyComponent() {
  // 🚩 No escribas una ref durante el renderizado
  myRef.current = 123
  
  // 🚩 No leas una ref durante el renderizado
  return <h1>{myOtherRef.current}</h1>
}`}
            />
          </div>
        </div>

        <div className={"success-card"}>
          <h3>✅ Correcto: Usar en efectos o event handlers</h3>
          <div className={`code-block success ${isDarkMode ? "dark" : "light"}`}>
            <CodeBlock
              language="typescript"
              code={`function MyComponent() {
  useEffect(() => {
    // ✅ Puedes leer o escribir refs en efectos
    myRef.current = 123
  })
  
  function handleClick() {
    // ✅ Puedes leer o escribir refs en event handlers
    doSomething(myOtherRef.current)
  }
  
  return <button onClick={handleClick}>Click</button>
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎨 Manipulación del DOM con ref</h2>
        <div className="card">
          <p>
            Es particularmente común utilizar una ref para{" "}
            <strong>manipular el DOM</strong>. React tiene soporte incorporado
            para esto.
          </p>
        </div>

        <div className="demo-card">
          <div className="demo-display" style={{ width: "100%" }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe algo aquí..."
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "8px",
                border: "1px solid rgba(102, 126, 234, 0.3)",
                background: "rgba(26, 26, 46, 0.5)",
                color: "#e2e8f0",
                fontSize: "1rem",
                fontFamily: "inherit",
              }}
            />
          </div>
          <button className="btn-primary" onClick={handleFocusClick}>
            🎯 Focus the input
          </button>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useRef } from "react"

export default function Form() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚡ Evitar la recreación del contenido de las refs</h2>
        <div className="card">
          <p>
            Si inicializas una ref con un objeto costoso, se creará en cada
            renderizado:
          </p>
        </div>

        <div className="comparison">
          <div className={`code-block error ${isDarkMode ? "dark" : "light"}`}>
            <div className="code-label">❌ Se ejecuta en cada render</div>
            <CodeBlock
              language="typescript"
              code={`function Video() {
  const playerRef = useRef(new VideoPlayer())
  // VideoPlayer se crea en CADA renderizado
}`}
            />
          </div>

          <div className={`code-block success ${isDarkMode ? "dark" : "light"}`}>
            <div className="code-label">✅ Se ejecuta solo una vez</div>
            <CodeBlock
              language="typescript"
              code={`function Video() {
  const playerRef = useRef(null)
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer()
  }
  // VideoPlayer se crea SOLO la primera vez
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🔄 Diferencia: useState vs useRef</h2>
        <div className="table-container">
          <table className="methods-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>useState</th>
                <th>useRef</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Re-renderizado</strong>
                </td>
                <td>✅ Causa re-renderizado</td>
                <td>❌ NO causa re-renderizado</td>
              </tr>
              <tr>
                <td>
                  <strong>Mutabilidad</strong>
                </td>
                <td>❌ Inmutable (crear nuevo valor)</td>
                <td>✅ Mutable (modificar .current)</td>
              </tr>
              <tr>
                <td>
                  <strong>Lectura/Escritura</strong>
                </td>
                <td>❌ No durante renderizado</td>
                <td>❌ No durante renderizado</td>
              </tr>
              <tr>
                <td>
                  <strong>Uso común</strong>
                </td>
                <td>UI y datos que afectan renderizado</td>
                <td>Timers, DOM refs, valores auxiliares</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>🐛 Solución de Problemas</h2>
        <div className="card">
          <h3>Pasar ref a componentes personalizados</h3>
          <p>
            Si intentas pasar una ref a tu propio componente, obtendrás un
            error:
          </p>
        </div>

        <div className="warning-card">
          <h4>🚫 Esto no funciona</h4>
          <div className={`code-block error ${isDarkMode ? "dark" : "light"}`}>
            <CodeBlock
              language="typescript"
              code={`const inputRef = useRef(null)

return <MyInput ref={inputRef} />
// ❌ Error: ref no es un prop válido`}
            />
          </div>
        </div>

        <div className="success-card">
          <h4>✅ Solución: Pasar como prop normal</h4>
          <div className={`code-block success ${isDarkMode ? "dark" : "light"}`}>
            <CodeBlock
              language="typescript"
              code={`// En el padre:
const inputRef = useRef(null)
return <MyInput inputRef={inputRef} />

// En MyInput:
export default function MyInput({ value, onChange, inputRef }) {
  return <input value={value} onChange={onChange} ref={inputRef} />
}`}
            />
          </div>
        </div>

        <div className="info-box" style={{ marginTop: "1rem" }}>
          <strong>💡 Nota avanzada:</strong> Para usar <code>ref</code> como
          prop real, necesitas <code>forwardRef</code> (tema avanzado).
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🎯</span>
            <h3>Cuándo Usar</h3>
            <p>Para valores que NO afectan la UI: timers, IDs, elementos DOM</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🚫</span>
            <h3>No en Renderizado</h3>
            <p>No leas ni escribas ref.current durante el renderizado</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🔄</span>
            <h3>Persistencia</h3>
            <p>
              Los valores se mantienen entre renderizados sin causar cambios
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">✏️</span>
            <h3>Mutable</h3>
            <p>Puedes cambiar .current directamente sin setState</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🎨</span>
            <h3>DOM Manipulation</h3>
            <p>Ideal para focus(), scroll(), mediciones, animaciones</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">⚡</span>
            <h3>Inicialización Lazy</h3>
            <p>Usa verificación null para objetos costosos</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          📚 Curso de React 2025 | Creado con ❤️ para la comunidad
          hispanohablante
        </p>
      </footer>
    </div>
  )
}

export default UseRef
