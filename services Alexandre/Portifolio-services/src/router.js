import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import Portfolio from "./components/pages/Portfolio.vue";
import Sobreme from "./components/Sobreme.vue";
import Servicos from "./components/pages/Servicos.vue";
import Resume from "./components/pages/Resume.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/sobreme",
    name: "Sobreme",
    component: Sobreme,
  },
  {
    path: "/servicos",
    name: "Servicos",
    component: Servicos,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
