import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FogOfWar from "./views/FogOfWar.vue";
import ThereBeMonsters from "./views/ThereBeMonsters.vue";
import TomeOfMagic from "./views/TomeOfMagic.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/FogOfWar",
      name: "FogOfWar",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/FogOfWar.vue")
    }
  ]
});
