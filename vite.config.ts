import { defineConfig } from "vite"; // Added missing import
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    // Sitemap must be inside the plugins array
    Sitemap({
      hostname: "https://open-slicer.netlify.app/", // Use production URL for SEO
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/admin",
        },
      ],
    }),
  ],
  server: {
    port: 8080,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
