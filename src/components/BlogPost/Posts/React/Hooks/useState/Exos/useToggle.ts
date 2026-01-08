import { useState } from "react"

export const useToggle = (on: boolean): [boolean, () => void] => {
  const [toggle, setToggle] = useState(on)

  const toggleFn = () => setToggle((prev: boolean) => !prev)

  return [toggle, toggleFn]
}
