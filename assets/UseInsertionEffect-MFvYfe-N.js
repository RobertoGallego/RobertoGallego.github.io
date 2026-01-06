import{u as m,j as e,r as p}from"./index-BQ6reGTr.js";import{H as f,t}from"./index-DNGCOx9y.js";const c=({code:s,language:n="typescript",isDarkMode:r})=>e.jsx(f,{theme:r?t.nightOwl:t.github,code:s,language:n,children:({className:l,style:a,tokens:d,getLineProps:o,getTokenProps:u})=>e.jsx("pre",{className:l,style:a,children:d.map((i,h)=>e.jsx("div",{...o({line:i}),children:i.map((j,x)=>e.jsx("span",{...u({token:j})},x))},h))})}),b=()=>{const{isDarkMode:s}=m();return e.jsxs("div",{className:`useState-container ${s?"dark":"light"}`,id:"useInsertionEffect",children:[e.jsxs("header",{className:`header ${s?"dark":"light"}`,children:[e.jsx("h1",{children:"💉 useInsertionEffect Hook"}),e.jsx("p",{className:"subtitle",children:"⚠️ Hook especializado para bibliotecas CSS-en-JS"}),e.jsx("p",{className:"subtitle",children:"permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout)."})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🎯 Sintaxis"}),e.jsx("div",{className:"code-block",children:e.jsx(c,{language:"typescript",code:"useInsertionEffect(setup, dependencies?)"})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📦 Parámetros"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"setup:"})," función con la lógica de efectos. Puede devolver opcionalmente una función de limpieza."]})}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:[e.jsx("strong",{children:"dependencies:"})," opcional. Lista de valores reactivos referenciados dentro de setup."]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📤 Devuelve"}),e.jsx("div",{className:"card",children:e.jsx("p",{children:"undefined"})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"⚠️ Advertencias"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Solo se ejecuta en el cliente, no en el servidor"}),e.jsx("li",{children:"No puedes actualizar estado desde dentro"}),e.jsx("li",{children:"Las referencias aún no se han adjuntado cuando se ejecuta"}),e.jsx("li",{children:"Puede ejecutarse antes o después de que el DOM se actualice"}),e.jsx("li",{children:"Dispara limpieza y setup un componente a la vez (intercalado)"})]})})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"📌 Uso"}),e.jsx("h3",{children:"Inyección de estilos dinámicos desde bibliotecas CSS-en-JS"}),e.jsx("div",{className:"code-block",children:e.jsx(c,{language:"typescript",code:`import { useInsertionEffect } from 'react'

// Dentro de tu biblioteca CSS-en-JS
function useCSS(rule) {
  useInsertionEffect(() => {
    // ... inyecta las etiquetas <style> aquí ...
  })
  return rule
}`})}),e.jsx("h3",{children:"Ejemplo completo:"}),e.jsx("div",{className:"code-block",children:e.jsx(c,{language:"typescript",code:`// En tu biblioteca CSS-en-JS
let isInserted = new Set()

function useCSS(rule) {
  useInsertionEffect(() => {
    if (!isInserted.has(rule)) {
      isInserted.add(rule)
      document.head.appendChild(getStyleForRule(rule))
    }
  })
  return rule
}

function Button() {
  const className = useCSS('...')
  return <div className={className} />
}`})}),e.jsx("h3",{children:"Con SSR (Server-Side Rendering):"}),e.jsx("div",{className:"code-block",children:e.jsx(c,{language:"typescript",code:`let collectedRulesSet = new Set()

function useCSS(rule) {
  if (typeof window === 'undefined') {
    collectedRulesSet.add(rule)
  }
  useInsertionEffect(() => {
    // inyectar en cliente
  })
  return rule
}`})}),e.jsx(S,{})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"✅ Buenas prácticas"}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:e.jsx("strong",{children:"✅ Usar solo en bibliotecas CSS-en-JS"})}),e.jsx("p",{children:e.jsx("strong",{children:"✅ Inyectar estilos antes de efectos de layout"})}),e.jsx("p",{children:e.jsx("strong",{children:"✅ Combinar con estilos estáticos y en línea cuando sea posible"})})]}),e.jsxs("div",{className:"card",children:[e.jsx("p",{children:e.jsx("strong",{children:"❌ No usar en componentes normales (usar useEffect o useLayoutEffect)"})}),e.jsx("p",{children:e.jsx("strong",{children:"❌ No inyectar estilos durante el renderizado directo"})}),e.jsx("p",{children:e.jsx("strong",{children:"❌ No actualizar estado dentro de useInsertionEffect"})})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🤔 ¿Por qué es mejor que useEffect o useLayoutEffect?"}),e.jsx("div",{className:"card",children:e.jsxs("p",{children:["Asegura que las etiquetas ",e.jsx("code",{children:"<style>"})," estén añadidas antes de que otros efectos se ejecuten, evitando cálculos de layout incorrectos por estilos desactualizados."]})})]})]})};function S(){const[s,n]=p.useState("blue");return e.jsxs("div",{className:"demo-card",children:[e.jsx("h4",{children:"✨ Demo interactiva - CSS-in-JS"}),e.jsxs("div",{children:[e.jsx("button",{className:`demo-button-${s}`,onClick:()=>n("blue"),children:"Azul"}),e.jsx("button",{className:`demo-button-${s}`,onClick:()=>n("red"),children:"Rojo"}),e.jsx("button",{className:`demo-button-${s}`,onClick:()=>n("green"),children:"Verde"}),e.jsx("p",{children:e.jsx("small",{children:"Los estilos se inyectan dinámicamente usando useInsertionEffect"})})]})]})}export{b as default};
