import {
  BlogPost,
  Heading,
  Paragraph,
  CodeBlock,
  InlineCode,
  List,
  ListItem,
  Link,
  Divider,
} from "@/components/BlogPost/BlogPost"

export default function UseRef() {
  return (
    <BlogPost>
      <Heading level={1}>Aprendiendo React paso a paso</Heading>
      <Paragraph>
        React es una biblioteca de JavaScript para construir interfaces de
        usuario interactivas. En este post aprenderás los conceptos básicos
        para empezar con React.
      </Paragraph>

      <Divider />

      <Heading level={2}>¿Qué es React?</Heading>
      <Paragraph>
        React es una biblioteca creada por Facebook que permite crear
        aplicaciones web modernas utilizando componentes reutilizables.
      </Paragraph>

      <Heading level={2}>Conceptos fundamentales</Heading>
      <List>
        <ListItem>Componentes</ListItem>
        <ListItem>Props</ListItem>
        <ListItem>State</ListItem>
        <ListItem>Hooks</ListItem>
        <ListItem>JSX</ListItem>
      </List>

      <Divider />

      <Heading level={2}>Tu primer componente</Heading>
      <Paragraph>
        Un componente en React es simplemente una función que retorna JSX:
      </Paragraph>

      <CodeBlock language="typescript">
        {`function Welcome() {
  return <h1>¡Hola Mundo!</h1>
}

export default Welcome`}
      </CodeBlock>

      <Heading level={2}>Props: Pasando datos</Heading>
      <Paragraph>
        Los <InlineCode>props</InlineCode> permiten pasar datos de un componente
        padre a un componente hijo:
      </Paragraph>

      <CodeBlock language="typescript">
        {`interface GreetingProps {
  name: string
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hola, {name}!</h1>
}

// Uso
<Greeting name="María" />`}
      </CodeBlock>

      <Heading level={2}>State: Estado del componente</Heading>
      <Paragraph>
        El estado permite que tus componentes "recuerden" información:
      </Paragraph>

      <CodeBlock language="typescript">
        {`import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  )
}`}
      </CodeBlock>

      <Divider />

      <Heading level={2}>Recursos para aprender más</Heading>
      <List>
        <ListItem>
          <Link href="https://react.dev">Documentación oficial de React</Link>
        </ListItem>
        <ListItem>
          <Link href="https://react.dev/learn">Tutorial interactivo</Link>
        </ListItem>
      </List>
    </BlogPost>
  )
}
