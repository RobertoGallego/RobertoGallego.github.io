import useDarkMode from "@/hooks/useDarkMode"
import { BlogHeader } from "../../Components"
import MethodCard from "./MethodCard"

const Arrays = () => {
  const { isDarkMode } = useDarkMode()
  const array = ["a", "b", "c", "d", "f", "g"]

  const obj = { a: 1, b: 2, c: 3 }

  return (
    <div className={`useState-container ${isDarkMode ? "dark" : "light"}`}>
      <BlogHeader title="Métodos y propiedades útiles de Arrays en JavaScript" subtitle="Explora las funciones más comunes para manipular arrays en JavaScript con ejemplos prácticos." />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(470px, 1fr))",
        gap: "10px",
      }} >
        <MethodCard
          methodName="at()"
          description={
            <>
              Devuelve el <b>valor</b> del elemento en la posición especificada del
              array
            </>
          }
          modifies={false}
          array={array}
          highlightIndex={2}
          mainExample={{
            code: "array.at(2)",
            result: '"c"',
          }}
          otherExamples={[
            {
              code: "array.at(-1)",
              result: JSON.stringify(array.at(-1)),
              comment: "(último elemento)",
            },
            {
              code: "array.at(100)",
              result: JSON.stringify(array.at(100)),
              comment: "(índice no existe)",
            },
          ]}
        />

        <MethodCard
          methodName="array[2]"
          description="Acceso directo por índice"
          modifies={false}
          array={array}
          highlightIndex={2}
          mainExample={{
            code: "array[2]",
            result: JSON.stringify(array[2]),
          }}
          otherExamples={[
            {
              code: "array[0]",
              result: JSON.stringify(array[0]),
              comment: "(primer elemento)",
            },
            {
              code: "array[array.length - 1]",
              result: JSON.stringify(array[array.length - 1]),
              comment: "(último elemento)",
            },
          ]}
        />

        <MethodCard
          methodName="concat()"
          description="Combina dos o más arrays"
          secondaryArray={array}
          modifies={false}
          mainExample={{
            code: "array.concat(array)",
            result: JSON.stringify(array.concat(array)),
          }}
          otherExamples={[
            {
              code: 'array.concat(["x", "y"])',
              result: JSON.stringify(array.concat(["x", "y"])),
            },
            {
              code: 'array.concat(["x"], ["y", "z"])',
              result: JSON.stringify(array.concat(["x"], ["y", "z"])),
              comment: "(múltiples arrays)",
            },
          ]}
        />

        <MethodCard
          methodName="...array (spread)"
          description="Operador spread para expandir arrays"
          modifies={false}
          secondaryArray={array}
          mainExample={{
            code: "[...array, ...array]",
            result: JSON.stringify([...array, ...array]),
          }}
          otherExamples={[
            {
              code: '["inicio", ...array, "fin"]',
              result: JSON.stringify(["inicio", ...array, "fin"]),
              comment: "(insertar elementos)",
            },
            {
              code: "[...array]",
              result: JSON.stringify([...array]),
              comment: "(copia superficial)",
            },
          ]}
        />

        <MethodCard
          methodName="entries()"
          description="Retorna un iterador con pares [índice, valor]"
          modifies={false}
          mainExample={{
            code: "array.entries()",
            result: <>{String(array.entries())}</>,
          }}
          otherExamples={[
            {
              code: "Array.from(array.entries())",
              result: JSON.stringify(Array.from(array.entries())),
              comment: "(convertir a array)",
            },
            {
              code: "[...array.entries()]",
              result: JSON.stringify([...array.entries()]),
              comment: "(con spread)",
            },
          ]}
        />

        <MethodCard
          methodName="every()"
          description="Verifica si todos los elementos cumplen una condición"
          modifies={false}
          mainExample={{
            code: 'array.every((e) => typeof e === "string")',
            result: array.every((e) => typeof e === "string").toString(),
            comment: "(todos son string)",
          }}
          otherExamples={[
            {
              code: 'array.every((e) => typeof e === "number")',
              result: array.every((e) => typeof e === "number").toString(),
              comment: "(todos son number)",
            },
          ]}
        />

        <MethodCard
          methodName="filter()"
          description="Crea un nuevo array con elementos que cumplan la condición"
          modifies={false}
          mainExample={{
            code: 'array.filter((e) => e === "a" || e === "b")',
            result: JSON.stringify(array.filter((e) => e === "a" || e === "b")),
          }}
          otherExamples={[
            {
              code: 'array.filter((e) => e > "c")',
              result: JSON.stringify(array.filter((e) => e > "c")),
              comment: "(mayor que c)",
            },
            {
              code: "array.filter((e, i) => i % 2 === 0)",
              result: JSON.stringify(array.filter((e, i) => i % 2 === 0)),
              comment: "(índices pares)",
            },
          ]}
        />

        <MethodCard
          methodName="find()"
          description="Retorna el primer elemento que cumple la condición"
          modifies={false}
          mainExample={{
            code: 'array.find((e) => e === "a")',
            result: JSON.stringify(array.find((e) => e === "a")),
          }}
          otherExamples={[
            {
              code: 'array.find((e) => e > "c")',
              result: JSON.stringify(array.find((e) => e > "c")),
            },
            {
              code: 'array.find((e) => e === "z")',
              result: JSON.stringify(array.find((e) => e === "z")),
              comment: "(no existe)",
            },
          ]}
        />

        <MethodCard
          methodName="findIndex()"
          description="Retorna el índice del primer elemento que cumple la condición"
          modifies={false}
          mainExample={{
            code: 'array.findIndex((e) => e === "a")',
            result: array.findIndex((e) => e === "a"),
          }}
          otherExamples={[
            {
              code: 'array.findIndex((e) => e > "c")',
              result: array.findIndex((e) => e > "c"),
            },
            {
              code: 'array.findIndex((e) => e === "z")',
              result: array.findIndex((e) => e === "z"),
              comment: "(retorna -1 si no existe)",
            },
          ]}
        />

        <MethodCard
          methodName="flat()"
          description="Aplana arrays anidados"
          modifies={false}
          secondaryArray={array}
          mainExample={{
            code: "[[[...array]], [...array]].flat()",
            result: JSON.stringify([[[...array]], [...array]].flat()),
          }}
          otherExamples={[
            {
              code: "[[[...array]], [...array]].flat(2)",
              result: JSON.stringify([[[...array]], [...array]].flat(2)),
              comment: "(profundidad 2)",
            },
            {
              code: "[[[...array]], [...array]].flat(Infinity)",
              result: JSON.stringify([[[...array]], [...array]].flat(Infinity)),
              comment: "(aplanar todo)",
            },
          ]}
        />

        <MethodCard
          methodName="flatMap()"
          description="Mapea cada elemento y aplana el resultado"
          modifies={false}
          secondaryArray={array}
          mainExample={{
            code: "[...array, [...array]].flatMap((e) => e)",
            result: JSON.stringify([...array, [...array]].flatMap((e) => e)),
          }}
          otherExamples={[
            {
              code: 'array.flatMap((e) => [e, e.toUpperCase()])',
              result: JSON.stringify(array.flatMap((e) => [e, e.toUpperCase()])),
              comment: "(duplicar y transformar)",
            },
            {
              code: 'array.flatMap((e) => e === "c" ? [] : e)',
              result: JSON.stringify(array.flatMap((e) => e === "c" ? [] : e)),
              comment: "(filtrar)",
            },
          ]}
        />

        <MethodCard
          methodName="includes()"
          description="Verifica si el array contiene un elemento"
          modifies={false}
          highlightIndex={0}
          mainExample={{
            code: 'array.includes("a")',
            result: array.includes("a").toString(),
          }}
          otherExamples={[
            {
              code: 'array.includes("z")',
              result: array.includes("z").toString(),
              comment: "(no existe)",
            },
            {
              code: 'array.includes("c", 3)',
              result: array.includes("c", 3).toString(),
              comment: "(buscar desde índice 3)",
            },
          ]}
        />

        <MethodCard
          methodName="indexOf()"
          description="Retorna el primer índice donde se encuentra el elemento"
          modifies={false}
          highlightIndex={1}
          mainExample={{
            code: 'array.indexOf("b")',
            result: array.indexOf("b"),
          }}
          otherExamples={[
            {
              code: 'array.indexOf("z")',
              result: array.indexOf("z"),
              comment: "(retorna -1 si no existe)",
            },
            {
              code: 'array.indexOf("a", 1)',
              result: array.indexOf("a", 1),
              comment: "(buscar desde índice 1)",
            },
          ]}
        />

        <MethodCard
          methodName="join()"
          description="Une todos los elementos en un string"
          modifies={false}
          mainExample={{
            code: 'array.join(" - ")',
            result: JSON.stringify(array.join(" - ")),
          }}
          otherExamples={[
            {
              code: "array.join()",
              result: JSON.stringify(array.join()),
              comment: "(con comas por defecto)",
            },
            {
              code: 'array.join("")',
              result: JSON.stringify(array.join("")),
              comment: "(sin separador)",
            },
          ]}
        />

        <MethodCard
          methodName="keys()"
          description="Retorna un iterador con los índices del array"
          modifies={false}
          mainExample={{
            code: "array.keys()",
            result: <>{String(array.keys())}</>,
          }}
          otherExamples={[
            {
              code: "[...array.keys()]",
              result: JSON.stringify([...array.keys()]),
              comment: "(convertir a array)",
            },
            {
              code: "Array.from(array.keys())",
              result: JSON.stringify(Array.from(array.keys())),
            },
          ]}
        />

        <MethodCard
          methodName="lastIndexOf()"
          array={["a", "b", "c", "b"]}
          highlightIndex={3}
          description="Retorna el último índice donde se encuentra el elemento"
          modifies={false}
          mainExample={{
            code: 'array.lastIndexOf("b")',
            result: ["a", "b", "c", "b"].lastIndexOf("b"),
          }}
          otherExamples={[
            {
              code: '["a", "b", "c", "b"].lastIndexOf("b")',
              result: ["a", "b", "c", "b"].lastIndexOf("b"),
              comment: "(última aparición)",
            },
            {
              code: 'array.lastIndexOf("z")',
              result: array.lastIndexOf("z"),
              comment: "(retorna -1 si no existe)",
            },
          ]}
        />

        <MethodCard
          methodName="length"
          description="Propiedad que retorna la longitud del array"
          modifies={false}
          mainExample={{
            code: "array.length",
            result: array.length,
          }}
        />

        <MethodCard
          methodName="map()"
          description="Crea un nuevo array aplicando una función a cada elemento"
          modifies={false}
          mainExample={{
            code: "array.map((a) => a)",
            result: JSON.stringify(array.map((a) => a)),
          }}
          otherExamples={[
            {
              code: "array.map((a) => a.toUpperCase())",
              result: JSON.stringify(array.map((a) => a.toUpperCase())),
            },
            {
              code: "array.map((a, i) => `${i}:${a}`)",
              result: JSON.stringify(array.map((a, i) => `${i}:${a}`)),
              comment: "(con índice)",
            },
          ]}
        />

        <MethodCard
          methodName="forEach()"
          description="Ejecuta una función para cada elemento del array"
          modifies={false}
          mainExample={{
            code: "array.forEach((e) => console.log(e))",
            result: "undefined",
            comment: "(solo imprime, no retorna nada)",
          }}
          otherExamples={[
            {
              code: "array.forEach((e, i) => console.log(i, e))",
              result: "undefined",
              comment: "(con índice)",
            },
          ]}
        />

        <MethodCard
          methodName="reduce()"
          description="Reduce el array a un solo valor"
          modifies={false}
          mainExample={{
            code: 'array.reduce((prev, curr) => prev + curr, "")',
            result: JSON.stringify(array.reduce((prev, curr) => prev + curr, "")),
          }}
          otherExamples={[
            {
              code: 'array.reduce((prev, curr) => (prev ? `${prev}-${curr}` : curr), "")',
              result: JSON.stringify(array.reduce((prev, curr) => (prev ? `${prev}-${curr}` : curr), "")),
              comment: "(concatenar con guiones)",
            },
          ]}
        />

        <MethodCard
          methodName="reduceRight()"
          description="Reduce el array de derecha a izquierda"
          modifies={false}
          mainExample={{
            code: 'array.reduceRight((prev, curr) => prev + curr, "")',
            result: JSON.stringify(array.reduceRight((prev, curr) => prev + curr, "")),
          }}
          otherExamples={[
            {
              code: '[["a"], ["b"], ["c"]].reduceRight((prev, curr) => prev.concat(curr), [])',
              result: JSON.stringify([["a"], ["b"], ["c"]].reduceRight((prev, curr) => prev.concat(curr), [])),
              comment: "(aplanar de derecha a izquierda)",
            },
          ]}
        />

        <MethodCard
          methodName="slice()"
          description="Retorna una copia superficial de una porción del array"
          modifies={false}
          mainExample={{
            code: "array.slice(1, 3)",
            result: JSON.stringify(array.slice(1, 3)),
          }}
          otherExamples={[
            {
              code: "array.slice(2)",
              result: JSON.stringify(array.slice(2)),
              comment: "(desde índice 2 hasta el final)",
            },
            {
              code: "array.slice(-2)",
              result: JSON.stringify(array.slice(-2)),
              comment: "(últimos 2 elementos)",
            },
          ]}
        />

        <MethodCard
          methodName="some()"
          description="Verifica si al menos un elemento cumple la condición"
          modifies={false}
          mainExample={{
            code: 'array.some((e) => e === "a")',
            result: array.some((e) => e === "a").toString(),
          }}
          otherExamples={[
            {
              code: 'array.some((e) => e === "z")',
              result: array.some((e) => e === "z").toString(),
            },
            {
              code: 'array.some((e) => e > "d")',
              result: array.some((e) => e > "d").toString(),
              comment: "(alguno mayor que d)",
            },
          ]}
        />

        <MethodCard
          methodName="toLocaleString()"
          description="Convierte el array a un string localizado"
          modifies={false}
          mainExample={{
            code: "array.toLocaleString()",
            result: JSON.stringify(array.toLocaleString()),
          }}
          otherExamples={[
            {
              code: "[1000, 2000, 3000].toLocaleString('es-ES')",
              result: JSON.stringify([1000, 2000, 3000].toLocaleString('es-ES')),
              comment: "(números con formato)",
            },
          ]}
        />

        <MethodCard
          methodName="toString()"
          description="Convierte el array a un string"
          modifies={false}
          mainExample={{
            code: "array.toString()",
            result: JSON.stringify(array.toString()),
          }}
        />

        <MethodCard
          methodName="values()"
          description="Retorna un iterador con los valores del array"
          modifies={false}
          mainExample={{
            code: "array.values()",
            result: <>{String(array.values())}</>,
          }}
          otherExamples={[
            {
              code: "[...array.values()]",
              result: JSON.stringify([...array.values()]),
              comment: "(convertir a array)",
            },
            {
              code: "Array.from(array.values())",
              result: JSON.stringify(Array.from(array.values())),
            },
          ]}
        />

        <div style={{
          gridColumn: "1 / -1",
          marginTop: 32,
          marginBottom: 16,
          padding: "12px 16px",
          fontSize: 20,
          fontWeight: "bold",
          borderLeft: "4px solid #1976d2",
          background: isDarkMode ? "#121827" : "#e3f2fd",
          borderRadius: "4px"
        }}>
          📦 Métodos de Object
        </div>

        <MethodCard
          methodName="Object.keys()"
          description="Retorna un array con las claves del objeto"
          modifies={false}
          mainExample={{
            code: "Object.keys(obj).map(key => key.toUpperCase())",
            result: JSON.stringify(Object.keys(obj).map((key) => key.toUpperCase())),
          }}
          otherExamples={[
            {
              code: "Object.keys(obj)",
              result: JSON.stringify(Object.keys(obj)),
            },
            {
              code: "Object.keys(obj).length",
              result: Object.keys(obj).length,
              comment: "(cantidad de propiedades)",
            },
          ]}
        />

        <MethodCard
          methodName="Object.values()"
          description="Retorna un array con los valores del objeto"
          modifies={false}
          mainExample={{
            code: "Object.values(obj).filter(value => value > 1)",
            result: JSON.stringify(Object.values(obj).filter((value) => value > 1)),
          }}
          otherExamples={[
            {
              code: "Object.values(obj)",
              result: JSON.stringify(Object.values(obj)),
            },
            {
              code: "Object.values(obj).reduce((a, b) => a + b, 0)",
              result: Object.values(obj).reduce((a, b) => a + b, 0),
              comment: "(sumar valores)",
            },
          ]}
        />

        <MethodCard
          methodName="Object.entries()"
          description="Retorna un array con pares [clave, valor]"
          modifies={false}
          mainExample={{
            code: "Object.entries(obj).map(([key, value]) => `${key}:${value}`)",
            result: JSON.stringify(Object.entries(obj).map(([key, value]) => `${key}:${value}`)),
          }}
          otherExamples={[
            {
              code: "Object.entries(obj)",
              result: JSON.stringify(Object.entries(obj)),
            },
            {
              code: "Object.entries(obj).filter(([k, v]) => v > 1)",
              result: JSON.stringify(Object.entries(obj).filter(([, v]) => v > 1)),
              comment: "(filtrar por valor)",
            },
          ]}
        />

        <MethodCard
          methodName="Object.fromEntries()"
          description="Crea un objeto desde pares [clave, valor]"
          modifies={false}
          mainExample={{
            code: "Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]))",
            result: JSON.stringify(Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v * 2]))),
          }}
          otherExamples={[
            {
              code: 'Object.fromEntries([["x", 1], ["y", 2]])',
              result: JSON.stringify(Object.fromEntries([["x", 1], ["y", 2]])),
            },
            {
              code: "Object.fromEntries(new Map([['a', 1], ['b', 2]]))",
              result: JSON.stringify(Object.fromEntries(new Map([['a', 1], ['b', 2]]))),
              comment: "(desde Map)",
            },
          ]}
        />

        <div style={{
          gridColumn: "1 / -1",
          marginTop: 32,
          marginBottom: 16,
          padding: "12px 16px",
          fontSize: 20,
          fontWeight: "bold",
          borderLeft: "4px solid #ff9800",
          background: isDarkMode ? "#121827" : "#e3f2fd",
          borderRadius: "4px"
        }}>
          ⚠️ Métodos que modifican el array original
        </div>

        <MethodCard
          methodName="unshift()"
          description="Agrega elementos al inicio del array"
          modifies={true}
          mainExample={{
            code: '[...array].unshift("b")',
            result: [...array].unshift("b"),
            comment: "(retorna la nueva longitud)",
          }}
          otherExamples={[
            {
              code: '[...array].unshift("x", "y")',
              result: [...array].unshift("x", "y"),
              comment: "(múltiples elementos)",
            },
          ]}
        />

        <MethodCard
          methodName="splice()"
          description="Cambia el contenido eliminando o agregando elementos"
          modifies={true}
          mainExample={{
            code: "[...array].splice(0, 3)",
            result: JSON.stringify([...array].splice(0, 3)),
          }}
          otherExamples={[
            {
              code: '[...array].splice(2, 0, "x")',
              result: JSON.stringify([...array].splice(2, 0, "x")),
              comment: "(insertar sin eliminar)",
            },
            {
              code: '[...array].splice(1, 2, "x", "y")',
              result: JSON.stringify([...array].splice(1, 2, "x", "y")),
              comment: "(reemplazar)",
            },
          ]}
        />

        <MethodCard
          methodName="sort()"
          description="Ordena los elementos del array"
          modifies={true}
          mainExample={{
            code: '["d", "a", "g", "b", "c", "f"].sort((a, b) => (a < b ? 1 : -1))',
            result: JSON.stringify(["d", "a", "g", "b", "c", "f"].sort((a, b) => (a < b ? 1 : -1))),
            comment: "(ordenar reverso)",
          }}
          otherExamples={[
            {
              code: '["d", "a", "g", "b", "c", "f"].sort()',
              result: JSON.stringify(["d", "a", "g", "b", "c", "f"].sort()),
              comment: "(orden alfabético)",
            },
            {
              code: '[3, 1, 4, 1, 5, 9].sort((a, b) => a - b)',
              result: JSON.stringify([3, 1, 4, 1, 5, 9].sort((a, b) => a - b)),
              comment: "(números ascendente)",
            },
          ]}
        />

        <MethodCard
          methodName="shift()"
          description="Elimina el primer elemento del array"
          modifies={true}
          mainExample={{
            code: "[...array].shift()",
            result: JSON.stringify([...array].shift()),
          }}
          otherExamples={[
            {
              code: "[].shift()",
              result: JSON.stringify([].shift()),
              comment: "(array vacío retorna undefined)",
            },
          ]}
        />

        <MethodCard
          methodName="reverse()"
          description="Invierte el orden de los elementos"
          modifies={true}
          mainExample={{
            code: '["a", "b", "c", "d", "f", "g"].reverse()',
            result: JSON.stringify(["a", "b", "c", "d", "f", "g"].reverse()),
          }}
          otherExamples={[
            {
              code: "[...array].reverse()",
              result: JSON.stringify([...array].reverse()),
              comment: "(revertir copia)",
            },
          ]}
        />

        <MethodCard
          methodName="push()"
          description="Agrega elementos al final del array"
          modifies={true}
          mainExample={{
            code: '["a", "b", "c", "d", "f", "g"].push("h")',
            result: ["a", "b", "c", "d", "f", "g"].push("h"),
            comment: "(retorna la nueva longitud)",
          }}
          otherExamples={[
            {
              code: '[...array].push("x", "y", "z")',
              result: [...array].push("x", "y", "z"),
              comment: "(múltiples elementos)",
            },
          ]}
        />

        <MethodCard
          methodName="copyWithin()"
          description="Copia parte del array a otra ubicación en el mismo array"
          modifies={true}
          mainExample={{
            code: '["a", "b", "c", "d", "f", "g"].copyWithin(0, 1)',
            result: JSON.stringify(["a", "b", "c", "d", "f", "g"].copyWithin(0, 1)),
          }}
          otherExamples={[
            {
              code: '["a", "b", "c", "d", "f", "g"].copyWithin(0, 3, 5)',
              result: JSON.stringify(["a", "b", "c", "d", "f", "g"].copyWithin(0, 3, 5)),
              comment: "(copiar rango)",
            },
          ]}
        />

        <MethodCard
          methodName="pop()"
          description="Elimina el último elemento del array"
          modifies={true}
          mainExample={{
            code: '["a", "b", "c", "d", "f", "g"].pop()',
            result: JSON.stringify(["a", "b", "c", "d", "f", "g"].pop()),
          }}
          otherExamples={[
            {
              code: "[].pop()",
              result: JSON.stringify([].pop()),
              comment: "(array vacío retorna undefined)",
            },
          ]}
        />

        <MethodCard
          methodName="fill()"
          description="Rellena el array con un valor estático"
          modifies={true}
          mainExample={{
            code: '["a", "b", "c", "d", "f", "g"].fill("d", 1, 6)',
            result: JSON.stringify(["a", "b", "c", "d", "f", "g"].fill("d", 1, 6)),
          }}
          otherExamples={[
            {
              code: '["a", "b", "c", "d", "f", "g"].fill("x")',
              result: JSON.stringify(["a", "b", "c", "d", "f", "g"].fill("x")),
              comment: "(rellenar todo)",
            },
            {
              code: "Array(5).fill(0)",
              result: JSON.stringify(Array(5).fill(0)),
              comment: "(crear array lleno)",
            },
          ]}
        />
      </div>
    </div>
  )
}

export default Arrays
