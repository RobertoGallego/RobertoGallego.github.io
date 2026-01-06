import { useState, useTransition } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"
import "./useTransition.css"

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

const UseTransition = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useTransition">
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <h1>⚡ useTransition Hook</h1>
        <p className="subtitle">
          renderizar una parte de la interfaz de usuario en segundo plano.
        </p>
      </header>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="card">
          <p>
            transicion pendiente - marcar una actualizacion - no recibe
            parámetro.
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const [isPending, startTransition] = useTransition()`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`function TabContainer() {
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState("about")

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab)
    })
  }
  // ...
}`}
          />
        </div>

        <div className="card">
          <p>
            The function (update some state) passed to startTransition is called
            an "Action".
          </p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`      onClick={() => {
        startTransition(async () => {
          await submitAction();
        });
      }}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📌 Ejemplo 1</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useState, useTransition } from "react"
import { updateQuantity } from "./api"
import Item from "./Item"
import Total from "./Total"

export default function App({}) {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = async (newQuantity) => {
    // To access the pending state of a transition,
    // call startTransition again.
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { startTransition } from "react"

export default function Item({ action }) {
  function handleChange(event) {
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await action(event.target.value)
    })
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input type="number" onChange={handleChange} defaultValue={1} min={1} />
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Total({ quantity, isPending }) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : \`\${intl.format(quantity * 9999)}\`}
      </span>
    </div>
  )
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`export async function updateQuantity(newQuantity) {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity)
    }, 2000)
  })
}`}
          />
        </div>

        <DemoExample1 />
      </section>

      <section className="section">
        <h2>🚀 Construir un enrutador preparado para Suspense</h2>

        <div className="card">
          <p>This is recommended for three reasons:</p>
          <ul>
            <li>Transitions are interruptible</li>
            <li>Transitions prevent unwanted loading indicators</li>
            <li>Transitions wait for all pending actions</li>
          </ul>
          <p>Here is a simplified router example using Transitions for navigations.</p>
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { Suspense, useState, useTransition } from "react"
import IndexPage from "./IndexPage.js"
import ArtistPage from "./ArtistPage.js"
import Layout from "./Layout.js"

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  )
}

function Router() {
  const [page, setPage] = useState("/")
  const [isPending, startTransition] = useTransition()

  function navigate(url) {
    startTransition(() => {
      setPage(url)
    })
  }

  let content
  if (page === "/") {
    content = <IndexPage navigate={navigate} />
  } else if (page === "/the-beatles") {
    content = (
      <ArtistPage
        artist={{
          id: "the-beatles",
          name: "The Beatles",
        }}
      />
    )
  }
  return <Layout isPending={isPending}>{content}</Layout>
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>
}`}
          />
        </div>
      </section>
    </div>
  )
}

// Demo Example 1
function DemoExample1() {
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const updateQuantityAction = async (newQuantity: number) => {
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity)
      startTransition(() => {
        setQuantity(savedQuantity)
      })
    })
  }

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
      <div>
        <h3>Checkout</h3>
        <DemoItem action={updateQuantityAction} />
        <hr />
        <DemoTotal quantity={quantity} isPending={isPending} />
      </div>
    </div>
  )
}

function DemoItem({ action }: { action: (value: number) => void }) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = parseInt(event.target.value)
    if (!isNaN(newValue) && newValue > 0) {
      action(newValue)
    }
  }

  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="quantity">Quantity: </label>
      <input
        id="quantity"
        type="number"
        onChange={handleChange}
        defaultValue={1}
        min={1}
      />
    </div>
  )
}

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

function DemoTotal({
  quantity,
  isPending,
}: {
  quantity: number
  isPending: boolean
}) {
  return (
    <div className="total">
      <span>Total:</span>
      <span>
        {isPending ? "🌀 Updating..." : `${intl.format(quantity * 9999)}`}
      </span>
    </div>
  )
}

async function updateQuantity(newQuantity: number): Promise<number> {
  return new Promise((resolve) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity)
    }, 2000)
  })
}

export default UseTransition
