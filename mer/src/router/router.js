import Vue from "vue";
import VueRouter from "vue-router";
import A from "../views/A";
import B from "../views/B";
import Error from "../views/error";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    base: "/mer/",
    routes: [
        {
            path: '/a',
            name: 'a',
            component: A,
        },
        {
            path: '/b',
            name: 'b',
            component: B,
        },
        {
            path: "*",
            name: '404',
            component: Error
        },
    ],
});

export default router;