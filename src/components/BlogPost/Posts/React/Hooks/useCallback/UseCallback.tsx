import { useState, useCallback, memo } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"
import "./useCallback.css"

const CodeBlock = ({
  code,
  language = "typescript",
  isDarkMode,
}: {
  code: string
  language?: string
  isDarkMode: boolean
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

const UseCallback = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      className={`useState-container ${isDarkMode ? "dark" : "light"}`}
      id="useCallback"
    >
      <header className={`useState-header ${isDarkMode ? "dark" : "light"}`}>
        <h1>⚡ useCallback Hook</h1>
        <p className="subtitle">
          permite almacenar la definición de una función entre renderizados
          subsecuentes. optimización de rendimiento.
        </p>
      </header>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            isDarkMode={isDarkMode}
            code={`const cachedFn = useCallback(fn, dependencies)`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            isDarkMode={isDarkMode}
            code={`import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📦 parametros</h2>
        <div className="card">
          <p>
            <strong>fn:</strong> La función que deseas guardar en caché, si no
            cambia si las dependencias no han cambiado.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>dependencias:</strong> La lista de todos los valores
            reactivos dentro de la función fn. Los valores reactivos incluyen
            props, estado y todas las variables y funciones declaradas
            directamente dentro del cuerpo de tu componente.
          </p>
        </div>

        <div className="card">
          <p>
            Almacenar una función con useCallback solo es beneficioso en unos
            pocos casos:
          </p>
          <ul>
            <li>Al enviarla como prop al componente envuelto en memo.</li>
            <li>
              La función que estás enviando se usa más tarde como una
              dependencia de algún Hook. Por ejemplo, cuando otra función
              envuelta en useCallback depende de ella, o cuando dependes de
              dicha función desde useEffect.
            </li>
          </ul>
        </div>

        <div className="info-box">
          <strong>💡 Nota:</strong> No existe ningún beneficio en envolver una
          función en useCallback en otros casos. Aunque tampoco afecta
          negativamente hacerlo.
        </div>
      </section>

      <section className="section">
        <h2>📌 Ejemplo 1</h2>
        <h3>Omitir rerenderizados con useCallback y memo</h3>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`import { useState } from "react"
import ProductPage from "./ProductPage.js"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`import { useCallback } from "react"
import ShippingForm from "./ShippingForm.js"

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer]
  )

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
  // Imagina que esto envía una petición...
  console.log("POST /" + url)
  console.log(data)
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`import { memo, useState } from "react"

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

export default ShippingForm`}
          />
        </div>

        <DemoExample1 />
      </section>

      <section className="section">
        <h2>📌 Ejemplo 2</h2>
        <h3>Siempre rerenderizar un componente</h3>
        <div className="card">
          <p>
            para que puedas ver lo que sucede cuando un componente de React que
            estás renderizando es realmente lento. Intenta incrementar el
            contador y cambiar el tema.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`import { useState } from "react"
import ProductPage from "./ProductPage.js"

export default function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`import ShippingForm from "./ShippingForm.js"

export default function ProductPage({ productId, referrer, theme }) {
  function handleSubmit(orderDetails) {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    })
  }

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
}

function post(url, data) {
  // Imagina que esto envía una petición...
  console.log("POST /" + url)
  console.log(data)
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`import { memo, useState } from "react"

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

export default ShippingForm`}
          />
        </div>

        <DemoExample2 />

        <div className="info-box">
          <strong>💡 Nota:</strong> Generalmente, el código sin memoización
          funciona bien. Si tus interacciones son lo suficientemente rápidas, no
          necesitas de la memoización.
        </div>
      </section>

      <section className="section">
        <h2>🔄 Actualizar estado desde un callback en caché</h2>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos([...todos, newTodo]);
  }, [todos]);
  // ...`}
          />
        </div>

        <div className="card">
          <p>
            Por lo general es mejor que tus funciones almacenadas tengan el
            menor número de dependencias posibles.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = useCallback((text) => {
    const newTodo = { id: nextId++, text };
    setTodos(todos => [...todos, newTodo]);
  }, []); // ✅ No se necesita la dependencia \`todos\`
  // ...`}
          />
        </div>
      </section>

      <section className="section">
        <h2>⚡ Prevenir que un Efecto se dispare frecuentemente</h2>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
        return () => connection.disconnect();
  }, [createOptions]); // 🔴 Problema: Esta dependencia cambia en cada renderizado
  // ...`}
          />
        </div>

        <div className="card">
          <p>Para solventar esto</p>
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const createOptions = useCallback(() => {
    return {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    };
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia

  useEffect(() => {
    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // ✅ Solo cambia cuando createOptions cambia
  // ...`}
          />
        </div>

        <div className="info-box">
          <strong>💡 Mejor práctica:</strong> Esto asegura que la función
          createOptions sea la misma entre renderizados subsecuentes, siempre
          que roomId sea el mismo. Sin embargo, es aún mejor eliminar la
          necesidad de una dependencia de la función.
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    function createOptions() { // ✅ No es necesario usar useCallback ni dependencias de función
      return {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
      };
    }

    const options = createOptions();
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ Solo cambia cuando roomId cambia
  // ...`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🔧 Optimizar un Hook personalizado</h2>

        <div className="card">
          <p>
            Si estás escribiendo un Hook personalizado, es recomendable envolver
            cualquier función que el Hook devuelva con useCallback Esto asegura
            que los consumidores de tu Hook puedan optimizar su propio código
            cuando sea necesario. :
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function useRouter() {
  const { dispatch } = useContext(RouterStateContext)

  const navigate = useCallback(
    (url) => {
      dispatch({ type: "navigate", url })
    },
    [dispatch]
  )

  const goBack = useCallback(() => {
    dispatch({ type: "back" })
  }, [dispatch])

  return {
    navigate,
    goBack,
  }
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>🔧 Solución de problemas</h2>
        <h3>No te olvides de las dependencias</h3>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`function ProductPage({ productId, referrer }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);`}
          />
        </div>

        <div className="card">
          <p>si el problema persiste revisa las dependencias manualmenta</p>
        </div>

        <div className="code-block">
          <CodeBlock
            isDarkMode={isDarkMode}
            language="typescript"
            code={`console.log([productId, referrer])`}
          />
        </div>
      </section>
    </div>
  )
}

// Demo Example 1 - Con useCallback y memo
function DemoExample1() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPageMemo
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </div>
  )
}

function ProductPageMemo({
  productId,
  referrer,
  theme,
}: {
  productId: number
  referrer: string
  theme: string
}) {
  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer]
  )

  return (
    <div className={theme}>
      <ShippingFormMemo onSubmit={handleSubmit} />
    </div>
  )
}

