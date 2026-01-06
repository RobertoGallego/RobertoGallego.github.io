useOptimistic

permite actualizar la interfaz de usuario / UI de manera optimista de formularios.

```tsx
const [optimisticState, addOptimistic] = useOptimistic(state, updateFn)
```

```tsx
import { useOptimistic } from "react"

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // updateFn
    (currentState, optimisticValue) => {
      // combinado y devuelve el nuevo estado
      // con el valor optimista
    }
  )
}
```

state: el valor que se devolverá inicialmente y siempre que no haya acción pendiente.

updateFn: toma el estado actual y el valor optimista y devuelve el estado optimista resultante

output:

optimisticState: El estado optimista resultante.

addOptimistic es la función despachadora a llamar cuando tienes una actualización optimista.

Ejemplo:

```tsx
import { useOptimistic, useState, useRef, startTransition } from "react"
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
}
```
