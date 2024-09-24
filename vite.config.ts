import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://www.gamerpower.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/giveaways"),
        secure: true, // Ensures the SSL certificates are considered valid
      },
    },
  },
});
