import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/src/js";

import DefaultLayout from "@/Layouts/AppLayout.vue";

const appName = import.meta.env.VITE_APP_NAME || "ACL PORTAL";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name: any) => {
        // inertia persistence
        const page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        );
        page.then((module: any) => {
            module.default.layout = module.default.layout || DefaultLayout;
        });
        return page;
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: "#65b1fa",
    },
});
