import{u as m,r as u,j as e}from"./index-BQ6reGTr.js";import{H as v,t as p}from"./index-DNGCOx9y.js";const r=({code:s,language:c="typescript"})=>{const{isDarkMode:a}=m();return e.jsx(v,{theme:a?p.nightOwl:p.github,code:s,language:c,children:({className:h,style:l,tokens:i,getLineProps:d,getTokenProps:x})=>e.jsx("pre",{className:h,style:l,children:i.map((t,o)=>e.jsx("div",{...d({line:t}),children:t.map((j,n)=>e.jsx("span",{...x({token:j})},n))},o))})})},b=()=>{const{isDarkMode:s}=m(),c=u.useRef(null),a=u.useRef(null),[h,l]=u.useState(0),[i,d]=u.useState(!1);function x(){var n;(n=c.current)==null||n.focus()}function t(){if(i)return;const n=setInterval(()=>{l(f=>f+1)},1e3);a.current=n,d(!0)}function o(){a.current!==null&&(clearInterval(a.current),a.current=null,d(!1))}function j(){o(),l(0)}return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,children:[e.jsxs("header",{className:`useState-header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"🔗 useRef Hook"}),e.jsx("p",{className:"subtitle",children:"Permite a un componente conservar información que no se usa para el renderizado, y referenciar valores del DOM."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useRef?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useRef"})," te permite ",e.jsx("strong",{children:"referenciar un valor"})," ","que no es necesario para el renderizado. Las refs son perfectas para almacenar información que no afecta a la salida visual de tu componente."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Diferencia clave:"})," A diferencia del estado, las refs son ",e.jsx("strong",{children:"mutables"})," y su cambio no causa re-renderizado."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(r,{language:"typescript",code:`const ref = useRef(initialValue)

// Devuelve un objeto con una propiedad:
ref.current // Valor actual (mutable)`})}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Propiedades del Objeto Ref"}),e.jsxs("ul",{className:"anatomy-list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"current"})," - Inicialmente contiene el"," ",e.jsx("code",{children:"initialValue"}),". Puedes cambiarlo después."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"Mutable"})," - Puedes modificar"," ",e.jsx("code",{children:"ref.current"})," sin causar re-renderizado."]}),e.jsxs("li",{children:[e.jsx("span",{className:"param",children:"Persistente"})," - Se mantiene entre renderizados (a diferencia de variables regulares)."]})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⏱️ Ejemplo: Cronómetro con intervalRef"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Al utilizar ref puedes"," ",e.jsx("strong",{children:"almacenar información entre renderizados"})," (a diferencia de las variables regulares, que se reinician en cada renderizado)."]})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:"demo-value",children:[e.jsx("span",{className:"label",children:"⏱️ Tiempo:"}),e.jsxs("span",{className:"value large",children:[h,"s"]})]})}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn-primary",onClick:t,disabled:i,children:"▶️ Iniciar"}),e.jsx("button",{className:"btn-secondary",onClick:o,disabled:!i,children:"⏸️ Pausar"}),e.jsx("button",{className:"btn-secondary",onClick:j,children:"🔄 Reiniciar"})]})]}),e.jsx("div",{className:"code-block",children:e.jsx(r,{language:"typescript",code:`const intervalRef = useRef<number | null>(null)
const [count, setCount] = useState(0)

function handleStartClick() {
  const intervalId = setInterval(() => {
    setCount((c) => c + 1)
  }, 1000)
  intervalRef.current = intervalId // Guardar ID del interval
}

function handleStopClick() {
  const intervalId = intervalRef.current
  clearInterval(intervalId) // Usar el ID guardado
  intervalRef.current = null
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ No leas ni escribas refs durante el renderizado"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 Incorrecto: Leer/Escribir durante renderizado"}),e.jsx("div",{className:`code-block error ${s?"dark":"light"}`,children:e.jsx(r,{language:"typescript",code:`function MyComponent() {
  // 🚩 No escribas una ref durante el renderizado
  myRef.current = 123
  
  // 🚩 No leas una ref durante el renderizado
  return <h1>{myOtherRef.current}</h1>
}`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h3",{children:"✅ Correcto: Usar en efectos o event handlers"}),e.jsx("div",{className:`code-block success ${s?"dark":"light"}`,children:e.jsx(r,{language:"typescript",code:`function MyComponent() {
  useEffect(() => {
    // ✅ Puedes leer o escribir refs en efectos
    myRef.current = 123
  })
  
  function handleClick() {
    // ✅ Puedes leer o escribir refs en event handlers
    doSomething(myOtherRef.current)
  }
  
  return <button onClick={handleClick}>Click</button>
}`})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎨 Manipulación del DOM con ref"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Es particularmente común utilizar una ref para"," ",e.jsx("strong",{children:"manipular el DOM"}),". React tiene soporte incorporado para esto."]})}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",style:{width:"100%"},children:e.jsx("input",{ref:c,type:"text",placeholder:"Escribe algo aquí...",style:{width:"100%",padding:"0.75rem",borderRadius:"8px",border:"1px solid rgba(102, 126, 234, 0.3)",background:"rgba(26, 26, 46, 0.5)",color:"#e2e8f0",fontSize:"1rem",fontFamily:"inherit"}})}),e.jsx("button",{className:"btn-primary",onClick:x,children:"🎯 Focus the input"})]}),e.jsx("div",{className:"code-block",children:e.jsx(r,{language:"typescript",code:`import { useRef } from "react"

export default function Form() {
  const inputRef = useRef(null)

  function handleClick() {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚡ Evitar la recreación del contenido de las refs"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Si inicializas una ref con un objeto costoso, se creará en cada renderizado:"})}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:`code-block error ${s?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"❌ Se ejecuta en cada render"}),e.jsx(r,{language:"typescript",code:`function Video() {
  const playerRef = useRef(new VideoPlayer())
  // VideoPlayer se crea en CADA renderizado
}`})]}),e.jsxs("div",{className:`code-block success ${s?"dark":"light"}`,children:[e.jsx("div",{className:"code-label",children:"✅ Se ejecuta solo una vez"}),e.jsx(r,{language:"typescript",code:`function Video() {
  const playerRef = useRef(null)
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer()
  }
  // VideoPlayer se crea SOLO la primera vez
}`})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🔄 Diferencia: useState vs useRef"}),e.jsx("div",{className:"table-container",children:e.jsxs("table",{className:"methods-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Característica"}),e.jsx("th",{children:"useState"}),e.jsx("th",{children:"useRef"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Re-renderizado"})}),e.jsx("td",{children:"✅ Causa re-renderizado"}),e.jsx("td",{children:"❌ NO causa re-renderizado"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Mutabilidad"})}),e.jsx("td",{children:"❌ Inmutable (crear nuevo valor)"}),e.jsx("td",{children:"✅ Mutable (modificar .current)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Lectura/Escritura"})}),e.jsx("td",{children:"❌ No durante renderizado"}),e.jsx("td",{children:"❌ No durante renderizado"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Uso común"})}),e.jsx("td",{children:"UI y datos que afectan renderizado"}),e.jsx("td",{children:"Timers, DOM refs, valores auxiliares"})]})]})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🐛 Solución de Problemas"}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Pasar ref a componentes personalizados"}),e.jsx("p",{children:"Si intentas pasar una ref a tu propio componente, obtendrás un error:"})]}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h4",{children:"🚫 Esto no funciona"}),e.jsx("div",{className:`code-block error ${s?"dark":"light"}`,children:e.jsx(r,{language:"typescript",code:`const inputRef = useRef(null)

return <MyInput ref={inputRef} />
// ❌ Error: ref no es un prop válido`})})]}),e.jsxs("div",{className:"success-card",children:[e.jsx("h4",{children:"✅ Solución: Pasar como prop normal"}),e.jsx("div",{className:`code-block success ${s?"dark":"light"}`,children:e.jsx(r,{language:"typescript",code:`// En el padre:
const inputRef = useRef(null)
return <MyInput inputRef={inputRef} />

// En MyInput:
export default function MyInput({ value, onChange, inputRef }) {
  return <input value={value} onChange={onChange} ref={inputRef} />
}`})})]}),e.jsxs("div",{className:"info-box",style:{marginTop:"1rem"},children:[e.jsx("strong",{children:"💡 Nota avanzada:"})," Para usar ",e.jsx("code",{children:"ref"})," como prop real, necesitas ",e.jsx("code",{children:"forwardRef"})," (tema avanzado)."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Cuándo Usar"}),e.jsx("p",{children:"Para valores que NO afectan la UI: timers, IDs, elementos DOM"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🚫"}),e.jsx("h3",{children:"No en Renderizado"}),e.jsx("p",{children:"No leas ni escribas ref.current durante el renderizado"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"Persistencia"}),e.jsx("p",{children:"Los valores se mantienen entre renderizados sin causar cambios"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"✏️"}),e.jsx("h3",{children:"Mutable"}),e.jsx("p",{children:"Puedes cambiar .current directamente sin setState"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"🎨"}),e.jsx("h3",{children:"DOM Manipulation"}),e.jsx("p",{children:"Ideal para focus(), scroll(), mediciones, animaciones"})]}),e.jsxs("div",{className:`tip-card ${s?"dark":"light"}`,children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Inicialización Lazy"}),e.jsx("p",{children:"Usa verificación null para objetos costosos"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})};export{b as default};
