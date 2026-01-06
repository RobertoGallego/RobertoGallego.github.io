import{u as j,r as h,j as e}from"./index-BQ6reGTr.js";import{H as g,t as x}from"./index-DNGCOx9y.js";const t=({code:s,language:c="typescript",isDarkMode:n})=>e.jsx(g,{theme:n?x.nightOwl:x.github,code:s,language:c,children:({className:r,style:i,tokens:l,getLineProps:o,getTokenProps:u})=>e.jsx("pre",{className:r,style:i,children:l.map((a,d)=>e.jsx("div",{...o({line:a}),children:a.map((m,p)=>e.jsx("span",{...u({token:m})},p))},d))})}),v=[{id:0,text:"Visitar Kafka Museum",done:!0},{id:1,text:"Ver show de marionetas",done:!1},{id:2,text:"Foto del muro de Lennon",done:!1}];let N=3;function k(s,c){switch(c.type){case"added":return[...s,{id:c.id,text:c.text,done:!1}];case"changed":return s.map(n=>n.id===c.task.id?c.task:n);case"deleted":return s.filter(n=>n.id!==c.id);default:throw Error("Unknown action: "+c.type)}}const b=()=>{const{isDarkMode:s}=j(),[c,n]=h.useReducer(k,v),[r,i]=h.useState([]);function l(){const a={type:"added",id:N++,text:"Nueva tarea de ejemplo"};i([]),i([`✅ Despachando acción: ${JSON.stringify(a)}`]),n(a),setTimeout(()=>{i(d=>[...d,`📦 Estado actualizado con ${c.length+1} tareas`])},100)}function o(a){n({type:"changed",task:{...a,done:!a.done}})}function u(a){n({type:"deleted",id:a})}return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"🔄 useReducer Hook"}),e.jsx("p",{className:"subtitle",children:"Para componentes con muchas actualizaciones de estado, consolida toda la lógica en una única función reducer."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useReducer?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useReducer"})," te permite consolidar toda la"," ",e.jsx("strong",{children:"lógica de actualización de estado"})," fuera del componente en una única función llamada ",e.jsx("strong",{children:"reducer"}),"."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Los componentes con muchas actualizaciones de estado distribuidas en varios controladores de eventos pueden beneficiarse de useReducer."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`const [state, dispatch] = useReducer(reducer, initialState)

// Parámetros:
// - reducer: función que contiene la lógica de actualización
// - initialState: estado inicial

// Devuelve:
// - state: el estado actual
// - dispatch: función para despachar acciones`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔀 De useState a useReducer"}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Antes: múltiples useState"}),e.jsx(t,{isDarkMode:s,language:"typescript",code:`const [tasks, setTasks] = useState(initialTasks)

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
}`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Después: un useReducer"}),e.jsx(t,{isDarkMode:s,language:"typescript",code:`const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

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
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚙️ Función Reducer"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["El reducer recibe el ",e.jsx("strong",{children:"estado actual"})," y una"," ",e.jsx("strong",{children:"acción"}),", y devuelve el ",e.jsx("strong",{children:"nuevo estado"}),":"]})}),e.jsx("div",{className:"code-block",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function tasksReducer(tasks, action) {
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
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎮 Demo Interactiva: Itinerario en Praga"}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{style:{width:"100%"},children:[e.jsxs("h3",{style:{color:"#667eea",marginBottom:"1rem"},children:["📋 Tareas (",c.length,")"]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:c.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",background:"rgba(102, 126, 234, 0.1)",borderRadius:"8px",border:"1px solid rgba(102, 126, 234, 0.3)"},children:[e.jsx("input",{type:"checkbox",checked:a.done,onChange:()=>o(a),style:{cursor:"pointer",width:"18px",height:"18px"}}),e.jsx("span",{style:{flex:1,textDecoration:a.done?"line-through":"none",opacity:a.done?.6:1,color:"#e2e8f0"},children:a.text}),e.jsx("button",{onClick:()=>u(a.id),className:"btn-secondary",style:{padding:"0.5rem 1rem",fontSize:"0.875rem"},children:"🗑️"})]},a.id))})]})}),e.jsx("button",{className:"btn-primary",onClick:l,children:"➕ Agregar Tarea"}),r.length>0&&e.jsxs("div",{className:"console-output",children:[e.jsx("div",{className:"console-header",children:"📺 Console Output:"}),r.map((a,d)=>e.jsxs("div",{className:"log-line",children:["→ ",a]},d))]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Estado es de Solo Lectura"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 No mutes el estado directamente"}),e.jsx("div",{className:"code-block error",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 MAL: mutando el objeto directamente
      state.age = state.age + 1
      return state
    }
  }
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Siempre devuelve nuevos objetos"}),e.jsx("div",{className:"code-block success",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ BIEN: devolviendo nuevo objeto
      return {
        ...state,
        age: state.age + 1
      }
    }
  }
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Evitar Recrear el Estado Inicial"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"React guarda el estado inicial una vez y lo ignora en renderizados siguientes:"})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Se ejecuta en cada render (ineficiente)"}),e.jsx(t,{isDarkMode:s,language:"typescript",code:`function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer, 
    createInitialState(username)
  )
  // createInitialState se llama en cada render
}`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Se ejecuta solo una vez"}),e.jsx(t,{isDarkMode:s,language:"typescript",code:`function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  )
  // Pasa la función, no el resultado de llamarla
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🐛 Solución de Problemas"}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"1️⃣ El registro me da el valor de estado antiguo"}),e.jsx("p",{children:"El estado no se actualiza inmediatamente después de dispatch. Si necesitas el siguiente estado, calcúlalo manualmente:"})]}),e.jsx("div",{className:"code-block",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function handleClick() {
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
console.log(nextState) // { age: 43 }`})})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"2️⃣ Despaché una acción pero la pantalla no se actualiza"}),e.jsxs("p",{children:["React ignora tu actualización si el siguiente estado es igual al anterior (comparación ",e.jsx("code",{children:"Object.is"}),"). Esto ocurre cuando mutas directamente:"]})]}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h4",{children:"🚫 Objeto mutado"}),e.jsx("div",{className:"code-block error",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function reducer(state, action) {
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
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h4",{children:"✅ Nuevo objeto creado"}),e.jsx("div",{className:"code-block success",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function reducer(state, action) {
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
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"3️⃣ Array mutado"}),e.jsx("p",{children:"Los arrays también deben ser reemplazados, no mutados:"})]}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h4",{children:"🚫 Array mutado con push"}),e.jsx("div",{className:"code-block error",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function reducer(state, action) {
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
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h4",{children:"✅ Nuevo array creado"}),e.jsx("div",{className:"code-block success",children:e.jsx(t,{isDarkMode:s,language:"typescript",code:`function reducer(state, action) {
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
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cuándo Usar"}),e.jsx("p",{children:"Ideal cuando tienes múltiples actualizaciones de estado relacionadas"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔒"}),e.jsx("h3",{children:"Inmutabilidad"}),e.jsx("p",{children:"Siempre devuelve nuevos objetos/arrays, nunca mutes"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Acciones Descriptivas"}),e.jsx("p",{children:"Usa nombres claros para los tipos de acción"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🧪"}),e.jsx("h3",{children:"Fácil de Testear"}),e.jsx("p",{children:"Los reducers son funciones puras, fáciles de testear"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Estado Inicial Lazy"}),e.jsx("p",{children:"Pasa la función, no el resultado de llamarla"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"De useState a useReducer"}),e.jsx("p",{children:"Si useState se vuelve complejo, considera migrar a useReducer"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})};export{b as default};
