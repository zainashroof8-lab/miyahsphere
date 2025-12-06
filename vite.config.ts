// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
    // CRITICAL FIX: Add the 'base' property and set it to your repository name
    base: '/MiyahSphere/', 
    
    plugins: [
        react(),
        runtimeErrorOverlay(),
        ...(process.env.NODE_ENV !== "production" &&
        process.env.REPL_ID !== undefined
          ? [
              await import("@replit/vite-plugin-cartographer").then((m) =>
                m.cartographer(),
              ),
              await import("@replit/vite-plugin-dev-banner").then((m) =>
                m.devBanner(),
              ),
            ]
          : []),
    ],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "client", "src"),
            "@shared": path.resolve(import.meta.dirname, "shared"),
            "@assets": path.resolve(import.meta.dirname, "attached_assets"),
        },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
        // This custom output directory is correct and aligns with your deploy.yml fix.
        outDir: path.resolve(import.meta.dirname, "dist/public"), 
        emptyOutDir: true,
    },
    server: {
        fs: {
            strict: true,
            deny: ["**/.*"],
        },
    },
});
