import { useState, useDeferredValue, memo } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"
import "./useDeferredValue.css"

const CodeBlock = ({
  code,
  language = "typescript",
  isDarkMode,
}: {
  code: string
  language?: string
  isDarkMode?: boolean
}) => (
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

const UseDeferredValue = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useDeferredValue">
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <h1>⏱️ useDeferredValue Hook</h1>
        <p className="subtitle">
          permite realizar una actualización en diferido de una parte de la UI
        </p>
      </header>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const deferredValue = useDeferredValue(value, initialValue?)`}
          />
        </div>

        <div className="card">
          <p>
            <strong>value:</strong> valor a diferir
          </p>
        </div>

        <div className="card">
          <p>
            <strong>initialValue:</strong> valor del render inicial
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📤 Devuelve</h2>
        <div className="card">
          <p>
            <strong>currentValue:</strong> inicial value despues cuando value
            cambia, React no usa el nuevo valor inmediatamente.
          </p>
        </div>

        <div className="card">
          <p>
            Primero vuelve a renderizar con el valor anterior (el viejo), para
            mantener la interfaz fluida.
          </p>
        </div>

        <div className="card">
          <p>
            Después, en segundo plano, hace otro render y ahí sí devuelve el
            valor nuevo.
          </p>
        </div>

        <div className="card">
          <p>
            Sirve para evitar que actualizaciones pesadas bloqueen la UI.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>⚠️ Advertencias</h2>
        <div className="card">
          <p>
            <strong>En Transitions:</strong> no retrasa nada.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>Objetos nuevos cada render:</strong> causan renders extra.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>Cuando cambia el valor:</strong> usa el viejo primero.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>Con Suspense:</strong> si carga, sigues viendo el viejo.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>No frena fetches:</strong> solo difiere renders.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>Sin delay fijo:</strong> React trabaja enseguida en
            background.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>Effects:</strong> corren cuando se confirma el render
            diferido.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📌 Uso</h2>
        <h3>
          Mostrar contenido desactualizado mientras se carga el contenido
          actualizado
        </h3>

        <div className="card">
          <p>
            Llama a useDeferredValue en el nivel superior de tu componente para
            retrasar la actualización de alguna parte de tu UI.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { Suspense, useState, useDeferredValue } from "react"
import SearchResults from "./SearchResults.js"

export default function App() {
  const [query, setQuery] = useState("")
  const deferredQuery = useDeferredValue(query)
  const isStale = query !== deferredQuery
  return (
    <>
      <label>
        Buscar álbumes:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div
          style={{
            opacity: isStale ? 0.5 : 1,
            transition: isStale
              ? "opacity 0.2s 0.2s linear"
              : "opacity 0s 0s linear",
          }}
        >
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { use } from "react"
import { fetchData } from "./data.js"

export default function SearchResults({ query }) {
  if (query === "") {
    return null
  }
  const albums = use(fetchData(\`/search?q=\${query}\`))
  if (albums.length === 0) {
    return (
      <p>
        No matches for <i>"{query}"</i>
      </p>
    )
  }
  return (
    <ul>
      {albums.map((album) => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🔄 Diferir el re-renderizando una parte de la UI</h2>

        <div className="card">
          <p>
            Puedes utilizar useDeferredValue como medio para optimizar el
            rendimiento. Es útil cuando una parte de tu UI es más lenta a la
            hora de re-renderizar y no existe una forma fácil de optimizarlo a
            fin de evitar que otras partes de la UI se bloqueen.
          </p>
        </div>

        <h3>Re-renderizado diferido de la lista:</h3>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useState, useDeferredValue } from "react"
import SlowList from "./SlowList.js"

export default function App() {
  const [text, setText] = useState("")
  const deferredText = useDeferredValue(text)
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { memo } from "react"

const SlowList = memo(function SlowList({ text }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />")

  let items = []
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />)
  }
  return <ul className="items">{items}</ul>
})

function SlowItem({ text }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada durante 1 ms por ítem para emular un código extremadamente lento
  }

  return <li className="item">Text: {text}</li>
}

export default SlowList`}
          />
        </div>

        <div className="card">
          <p>
            Esto no hace que el re-renderizado de SlowList sea más rápido. Sin
            embargo indica a React que el re-renderizado de la lista puede se
            postergado para que no bloquee la introducción de nuevos valores al
            input. La actualización de la lista tendrá un retardo con respecto
            al nuevo valor introducido en el input y posteriormente se
            actualizará. Tal y como ocurría anteriormente, React intentará
            actualizar los resultados de la lista lo antes posible, pero no
            bloqueando al usuario de introducir nuevos valores en el input.
          </p>
        </div>

        <DemoWithDeferred />
      </section>

      <section className="section">
        <h2>❌ Re-renderizado de la lista sin optimizar</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useState } from "react"
