import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path matches the GitHub Pages project URL: jackgardner99.github.io/GardnerSolutions/
export default defineConfig({
  plugins: [react()],
  base: "/GardnerSolutions/",
});
