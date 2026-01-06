import { useEffect, useRef } from "react"

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [callback])

  return ref
}

// import { useRef, useEffect } from "react"

// export function useClickOutside(callback: () => void) {
//   const ref = useRef<HTMLDivElement | null>(null)
//   // const ref = useRef<HTMLDialogElement | null>(null)

//   useEffect(() => {
//     function handleClick(event: MouseEvent) {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         callback()
//       }
//     }

//     document.addEventListener("mousedown", handleClick)
//     return () => {
//       document.removeEventListener("mousedown", handleClick)
//     }
//   }, [callback])

//   return ref
// }

// const ref = useClickOutside(() => {
//   alert("clicked outside")
// })

// <dialog open ref={ref}>
//           <p>Greetings, one and all!</p>
//           <form method="dialog">
//             <button>OK</button>
//           </form>
//         </dialog>
