import useDarkMode from "@/hooks/useDarkMode"
import { Highlight, themes } from "prism-react-renderer"

const CodeBlock = ({
  code,
  language = "typescript",
}: {
  code: string
  language?: string
}) => {
  const { isDarkMode } = useDarkMode()

  return (
    <Highlight
      theme={isDarkMode ? themes.nightOwl : themes.github}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
