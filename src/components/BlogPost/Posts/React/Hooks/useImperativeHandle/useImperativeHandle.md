useImperativeHandle

Te permite personalizar el identificador expuesto como una ref.

useImperativeHandle(ref, createHandle, dependencies?)

Llama a useImperativeHandle en el nivel superior de tu componente para personalizar el identificador ref que se expone:

```tsx
import { useImperativeHandle } from 'react';

function MyInput({ ref }) {
  useImperativeHandle(ref, () => {
    return {
      // ... tus métodos ...
    };
  }, []);
  // ...
```

ref: La ref que recibiste como prop del componente MyInput.

createHandle: identificador ref que quieres exponer

dependencies: valores reactivos

Uso
Exponer un identificador ref personalizado al componente padre
Para exponer un nodo DOM al elemento padre, pasa la prop ref al nodo.

```tsx
import { useRef, useImperativeHandle } from "react"

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

export default MyInput
```

```tsx
import { useRef, useImperativeHandle } from "react"

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
}
```

No sobreutilizar las refs. Solo debes usar las refs para comportamientos imperativos que no puedes expresar como props: por ejemplo desplazarse a un nodo, enfocar un nodo, activar una animación, seleccionar texto, etc.

Si puedes expresar algo como una prop, no deberias usar una ref. Por ejemplo, en vez de exponer un identificador imperativo como { open, close } del componente Modal, es mejor tomar isOpen como una prop, algo como <Modal isOpen={isOpen} />. Efectos puede ayudarte a exponer comportamientos imperativos via props.
