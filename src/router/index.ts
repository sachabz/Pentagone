import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Calculator from "@/views/Calculator.vue";
import Cashflow from "@/views/Cashflow.vue";
import Patrimoine from "@/views/Patrimoine.vue";
import CabinetVue from "@/views/Cabinet.vue";
import ServicesVue from "@/views/Services.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cabinet",
      name: "cabinet",
      component: CabinetVue,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesVue,
    },
    {
      path: "/calculator",
      name: "Calculator",
      component: Calculator,
    },
    {
      path: "/cashflow",
      name: "Cashflow",
      component: Cashflow,
    },
    {
      path: "/patrimoine",
      name: "Patrimoine",
      component: Patrimoine,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
