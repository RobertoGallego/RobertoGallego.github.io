import { blog } from "@/assets"
import { HiOutlineRocketLaunch } from "react-icons/hi2"
import { FaJs, FaLaptopCode, FaReact, FaSchool } from "react-icons/fa6"
import { SiVite } from "react-icons/si"

export const postIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  rocket: HiOutlineRocketLaunch,
  react: FaReact,
  vite: SiVite,
  js: FaJs,
  school: FaSchool,
  laptop: FaLaptopCode,
}

export const postImages: Record<string, string> = {
  useStateWp: blog.useStateWp,
  wall: blog.useCallbackWp,
  tech: blog.useEffectWp,
  rob: blog.useContextWp,
  pexel: blog.useRefWp,
  night: blog.useActionStateWp,
}
