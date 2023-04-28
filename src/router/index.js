import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";

import Resume from "../views/Resume.vue";
import Card from "../views/card/index.vue";
import folder from "../views/link/Link.vue";
import editor from "../views/note/editor"

import User from "../views/user/User.vue";
import OauthLogin from "../components/OauthLogin.vue";
import Error from "@/views/error/404";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Rss from "@/views/rss/rss.vue"
import test from "@/views/test.vue"
import bill from "@/views/bill"
import photo from "@/views/photo"
import web from "@/views/web"
import note from "@/views/note"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/card",
    component: Card
  },
  {
    path: "/note",
    component: note
  },
  {
    path: "/resume",
    component: Resume
  },
  {
    path: "/folder",
    component: folder
  },
  {
    path: "/editor",
    component: editor
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/oauth/login/qq",
    component: OauthLogin
  },
  {
    path: "*",
    component: Error
  },
  {
    path:"/rss",
    component: Rss
  },
  {
    path:"/bill",
    component: bill
  },
  {
    path:"/photo",
    component:photo
  },
  {
    path:"/test",
    component:test
  },
  {
    path:"/web",
    component:web
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 10, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 10, // 自动递增间隔
  minimum: 0.01 // 初始化时的最小百分比
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
});

export default router;
