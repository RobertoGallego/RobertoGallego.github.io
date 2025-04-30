import rob from "../../assets/rob.jpg"
import { FaRegClock } from "react-icons/fa6"

const BlogCard = () => {
  return (
    <div
    style={{
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      flexDirection: "row",
      flexGrow: 1,
      // flexBasis: "calc(50% - 20px)",
      // maxWidth: "calc(50% - 20px)",
      boxSizing: "border-box",
    }}
  >
    <img
      src={rob}
      alt="Ninjaco"
      style={{
        width: 150,
        height: 100,
        background: "blue",
        objectFit: "cover",
        borderRadius: 10,
      }}
    />

    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 6,
        height: 100,
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <p
          style={{
            alignSelf: "center",
            fontSize: 12,
            backgroundColor: "#383838",
            paddingBlock: 2,
            paddingInline: 8,
            borderRadius: 8,
            color: "#fff",
            fontWeight: 500,
          }}
        >
          Social Media
        </p>
        <p style={{ fontSize: 12, color: "#818181" }}>April 10, 2025</p>
      </div>
      <h3
        style={{
          // maxWidth: 300,
          // whiteSpace: "nowrap",
          // overflow: "hidden",
          // textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        Optimal line length for body text
      </h3>
      {/* <p style={{ fontSize: 12, color: "#818181" }}>
        Currently working on a visual learning tool for array methods in
        JavaScript. This project aims to help developers.
      </p> */}
      {/* <div
        style={{
          display: "flex",
          gap: 6,
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      > */}
      <div
        style={{
          display: "flex",
          gap: 6,
          alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <FaRegClock size={12} color="#818181" />
        <p style={{ fontSize: 12, color: "#818181" }}>8 min read</p>
      </div>
      <p style={{ fontSize: 12, color: "#fff", fontWeight: 500 }}>
        Read More
      </p>
      {/* </div> */}
    </div>
  </div>
  
  )

}

export default BlogCard