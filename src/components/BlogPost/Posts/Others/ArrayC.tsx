interface ArrayCProps {
  title: string
  description: string
  noteUnderline: string
  noteText: string
  array: string[]
}

const ArrayC = ({
  title,
  description,
  noteUnderline,
  noteText,
  array = [],
}: ArrayCProps) => {
  return (
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
        Metodo <span style={{ color: "#1976d2" }}>{title}</span>
      </div>

      <div style={{ fontSize: 14 }}>{description}</div>

      <div style={{ fontSize: 13, color: "#90caf9", marginBottom: 12 }}>
        <u>{noteUnderline}</u> {noteText}
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
        {`${title}(2) `}
        <span style={{ color: "#888" }}>
          // Devuelve: <b>{return}</b>
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
          // Devuelve: <b>{JSON.stringify(array.at(100))}</b> (índice no existe)
        </span>
      </div>
    </div>
  )
}

export default ArrayC
