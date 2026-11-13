import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  // 开发用根路径；打包时用 GitHub Pages 的子路径
  base: command === "build" ? "/zero-to-tech/" : "/",
  server: { open: true, port: 5173 },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        textLab: "text-lab.html",
      },
    },
  },
}));