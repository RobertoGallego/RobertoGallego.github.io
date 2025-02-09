function App() {
  // FFE6C9 FFC785 FFA09B

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        I'm a software engineer building efficient, scalable, and user-friendly
        applications with modern web technologies. Let's create something great.
      </h2>

      {["#FFE6C9", "#FFC785", "#FFA09B", "#FF6347"].map((color, index) => (
        <div
          key={index}
          style={{
            height: 100,
            width: 100,
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  )
}

export default App
