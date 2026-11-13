import { defineConfig } from "vite";

export default defineConfig(({ command, isPreview }) => ({
  // dev（开发服务器）用根路径；build（打包）和 preview（预览打包结果）都用 GitHub Pages 的子路径。
  // 必须把 isPreview 也算进来：否则 preview 会用 "/" 提供服务，
  // 而 dist 里的资源路径是 "/zero-to-tech/assets/..."，两者对不上就会 404 → 页面丢样式。
  base: command === "build" || isPreview ? "/zero-to-tech/" : "/",
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