import { useReducer } from "react"

type Action = { type: "add"; id: number; text: string }

type Task = {
  id: number
  name: string
}

const initialState: Task[] = [{ id: 1, name: "Roberto" }]

let nextId = 2

const tasksReducer = (task: Task[], action: Action) => {
  switch (action.type) {
    case "add":
      return [
        ...task,
        {
          id: action.id,
          name: action.text,
        },
      ]
    default: {
      throw new Error("Unknown action")
    }
  }
}

const Exo = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialState)

  const handleSubmit = () => {
    const newTask = {
      type: "add" as const,
      id: nextId++,
      text: "Nueva tarea de ejemplo",
    }

    dispatch(newTask)
  }

  return (
    <div>
      {tasks.map((task) => {
        return <h3>{task.name}</h3>
      })}

      <button className="btn-primary" onClick={handleSubmit}>
        ➕ Agregar Tarea
      </button>
    </div>
  )
}

export default Exo
