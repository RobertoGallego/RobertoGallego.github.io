import { useReducer, useState } from "react"
import "./useReducer.css"
import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock, TipCard } from "@/blog-components"

// Tipos para nuestro reducer
type Task = {
  id: number
  text: string
  done: boolean
}

type Action =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number }

// Estado inicial
const initialTasks: Task[] = [
  { id: 0, text: "Visitar Kafka Museum", done: true },
  { id: 1, text: "Ver show de marionetas", done: false },
  { id: 2, text: "Foto del muro de Lennon", done: false },
]

let nextId = 3

// Reducer
function tasksReducer(tasks: Task[], action: Action): Task[] {
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
      throw Error("Unknown action: " + (action as Action).type)
    }
  }
}

const UseReducer = () => {
  const { isDarkMode } = useDarkMode()
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  const [logs, setLogs] = useState<string[]>([])

  function handleAddTask() {
    const newTask = {
      type: "added" as const,
      id: nextId++,
      text: "Nueva tarea de ejemplo",
    }

    setLogs([])
    setLogs([`✅ Despachando acción: ${JSON.stringify(newTask)}`])

    dispatch(newTask)

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `📦 Estado actualizado con ${tasks.length + 1} tareas`,
      ])
    }, 100)
  }

  function handleToggleTask(task: Task) {
    dispatch({
      type: "changed",
      task: { ...task, done: !task.done },
    })
  }

  function handleDeleteTask(taskId: number) {
    dispatch({
      type: "deleted",
      id: taskId,
    })
  }

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <BlogHeader
        title="🔄 useReducer Hook"
        subtitle="Para componentes con muchas actualizaciones de estado, consolida toda la lógica en una única función reducer."
      />

      <section className="section">
        <h2>📚 ¿Qué es useReducer?</h2>
        <div className="card">
          <p>
            <code>useReducer</code> te permite consolidar toda la{" "}
            <strong>lógica de actualización de estado</strong> fuera del
            componente en una única función llamada <strong>reducer</strong>.
          </p>
          <div className="highlight-box">
            <strong>✨ Importante:</strong> Los componentes con muchas
            actualizaciones de estado distribuidas en varios controladores de
            eventos pueden beneficiarse de useReducer.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const [state, dispatch] = useReducer(reducer, initialState)

// Parámetros:
// - reducer: función que contiene la lógica de actualización
// - initialState: estado inicial

