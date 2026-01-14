import { useState, useEffect } from "react"
import "./useEffect.css"
import { useDarkMode } from "@/hooks"
import { BlogHeader, CodeBlock } from "@/blog-components"

const UseEffect = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useEffect">
      <BlogHeader
        title="🔄 useEffect Hook"
        subtitle="permite sincronizar un componente con un sistema externo."
      />

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useEffect(() => {
  const connection = createConnection(serverUrl, roomId)
  connection.connect()
  return () => {
    connection.disconnect()
  }
}, [serverUrl, roomId])
// ...`}
          />
        </div>

        <div className="card">
          <p>
            <strong>configuración:</strong> La función con la lógica de tu
            Efecto.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>dependencias opcionales:</strong> La lista de todos los
            valores reactivos referenciados dentro del código de configuración.
            Los valores reactivos incluyen props, estados, y todas las variables
            y funciones declaradas directamente dentro del cuerpo de tu
            componente.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📌 USO</h2>
        <h3>Conexión a un sistema externo</h3>

        <div className="card">
          <p>Estos sistemas no están controlados por React</p>
          <ul>
            <li>código de configuración</li>
            <li>código de limpieza</li>
            <li>dependencias</li>
          </ul>
        </div>

        <div className="card">
          <p>Este te permite mantener tu componente sincronizado</p>
          <ul>
            <li>
              Un temporizador gestionado con setInterval() y clearInterval().
            </li>
            <li>
              Una suscripción de eventos usando window.addEventListener() y
              window.removeEventListener().
            </li>
            <li>
              Una biblioteca de animación de terceros con una API como
              animation.start() y animation.reset().
            </li>
            <li>Controlar un cuadro de diálogo modal</li>
            <li>
              Monitorear visibilidad de un elemento por ejemplo para gestionar
              un IntersectionObserver
            </li>
            <li>Controlar un widget que no sea de React</li>
          </ul>
        </div>

        <div className="info-box">
          <strong>💡 Nota:</strong> Si no estas conectado a ningún sistema
          externo, probablemente no necesites un efecto.
        </div>

        <div className="card">
          <p>
            Los valores reactivos incluyen props y todas las variables y
            funciones declaradas directamente dentro de su componente.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234")

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, []) // 🔴 React Hook useEffect tiene dependencias faltantes: 'roomId' y 'serverUrl'
  // ...
}`}
          />
        </div>

        <div className="card">
          <p>
            Para eliminar una dependencia, tienes que "demostrar" al linter que
            no necesita ser una dependencia.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const serverUrl = "https://localhost:1234" // Ya no es un valor reactivo

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => connection.disconnect()
  }, [roomId]) // ✅ Todas las dependencias declaradas
  // ...
}`}
          />
        </div>

        <div className="info-box">
          <strong>💡 Nota:</strong> Un efecto con dependencias vacías no se
          vuelve a ejecutar cuando cambian las props o el estado del componente.
        </div>
      </section>

      <section className="section">
        <h2>🔄 Actualización del estado basado en el estado anterior de un efecto</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1) // Quieres incrementar el contador cada segundo...
    }, 1000)
    return () => clearInterval(intervalId)
  }, [count]) // 🚩 ... pero al especificar \`count\` como dependencia siempre reinician el intervalo.
  // ...
}`}
          />
        </div>

        <div className="card">
          <p>
            Como count es un valor reactivo debe especificarce en deps mejor
            pasar el actulizador de estado asi no es necesario count in deps
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`setCount((c) => c + 1) // ✅ Pasar un actualizador de estado`}
          />
        </div>

        <DemoCounter />
      </section>

      <section className="section">
        <h2>🗑️ Eliminación de dependencias de objetos innecesarios</h2>

        <div className="card">
          <p>
            Evita utilizar como dependencia un objeto creado durante el
            renderizado. En su lugar, crea el objeto dentro del Efecto
          </p>
        </div>

        <div className="info-box">
          <strong>⚠️ Nota:</strong> Este esta aun en experimental :
          Eliminación de dependencias de funciones innecesarias, hará que tu
          Efecto se vuelva a ejecutar después de cada rerenderizado
        </div>
      </section>

      <section className="section">
        <h2>📖 Lectura de las últimas props y el estado desde un Efecto</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function Page({ url, shoppingCart }) {
  useEffect(() => {
    logVisit(url, shoppingCart.length)
  }, [url, shoppingCart]) // ✅ Todas las dependencias declaradas
  // ...
}`}
          />
        </div>

        <div className="card">
          <p>
            Sin embargo, a veces querrá leer las últimas props y estados de un
            efecto sin "reaccionar" a ellos.
          </p>
        </div>

        <div className="card">
          <p>
            ¿Qué pasa si quieres registrar una nueva visita a la página después
            de cada cambio de url, pero no si sólo cambia el shoppingCart?
          </p>
        </div>

        <div className="card">
          <p>
            Para hacer esto usa useEffectEvent, y mueve el código que lea al
            shoppingCart dentro de tal Hook:
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function Page({ url, shoppingCart }) {
  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, shoppingCart.length)
  })

  useEffect(() => {
    onVisit(url)
  }, [url]) // ✅ Todas las dependencias declaradas
  // ...
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>💻 Mostrar contenidos diferentes en el servidor y en el cliente</h2>

        <div className="card">
          <p>
            En raras ocasiones, es posible que necesites mostrar un contenido
            diferente en el cliente. Por ejemplo, si su aplicación lee algunos
            datos del localStorage, no puede hacerlo en el servidor. Así es como
            típicamente se implementaría esto:
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (didMount) {
    // ... devolver JSX sólo para clientes ...
  }  else {
    // ... devolver el JSX inicial ...
  }
}`}
          />
        </div>

        <DemoSSR />
      </section>
    </div>
  )
}

// Demo Counter con actualizador de estado
function DemoCounter() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const intervalId = setInterval(() => {
      setCount((c) => c + 1) // ✅ Usando actualizador de estado
    }, 1000)

    return () => clearInterval(intervalId)
  }, [isRunning])

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva - Contador</h4>
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pausar" : "Iniciar"}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

// Demo SSR
function DemoSSR() {
  const [didMount, setDidMount] = useState(false)

  useEffect(() => {
    setDidMount(true)
  }, [])

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva - SSR</h4>
      <div>
        {didMount ? (
          <p>✅ Renderizado en el cliente (puede acceder a localStorage)</p>
        ) : (
          <p>⏳ Renderizado inicial (servidor o primera carga)</p>
        )}
        <p>
          <small>Estado: {didMount ? "Montado" : "No montado"}</small>
        </p>
      </div>
    </div>
  )
}

export default UseEffect
