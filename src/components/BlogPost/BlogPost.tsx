import { ReactNode, ElementType } from "react"
import "./BlogPost.css"
import { useDarkMode } from "@/hooks"
import LazyImg from "../LazyImg/LazyImg"

interface BlogPostProps {
  children: ReactNode
}

export const BlogPost = ({ children }: BlogPostProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <article className={`blog-post ${isDarkMode ? "dark" : "light"}`}>
      {children}
    </article>
  )
}

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4
}

export const Heading = ({ children, level = 1 }: HeadingProps) => {
  const Tag = `h${level}` as ElementType
  return <Tag className={`blog-heading blog-heading-${level}`}>{children}</Tag>
}

interface ParagraphProps {
  children: ReactNode
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className="blog-paragraph">{children}</p>
)

interface CodeBlockProps {
  children: string
  language?: string
}

export const CodeBlock = ({ children, language = "bash" }: CodeBlockProps) => (
  <div className="blog-code-wrapper">
    {language && <div className="blog-code-language">{language}</div>}
    <pre className="blog-code-block">
      <code>{children}</code>
    </pre>
  </div>
)

interface InlineCodeProps {
  children: ReactNode
}

export const InlineCode = ({ children }: InlineCodeProps) => (
  <code className="blog-inline-code">{children}</code>
)

interface ListProps {
  children: ReactNode
  ordered?: boolean
}

export const List = ({ children, ordered = false }: ListProps) => {
  const Tag = ordered ? "ol" : "ul"
  return <Tag className="blog-list">{children}</Tag>
}

interface ListItemProps {
  children: ReactNode
}

export const ListItem = ({ children }: ListItemProps) => (
  <li className="blog-list-item">{children}</li>
)

interface LinkProps {
  href: string
  children: ReactNode
}

export const Link = ({ href, children }: LinkProps) => (
  <a
    href={href}
    className="blog-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)

interface BlockquoteProps {
  children: ReactNode
}

export const Blockquote = ({ children }: BlockquoteProps) => (
  <blockquote className="blog-blockquote">{children}</blockquote>
)

export const Divider = () => <hr className="blog-divider" />

interface ImageProps {
  src: string
  alt: string
  caption?: string
}

export const Image = ({ src, alt, caption }: ImageProps) => (
  <figure className="blog-image-wrapper">
    <LazyImg src={src} alt={alt} className="blog-image" />
    {caption && (
      <figcaption className="blog-image-caption">{caption}</figcaption>
    )}
  </figure>
)
