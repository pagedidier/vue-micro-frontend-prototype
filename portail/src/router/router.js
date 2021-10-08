import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../views/Home"
import MerWrapper from "../views/MerWrapper";
import PerWrapper from "../views/PerWrapper";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/mer',
        name: 'mer',
        component: MerWrapper,
    },
    {
        path: '/per',
        name: 'per',
        component: PerWrapper,
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
