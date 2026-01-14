import { useState, useRef, useLayoutEffect } from "react"
import { createPortal } from "react-dom"
import { useDarkMode } from "@/hooks"
import "./useLayoutEffect.css"
import { BlogHeader, CodeBlock } from "@/blog-components"

const UseLayoutEffect = () => {
  const { isDarkMode } = useDarkMode()
  
  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`} id="useLayoutEffect">
      <BlogHeader
        title="📐 useLayoutEffect Hook"
        subtitle="Este se acciona antes que el navegador vuelva a pintar la pantalla para ejecutar las medidas del layout."
      />

      <section className="section">
        <div className="info-box">
          <strong>⚠️ Atención:</strong> useLayoutEffect puede afectar el
          desempeño. Se prefiere el uso de useEffect cuando sea posible.
        </div>
      </section>

      <section className="section">
        <h2>🎯 Sintaxis</h2>
        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`useLayoutEffect(setup, dependencies?)`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);`}
          />
        </div>

        <div className="card">
          <p>
            <strong>opcional dependencies:</strong> La lista de todos los
            valores reactivos referenciados dentro del código de setup. Los
            valores reactivos incluyen props, estados, y todas las variables y
            funciones declaradas directamente dentro del cuerpo de tu
            componente.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>📌 Caso de uso</h2>

        <div className="card">
          <p>
            A veces, eso no es suficiente. Imagina un tooltip que aparece junto
            a algún elemento cuando pasas con el ratón por encima de él. Si hay
            suficiente espacio, el tooltip debe aparecer arriba del elemento,
            pero si no tiene suficiente espacio para encajar, debe aparecer
            debajo. Esto significa que para renderizar el tooltip en la posición
            final correcta, necesitas saber su altura (quiere decir, si cabe en
            la parte superior).
          </p>
        </div>
      </section>

      <section className="section">
        <h2>💡 Ejemplo claro</h2>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import ButtonWithTooltip from "./ButtonWithTooltip.js"

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
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useState, useRef } from "react"
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
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`import { useRef, useLayoutEffect, useState } from "react"
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
}`}
          />
        </div>

        <div className="code-block">
          <CodeBlock
            language="typescript"
            code={`export default function TooltipContainer({ children, x, y, contentRef }) {
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
}`}
          />
        </div>

        <DemoApp />
      </section>
    </div>
  )
}

// Demo Components
interface TargetRect {
  left: number
  top: number
  right: number
  bottom: number
}

function ButtonWithTooltip({
  tooltipContent,
  children,
}: {
  tooltipContent: React.ReactNode
  children: React.ReactNode
}) {
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button
        ref={buttonRef}
        className="demo-button"
        onPointerEnter={() => {
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            setTargetRect({
              left: rect.left,
              top: rect.top,
              right: rect.right,
              bottom: rect.bottom,
            })
          }
        }}
        onPointerLeave={() => {
          setTargetRect(null)
        }}
      >
        {children}
      </button>
      {targetRect !== null && (
        <TooltipDemo targetRect={targetRect}>{tooltipContent}</TooltipDemo>
      )}
    </>
  )
}

function TooltipDemo({
  children,
  targetRect,
}: {
  children: React.ReactNode
  targetRect: TargetRect
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect()
      setTooltipHeight(height)
      console.log("Altura del tooltip medida: " + height)
    }
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
}

function TooltipContainer({
  children,
  x,
  y,
  contentRef,
}: {
  children: React.ReactNode
  x: number
  y: number
  contentRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        top: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}

function DemoApp() {
  return (
    <div className="demo-card">
      <h4>✨ Demo interactiva</h4>
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
    </div>
  )
}

export default UseLayoutEffect
