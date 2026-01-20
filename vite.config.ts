import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  root: resolve(__dirname, "src"),
  plugins: [react()],
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