// Devuelve:
// - state: el estado actual
// - dispatch: función para despachar acciones`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🔀 De useState a useReducer</h2>
        <div className="comparison">
          <div className="code-block error">
            <div className="code-label">❌ Antes: múltiples useState</div>
            <CodeBlock
              language="typescript"
              code={`const [tasks, setTasks] = useState(initialTasks)

function handleAddTask(text) {
  setTasks([...tasks, {
    id: nextId++,
    text: text,
    done: false
  }])
}

function handleChangeTask(task) {
  setTasks(tasks.map(t => 
    t.id === task.id ? task : t
  ))
}

function handleDeleteTask(taskId) {
  setTasks(tasks.filter(t => t.id !== taskId))
}`}
            />
          </div>

          <div className="code-block success">
            <div className="code-label">✅ Después: un useReducer</div>
            <CodeBlock
              language="typescript"
              code={`const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

function handleAddTask(text) {
  dispatch({
    type: 'added',
    id: nextId++,
    text: text,
  })
}

function handleChangeTask(task) {
  dispatch({
    type: 'changed',
    task: task,
  })
}

function handleDeleteTask(taskId) {
  dispatch({
    type: 'deleted',
    id: taskId,
  })
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>⚙️ Función Reducer</h2>
        <div className="card">
          <p>
            El reducer recibe el <strong>estado actual</strong> y una{" "}
            <strong>acción</strong>, y devuelve el <strong>nuevo estado</strong>
            :
          </p>
        </div>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ]
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🎮 Demo Interactiva: Itinerario en Praga</h2>
        <div className="demo-card">
          <div className="demo-display">
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#667eea", marginBottom: "1rem" }}>
                📋 Tareas ({tasks.length})
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      background: "rgba(102, 126, 234, 0.1)",
                      borderRadius: "8px",
                      border: "1px solid rgba(102, 126, 234, 0.3)",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => handleToggleTask(task)}
                      style={{
                        cursor: "pointer",
                        width: "18px",
                        height: "18px",
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        textDecoration: task.done ? "line-through" : "none",
                        opacity: task.done ? 0.6 : 1,
                        color: "#e2e8f0",
                      }}
                    >
                      {task.text}
                    </span>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="btn-secondary"
                      style={{ padding: "0.5rem 1rem", fontSize: "0.875rem" }}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button className="btn-primary" onClick={handleAddTask}>
            ➕ Agregar Tarea
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
      </section>

      <section className="section">
        <h2>⚠️ Estado es de Solo Lectura</h2>
        <div className="warning-card">
          <h3>🚫 No mutes el estado directamente</h3>
          <div className="code-block error">
            <CodeBlock
              language="typescript"
              code={`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 MAL: mutando el objeto directamente
      state.age = state.age + 1
      return state
    }
  }
}`}
            />
          </div>
        </div>

        <div className="success-card">
          <h3>✅ Siempre devuelve nuevos objetos</h3>
          <div className="code-block success">
            <CodeBlock
              language="typescript"
              code={`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ BIEN: devolviendo nuevo objeto
      return {
        ...state,
        age: state.age + 1
      }
    }
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>⚡ Evitar Recrear el Estado Inicial</h2>
        <div className="card">
          <p>
            React guarda el estado inicial una vez y lo ignora en renderizados
            siguientes:
          </p>
        </div>

        <div className="comparison">
          <div className="code-block error">
            <div className="code-label">
              ❌ Se ejecuta en cada render (ineficiente)
            </div>
            <CodeBlock
              language="typescript"
              code={`function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer, 
    createInitialState(username)
  )
  // createInitialState se llama en cada render
}`}
            />
          </div>

          <div className="code-block success">
            <div className="code-label">✅ Se ejecuta solo una vez</div>
            <CodeBlock
              language="typescript"
              code={`function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  )
  // Pasa la función, no el resultado de llamarla
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🐛 Solución de Problemas</h2>

        <div className="card">
          <h3>1️⃣ El registro me da el valor de estado antiguo</h3>
          <p>
            El estado no se actualiza inmediatamente después de dispatch. Si
            necesitas el siguiente estado, calcúlalo manualmente:
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function handleClick() {
  console.log(state.age)  // 42

  dispatch({ type: 'incremented_age' })
  console.log(state.age)  // Todavía 42!

  setTimeout(() => {
    console.log(state.age) // También 42!
  }, 5000)
}

// ✅ Solución: calcular manualmente
const action = { type: 'incremented_age' }
dispatch(action)

const nextState = reducer(state, action)
console.log(state)     // { age: 42 }
console.log(nextState) // { age: 43 }`}
          />
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h3>2️⃣ Despaché una acción pero la pantalla no se actualiza</h3>
          <p>
            React ignora tu actualización si el siguiente estado es igual al
            anterior (comparación <code>Object.is</code>). Esto ocurre cuando
            mutas directamente:
          </p>
        </div>

        <div className="warning-card">
          <h4>🚫 Objeto mutado</h4>
          <div className="code-block error">
            <CodeBlock
              language="typescript"
              code={`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 MAL: mutando objeto existente
      state.age++
      return state
    }
    case 'changed_name': {
      // 🚩 MAL: mutando objeto existente
      state.name = action.nextName
      return state
    }
  }
}`}
            />
          </div>
        </div>

        <div className="success-card">
          <h4>✅ Nuevo objeto creado</h4>
          <div className="code-block success">
            <CodeBlock
              language="typescript"
              code={`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ BIEN: creando nuevo objeto
      return {
        ...state,
        age: state.age + 1
      }
    }
    case 'changed_name': {
      // ✅ BIEN: creando nuevo objeto
      return {
        ...state,
        name: action.nextName
      }
    }
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h3>3️⃣ Array mutado</h3>
          <p>Los arrays también deben ser reemplazados, no mutados:</p>
        </div>

        <div className="warning-card">
          <h4>🚫 Array mutado con push</h4>
          <div className="code-block error">
            <CodeBlock
              language="typescript"
              code={`function reducer(state, action) {
  switch (action.type) {
    case 'added_todo': {
      // 🚩 MAL: mutando el array
      state.todos.push({ 
        id: nextId++, 
        text: action.text 
      })
      return state
    }
  }
}`}
            />
          </div>
        </div>

        <div className="success-card">
          <h4>✅ Nuevo array creado</h4>
          <div className="code-block success">
            <CodeBlock
              language="typescript"
              code={`function reducer(state, action) {
  switch (action.type) {
    case 'added_todo': {
      // ✅ BIEN: reemplazando con nuevo estado
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.text }
        ]
      }
    }
  }
}`}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <TipCard
            icon="🎯"
            title="Cuándo Usar"
            description="Ideal cuando tienes múltiples actualizaciones de estado relacionadas"
          />

          <TipCard
            icon="🔒"
            title="Inmutabilidad"
            description="Siempre devuelve nuevos objetos/arrays, nunca mutes"
          />

          <TipCard
            icon="📦"
            title="Acciones Descriptivas"
            description="Usa nombres claros para los tipos de acción"
          />

          <TipCard
            icon="🧪"
            title="Fácil de Testear"
            description="Los reducers son funciones puras, fáciles de testear"
          />

          <TipCard
            icon="⚡"
            title="Estado Inicial Lazy"
            description="Pasa la función, no el resultado de llamarla"
          />

          <TipCard
            icon="🔄"
            title="De useState a useReducer"
            description="Si useState se vuelve complejo, considera migrar a useReducer"
          />
        </div>
      </section>
    </div>
  )
}

export default UseReducer
