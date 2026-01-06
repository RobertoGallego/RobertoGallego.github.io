useContext

te permite leer y suscribirte a un contexto desde tu componente.

```tsx
const value = useContext(SomeContext)
```

SomeContext el contexto que creaste previamente con createContext

devuelve el valor del contexto para el componente que lo llama.

cuidado

La llamada de useContext() en un componente no es afectada por los proveedores devueltos desde el mismo componente. El <Context.Provider>

React rerenderiza automáticamente todos los hijos que usen un contexto particular

ejemplo

```tsx
import { createContext, useContext } from "react"

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
}
```

Actualizar los datos pasados a través del contexto

A menudo, querrás que el contexto cambie a través del tiempo. Para actualizar el contexto, necesitas combinarlo con el estado.

```tsx
function MyPage() {
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
}
```

actualizar un objeto

```tsx
import { createContext, useContext, useState } from "react"

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

function Form({ children }) {
  return (
    <Panel title="Bienvenido">
      <LoginButton />
    </Panel>
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
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}
```

podemos tener multiples contextos

puedes extraer los proveedores en un único componente.

En aplicaciones más grandes, es común combinar el contexto con un reducer para extraer la lógica relacionada con algún estado fuera de los componentes.

```tsx
import { createContext, useContext, useReducer } from "react"

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
]
```

Sobreescribir el contexto para una parte del árbol

```tsx
import { createContext, useContext } from "react"

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
}
```

Encabezados anidados automáticamente
Puedes “acumular” información cuando anidas proveedores de contexto.

```tsx
<section className="section">
  <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
</section>
```

cada vez que el provedor se anida este aumentara +1
asi poder tener diferente control sobre por ejemplo qe tipo de talla se pondra un texto

```tsx
const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('¡El encabezado debe estar dentro de un Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
```

Optimizar rerenderizados al pasar objetos y funciones 

Puedes pasar cualquier valor a través del contexto, incluyendo objetos y funciones.

a veces es bueno usar useCallback y useMeno para no renderizar nuevamente todo el useContext
