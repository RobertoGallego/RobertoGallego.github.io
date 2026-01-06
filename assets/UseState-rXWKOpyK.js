import{u as p,r as j,j as e}from"./index-BQ6reGTr.js";import{H as N,t as x}from"./index-DNGCOx9y.js";const v=`
const [state, setState] = useState(initialState)

// Ejemplos reales:
const [age, setAge] = useState(28)
const [name, setName] = useState("Taylor")
const [isOpen, setIsOpen] = useState(false)
const [todos, setTodos] = useState(() => handleExpensiveFunction())
`,i=({code:s,language:t="typescript"})=>{const{isDarkMode:n}=p();return e.jsx(N,{theme:n?x.nightOwl:x.github,code:s,language:t,children:({className:r,style:l,tokens:m,getLineProps:d,getTokenProps:u})=>e.jsx("pre",{className:r,style:l,children:m.map((h,a)=>e.jsx("div",{...d({line:h}),children:h.map((o,g)=>e.jsx("span",{...u({token:o})},g))},a))})})},c=({icon:s,title:t,description:n,isDarkMode:r})=>e.jsxs("div",{className:`tip-card ${r?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:s}),e.jsx("h3",{children:t}),e.jsx("p",{children:n})]}),f=()=>{const{isDarkMode:s}=p(),[t,n]=j.useState(0),[r,l]=j.useState(0),[m,d]=j.useState([]);function u(){d([]);const a=[];console.log("Antes de setCount:",t),a.push(`Antes de setCount: ${t}`),n(t+1),console.log("Después de setCount:",t),a.push(`Después de setCount: ${t}`),d(a),setTimeout(()=>{console.log("Después de 5 segundos:",t),d(o=>[...o,`Después de 5 segundos: ${t}`])},5e3)}function h(){l(a=>a+1),l(a=>a+1),l(a=>a+1)}return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"useState hook"}),e.jsx("p",{className:"subtitle",children:"El hook fundamental para manejar estado en componentes funcionales de React, podemos llamar useState múltiples veces para diferentes estados."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useState?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useState"})," te permite agregar ",e.jsx("strong",{children:"estado"})," a tus componentes funcionales. El estado es información que puede cambiar durante la vida del componente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Siempre se llama en el top-level del componente, nunca dentro de loops, condiciones o funciones anidadas."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(i,{language:"typescript",code:v})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Anatomía del Hook"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"state"})," - El valor actual del estado"]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"setState (state function)"})," - Función para actualizar el estado"]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"initialState"})," - Valor inicial (cualquier tipo)"]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Array Destructuring"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"useState usa array destructuring de JavaScript ES6:"})}),e.jsx("div",{className:"code-block",children:e.jsx(i,{language:"javascript",code:`// Array destructuring básico
let arr = ["John", "Smith"]
let [firstName, surname] = arr

console.log(firstName) // "John"
console.log(surname)   // "Smith"

// useState funciona igual
const [age, setAge] = useState(28)
//     ↑    ↑         ↑
//   valor función  hook`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Estado Inmutable"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 Nunca mutes el estado directamente"}),e.jsx("div",{className:`code-block error ${s?"dark":"light"}`,children:e.jsx(i,{language:"javascript",code:`// ❌ MAL - Mutación directa
position.x = 5
form.firstName = 'Taylor'
items.push(newItem)
items[0] = 'changed'`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Siempre crea nuevos valores"}),e.jsx("div",{className:`code-block success ${s?"dark":"light"}`,children:e.jsx(i,{language:"javascript",code:`// ✅ BIEN - Reemplazar con nuevo valor
setPosition({ x: 5, y: 10 })
setForm({ ...form, firstName: 'Taylor' })
setItems([...items, newItem])
setItems(items.map((item, i) => i === 0 ? 'changed' : item))`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Updater Functions"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Cuando el nuevo estado depende del anterior, usa una"," ",e.jsx("strong",{children:"función actualizadora"}),":"]})}),e.jsx("div",{className:"code-block",children:e.jsx(i,{language:"javascript",code:`// ✅ CORRECTO - Updater function
setNumber(n => n + 1)
setNumber(n => n + 1)
setNumber(n => n + 1)
// Result: +3 ✨

// ❌ INCORRECTO - Valor directo
setNumber(number + 1)
setNumber(number + 1)
setNumber(number + 1)
// Result: +1 (todas usan el mismo valor inicial)`})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"Número:"}),e.jsx("span",{className:"value large",children:r})]})}),e.jsx("button",{className:"btn-primary",onClick:h,children:"+3 (usando updater function)"})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⏱️ El Estado NO se actualiza inmediatamente"}),e.jsx("div",{className:"code-block",children:e.jsx(i,{language:"javascript",code:`function handleClick() {
  console.log(count)      // 0
  setCount(count + 1)     // Solicita re-render
  console.log(count)      // Todavía 0! 🤔
  
  setTimeout(() => {
    console.log(count)    // También 0! 😮
  }, 5000)
}`})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"Count:"}),e.jsx("span",{className:"value",children:t})]})}),e.jsx("button",{className:"btn-secondary",onClick:u,children:"Probar Demo"}),m.length>0&&e.jsxs("div",{className:`console-output ${s?"dark":"light"}`,children:[e.jsx("div",{className:"console-header",children:"📺 Console Output:"}),m.map((a,o)=>e.jsxs("div",{className:`log-line ${s?"dark":"light"}`,children:["→ ",a]},o))]})]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"💡 ¿Por qué?"})," React agrupa las actualizaciones de estado para optimizar el rendimiento. El estado se actualiza después de que el componente termina de ejecutarse."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎨 Actualizando Objetos"}),e.jsx("div",{className:"code-block",children:e.jsx(i,{language:"javascript",code:`// ✅ Spread operator - copia y sobrescribe
setPerson({
  ...person,
  firstName: e.target.value
})

// ✅ Propiedades dinámicas
setPerson({
  ...person,
  [e.target.name]: e.target.value
})

// ✅ Objetos anidados
setPerson({
  ...person,
  artwork: {
    ...person.artwork,
    city: 'New Delhi'
  }
})`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📋 Actualizando Arrays"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Operación"}),e.jsx("th",{children:"❌ Evitar (mutan)"}),e.jsx("th",{children:"✅ Preferir (inmutables)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Agregar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"push"}),", ",e.jsx("code",{children:"unshift"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"concat"}),", ",e.jsx("code",{children:"[...arr]"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Eliminar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"pop"}),", ",e.jsx("code",{children:"shift"}),", ",e.jsx("code",{children:"splice"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"filter"}),", ",e.jsx("code",{children:"slice"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Reemplazar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"splice"}),", ",e.jsx("code",{children:"arr[i] = ..."})]}),e.jsx("td",{children:e.jsx("code",{children:"map"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Ordenar"})}),e.jsxs("td",{children:[e.jsx("code",{children:"reverse"}),", ",e.jsx("code",{children:"sort"})]}),e.jsx("td",{children:"Copiar primero, luego ordenar"})]})]})]})}),e.jsx("div",{className:"code-block",children:e.jsx(i,{language:"javascript",code:`// ✅ Agregar
setItems([...items, newItem])
setItems([newItem, ...items]) // Al inicio

// ✅ Eliminar
setItems(items.filter(item => item.id !== id))

// ✅ Reemplazar/Actualizar
setItems(items.map(item => 
  item.id === id 
    ? { ...item, completed: true } 
    : item
))

// ✅ Ordenar (copiar primero!)
const sorted = [...items].sort((a, b) => 
  a.name.localeCompare(b.name)
)
setItems(sorted)`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Lazy Initial State"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Para cálculos costosos en el estado inicial, pasa una"," ",e.jsx("strong",{children:"función inicializadora"}),":"]})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:`code-block error ${s?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"❌ Se ejecuta en cada render"}),e.jsx(i,{language:"javascript",code:`const [todos, setTodos] = useState(
  createExpensiveTodos()
)`})]}),e.jsxs("div",{className:`code-block success ${s?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"✅ Se ejecuta solo una vez"}),e.jsx(i,{language:"javascript",code:`const [todos, setTodos] = useState(
  () => createExpensiveTodos()
)`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsx(c,{isDarkMode:s,icon:"🔢",title:"Múltiples Estados",description:"Puedes llamar useState múltiples veces en un componente"}),e.jsx(c,{isDarkMode:s,icon:"🔒",title:"Inmutabilidad",description:"Siempre crea nuevos valores, nunca modifiques directamente"}),e.jsx(c,{isDarkMode:s,icon:"⚡",title:"Updater Functions",description:"Úsalas cuando dependas del estado anterior"}),e.jsx(c,{isDarkMode:s,icon:"🔄",title:"useReducer",description:"Si tienes muchos setState relacionados, considera useReducer"}),e.jsx(c,{isDarkMode:s,icon:"⏰",title:"Actualización Asíncrona",description:"El estado no se actualiza inmediatamente después de setState"}),e.jsx(c,{isDarkMode:s,icon:"🎯",title:"Un Estado, Un Propósito",description:"Divide estados complejos en múltiples estados simples"})]})]})]})};export{f as default};
