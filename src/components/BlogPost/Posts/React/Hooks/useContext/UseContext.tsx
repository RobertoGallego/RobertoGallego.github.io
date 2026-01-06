import { createContext, useState } from "react"
import "./useContext.css"
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

// Demo contexts
const ThemeContext = createContext("dark")
const CurrentUserContext = createContext<{
  currentUser: { name: string } | null
  setCurrentUser: (user: { name: string } | null) => void
} | null>(null)

const UseContext = () => {
  const { isDarkMode } = useDarkMode()
  const [demoTheme, setDemoTheme] = useState("dark")
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null)

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <header className={`useState-header ${isDarkMode ? "dark" : "light"}`}>
        <h1>🌐 useContext Hook</h1>
        <p className="subtitle">
          Te permite leer y suscribirte a un contexto desde tu componente.
        </p>
      </header>

      <section className="section">
        <h2>📚 ¿Qué es useContext?</h2>
        <div className="card">
          <p>
            <code>useContext</code> te permite leer información de un contexto
            creado previamente con <code>createContext</code>. Es ideal para
            compartir datos entre componentes sin pasar props manualmente.
          </p>
          <div className="highlight-box">
            <strong>✨ Importante:</strong> React rerenderiza automáticamente
            todos los hijos que usen un contexto particular cuando su valor
            cambia.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const value = useContext(SomeContext)

// SomeContext: el contexto que creaste previamente con createContext
// Devuelve: el valor del contexto para el componente que lo llama`}
          />
        </div>

        <div className="card">
          <h3>Parámetros</h3>
          <ul className="anatomy-list">
            <li>
              <span className="param">SomeContext</span> - El contexto que
              creaste previamente con <code>createContext</code>
            </li>
          </ul>
          <h3 style={{ marginTop: "1.5rem" }}>Retorna</h3>
          <p style={{ marginTop: "0.5rem" }}>
            El valor del contexto para el componente que lo llama, determinado
            por el <code>value</code> del Provider más cercano en el árbol.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>⚠️ Cuidado</h2>
        <div className="warning-card">
          <h3>Punto importante sobre Providers</h3>
          <p>
            La llamada de <code>useContext()</code> en un componente no es
            afectada por los proveedores devueltos desde el mismo componente. El{" "}
            <code>&lt;Context.Provider&gt;</code> correspondiente debe estar{" "}
            <strong>por encima</strong> del componente que hace la llamada.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📖 Ejemplo Básico</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { createContext, useContext } from "react"

const ThemeContext = createContext(null)

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  const className = "panel-" + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext)
  const className = "button-" + theme
  return <button className={className}>{children}</button>
}`}
          />
        </div>

        <ThemeContext.Provider value={demoTheme}>
          <div className="demo-card">
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                background:
                  demoTheme === "dark"
                    ? "rgba(30, 30, 40, 0.8)"
                    : "rgba(240, 240, 245, 0.8)",
                marginBottom: "1rem",
              }}
            >
              <h3
                style={{
                  margin: "0 0 1rem 0",
                  color:
                    demoTheme === "dark"
                      ? "#ffa07a"
                      : "#762d20",
                }}
              >
                Theme: {demoTheme}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: demoTheme === "dark" ? "#d1d5db" : "#374151",
                }}
              >
                Este panel usa el tema del contexto
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() =>
                setDemoTheme(demoTheme === "dark" ? "light" : "dark")
              }
            >
              Cambiar tema
            </button>
          </div>
        </ThemeContext.Provider>
      </section>

      <section className="section">
        <h2>🔄 Actualizar datos del contexto</h2>
        <div className="card">
          <p>
            Para actualizar el contexto, necesitas combinarlo con el estado.
            Pasa el estado y su función actualizadora a través del contexto.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function MyPage() {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button
        onClick={() => {
          setTheme("light")
        }}
      >
        Cambiar a tema claro
      </Button>
    </ThemeContext.Provider>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📦 Actualizar un objeto</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { createContext, useContext, useState } from "react"

const CurrentUserContext = createContext(null)

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Form />
    </CurrentUserContext.Provider>
  )
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  if (currentUser !== null) {
    return <p>Iniciaste sesión como {currentUser.name}.</p>
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Advika" })
      }}
    >
      Iniciar sesión como Advika
    </Button>
  )
}`}
          />
        </div>

        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <div className="demo-card">
            {currentUser !== null ? (
              <>
                <p
                  style={{
                    fontSize: "1.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  ✅ Iniciaste sesión como <strong>{currentUser.name}</strong>
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => setCurrentUser(null)}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>No has iniciado sesión</p>
                <button
                  className="btn-primary"
                  onClick={() => setCurrentUser({ name: "Advika" })}
                >
                  Iniciar sesión como Advika
                </button>
              </>
            )}
          </div>
        </CurrentUserContext.Provider>
      </section>

      <section className="section">
        <h2>🎛️ Múltiples contextos</h2>
        <div className="card">
          <p>
            Puedes tener múltiples contextos en tu aplicación. Es común
            extraerlos en un único componente Provider.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { createContext, useContext, useReducer } from "react"

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}

