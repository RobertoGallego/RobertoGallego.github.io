import { useState } from "react"
import "./useState.css"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"

const codeSyntax = `
const [state, setState] = useState(initialState)

// Ejemplos reales:
const [age, setAge] = useState(28)
const [name, setName] = useState("Taylor")
const [isOpen, setIsOpen] = useState(false)
const [todos, setTodos] = useState(() => handleExpensiveFunction())
`

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

const TipCard = ({
  icon,
  title,
  description,
  isDarkMode,
}: {
  icon: string
  title: string
  description: string
  isDarkMode: boolean
}) => {
  return (
    <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
      <span className="tip-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const UseState = () => {
  const { isDarkMode } = useDarkMode()
  // const [age, setAge] = useState(28)
  // const [name, setName] = useState("Taylor")
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  // function handleClick() {
  //   setName(name === "Taylor" ? "Sarah" : "Taylor")
  //   setAge((a) => a + 1)
  // }

  function handleClick2() {
    setLogs([])

    const newLogs: string[] = []

    console.log("Antes de setCount:", count)
    newLogs.push(`Antes de setCount: ${count}`)

    setCount(count + 1)

    console.log("Después de setCount:", count)
    newLogs.push(`Después de setCount: ${count}`)

    setLogs(newLogs)

    setTimeout(() => {
      console.log("Después de 5 segundos:", count)
      setLogs((prev) => [...prev, `Después de 5 segundos: ${count}`])
    }, 5000)
  }

  function handleTripleIncrement() {
    setNumber((n) => n + 1)
    setNumber((n) => n + 1)
    setNumber((n) => n + 1)
  }

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <header className={`useState-header ${isDarkMode ? "dark" : "light"}`}>
        <h1>useState hook</h1>
        <p className="subtitle">
          El hook fundamental para manejar estado en componentes funcionales de
          React, podemos llamar useState múltiples veces para diferentes
          estados.
        </p>
      </header>

      <section className="section">
        <h2>📚 ¿Qué es useState?</h2>
        <div className="card">
          <p>
            <code>useState</code> te permite agregar <strong>estado</strong> a
            tus componentes funcionales. El estado es información que puede
            cambiar durante la vida del componente.
          </p>
          <div className="highlight-box">
            <strong>✨ Importante:</strong> Siempre se llama en el top-level del
            componente, nunca dentro de loops, condiciones o funciones anidadas.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock language="typescript" code={codeSyntax} />
        </div>

        <div className="card">
          <h3>Anatomía del Hook</h3>
          <ul className="anatomy-list">
            <li>
              <span className="param">state</span> - El valor actual del estado
            </li>
            <li>
              <span className="param">setState (state function)</span> - Función
              para actualizar el estado
            </li>
            <li>
              <span className="param">initialState</span> - Valor inicial
              (cualquier tipo)
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>📦 Array Destructuring</h2>
        <div className="card">
          <p>useState usa array destructuring de JavaScript ES6:</p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="javascript"
            code={`// Array destructuring básico
let arr = ["John", "Smith"]
let [firstName, surname] = arr

console.log(firstName) // "John"
console.log(surname)   // "Smith"

// useState funciona igual
const [age, setAge] = useState(28)
//     ↑    ↑         ↑
//   valor función  hook`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚠️ Estado Inmutable</h2>
        <div className="warning-card">
          <h3>🚫 Nunca mutes el estado directamente</h3>
          <div className="code-block error">
            <CodeBlock
              language="javascript"
              code={`// ❌ MAL - Mutación directa
position.x = 5
form.firstName = 'Taylor'
items.push(newItem)
items[0] = 'changed'`}
            />
          </div>
        </div>

        <div className="success-card">
          <h3>✅ Siempre crea nuevos valores</h3>
          <div className="code-block success">
            <CodeBlock
              language="javascript"
              code={`// ✅ BIEN - Reemplazar con nuevo valor
setPosition({ x: 5, y: 10 })
setForm({ ...form, firstName: 'Taylor' })
setItems([...items, newItem])
setItems(items.map((item, i) => i === 0 ? 'changed' : item))`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🔄 Updater Functions</h2>
        <div className="card">
          <p>
            Cuando el nuevo estado depende del anterior, usa una{" "}
            <strong>función actualizadora</strong>:
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="javascript"
            code={`// ✅ CORRECTO - Updater function
setNumber(n => n + 1)
setNumber(n => n + 1)
setNumber(n => n + 1)
// Result: +3 ✨

// ❌ INCORRECTO - Valor directo
setNumber(number + 1)
setNumber(number + 1)
setNumber(number + 1)
// Result: +1 (todas usan el mismo valor inicial)`}
          />
        </div>

        <div className="demo-card">
          <div className="demo-display">
            <div className="demo-value">
              <span className="label">Número:</span>
              <span className="value large">{number}</span>
            </div>
          </div>
          <button className="btn-primary" onClick={handleTripleIncrement}>
            +3 (usando updater function)
          </button>
        </div>
      </section>

      <section className="section">
        <h2>⏱️ El Estado NO se actualiza inmediatamente</h2>

        <div className="code-block">
          <CodeBlock
            language="javascript"
            code={`function handleClick() {
  console.log(count)      // 0
  setCount(count + 1)     // Solicita re-render
  console.log(count)      // Todavía 0! 🤔
  
  setTimeout(() => {
    console.log(count)    // También 0! 😮
  }, 5000)
}`}
          />
        </div>
        <div className="demo-card">
          <div className="demo-display">
            <div className="demo-value">
              <span className="label">Count:</span>
              <span className="value">{count}</span>
            </div>
          </div>
          <button className="btn-secondary" onClick={handleClick2}>
            Probar Demo
          </button>

          {logs.length > 0 && (
            <div className="console-output">
              <div className="console-header">📺 Console Output:</div>
              {logs.map((log, i) => (
                <div key={i} className="log-line">
                  → {log}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="info-box">
          <strong>💡 ¿Por qué?</strong> React agrupa las actualizaciones de
          estado para optimizar el rendimiento. El estado se actualiza después
          de que el componente termina de ejecutarse.
        </div>
      </section>

      <section className="section">
        <h2>🎨 Actualizando Objetos</h2>
        <div className="code-block">
          <CodeBlock
            language="javascript"
            code={`// ✅ Spread operator - copia y sobrescribe
setPerson({
  ...person,
  firstName: e.target.value
})

// ✅ Propiedades dinámicas
setPerson({
  ...person,
  [e.target.name]: e.target.value
})

// ✅ Objetos anidados
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    city: 'New Delhi'
  }
})`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📋 Actualizando Arrays</h2>
        <div className="table-container">
          <table className="methods-table">
            <thead>
              <tr>
                <th>Operación</th>
                <th>❌ Evitar (mutan)</th>
                <th>✅ Preferir (inmutables)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Agregar</strong>
                </td>
                <td>
                  <code>push</code>, <code>unshift</code>
                </td>
                <td>
                  <code>concat</code>, <code>[...arr]</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Eliminar</strong>
                </td>
                <td>
                  <code>pop</code>, <code>shift</code>, <code>splice</code>
                </td>
                <td>
                  <code>filter</code>, <code>slice</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Reemplazar</strong>
                </td>
                <td>
                  <code>splice</code>, <code>arr[i] = ...</code>
                </td>
                <td>
                  <code>map</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Ordenar</strong>
                </td>
                <td>
                  <code>reverse</code>, <code>sort</code>
                </td>
                <td>Copiar primero, luego ordenar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="code-block">
          <CodeBlock
            language="javascript"
            code={`// ✅ Agregar
setItems([...items, newItem])
setItems([newItem, ...items]) // Al inicio

// ✅ Eliminar
setItems(items.filter(item => item.id !== id))

// ✅ Reemplazar/Actualizar
setItems(items.map(item => 
  item.id === id 
    ? { ...item, completed: true } 
    : item
))

// ✅ Ordenar (copiar primero!)
const sorted = [...items].sort((a, b) => 
  a.name.localeCompare(b.name)
)
setItems(sorted)`}
          />
        </div>
      </section>

      <section className="section">
        {/* esto asegura que la funcion someExpensiveComputation se llame solo una
        vez durante el renderizado inicial del componente, en lugar de en cada
        renderizado subsiguiente. lazy initial state */}
        <h2>⚡ Lazy Initial State</h2>
        <div className="card">
          <p>
            Para cálculos costosos en el estado inicial, pasa una{" "}
            <strong>función inicializadora</strong>:
          </p>
        </div>
        <div className="comparison">
          <div className="code-block error">
            <div className="code-label">❌ Se ejecuta en cada render</div>
            <CodeBlock
              language="javascript"
              code={`const [todos, setTodos] = useState(
  createExpensiveTodos()
)`}
            />
          </div>

          <div className="code-block success">
            <div className="code-label">✅ Se ejecuta solo una vez</div>
            <CodeBlock
              language="javascript"
              code={`const [todos, setTodos] = useState(
  () => createExpensiveTodos()
)`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <TipCard
            isDarkMode={isDarkMode}
            icon="🔢"
            title="Múltiples Estados"
            description="Puedes llamar useState múltiples veces en un componente"
          />

          <TipCard
            isDarkMode={isDarkMode}
            icon="🔒"
            title="Inmutabilidad"
            description="Siempre crea nuevos valores, nunca modifiques directamente"
          />

          <TipCard
            isDarkMode={isDarkMode}
            icon="⚡"
            title="Updater Functions"
            description="Úsalas cuando dependas del estado anterior"
          />

          <TipCard
            isDarkMode={isDarkMode}
            icon="🔄"
            title="useReducer"
            description="Si tienes muchos setState relacionados, considera useReducer"
          />

          <TipCard
            isDarkMode={isDarkMode}
            icon="⏰"
            title="Actualización Asíncrona"
            description="El estado no se actualiza inmediatamente después de setState"
          />

          <TipCard
            isDarkMode={isDarkMode}
            icon="🎯"
            title="Un Estado, Un Propósito"
            description="Divide estados complejos en múltiples estados simples"
          />
        </div>
      </section>
    </div>
  )
}

export default UseState
