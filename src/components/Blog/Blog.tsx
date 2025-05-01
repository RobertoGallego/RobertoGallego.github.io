import BlogCard from "./BlogCard"

const Blog = () => {
  return (
    <div style={{ width: "100%" }}>
      <h1>Posts & Articles</h1>

      <p style={{ color: "#818181", fontSize: 14 }}>
        I write about my learnings, projects, and other interesting stuff.
      </p>

      <p style={{ color: "#818181", fontSize: 14 }}>
        I also share articles that I find interesting and worth reading.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          marginTop: 20,
          marginBottom: 60,
          gap: 20,
          justifyItems: "start",
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

        {/* <BlogCard />         */}
      </div>
    </div>
  )
}

export default Blog
