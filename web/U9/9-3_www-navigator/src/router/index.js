import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import data from "@/wwwdata.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/topic/:name",
    name: "topicDetails",
    component: () =>
      import(/* webpackChunkName: "TopicDetails" */ "../views/TopicDetails"),
    props: true,
    children: [
      {
        path: ":subtopicName",
        name: "subtopicDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "SubtopicDetails" */ "../views/SubtopicDetails"
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = data.topics.find(topic => topic.name === to.params.name);
      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register")
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
    meta: { requiresAuth: true }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //need to login
    if (!data.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