import SlowList from "./SlowList.js"

export default function App() {
  const [text, setText] = useState("")
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { memo } from "react"

const SlowList = memo(function SlowList({ text }) {
  // Log once. The actual slowdown is inside SlowItem.
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />")

  let items = []
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />)
  }
  return <ul className="items">{items}</ul>
})

function SlowItem({ text }) {
  let startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada durante 1 ms por ítem para emular un código extremadamente lento
  }

  return <li className="item">Text: {text}</li>
}

export default SlowList`}
          />
        </div>

        <div className="info-box">
          <strong>💡 Nota:</strong> Esta optimización requiere que SlowList esté
          envuelto en memo.
        </div>

        <DemoWithoutDeferred />
      </section>

      <section className="section">
        <h2>🤔 ¿Qué diferencia "diferir un valor" respecto a hacer debounce y throttle?</h2>

        <div className="card">
          <p>Existen dos técnicas de optimización que podrías haber utilizado en esta situación:</p>
          <ul>
            <li>
              <strong>Debounce:</strong> esperar hasta que el usuario deje de
              escribir (durante, por ejemplo, un segundo) y actualizar la lista
              posteriormente.
            </li>
            <li>
              <strong>Throttle:</strong> Actualizar la lista un numero limitado
              de veces cada cierto tiempo (por ejemplo, como mucho, una vez por
              segundo).
            </li>
          </ul>
        </div>

        <div className="card">
          <p>
            Mientras que estas técnicas son útiles en algunos casos,
            useDeferredValue es mejor en cuanto a optimizar el proceso de
            renderizado ya que esta profundamente integrado con React y se
            adapta al dispositivo que utilice el usuario.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>Dispositivo rapido del user:</strong> rapida respuesta
          </p>
          <p>
            <strong>Dispositivo lento:</strong> respuesta lenta
          </p>
        </div>

        <div className="card">
          <p>
            En lugar de debounce o throttle, no requiere emplear un retardo
            fijo.
          </p>
        </div>

        <div className="info-box">
          <strong>💡 Nota:</strong> Si la optimización no ocurre durante el
          renderizado, debounce y throttle aún son útiles en ese caso. Por
          ejemplo, te permitirán realizar menos peticiones de red. También
          puedes utilizar estas técnicas al mismo tiempo.
        </div>
      </section>
    </div>
  )
}

// Demo con useDeferredValue
function DemoWithDeferred() {
  const [text, setText] = useState("")
  const deferredText = useDeferredValue(text)

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva - Con useDeferredValue</h4>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
      />
      <SlowList text={deferredText} />
    </div>
  )
}

// Demo sin useDeferredValue
function DemoWithoutDeferred() {
  const [text, setText] = useState("")

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva - Sin useDeferredValue</h4>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe algo..."
      />
      <SlowList text={text} />
    </div>
  )
}

const SlowList = memo(function SlowList({ text }: { text: string }) {
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />")

  const items = []
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />)
  }
  return <ul className="items">{items}</ul>
})

function SlowItem({ text }: { text: string }) {
  const startTime = performance.now()
  while (performance.now() - startTime < 1) {
    // No hace nada durante 1 ms por ítem para emular un código extremadamente lento
  }

  return <li className="item">Text: {text}</li>
}

export default UseDeferredValue
