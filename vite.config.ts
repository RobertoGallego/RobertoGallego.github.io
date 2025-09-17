import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  // base: "/RobertoGallego.github.io/",
  base: "/",
  plugins: [
    react(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
  ],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/data": path.resolve(__dirname, "./src/data"),
    },
  },
})
