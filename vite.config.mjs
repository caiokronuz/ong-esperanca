import { defineConfig } from "vite";

export default defineConfig({
    base: "/ong-esperanca/",
    build: {
        outDir: "dist",
        minify: "oxc"
    }
});