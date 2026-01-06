useLayoutEffect

Este se acciona antes que el navegador vuelva a pintar la pantalla para ejecutar las medidas del layout.

Atencion

useLayoutEffect puede afectar el desempeño. Se prefiere el uso de useEffect cuando sea posible.

```tsx
useLayoutEffect(setup, dependencies?)
```

```tsx
import { useState, useRef, useLayoutEffect } from 'react';

function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);
```

opcional dependencies: La lista de todos los valores reactivos referenciados dentro del código de setup. Los valores reactivos incluyen props, estados, y todas las variables y funciones declaradas directamente dentro del cuerpo de tu componente.

A veces, eso no es suficiente. Imagina un tooltip que aparece junto a algún elemento cuando pasas con el ratón por encima de él. Si hay suficiente espacio, el tooltip debe aparecer arriba del elemento, pero si no tiene suficiente espacio para encajar, debe aparecer debajo. Esto significa que para renderizar el tooltip en la posición final correcta, necesitas saber su altura (quiere decir, si cabe en la parte superior).

ejemplo claro

```tsx
import ButtonWithTooltip from "./ButtonWithTooltip.js"

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
}
```

```tsx
import { useState, useRef } from "react"
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
}
```

```tsx
import { useRef, useLayoutEffect, useState } from "react"
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
}
```

```tsx
export default function TooltipContainer({ children, x, y, contentRef }) {
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
```
