import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import axios from "axios";
import md5 from "js-md5";
import "view-design/dist/styles/iview.css";

Vue.prototype.axios = axios;

Vue.prototype.$md5 = md5;
Vue.use(ViewUI);
Vue.config.productionTip = false;

// export function mount(target, configs) {
axios.defaults.baseURL = process.env.VUE_APP_ADMIN;
console.log(process.env.VUE_APP_ADMIN);

axios.interceptors.request.use(
    (config) => {
        let token = window.localStorage.getItem("login_token");
        config.headers.Authorization = `${token}`;
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => {
        // if (response.data.status == 401) {
        //     window.localStorage.removeItem("hasLogin");
        //     window.localStorage.removeItem("userInfo");
        //     window.localStorage.removeItem("login_token");
        //     vm.$router.push({ path: "/login" });
        // }
        return response;
    },
    (error) => {
        if (error.response) {
            // if (error.response.data.status == 401) {
            //     window.localStorage.removeItem("hasLogin");
            //     window.localStorage.removeItem("userInfo");
            //     window.localStorage.removeItem("login_token");
            //     vm.$router.push({ path: "/login" });
            // }
        }
        return Promise.reject(error.response.data); // 返回接口返回的错误信息
    }
);

new Vue({
    // el: target || "#app",
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
//     return vm;
// }
