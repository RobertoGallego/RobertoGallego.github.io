useReducer

Los componentes con muchas actualizaciones de estado distribuidas a través de varios controladores de eventos pueden ser agobiantes. Para estos casos, puedes consolidar toda la lógica de actualización de estado fuera del componente en una única función, llamada reducer.

Llama a useReducer en el nivel superior de tu componente para gestionar su estado con un reducer o en tus propios Hooks.

Luego puedes reemplazar useState:

const [tasks, setTasks] = useState(initialTasks);

con useReducer de esta manera:

El Hook useReducer toma dos parámetros

  Una función reducer - Un estado inicial

Devuelve :
  El estado actual. Durante el primer renderizado

  La función dispatch que permite actualizar el estado a un valor diferente y activar una nueva renderización.


```tsx
                                        
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Itinerario en Praga</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
  ```


Atención

El estado es de sólo lectura. No modifiques ningún objeto o arrays del estado:

```tsx

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 Don't mutate an object in state like this:
      state.age = state.age + 1;
      return state;
    }
```

En su lugar, devuelve siempre nuevos objetos desde tu reducer:

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ Instead, return a new object
      return {
        ...state,
        age: state.age + 1
      };
    }
```

Evitar recrear el estado inicial 

React guarda el estado inicial una vez y lo ignora en las siguientes renderizaciones.

```tsx
function createInitialState(username) {
  // ...
}

function TodoList({ username }) {
  const [state, dispatch] = useReducer(reducer, createInitialState(username));
  // ...
```
Ojo este sigue llamando a esta función en cada renderizado.

Para solucionar esto: 

```tsx 
const [state, dispatch] = useReducer(reducer, username, createInitialState);
```

Fíjate que estás pasando createInitialState, que es la función en sí, y no createInitialState(), que es el resultado de llamarla. De esta manera, el estado inicial no se vuelve a crear después de la inicialización.

Solución de problemas 

1 - el registro me da el valor de estado antiguo

```tsx
function handleClick() {
  console.log(state.age);  // 42

  dispatch({ type: 'incremented_age' }); // Request a re-render with 43
  console.log(state.age);  // Still 42!

  setTimeout(() => {
    console.log(state.age); // Also 42!
  }, 5000);
}
```

La actualización del estado solicita otra renderización con el nuevo valor de estado
Si necesitas averiguar el valor del siguiente estado, puedes calcularlo manualmente llamando tú mismo al reducer:

```tsx
const action = { type: 'incremented_age' };
dispatch(action);

const nextState = reducer(state, action);
console.log(state);     // { age: 42 }
console.log(nextState); // { age: 43 }
```
2 - He despachado una acción, pero la pantalla no se actualiza 

React ignorará tu actualización si el siguiente estado es igual al anterior, determinado por una comparación Object.is. Esto suele ocurrir cuando cambias un objeto o un array de estado directamente

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // 🚩 Wrong: mutating existing object
      state.age++;
      return state;
    }
    case 'changed_name': {
      // 🚩 Wrong: mutating existing object
      state.name = action.nextName;
      return state;
    }
    // ...
  }
}
```
en lugar de mutarlos:

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      // ✅ Correct: creating a new object
      return {
        ...state,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      // ✅ Correct: creating a new object
      return {
        ...state,
        name: action.nextName
      };
    }
    // ...
  }
}
```
 
otro ejemplo:

```tsx 
function reducer(state, action) {
  switch (action.type) {
    case 'added_todo': {
      // 🚩 Mistake: mutating state
      state.todos.push({ id: nextId++, text: action.text });
      return state;
    }
    // ...
  }
}
```

```tsx
function reducer(state, action) {
  switch (action.type) {
    case 'added_todo': {
      // ✅ Correct: replacing with new state
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.text }
        ]
      };
    }
    // ...
  }
}
```

