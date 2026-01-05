import "./App.css"
import { useToggle } from "./useToggle"

function ExosA() {
  const [on, toggle] = useToggle(false)

  return (
    <div>
      <input onChange={toggle} type="checkbox" checked={on} />

      <h3>{on ? "on" : "off"}</h3>
    </div>
  )
}

export default ExosA
