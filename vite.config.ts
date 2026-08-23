import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        legacy: resolve(process.cwd(), "index.html"),
        advisor: resolve(process.cwd(), "advisor.html"),
        fishSearch: resolve(process.cwd(), "fish-search.html"),
      },
    },
  },
});
