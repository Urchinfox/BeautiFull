import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(
          __dirname,
          "src"
        ),
      },
    ],
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "bootstrap/scss/functions";
          @import "@/shared/variables.scss";
          @import "bootstrap/scss/bootstrap"; 
          @import "@/shared/utilities.scss";
        `,
      }
    }
  }
});
