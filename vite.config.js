import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the custom domain root: gardnersolutions.co
export default defineConfig({
  plugins: [react()],
  base: "/",
});
