import TechCard from "./TechCard/TechCard"
import { TbDeviceDesktopCode } from "react-icons/tb"
import { FaArrowTrendUp, FaMasksTheater } from "react-icons/fa6"
import { MdArrowOutward, MdOutlineRoomService } from "react-icons/md"

import { VscServerProcess, VscTools } from "react-icons/vsc"
import { IoMdCloudOutline } from "react-icons/io"
import { PiBinocularsFill } from "react-icons/pi"
import {
  AppleDark,
  AppleLight,
  BetterAuthLight,
  Bitwarden,
  Bun,
  ChartJS,
  Chrome,
  Cloudflare,
  CloudflareWorkers,
  CSSOld,
  Cypress,
  Deepseek,
  DigitalOcean,
  Discord,
  Docker,
  Hono,
  Drizzle,
  Electron,
  Expo,
  ExpressDark,
  ExpressLight,
  Figma,
  Firebase,
  Firefox,
  GoDark,
  GoLight,
  GraphQL,
  HTML5,
  JavaScript,
  JWT,
  MaterialUI,
  Million,
  MongoDB,
  Neon,
  NodeJS,
  PostgreSQL,
  Preact,
  PrismaDark,
  PrismaLight,
  ReactQuery,
  ReactRouter,
  Redis,
  SocketIOLight,
  SolidJS,
  Storybook,
  StyledComponents,
  Supabase,
  TailwindCSS,
  TanStack,
  TypeScript,
  ViteJS,
  Zod,
  Zustand,
  Jest,
  Vitest,
  Playwright,
  Sentry,
  Heroku,
  Ubuntu,
  Premiere,
  Photoshop,
  Illustrator,
  VSCode,
  Neovim,
  Notion,
  Obsidian,
  Linear,
  Postman,
  Slack,
  GitHubLight,
  GitHubDark,
  Git,
  GitLab,
  MarkdownLight,
  PnpmLight,
  Yarn,
  Homebrew,
  Windows,
  ZenBrowserDark,
  Shopify,
  Stripe,
  Twilio,
  OBS,
  WordPress,
  HuggingFace,
  DotenvX,
  OpenAILight,
  Pilot,
  OXC,
  PrettierDark,
  MotionDark,
} from "../assets"
import useDarkMode from "../hooks/useDarkMode"

interface TechStackProps {
  src?: string | { light: string; dark: string }
  label: string
}

interface StackCategoryProps {
  CategoryTitle: string
  CategoryIcon: React.ElementType
  categoryColor: string
  categoryDescription: string
  categoryKeys: string[]
  techStack: TechStackProps[]
}

