import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            store: path.resolve(__dirname, "./src/store"),
            utils: path.resolve(__dirname, "./src/utils"),
            hooks: path.resolve(__dirname, "./src/hooks"),
            components: `${path.resolve(__dirname, "./src/components")}`,
            pages: path.resolve(__dirname, "./src/pages"),
            types: `${path.resolve(__dirname, "./src/@types")}`,
        },
    },
    plugins: [react()],
});
