import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8801, // frontend-ul tău
    proxy: {
      "/api": {
        target: "http://localhost:8800", // backend-ul tău
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
