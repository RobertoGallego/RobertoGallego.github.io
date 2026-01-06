import { useOptimistic, useState, useRef, startTransition } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { useDarkMode } from "@/hooks"
import "./useOptimistic.css"

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

const UseOptimistic = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useOptimistic">
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <h1>⚡ useOptimistic Hook</h1>
        <p className="subtitle">
          permite actualizar la interfaz de usuario / UI de manera optimista de
          formularios.
        </p>
      </header>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`const [optimisticState, addOptimistic] = useOptimistic(state, updateFn)`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useOptimistic } from "react"

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // combinado y devuelve el nuevo estado
      // con el valor optimista
    }
  )
}`}
          />
        </div>
      </section>

      <section className="section">
        <h2>📦 Parámetros</h2>
        <div className="card">
          <p>
            <strong>state:</strong> el valor que se devolverá inicialmente y
            siempre que no haya acción pendiente.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>updateFn:</strong> toma el estado actual y el valor
            optimista y devuelve el estado optimista resultante
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📤 Output</h2>
        <div className="card">
          <p>
            <strong>optimisticState:</strong> El estado optimista resultante.
          </p>
        </div>

        <div className="card">
          <p>
            <strong>addOptimistic:</strong> es la función despachadora a llamar
            cuando tienes una actualización optimista.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📌 Ejemplo</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useOptimistic, useState, useRef, startTransition } from "react"
import { deliverMessage } from "./actions.js"

function Thread({ messages, sendMessageAction }) {
  const formRef = useRef()
  function formAction(formData) {
    addOptimisticMessage(formData.get("message"))
    formRef.current.reset()
    startTransition(async () => {
      await sendMessageAction(formData)
    })
  }
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      {
        text: newMessage,
        sending: true,
      },
      ...state,
    ]
  )

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Enviando...)</small>}
        </div>
      ))}
    </>
  )
}

export default function App() {
  const [messages, setMessages] = useState([
    { text: "¡Hola!", sending: false, key: 1 },
  ])
  async function sendMessageAction(formData) {
    const sentMessage = await deliverMessage(formData.get("message"))
    startTransition(() => {
      setMessages((messages) => [{ text: sentMessage }, ...messages])
    })
  }
  return <Thread messages={messages} sendMessageAction={sendMessageAction} />
}`}
          />
        </div>

        <DemoOptimistic />
      </section>
    </div>
  )
}

// Demo Component
interface Message {
  text: string
  sending?: boolean
}

function DemoOptimistic() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola!", sending: false },
  ])

  async function sendMessageAction(formData: FormData) {
    const message = formData.get("message") as string
    const sentMessage = await deliverMessage(message)
    startTransition(() => {
      setMessages((messages) => [{ text: sentMessage }, ...messages])
    })
  }

  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
      <DemoThread messages={messages} sendMessageAction={sendMessageAction} />
    </div>
  )
}

function DemoThread({
  messages,
  sendMessageAction,
}: {
  messages: Message[]
  sendMessageAction: (formData: FormData) => Promise<void>
}) {
  const formRef = useRef<HTMLFormElement>(null)

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage: string) => [
      {
        text: newMessage,
        sending: true,
      },
      ...state,
    ]
  )

  async function formAction(formData: FormData) {
    const message = formData.get("message") as string
    if (!message.trim()) return

    addOptimisticMessage(message)
    formRef.current?.reset()
    startTransition(async () => {
      await sendMessageAction(formData)
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formAction(formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        {optimisticMessages.map((message, index) => (
          <div key={index} style={{ padding: "0.5rem 0" }}>
            {message.text}
            {!!message.sending && <small> (Enviando...)</small>}
          </div>
        ))}
      </div>
    </>
  )
}

async function deliverMessage(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message)
    }, 1000)
  })
}

export default UseOptimistic
