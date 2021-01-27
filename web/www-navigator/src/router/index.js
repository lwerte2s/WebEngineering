import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () => import(/* webpackChunkName: "TopicDetails" */"../views/TopicDetails"),
    props: true,
    children: [
      {
        path: ":subtopicName",
        name: "subtopicDetails",
        props: true,
        component: () => import(/* webpackChunkName: "SubtopicDetails" */"../views/SubtopicDetails"),
      }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
