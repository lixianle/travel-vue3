import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import City from "../views/city/City.vue";
import Detail from "../views/detail/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/city",
    name: "City",
    component: City,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
  // 按需加载
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
