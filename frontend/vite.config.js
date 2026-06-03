import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function serveRootIndex() {
  return {
    name: "serve-root-index",
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === "/") {
          req.url = "/index.html";
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [serveRootIndex(), react()],
});