const StackCategoryData = [
  {
    id: 1,
    CategoyIcon: TbDeviceDesktopCode,
    categoryColor: "DarkOrange",
    CategoryTitle: "Frontend",
    categoryDescription:
      "Responsive and accessible interfaces modern web tech.",
    categoryKeys: [
      "Responsive UI design and accessibility",
      "Component-based architecture with React and Preact",
      "State management patterns (Redux, Zustand, React Query)",
      "Performance optimization and code splitting",
    ],
    techStack: [
      { src: HTML5, label: "HTML5" },
      { src: CSSOld, label: "CSS" },
      { src: JavaScript, label: "JavaScript" },
      { src: TypeScript, label: "TypeScript" },
      { src: Expo, label: "Expo" },
      { src: ReactQuery, label: "TanStack Query" },
      { src: TanStack, label: "TanStack Table" },
      { src: ReactRouter, label: "React Router" },
      { src: Storybook, label: "Storybook" },
      { src: Zustand, label: "Zustand" },
      { src: Electron, label: "Electron" },
      { src: ViteJS, label: "Vite" },
      { src: MaterialUI, label: "Material UI" },
      { src: StyledComponents, label: "Styled Component" },
      { src: TailwindCSS, label: "Tailwind CSS" },
      { src: Zod, label: "Zod" },
      { src: ChartJS, label: "ChartJS" },
      { src: Preact, label: "Preact" },
      { src: Million, label: "Million" },
      { src: MotionDark, label: "Motion" },
      { src: SolidJS, label: "SolidJS" },
      { src: PrettierDark, label: "Prettier" },
    ],
  },
  {
    id: 2,
    CategoyIcon: VscServerProcess,
    categoryColor: "green",
    CategoryTitle: "Backend",
    categoryDescription:
      "Creating efficient APIs and scalable server-side architectures.",
    categoryKeys: [
      "API design and RESTful/GraphQL services",
      "Database modeling and ORM usage (Prisma, Drizzle)",
      "Authentication and authorization (JWT, BetterAuth)",
      "Scalable, event-driven architecture",
    ],
    techStack: [
      { src: NodeJS, label: "Node.js" },
      { src: { light: ExpressLight, dark: ExpressDark }, label: "Express" },
      { src: Supabase, label: "Supabase" },
      { src: SocketIOLight, label: "Socket.IO" },
      { src: JWT, label: "JWT" },
      { src: { light: PrismaLight, dark: PrismaDark }, label: "Prisma" },
      { src: GraphQL, label: "GraphQL" },
      { src: MongoDB, label: "MongoDB" },
      { src: PostgreSQL, label: "PostgreSQL" },
      { src: Redis, label: "Redis" },
      { src: Drizzle, label: "Drizzle" },
      { src: Bun, label: "Bun" },
      { src: Firebase, label: "Firebase" },
      { src: Neon, label: "Neon" },
      { src: { light: GoLight, dark: GoDark }, label: "Go" },
      { src: Hono, label: "Hono" },
      { src: BetterAuthLight, label: "BetterAuth" },
    ],
  },
  {
    id: 3,
    CategoyIcon: FaMasksTheater,
    categoryColor: "DeepSkyBlue",
    CategoryTitle: "Testing & QA",
    categoryDescription:
      "Ensuring reliability through automated testing and quality checks.",
    categoryKeys: [
      "Automated end-to-end and unit testing",
      "Test-driven development (TDD)",
      "Continuous integration and delivery pipelines",
      "Cross-browser and compatibility testing",
    ],
    techStack: [
      { src: Cypress, label: "Cypress" },
      { src: Jest, label: "Jest" },
      { src: Vitest, label: "Vitest" },
      { src: Playwright, label: "Playwright" },
    ],
  },
  {
    id: 4,
    CategoyIcon: IoMdCloudOutline,
    categoryColor: "Gold",
    CategoryTitle: "Cloud",
    categoryDescription:
      "Deploying and managing scalable cloud-native applications.",
    categoryKeys: [
      "Containerization and orchestration (Docker, Kubernetes)",
      "Cloud provider management and deployment (AWS, DigitalOcean)",
      "Serverless functions and edge computing",
      "Infrastructure as Code (Terraform)",
    ],
    techStack: [
      { src: Docker, label: "Docker" },
      { src: Firebase, label: "Firebase" },
      { src: DigitalOcean, label: "DigitalOcean" },
      { src: Cloudflare, label: "Cloudflare" },
      { src: CloudflareWorkers, label: "Cloudflare Workers" },
      { src: Heroku, label: "Heroku" },
    ],
  },
  {
    id: 5,
    CategoyIcon: TbDeviceDesktopCode,
    categoryColor: "Olive",
    CategoryTitle: "Design & UX",
    categoryDescription:
      "Crafting intuitive user experiences with a focus on usability.",
    categoryKeys: [
      "User-centered design and prototyping",
      "Collaboration with developers via design systems",
      "Accessibility standards and guidelines",
      "Visual storytelling and branding consistency",
    ],
    techStack: [
      { src: Photoshop, label: "Photoshop" },
      { src: Premiere, label: "Premiere" },
      { src: Illustrator, label: "Illustrator" },
      { src: Figma, label: "Figma" },
    ],
  },
  {
    id: 6,
    CategoyIcon: VscTools,
    categoryColor: "purple",
    CategoryTitle: "Productivity Tools",
    categoryDescription:
      "Streamlining workflows with the right development tools.",
    categoryKeys: [
      "Version control workflows (Git, GitHub, GitLab)",
      "Project management and documentation (Notion, Linear)",
      "Code editors and IDE customization (VSCode, Neovim)",
      "Communication and collaboration platforms (Slack, Discord)",
    ],
    techStack: [
      { src: VSCode, label: "VSCode" },
      { src: Notion, label: "Notion" },
      { src: Neovim, label: "Neovim" },
      { src: Obsidian, label: "Obsidian" },
      { src: Linear, label: "Linear" },
      { src: Postman, label: "Postman" },
      { src: Slack, label: "Slack" },
      { src: Discord, label: "Discord" },
      { src: Chrome, label: "Chrome" },
      { src: Firefox, label: "Firefox" },
      { src: { light: GitHubLight, dark: GitHubDark }, label: "GitHub" },
      { src: Git, label: "Git" },
      { src: GitLab, label: "GitLab" },
      { src: MarkdownLight, label: "Markdown" },
      { src: PnpmLight, label: "PNPM" },
      { src: Yarn, label: "Yarn" },
      { src: Homebrew, label: "Homebrew" },
      { src: { light: AppleLight, dark: AppleDark }, label: "Apple" },
      { src: Windows, label: "Windows" },
      { src: ZenBrowserDark, label: "Zen Browser" },
      { src: Ubuntu, label: "Ubuntu" },
      { src: DotenvX, label: "Dotenv" },
    ],
  },
  {
    id: 7,
    CategoyIcon: PiBinocularsFill,
    categoryColor: "brown",
    CategoryTitle: "R&D",
    categoryDescription:
      "Experimenting with cutting-edge technologies and ideas.",
    categoryKeys: [
      "Exploration of emerging technologies",
      "Proof of concept and experimental prototyping",
      "Data analysis and user behavior research",
      "Iterative innovation and feedback incorporation",
    ],
  },
  {
    id: 8,
    CategoyIcon: FaArrowTrendUp,
    categoryColor: "Teal",
    CategoryTitle: "Currently Improving",
    categoryDescription: "Continuously leveling up my technical skills.",
    categoryKeys: [
      "Learning new frameworks and tools",
      "Refactoring and code quality improvement",
      "Performance benchmarking",
      "Keeping up-to-date with industry trends",
    ],
  },
  {
    id: 9,
    CategoyIcon: MdOutlineRoomService,
    categoryColor: "Salmon",
    CategoryTitle: "Service",
    categoryDescription:
      "Integrating third-party solutions seamlessly and securely.",
    categoryKeys: [
      "Integration of third-party APIs and SaaS tools",
      "Automation and workflow optimization",
      "Security and compliance considerations",
      "User support and incident monitoring",
    ],
    techStack: [
      {
        src: Bitwarden,
        label: "Bitwarden",
      },
      {
        src: Deepseek,
        label: "Deepseek",
      },
      { src: Shopify, label: "Shopify" },
      { src: Stripe, label: "Stripe" },
      { src: Twilio, label: "Twilio" },
      { src: OBS, label: "OBS" },
      { src: HuggingFace, label: "Hugging Face" },
      { src: WordPress, label: "WordPress" },
      { src: OpenAILight, label: "OpenAI" },
      { src: Pilot, label: "Pilot" },
      { src: OXC, label: "OXC" },
      { src: Sentry, label: "Sentry" },
    ],
  },
]

