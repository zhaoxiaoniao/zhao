import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);
const routes = [
    {
        path: "",
        redirect: "/login",
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Home",
        component: Home,
        children: [
            {
                path: "/",
                name: "About",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/About.vue"
                    ),
            },
            {
                path: "/About",
                name: "About",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/About.vue"
                    ),
            },
            {
                path: "/pable",
                name: "pable",
                component: () =>
                    import(
                        /* webpackChunkName: "about" */ "../views/pable.vue"
                    ),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
// 解决不允许导航当前页报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
    return routerPush.call(this, location).catch((error) => error);
};
export default router;
