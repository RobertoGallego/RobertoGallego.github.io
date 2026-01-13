import useDarkMode from "@/hooks/useDarkMode"

const BlogHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <header className={`useState-header ${isDarkMode ? "dark" : "light"}`}>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </header>
  )
}

export default BlogHeader
