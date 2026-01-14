import { useMemo, useState } from "react"
import "./useMemo.css"
import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock } from "@/blog-components"

// Simulated expensive calculation
const filterTodos = (todos: string[], tab: string) => {
  console.time("filter array")
  const filtered = todos.filter((todo) =>
    tab === "all" ? true : todo.includes(tab)
  )
  console.timeEnd("filter array")
  return filtered
}

const UseMemo = () => {
  const { isDarkMode } = useDarkMode()
  const [todos] = useState(["Learn React", "Build app", "Deploy", "Celebrate"])
  const [tab, setTab] = useState("all")
  const [count, setCount] = useState(0)

  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <BlogHeader
        title="💾 useMemo Hook"
        subtitle="Guardar en caché el resultado de un cálculo entre renderizados."
      />

      <section className="section">
        <h2>📚 ¿Qué es useMemo?</h2>
        <div className="card">
          <p>
            <code>useMemo</code> te permite memoizar (guardar en caché) el
            resultado de un cálculo costoso entre renderizados, evitando
            recalcularlo innecesariamente.
          </p>
          <div className="highlight-box">
            <strong>✨ Importante:</strong> Úsalo solo para cálculos
            costosos. La mayoría de cálculos son muy rápidos y no requieren
            memoización.
          </div>
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const cachedValue = useMemo(calculateValue, dependencies)

import { useMemo } from "react"

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])
  // ...
}`}
          />
        </div>

        <div className="card">
          <h3>Parámetros</h3>
          <ul className="anatomy-list">
            <li>
              <span className="param">calculateValue</span> - La función que
              calcula el valor que deseas memoizar. Debe ser pura y no recibir
              argumentos.
            </li>
            <li>
              <span className="param">dependencies</span> - La lista de todos
              los valores reactivos a los que se hace referencia dentro del
              código calculateValue. Los valores reactivos incluyen props,
              estado y todas las variables y funciones declaradas directamente
              dentro del cuerpo de tu componente.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>🚀 Evitar recálculos costosos</h2>
        <div className="card">
          <p>
            Por lo general, esto no es un problema porque la mayoría de los
            cálculos son muy rápidos. Sin embargo, si estás filtrando o
            transformando un array grande, o estás realizando algún cálculo
            costoso, es posible que desees omitir hacerlo nuevamente si los
            datos no han cambiado.
          </p>
        </div>

        <div className="demo-card">
          <div className="demo-display">
            <div className="demo-value">
              <span className="label">Tab activo:</span>
              <span className="value">{tab}</span>
            </div>
            <div className="demo-value">
              <span className="label">Contador:</span>
              <span className="value">{count}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <button
              className="btn-primary"
              onClick={() => setTab("all")}
            >
              All
            </button>
            <button
              className="btn-secondary"
              onClick={() => setTab("React")}
            >
              React
            </button>
            <button
              className="btn-secondary"
              onClick={() => setCount(count + 1)}
            >
              Increment ({count})
            </button>
          </div>
          <div style={{ padding: "1rem", borderRadius: "8px", background: "rgba(102, 126, 234, 0.1)" }}>
            <strong>Filtered Todos:</strong>
            <ul>
              {visibleTodos.map((todo, i) => (
                <li key={i}>{todo}</li>
              ))}
            </ul>
            <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Abre la consola y ve que solo se recalcula cuando cambia "tab"
            </p>
          </div>
        </div>

        <div className="info-box">
          <strong>💡 Nota:</strong> Al incrementar el contador, el cálculo NO
          se ejecuta de nuevo porque <code>todos</code> y <code>tab</code> no
          cambiaron.
        </div>
      </section>

      <section className="section">
        <h2>⏱️ ¿Cómo saber si un cálculo es costoso?</h2>
        <div className="card">
          <p>Puedes medir el tiempo dedicado a una pieza de código:</p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`console.time("filter array")
const visibleTodos = filterTodos(todos, tab)
console.timeEnd("filter array")`}
          />
        </div>

        <div className="info-box">
          <strong>💡 Regla general:</strong> Si el cálculo toma más de 1ms,
          podría tener sentido memoizarlo.
        </div>
      </section>

      <section className="section">
        <h2>🔄 Evitando que un efecto se ejecute con frecuencia</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = useMemo(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia

  useEffect(() => {
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // ✅ Solo cambia cuando options cambia
  // ...
}`}
          />
        </div>

        <div className="success-card">
          <h3>✅ Alternativa mejor: Pasar objeto directamente</h3>
          <div className="code-block">
            <CodeBlock
              language="typescript"
              code={`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = { // ✅ ¡No necesitas useMemo o dependencias de objetos!
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    }

    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia
  // ...
}`}
            />
          </div>
        </div>

        <div className="info-box">
          <strong>💡 Best Practice:</strong> Cuando sea posible, es mejor mover
          objetos y funciones dentro del efecto para evitar tener que incluirlos
          como dependencias.
        </div>
      </section>

      <section className="section">
        <h2>🔄 Diferencia: useMemo vs useCallback</h2>
        <div className="table-container">
          <table className="methods-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>useMemo</th>
                <th>useCallback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>¿Qué cachea?</strong>
                </td>
                <td>El resultado de una función</td>
                <td>La función misma</td>
              </tr>
              <tr>
                <td>
                  <strong>Sintaxis</strong>
                </td>
                <td>
                  <code>useMemo(() =&gt; fn(), deps)</code>
                </td>
                <td>
                  <code>useCallback(fn, deps)</code>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Cuándo usar</strong>
                </td>
                <td>Cálculos costosos</td>
                <td>Pasar funciones a componentes memoizados</td>
              </tr>
              <tr>
                <td>
                  <strong>Equivalencia</strong>
                </td>
                <td>
                  <code>useMemo(() =&gt; fn, deps)</code>
                </td>
                <td>
                  <code>useCallback(fn, deps)</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <h2>💡 Tips y Best Practices</h2>
        <div className="tips-grid">
          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">⏱️</span>
            <h3>Mide primero</h3>
            <p>
              No uses useMemo prematuramente. Mide el rendimiento antes de
              optimizar
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🎯</span>
            <h3>Cálculos costosos</h3>
            <p>
              Úsalo solo para cálculos que toman más de 1ms
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">📦</span>
            <h3>Objetos y arrays</h3>
            <p>
              Ideal para evitar crear nuevos objetos en cada render
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🔄</span>
            <h3>Con useEffect</h3>
            <p>
              Útil para memoizar dependencias de efectos
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🚫</span>
            <h3>No abuses</h3>
            <p>
              La mayoría de cálculos son rápidos y no necesitan memoización
            </p>
          </div>

          <div className={`tip-card ${isDarkMode ? "dark" : "light"}`}>
            <span className="tip-icon">🎨</span>
            <h3>Arrays grandes</h3>
            <p>
              Perfecto para filtrar o transformar grandes cantidades de datos
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UseMemo
