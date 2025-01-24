import basicSsl from "@vitejs/plugin-basic-ssl";
import vue from "@vitejs/plugin-vue";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
    plugins: [
        vueDevTools({
            appendTo: "resources/js/app.ts",
        }),
        basicSsl(),
        laravel({
            input: "resources/js/app.ts",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    server: {
        fs: {
            allow: [".."],
        },
        host: "127.0.0.1",
    },
});
