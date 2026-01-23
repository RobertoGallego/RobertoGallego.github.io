const Array = () => {
  const array = ["a", "b", "c", "d", "f", "g"]

  const obj = { a: 1, b: 2, c: 3 }
  // const arrayObj = [
  //   { x: "a" },
  //   { x: "b" },
  //   { x: "c" },
  //   { x: "d" },
  //   { x: "f" },
  //   { x: "g" },
  // ]

  array.forEach((e) => console.log(e)) // solo imprime, no retorna nada  console.log(forEach)

  return (
    <div style={{ color: "#ccc", padding: "0 16px 32px 16px" }}>
      <div
        style={{
          border: "1px solid #3f3e47",
          borderRadius: "8px",
          padding: "16px",
          margin: "16px 0",
          background: "#1d2028",
          maxWidth: "420px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          Metodo <span style={{ color: "#1976d2" }}>at()</span>
        </div>

        <div style={{ fontSize: 14 }}>
          Devuelve el <b>valor</b> del elemento en la posición especificada del
          array
        </div>

        <div style={{ fontSize: 13, color: "#90caf9", marginBottom: 12 }}>
          <u>No modifica</u> el array original, solo retorna el valor
        </div>

        <div
          style={{
            background: "#23272f",
            color: "#fff",
            padding: "8px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: 15,
            marginBottom: 12,
          }}
        >
          <span style={{ color: "#aaa" }}>array = </span>[
          {array.map((item, idx) => (
            <span
              key={idx}
              style={{
                color: idx === 2 ? "#ff9800" : "#90caf9",
                fontWeight: idx === 2 ? "bold" : "normal",
              }}
            >
              "{item}"{idx < array.length - 1 ? ", " : ""}
            </span>
          ))}
          ]
        </div>
        <div
          style={{
            background: "#fff",
            padding: "8px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: 15,
            marginBottom: 18,
            color: "#23272f",
          }}
        >
          array.at(2){" "}
          <span style={{ color: "#888" }}>
            // Devuelve: <b>"c"</b>
          </span>
        </div>
        <div
          style={{
            fontSize: 14,
            margin: "18px 0 4px 0",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Otros usos útiles:
        </div>
        <div
          style={{
            background: "#fff",
            padding: "6px 8px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: 15,
            color: "#23272f",
            marginBottom: 8,
          }}
        >
          array.at(-1){" "}
          <span style={{ color: "#888" }}>
            // Devuelve: <b>{JSON.stringify(array.at(-1))}</b> (último elemento)
          </span>
        </div>
        <div
          style={{
            background: "#fff",
            padding: "6px 8px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: 15,
            color: "#23272f",
            marginBottom: 12,
          }}
        >
          array.at(100){" "}
          <span style={{ color: "#888" }}>
            // Devuelve: <b>{JSON.stringify(array.at(100))}</b> (índice no
            existe)
          </span>
        </div>
      </div>
      <div>array[2]: {array[2]}</div>
      <div>concat: {array.concat(array)}</div>
      <div>...array: {[...array, ...array]}</div>
      <div>entries: {array.entries()}</div>
      <div>
        every (todos son string):
        {array.every((e) => typeof e === "string").toString()}
      </div>
      <div>
        every (todos son number):
        {array.every((e) => typeof e === "number").toString()}
      </div>
      <div>filter: {array.filter((e) => e === "a" || e === "b")}</div>
      <div>find: {array.find((e) => e === "a")}</div>
      <div>findIndex: {array.findIndex((e) => e === "a")}</div>
      <div>flat: {[[[...array]], [...array]].flat()}</div>
      <div>{[...array, [...array]].flatMap((e) => e)}</div>
      <div>includes: {array.includes("a").toString()}</div>
      <div>indexOf: {array.indexOf("b")}</div>
      <div>join: {array.join(" - ")}</div>
      <div>keys: {array.keys()}</div>
      <div>lastIndexOf: {array.lastIndexOf("b")}</div>
      <div>length: {array.length}</div>
      <div>map: {array.map((a) => a)}</div>
      <div>reduce: {array.reduce((prev, curr) => prev + curr, "")}</div>
      <div>
        reduce (concatenar con guiones):{" "}
        {array.reduce((prev, curr) => (prev ? `${prev}-${curr}` : curr), "")}
      </div>
      <div>
        reduceRight: {array.reduceRight((prev, curr) => prev + curr, "")}
      </div>
      <div>slice: {array.slice(1, 3)}</div>
      <div>some: {array.some((e) => e === "a").toString()}</div>
      <div>toLocaleString: {array.toLocaleString()}</div>
      <div>toString: {array.toString()}</div>
      <div>toString: {array.values()}</div>
      --- Objetos:
      <div>{Object.keys(obj).map((key) => key.toUpperCase())} </div>
      <div>
        {Object.values(obj)
          .filter((value) => value > 1)
          .join(", ")}
      </div>
      <div>
        {Object.entries(obj)
          .map(([key, value]) => `${key}:${value}`)
          .join(", ")}
      </div>
      <div>
        {JSON.stringify(
          Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]))
        )}
      </div>

      ---
      <div style={{ color: array.join("") === "abcdfg" ? "green" : "red" }}>
        Array {array.join("") === "abcdfg" ? "igual" : "no es igual"} :{" "}
        {array.map((a) => a)}
      </div>
      <div>unshifts: {[...array].unshift("b")}</div>
      <div>splice: {[...array].splice(0, 3)}</div>
      <div>
        sort (ordenar reverso):{" "}
        {["d", "a", "g", "b", "c", "f"].sort((a, b) => (a < b ? 1 : -1))}
      </div>
      <div>shift: {[...array].shift()}</div>
      <div>reverse: {["a", "b", "c", "d", "f", "g"].reverse()}</div>
      <div>push: {["a", "b", "c", "d", "f", "g"].push("h")}</div>
      <div>copyWithin: {["a", "b", "c", "d", "f", "g"].copyWithin(0, 1)}</div>
      <div>pop: {["a", "b", "c", "d", "f", "g"].pop()}</div>
      <div>fill: {["a", "b", "c", "d", "f", "g"].fill("d", 1, 6)}</div>
    </div>
  )
}

export default Array
