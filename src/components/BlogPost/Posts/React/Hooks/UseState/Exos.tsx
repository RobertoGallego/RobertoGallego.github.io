import { useState } from "react"

function Exos() {
  const [state, setState] = useState<number[]>([])
  const [count, setCount] = useState(1)

  return (
    <div>
      <button
        onClick={() => {
          setCount((n) => n + 1)
          setState([...state, count])
        }}
      >
        Add Number
      </button>

      <button
        onClick={() => {
          setCount((n) => n - 1)
          setState(state.slice(0, state.length - 1))
        }}
      >
        Remove Number
      </button>

      <button
        onClick={() => {
          setCount(1)
          setState([])
        }}
      >
        Reset Number
      </button>

      <h3>[{state.join(", ")}]</h3>
    </div>
  )
}

export default Exos
