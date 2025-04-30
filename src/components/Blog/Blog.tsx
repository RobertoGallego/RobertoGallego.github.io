import BlogCard from "./BlogCard"


const Blog = () => {
  return (
    <div
        style={{
          width: "100%",
          marginTop: 60,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 20,
          marginBottom: 200,
          alignItems: "flex-start",
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        {/* <BlogCard />         */}
      </div>
  )
}

export default Blog