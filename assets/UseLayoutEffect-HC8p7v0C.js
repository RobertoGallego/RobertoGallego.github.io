import{u as x,j as t,r as c,o as g}from"./index-BQ6reGTr.js";import{H as b,t as h}from"./index-DNGCOx9y.js";const l=({code:e,language:o="typescript",isDarkMode:i})=>t.jsx(b,{theme:i?h.nightOwl:h.github,code:e,language:o,children:({className:s,style:a,tokens:n,getLineProps:r,getTokenProps:d})=>t.jsx("pre",{className:s,style:a,children:n.map((u,f)=>t.jsx("div",{...r({line:u}),children:u.map((m,j)=>t.jsx("span",{...d({token:m})},j))},f))})}),C=()=>{const{isDarkMode:e}=x();return t.jsxs("div",{className:`useState-container ${e?"dark":"light"}`,id:"useLayoutEffect",children:[t.jsxs("header",{className:`header ${e?"dark":"light"}`,children:[t.jsx("h1",{children:"📐 useLayoutEffect Hook"}),t.jsx("p",{className:"subtitle",children:"Este se acciona antes que el navegador vuelva a pintar la pantalla para ejecutar las medidas del layout."})]}),t.jsx("section",{className:"section",children:t.jsxs("div",{className:"info-box",children:[t.jsx("strong",{children:"⚠️ Atención:"})," useLayoutEffect puede afectar el desempeño. Se prefiere el uso de useEffect cuando sea posible."]})}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{children:"🎯 Sintaxis"}),t.jsx("div",{className:"code-block",children:t.jsx(l,{isDarkMode:e,language:"typescript",code:"useLayoutEffect(setup, dependencies?)"})}),t.jsx("div",{className:"code-block",children:t.jsx(l,{isDarkMode:e,language:"typescript",code:`import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);`})}),t.jsx("div",{className:"card",children:t.jsxs("p",{children:[t.jsx("strong",{children:"opcional dependencies:"})," La lista de todos los valores reactivos referenciados dentro del código de setup. Los valores reactivos incluyen props, estados, y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente."]})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{children:"📌 Caso de uso"}),t.jsx("div",{className:"card",children:t.jsx("p",{children:"A veces, eso no es suficiente. Imagina un tooltip que aparece junto a algún elemento cuando pasas con el ratón por encima de él. Si hay suficiente espacio, el tooltip debe aparecer arriba del elemento, pero si no tiene suficiente espacio para encajar, debe aparecer debajo. Esto significa que para renderizar el tooltip en la posición final correcta, necesitas saber su altura (quiere decir, si cabe en la parte superior)."})})]}),t.jsxs("section",{className:"section",children:[t.jsx("h2",{children:"💡 Ejemplo claro"}),t.jsx("div",{className:"code-block",children:t.jsx(l,{isDarkMode:e,language:"typescript",code:`import ButtonWithTooltip from "./ButtonWithTooltip.js"

export default function App() {
  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            Este tooltip no encaja arriba del botón.
            <br />
            Es por esto que se muestra debajo del botón!
          </div>
        }
      >
        Pasa el ratón por encima (tooltip arriba)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>Este tooltip encaja arriba del botón</div>}
      >
        Pasa el ratón por encima (tooltip debajo)
      </ButtonWithTooltip>
      <div style={{ height: 50 }} />
      <ButtonWithTooltip
        tooltipContent={<div>Este tooltip encaja arriba del botón</div>}
      >
        Pasa el ratón por encima (tooltip debajo)
      </ButtonWithTooltip>
    </div>
  )
}`})}),t.jsx("div",{className:"code-block",children:t.jsx(l,{isDarkMode:e,language:"typescript",code:`import { useState, useRef } from "react"
import Tooltip from "./Tooltip.js"

export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null)
  const buttonRef = useRef(null)
  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect()
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          })
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  )
}`})}),t.jsx("div",{className:"code-block",children:t.jsx(l,{isDarkMode:e,language:"typescript",code:`import { useRef, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"
import TooltipContainer from "./TooltipContainer.js"

export default function Tooltip({ children, targetRect }) {
  const ref = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
    console.log("Altura del tooltip medida: " + height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight
    if (tooltipY < 0) {
      // No encaja arriba, entonces colócalo debajo
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  )
}`})}),t.jsx("div",{className:"code-block",children:t.jsx(l,{isDarkMode:e,language:"typescript",code:`export default function TooltipContainer({ children, x, y, contentRef }) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: \`translate3d(\${x}px, \${y}px, 0)\`,
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}`})}),t.jsx(R,{})]})]})};function p({tooltipContent:e,children:o}){const[i,s]=c.useState(null),a=c.useRef(null);return t.jsxs(t.Fragment,{children:[t.jsx("button",{ref:a,className:"demo-button",onPointerEnter:()=>{if(a.current){const n=a.current.getBoundingClientRect();s({left:n.left,top:n.top,right:n.right,bottom:n.bottom})}},onPointerLeave:()=>{s(null)},children:o}),i!==null&&t.jsx(v,{targetRect:i,children:e})]})}function v({children:e,targetRect:o}){const i=c.useRef(null),[s,a]=c.useState(0);c.useLayoutEffect(()=>{if(i.current){const{height:d}=i.current.getBoundingClientRect();a(d),console.log("Altura del tooltip medida: "+d)}},[]);let n=0,r=0;return o!==null&&(n=o.left,r=o.top-s,r<0&&(r=o.bottom)),g.createPortal(t.jsx(y,{x:n,y:r,contentRef:i,children:e}),document.body)}function y({children:e,x:o,y:i,contentRef:s}){return t.jsx("div",{style:{position:"absolute",pointerEvents:"none",left:0,top:0,transform:`translate3d(${o}px, ${i}px, 0)`},children:t.jsx("div",{ref:s,className:"tooltip",children:e})})}function R(){return t.jsxs("div",{className:"demo-card",children:[t.jsx("h4",{children:"✨ Demo interactiva"}),t.jsxs("div",{children:[t.jsx(p,{tooltipContent:t.jsxs("div",{children:["Este tooltip no encaja arriba del botón.",t.jsx("br",{}),"Es por esto que se muestra debajo del botón!"]}),children:"Pasa el ratón por encima (tooltip arriba)"}),t.jsx("div",{style:{height:50}}),t.jsx(p,{tooltipContent:t.jsx("div",{children:"Este tooltip encaja arriba del botón"}),children:"Pasa el ratón por encima (tooltip debajo)"}),t.jsx("div",{style:{height:50}}),t.jsx(p,{tooltipContent:t.jsx("div",{children:"Este tooltip encaja arriba del botón"}),children:"Pasa el ratón por encima (tooltip debajo)"})]})]})}export{C as default};
