import{u as j,j as e,r as b}from"./index-BQ6reGTr.js";import{H as w,t as i}from"./index-DNGCOx9y.js";const d=({code:s,language:n="typescript",isDarkMode:o})=>e.jsx(w,{theme:o?i.nightOwl:i.github,code:s,language:n,children:({className:c,style:t,tokens:l,getLineProps:h,getTokenProps:p})=>e.jsx("pre",{className:c,style:t,children:l.map((r,u)=>e.jsx("div",{...h({line:r}),children:r.map((x,m)=>e.jsx("span",{...p({token:x})},m))},u))})}),y=()=>{const{isDarkMode:s}=j();return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,id:"useId",children:[e.jsxs("header",{className:`header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"🆔 useId Hook"}),e.jsx("p",{className:"subtitle",children:"generar IDs únicos que se pueden pasar a los atributos de accesibilidad."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(d,{language:"typescript",code:"const id = useId()"})}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Advertencia:"})," useId no debe usarse para generar keys en una lista."]}),e.jsxs("div",{className:"info-box",children:[e.jsx("strong",{children:"⚠️ Advertencia:"})," useId currently cannot be used in async Server Components."]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Uso"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"Atributos de accesibilidad HTML como aria-describedby te permiten especificar que dos etiquetas están relacionadas entre sí. Por ejemplo, puedes especificar que un determinado elemento"})}),e.jsx("h3",{children:"Ejemplo"}),e.jsx("div",{className:"code-block",children:e.jsx(d,{language:"typescript",code:`import { useId } from "react"

function PasswordField() {
  const passwordHintId = useId()
  return (
    <>
      <label>
        Password:
        <input type="password" aria-describedby={passwordHintId} />
      </label>
      <p id={passwordHintId}>
        The password should contain at least 18 characters
      </p>
    </>
  )
}

export default function App() {
  return (
    <>
      <h2>Choose password</h2>
      <PasswordField />
      <h2>Confirm password</h2>
      <PasswordField />
    </>
  )
}`})}),e.jsx(g,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Atención"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"useId requiere un árbol de componentes idéntico en el servidor y el cliente cuando utilizas renderizado en el servidor. Si los árboles que se renderizan en el servidor y el cliente no coinciden exactamente, los IDs generados no coincidirán."})})]})]})};function a(){const s=b.useId();return e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsxs("label",{children:["Password:",e.jsx("input",{type:"password","aria-describedby":s,style:{marginLeft:"0.5rem",padding:"0.5rem",borderRadius:"4px",border:"1px solid #ccc"}})]}),e.jsx("p",{id:s,style:{fontSize:"0.875rem",color:"#666"},children:"The password should contain at least 18 characters"})]})}function g(){return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva"}),e.jsx("h2",{children:"Choose password"}),e.jsx(a,{}),e.jsx("h2",{children:"Confirm password"}),e.jsx(a,{})]})}export{y as default};
