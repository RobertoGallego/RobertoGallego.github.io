import useDarkMode from "@/hooks/useDarkMode"
import { ReactNode } from "react"

interface Example {
  code: string
  result: ReactNode
  comment?: string
}

interface MethodCardProps {
  methodName: string
  description: ReactNode
  modifies?: boolean
  array?: string[]
  secondaryArray?: string[]
  highlightIndex?: number
  mainExample: Example
  otherExamples?: Example[]
}

const MethodCard = ({
  methodName,
  description,
  modifies = false,
  array = ["a", "b", "c", "d", "f", "g"],
  secondaryArray,
  highlightIndex,
  mainExample,
  otherExamples = [],
}: MethodCardProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      style={{
        border: "1px solid #3f3e47",
        borderRadius: "8px",
        padding: "16px",
        background: isDarkMode ? "#040816" : "#F0A28A",
      }}
    >
      <div style={{ fontWeight: "bold" }}>
        Metodo <span style={{ color: isDarkMode ? "#1976d2" : "#64350f" }}>{methodName}</span>
      </div>

      <div style={{ fontSize: 14 }}>{description}</div>

      <div style={{ fontSize: 13, color: isDarkMode ? "#90caf9" : "#64350f", marginBottom: 12 }}>
        <u>{modifies ? "Modifica" : "No modifica"}</u> el array original
        {!modifies && ", solo retorna el valor"}
      </div>

      <div
        style={{
          background: isDarkMode ? "#23272f" : "#e0e0e0",
          color: isDarkMode ? "#fff" : "#000",
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
              color: idx === highlightIndex ? "#ff9800" : "#90caf9",
              fontWeight: idx === highlightIndex ? "bold" : "normal",
            }}
          >
            "{item}"{idx < array.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </div>

      {secondaryArray && <div
        style={{
          background: isDarkMode ? "#23272f" : "#e0e0e0",
          color: isDarkMode ? "#fff" : "#000",
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
              color: idx === highlightIndex ? "#ff9800" : "#90caf9",
              fontWeight: idx === highlightIndex ? "bold" : "normal",
            }}
          >
            "{item}"{idx < array.length - 1 ? ", " : ""}
          </span>
        ))}
        ]
      </div>}

      <div
        style={{
          background: "#fff",
          padding: "8px",
          borderRadius: "4px",
          fontFamily: "monospace",
          fontSize: 15,
          marginBottom: otherExamples.length > 0 ? 18 : 12,
          color: "#23272f",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>{mainExample.code}</span>
        <span style={{ color: "#000000" }}>
          Devuelve: <b>{mainExample.result}</b>
          {mainExample.comment && ` ${mainExample.comment}`}
        </span>
      </div>

      {otherExamples.length > 0 && (
        <>
          <div
            style={{
              fontSize: 14,
              margin: "18px 0 4px 0",
              color: isDarkMode ? "#90caf9" : "#64350f",
              fontWeight: "bold",
            }}
          >
            Otros usos útiles:
          </div>
          {otherExamples.map((example, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                padding: "6px 8px",
                borderRadius: "4px",
                fontFamily: "monospace",
                fontSize: 15,
                color: "#23272f",
                marginBottom: idx === otherExamples.length - 1 ? 12 : 8,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>{example.code}</span>
              <span style={{ color: "#888" }}>
                Devuelve: <b>{example.result}</b>
                {example.comment && ` ${example.comment}`}
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default MethodCard
