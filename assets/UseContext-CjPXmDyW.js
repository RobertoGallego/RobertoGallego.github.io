import{u as d,r as o,j as e}from"./index-BQ6reGTr.js";import{H as v,t as l}from"./index-DNGCOx9y.js";const t=({code:s,language:n="typescript"})=>{const{isDarkMode:c}=d();return e.jsx(v,{theme:c?l.nightOwl:l.github,code:s,language:n,children:({className:r,style:a,tokens:u,getLineProps:x,getTokenProps:m})=>e.jsx("pre",{className:r,style:a,children:u.map((i,h)=>e.jsx("div",{...x({line:i}),children:i.map((p,j)=>e.jsx("span",{...m({token:p})},j))},h))})})},C=o.createContext("dark"),k=o.createContext(null),b=()=>{const{isDarkMode:s}=d(),[n,c]=o.useState("dark"),[r,a]=o.useState(null);return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"🌐 useContext Hook"}),e.jsx("p",{className:"subtitle",children:"Te permite leer y suscribirte a un contexto desde tu componente."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useContext?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useContext"})," te permite leer información de un contexto creado previamente con ",e.jsx("code",{children:"createContext"}),". Es ideal para compartir datos entre componentes sin pasar props manualmente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," React rerenderiza automáticamente todos los hijos que usen un contexto particular cuando su valor cambia."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`const value = useContext(SomeContext)

// SomeContext: el contexto que creaste previamente con createContext
// Devuelve: el valor del contexto para el componente que lo llama`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Parámetros"}),e.jsx("ul",{className:"anatomy-list",children:e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"SomeContext"})," - El contexto que creaste previamente con ",e.jsx("code",{children:"createContext"})]})}),e.jsx("h3",{style:{marginTop:"1.5rem"},children:"Retorna"}),e.jsxs("p",{style:{marginTop:"0.5rem"},children:["El valor del contexto para el componente que lo llama, determinado por el ",e.jsx("code",{children:"value"})," del Provider más cercano en el árbol."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Cuidado"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"Punto importante sobre Providers"}),e.jsxs("p",{children:["La llamada de ",e.jsx("code",{children:"useContext()"})," en un componente no es afectada por los proveedores devueltos desde el mismo componente. El"," ",e.jsx("code",{children:"<Context.Provider>"})," correspondiente debe estar"," ",e.jsx("strong",{children:"por encima"})," del componente que hace la llamada."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📖 Ejemplo Básico"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`import { createContext, useContext } from "react"

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
}`})}),e.jsx(C.Provider,{value:n,children:e.jsxs("div",{className:"demo-card",children:[e.jsxs("div",{style:{padding:"1.5rem",borderRadius:"12px",background:n==="dark"?"rgba(30, 30, 40, 0.8)":"rgba(240, 240, 245, 0.8)",marginBottom:"1rem"},children:[e.jsxs("h3",{style:{margin:"0 0 1rem 0",color:n==="dark"?"#ffa07a":"#762d20"},children:["Theme: ",n]}),e.jsx("p",{style:{margin:0,color:n==="dark"?"#d1d5db":"#374151"},children:"Este panel usa el tema del contexto"})]}),e.jsx("button",{className:"btn-primary",onClick:()=>c(n==="dark"?"light":"dark"),children:"Cambiar tema"})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Actualizar datos del contexto"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para actualizar el contexto, necesitas combinarlo con el estado. Pasa el estado y su función actualizadora a través del contexto."})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`function MyPage() {
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
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Actualizar un objeto"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`import { createContext, useContext, useState } from "react"

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
}`})}),e.jsx(k.Provider,{value:{currentUser:r,setCurrentUser:a},children:e.jsx("div",{className:"demo-card",children:r!==null?e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{fontSize:"1.25rem",marginBottom:"1rem"},children:["✅ Iniciaste sesión como ",e.jsx("strong",{children:r.name})]}),e.jsx("button",{className:"btn-secondary",onClick:()=>a(null),children:"Cerrar sesión"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginBottom:"1rem"},children:"No has iniciado sesión"}),e.jsx("button",{className:"btn-primary",onClick:()=>a({name:"Advika"}),children:"Iniciar sesión como Advika"})]})})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎛️ Múltiples contextos"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes tener múltiples contextos en tu aplicación. Es común extraerlos en un único componente Provider."})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`import { createContext, useContext, useReducer } from "react"

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
]`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Best Practice:"})," En aplicaciones más grandes, es común combinar el contexto con un reducer para extraer la lógica relacionada con algún estado fuera de los componentes."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🌳 Sobreescribir contexto para una parte del árbol"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Puedes anidar providers del mismo contexto para sobreescribir su valor en una parte específica del árbol de componentes."})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`import { createContext, useContext } from "react"

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
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📊 Encabezados anidados automáticamente"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:'Puedes "acumular" información cuando anidas proveedores de contexto. Esto es útil para cosas como niveles de encabezado automáticos.'})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{language:"typescript",code:`<section className="section">
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
}`})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 Patrón útil:"})," Cada vez que el provider se anida, el nivel aumenta +1, permitiendo control automático sobre elementos como el tamaño de texto."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Optimizar rerenderizados"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Cuando pasas objetos y funciones a través del contexto, puedes causar rerenderizados innecesarios. Usa ",e.jsx("code",{children:"useMemo"})," y"," ",e.jsx("code",{children:"useCallback"})," para optimizar."]})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Crea nuevo objeto cada render"}),e.jsx(t,{language:"typescript",code:`function MyApp() {
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
}`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Memoiza el valor del contexto"}),e.jsx(t,{language:"typescript",code:`function MyApp() {
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
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cuándo Usar"}),e.jsx("p",{children:"Para compartir datos entre muchos componentes sin pasar props"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🌳"}),e.jsx("h3",{children:"Provider Arriba"}),e.jsx("p",{children:"El Provider debe estar por encima del componente que lo consume"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Auto Rerender"}),e.jsx("p",{children:"React rerenderiza automáticamente cuando el contexto cambia"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Múltiples Contextos"}),e.jsx("p",{children:"Puedes usar varios contextos diferentes en una app"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Optimización"}),e.jsx("p",{children:"Usa useMemo/useCallback para valores complejos"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎛️"}),e.jsx("h3",{children:"Con Reducer"}),e.jsx("p",{children:"Combina con useReducer para lógica de estado compleja"})]})]})]})]})};export{b as default};