const ShippingFormMemo = memo(function ShippingForm({
  onSubmit,
}: {
  onSubmit: any
}) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  const startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

// Demo Example 2 - Sin useCallback
function DemoExample2() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Modo Oscuro
      </label>
      <hr />
      <ProductPageNoMemo
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? "dark" : "light"}
      />
    </div>
  )
}

function ProductPageNoMemo({
  productId,
  referrer,
  theme,
}: {
  productId: number
  referrer: string
  theme: string
}) {
  function handleSubmit(orderDetails: any) {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    })
  }

  return (
    <div className={theme}>
      <ShippingFormNoMemo onSubmit={handleSubmit} />
    </div>
  )
}

const ShippingFormNoMemo = memo(function ShippingForm({
  onSubmit,
}: {
  onSubmit: any
}) {
  const [count, setCount] = useState(1)

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />")
  const startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // No hace nada por 500 ms para emular un componente lento
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Nota: ¡<code>ShippingForm</code> está artificialmente ralentizado!
        </b>
      </p>
      <label>
        Número de items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Calle:
        <input name="street" />
      </label>
      <label>
        Ciudad:
        <input name="city" />
      </label>
      <label>
        Código postal:
        <input name="zipCode" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  )
})

function post(url: string, data: any) {
  console.log("POST /" + url)
  console.log(data)
}

export default UseCallback
