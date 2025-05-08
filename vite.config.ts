import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        build: {
            outDir: process.env.VITE_BUILD_PATH || "build",
            manifest: true,
            rollupOptions: {
                input: ["src/main.tsx", "./index.html"],
            },
        },
        server: {
            port: parseInt(process.env.VITE_PORT ?? ""),
        },
        base: process.env.VITE_BASENAME || "",
        plugins: [react()],
    };
});

