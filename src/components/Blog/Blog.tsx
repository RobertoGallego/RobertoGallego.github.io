import BlogCard from "./BlogCard"
import { useDarkMode } from "@/hooks"
import { useTranslation } from "react-i18next"
import { careerData } from "@/data"

const Blog = () => {
  const { isDarkMode } = useDarkMode()
  const { t } = useTranslation()

  return (
    <div style={{ width: "100%", marginTop: 100, paddingInline: 10 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
        }}
      >
        <h1>{t("Career.Title")}</h1>
        <p style={{ maxWidth: 700, fontSize: 16, marginTop: 5 }}>
          {t("Career.Description")}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 20,
          gap: 10,
        }}
      >
        {careerData.map((item) => (
          <BlogCard
            key={item.title}
            srcImage={
              item.srcImageDark && isDarkMode
                ? item.srcImageDark
                : item.srcImage
            }
            title={t(item.title)}
            date={item.date}
            chip={item.chip}
            srcFlag={item.srcFlag}
            chipFlag={item.chipFlag}
            href={item.href}
          />
        ))}
      </div>
    </div>
  )
}

export default Blog