const initialTasks = [
  { id: 0, text: "El Camino del Filósofo", done: true },
  { id: 1, text: "Visitar el templo", done: false },
  { id: 2, text: "Beber té matcha", done: false },
]`}
          />
        </div>

        <div className="info-box">
          <strong>💡 Best Practice:</strong> En aplicaciones más grandes, es
          común combinar el contexto con un reducer para extraer la lógica
          relacionada con algún estado fuera de los componentes.
        </div>
      </section>

      <section className="section">
        <h2>🌳 Sobreescribir contexto para una parte del árbol</h2>
        <div className="card">
          <p>
            Puedes anidar providers del mismo contexto para sobreescribir su
            valor en una parte específica del árbol de componentes.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { createContext, useContext } from "react"

const ThemeContext = createContext(null)

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Bienvenido">
      <Button>Registrarse</Button>
      <Button>Iniciar sesión</Button>
      <ThemeContext.Provider value="light">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📊 Encabezados anidados automáticamente</h2>
        <div className="card">
          <p>
            Puedes "acumular" información cuando anidas proveedores de contexto.
            Esto es útil para cosas como niveles de encabezado automáticos.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`<section className="section">
  <LevelContext.Provider value={level + 1}>
    {children}
  </LevelContext.Provider>
</section>

// En el componente Heading:
const level = useContext(LevelContext)
switch (level) {
  case 0:
    throw Error('¡El encabezado debe estar dentro de un Section!')
  case 1:
    return <h1>{children}</h1>
  case 2:
    return <h2>{children}</h2>
  case 3:
    return <h3>{children}</h3>
  // ...
}`}
          />
        </div>

        <div className="info-box">
          <strong>💡 Patrón útil:</strong> Cada vez que el provider se anida,
          el nivel aumenta +1, permitiendo control automático sobre elementos
          como el tamaño de texto.
        </div>
      </section>

      <section className="section">
        <h2>⚡ Optimizar rerenderizados</h2>
        <div className="card">
          <p>
            Cuando pasas objetos y funciones a través del contexto, puedes
            causar rerenderizados innecesarios. Usa <code>useMemo</code> y{" "}
            <code>useCallback</code> para optimizar.
          </p>
        </div>

        <div className="comparison">
          <div className="code-block error">
            <div className="code-label">❌ Crea nuevo objeto cada render</div>
            <CodeBlock
              language="typescript"
              code={`function MyApp() {
  const [user, setUser] = useState(null)
  
  // ❌ Nuevo objeto en cada render
  return (
    <UserContext.Provider value={{
      user,
      setUser
    }}>
      <Page />
    </UserContext.Provider>
  )
}`}
            />
          </div>

          <div className="code-block success">
            <div className="code-label">✅ Memoiza el valor del contexto</div>
            <CodeBlock
              language="typescript"
              code={`function MyApp() {
  const [user, setUser] = useState(null)
  
  // ✅ Mismo objeto entre renders
  const value = useMemo(() => ({
    user,
    setUser
  }), [user])
  
  return (
    <UserContext.Provider value={value}>
      <Page />
    </UserContext.Provider>
  )
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🎯</span>
            <h3>Cuándo Usar</h3>
            <p>
              Para compartir datos entre muchos componentes sin pasar props
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🌳</span>
            <h3>Provider Arriba</h3>
            <p>El Provider debe estar por encima del componente que lo consume</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🔄</span>
            <h3>Auto Rerender</h3>
            <p>React rerenderiza automáticamente cuando el contexto cambia</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">📦</span>
            <h3>Múltiples Contextos</h3>
            <p>Puedes usar varios contextos diferentes en una app</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">⚡</span>
            <h3>Optimización</h3>
            <p>Usa useMemo/useCallback para valores complejos</p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🎛️</span>
            <h3>Con Reducer</h3>
            <p>Combina con useReducer para lógica de estado compleja</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UseContext