const StackCategoryContent = ({
  categoryNumber,
}: {
  categoryNumber: number
}) => {
  const category = StackCategoryData.find((cat) => cat.id === categoryNumber)

  if (!category) return <div>Category not found</div>

  return (
    <StackCategory
      key={category.id}
      categoryColor={category.categoryColor}
      CategoryTitle={category.CategoryTitle}
      CategoryIcon={category.CategoyIcon}
      categoryDescription={category.categoryDescription}
      categoryKeys={category.categoryKeys}
      techStack={category.techStack || []}
    />
  )
}

const StackCategory = ({
  CategoryTitle,
  categoryColor,
  CategoryIcon,
  categoryDescription,
  categoryKeys,
  techStack = [],
}: StackCategoryProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: 40,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <CategoryIcon
            style={{
              backgroundColor: isDarkMode ? "#000000" : "#eeeeee",
              borderRadius: 10,
              padding: 10,
            }}
            color={categoryColor}
            size={50}
          />

          <h1>{CategoryTitle}</h1>
        </div>

        <p
          style={{
            fontSize: 16,
            color: "grey",
            marginTop: 10,
            marginBottom: 10,
            maxWidth: 450,
          }}
        >
          {categoryDescription}
        </p>

        <div
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
        >
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[0]}</p>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[1]}</p>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[2]}</p>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <MdArrowOutward color={categoryColor} />
          <p>{categoryKeys[3]}</p>
        </div>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            marginTop: 20,
            border: isDarkMode
              ? "0l.5px solid #333333"
              : "0l.5px solid #dddddd",
          }}
        >
          {techStack.map((tech) => (
            <TechCard key={tech.label} src={tech.src} label={tech.label} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackCategoryContent
