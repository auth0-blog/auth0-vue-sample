import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import ExternalApi from "@/views/ExternalApi";
import { authenticationGuard } from "@/auth/authenticationGuard";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authenticationGuard,
    },
    {
      path: "/external-api",
      name: "external-api",
      component: ExternalApi,
      beforeEnter: authenticationGuard,
    },
  ],
});

export default router;
