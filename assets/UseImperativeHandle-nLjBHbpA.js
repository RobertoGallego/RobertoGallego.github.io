import{u as f,r as c,j as e}from"./index-BQ6reGTr.js";import{H as v,t as d}from"./index-DNGCOx9y.js";const o=({code:s,language:a="typescript",isDarkMode:n})=>e.jsx(v,{theme:n?d.nightOwl:d.github,code:s,language:a,children:({className:r,style:i,tokens:p,getLineProps:u,getTokenProps:m})=>e.jsx("pre",{className:r,style:i,children:p.map((l,x)=>e.jsx("div",{...u({line:l}),children:l.map((h,j)=>e.jsx("span",{...m({token:h})},j))},x))})}),t=c.forwardRef((s,a)=>{const n=c.useRef(null);return c.useImperativeHandle(a,()=>({focus(){var r;(r=n.current)==null||r.focus()},scrollIntoView(){var r;(r=n.current)==null||r.scrollIntoView()}}),[]),e.jsx("input",{...s,ref:n})});t.displayName="MyInput";const I=()=>{const{isDarkMode:s}=f(),a=c.useRef(null);function n(){var i;(i=a.current)==null||i.focus()}function r(){var i;(i=a.current)==null||i.scrollIntoView()}return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,children:[e.jsxs("header",{className:`header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"🎯 useImperativeHandle Hook"}),e.jsx("p",{className:"subtitle",children:"Te permite personalizar el identificador expuesto como una ref."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📚 ¿Qué es useImperativeHandle?"}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:[e.jsx("code",{children:"useImperativeHandle"})," te permite"," ",e.jsx("strong",{children:"personalizar el identificador ref"})," que se expone a los componentes padres. En lugar de exponer todo el nodo DOM, puedes exponer solo métodos específicos."]}),e.jsxs("div",{className:"highlight-box",children:[e.jsx("strong",{children:"✨ Importante:"})," Llama a useImperativeHandle en el nivel superior de tu componente para personalizar el identificador ref que se expone."]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(o,{isDarkMode:s,language:"typescript",code:`useImperativeHandle(ref, createHandle, dependencies?)

// Parámetros:
// - ref: La ref que recibiste como prop
// - createHandle: identificador ref que quieres exponer
// - dependencies: valores reactivos`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📋 Exponer un identificador ref personalizado"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Para exponer un nodo DOM al elemento padre, pasa la prop ref al nodo y personaliza qué métodos exponer:"})}),e.jsx("div",{className:"code-block",children:e.jsx(o,{isDarkMode:s,language:"typescript",code:`import { useRef, useImperativeHandle } from "react"

function MyInput({ ref, ...props }) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input {...props} ref={inputRef} />
}

export default MyInput`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎮 Demo Interactiva"}),e.jsxs("div",{className:"demo-card",children:[e.jsx("div",{className:"demo-display",style:{width:"100%"},children:e.jsx(t,{ref:a,type:"text",placeholder:"Input con métodos personalizados...",style:{width:"100%",padding:"0.75rem",borderRadius:"8px",border:"1px solid rgba(102, 126, 234, 0.3)",background:"rgba(26, 26, 46, 0.5)",color:"#e2e8f0",fontSize:"1rem",fontFamily:"inherit"}})}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn-primary",onClick:n,children:"🎯 Focus"}),e.jsx("button",{className:"btn-secondary",onClick:r,children:"📜 Scroll Into View"})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📝 Ejemplo Completo"}),e.jsx("div",{className:"code-block",children:e.jsx(o,{isDarkMode:s,language:"typescript",code:`import { useRef, useImperativeHandle } from "react"

function MyInput({ ref }) {
  const inputRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        },
      }
    },
    []
  )

  return <input ref={inputRef} />
}`})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ No sobreutilizar las refs"}),e.jsxs("div",{className:"warning-card",children:[e.jsx("h3",{children:"🚫 Cuándo NO usar refs"}),e.jsxs("p",{children:["Solo debes usar las refs para ",e.jsx("strong",{children:"comportamientos imperativos"})," ","que no puedes expresar como props:"]}),e.jsxs("ul",{style:{marginTop:"1rem",paddingLeft:"1.5rem"},children:[e.jsx("li",{children:"✅ Desplazarse a un nodo"}),e.jsx("li",{children:"✅ Enfocar un nodo"}),e.jsx("li",{children:"✅ Activar una animación"}),e.jsx("li",{children:"✅ Seleccionar texto"})]})]}),e.jsxs("div",{className:"card",style:{marginTop:"1.5rem"},children:[e.jsx("h3",{children:"💡 Mejor Práctica: Usa Props cuando sea posible"}),e.jsx("p",{children:"Si puedes expresar algo como una prop, no deberías usar una ref."})]}),e.jsxs("div",{className:"comparison",children:[e.jsxs("div",{className:"code-block error",children:[e.jsx("div",{className:"code-label",children:"❌ Mal: Usar ref para estado"}),e.jsx(o,{isDarkMode:s,language:"typescript",code:`// No hagas esto:
<Modal ref={modalRef} />

// Y luego:
modalRef.current.open()
modalRef.current.close()`})]}),e.jsxs("div",{className:"code-block success",children:[e.jsx("div",{className:"code-label",children:"✅ Bien: Usar props"}),e.jsx(o,{isDarkMode:s,language:"typescript",code:`// Mejor:
<Modal isOpen={isOpen} />

// Y controlar con estado:
const [isOpen, setIsOpen] = useState(false)`})]})]}),e.jsxs("div",{className:"info-box",style:{marginTop:"1rem"},children:[e.jsx("strong",{children:"💡 Consejo:"})," En vez de exponer un identificador imperativo como ",e.jsx("code",{children:"{ open, close }"})," del componente Modal, es mejor tomar ",e.jsx("code",{children:"isOpen"})," como una prop, algo como"," ",e.jsx("code",{children:"<Modal isOpen={isOpen} />"}),". Efectos puede ayudarte a exponer comportamientos imperativos via props."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Tips y Best Practices"}),e.jsxs("div",{className:"tips-grid",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🎯"}),e.jsx("h3",{children:"Comportamientos Imperativos"}),e.jsx("p",{children:"Usa solo para acciones que no se pueden expresar como props"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔒"}),e.jsx("h3",{children:"Encapsulación"}),e.jsx("p",{children:"Expón solo los métodos necesarios, no todo el DOM"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"📦"}),e.jsx("h3",{children:"Dependencies"}),e.jsx("p",{children:"Pasa array de dependencias para optimizar"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🚫"}),e.jsx("h3",{children:"Evita Sobreuso"}),e.jsx("p",{children:"Prefiere props sobre refs siempre que sea posible"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"🔄"}),e.jsx("h3",{children:"forwardRef"}),e.jsx("p",{children:"Necesario para pasar refs a componentes personalizados"})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("span",{className:"tip-icon",children:"⚡"}),e.jsx("h3",{children:"Casos de Uso"}),e.jsx("p",{children:"Focus, scroll, animaciones, selección de texto"})]})]})]}),e.jsx("footer",{className:"footer",children:e.jsx("p",{children:"📚 Curso de React 2025 | Creado con ❤️ para la comunidad hispanohablante"})})]})};export{I as default};
