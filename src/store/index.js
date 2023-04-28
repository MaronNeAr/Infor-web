import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchFlag: false,
    loginFlag: false,
    registerFlag: false,
    forgetFlag: false,
    emailFlag: false,
    drawer: false, // 手机端
    loginUrl: "",
    userId: null,
    avatar: null,
    nickname: null,
    intro: null,
    webSite: null,
    loginType: null,
    email: null,
    articleLikeSet: [],
    commentLikeSet: [],
    blogInfo: {
      websiteConfig: {
        alipayQRCode:
          "https://static.ran-feiran.cn/config/369af59dd5f0abfb4b55ef3e4021aa2a.jpg",
        articleCover:
          "https://static.ran-feiran.cn/config/29877d73fd18a979a8d8231176d108f2.jpeg",
        gitee: "https://gitee.com/maron_near/Infor-web",
        github: "https://github.com/MaronNeAr/Infor-web",
        isChatRoom: 1,
        isCommentReview: 0,
        isEmailNotice: 1,
        isMessageReview: 0,
        isMusicPlayer: 0,
        isReward: 1,
        qq: "2402165946",
        socialLoginList: ["qq"],
        socialUrlList: ["qq", "github", "gitee"],
        touristAvatar:
          "https://static.ran-feiran.cn/config/1127a8ec43092614d584219c5bc7f114.jpg",
        userAvatar:
          "https://static.ran-feiran.cn/config/43a07ac1ca201143f7b938d0791124fc.png",
        websiteAuthor: "SUFE",
        websiteAvatar:
          "https://static.ran-feiran.cn/config/eccc1fc8a5792333d10234bdb2291400.jpg",
        websiteCreateTime: "2022-07-06",
        websiteIntro: "以身为棋，胜天半子",
        websiteName: "基于NLP和图像识别的个人文档管理系统",
        websiteNotice:
          "博客改版上线，项目源码在上方Github处，微信在控制台，感谢大家支持🤞🤞🤞",
        websiteRecordNo: " 宁ICP备2022000586号",
        websocketUrl: "wss://ws.ran-feiran.cn",
        weiXinQRCode:
          "https://static.ran-feiran.cn/config/6ae94e7d34ae29f9ac3384f54fd48e0b.png"
      }
    } // 博客信息存储
  },
  mutations: {
    loginBlog(state, user) {
      state.userId = user.userId;
      state.avatar = user.avatar;
      state.nickname = user.nickname;
      state.intro = user.intro;
      state.webSite = user.webSite;
      state.email = user.email;
      state.articleLikeSet = user.articleLikeSet ? user.articleLikeSet : [];
      state.commentLikeSet = user.commentLikeSet ? user.commentLikeSet : [];
      state.email = user.email;
      state.loginType = user.loginType;
    },

    logoutBlog(state) {
      state.userId = null;
      state.avatar = null;
      state.nickname = null;
      state.intro = null;
      state.webSite = null;
      state.email = null;
      state.articleLikeSet = []; // 文章点赞集合
      state.commentLikeSet = []; // 评论点赞集合
      state.email = null;
      state.loginType = null;
    },
    updateUserInfo(state, user) {
      state.nickname = user.nickname;
      state.intro = user.intro;
      state.webSite = user.webSite;
    },
    saveEmail(state, email) {
      state.email = email;
    },
    updateAvatar(state, avatar) {
      state.avatar = avatar;
    },
    checkBlogInfo(state, blogInfo) {
      state.blogInfo = blogInfo;
    },
    closeModel(state) {
      state.registerFlag = false;
      state.loginFlag = false;
      state.searchFlag = false;
      state.forgetFlag = false;
      state.emailFlag = false;
    },
    commentLike(state, commentId) {
      let commentLikeSet = state.commentLikeSet;
      if (commentLikeSet.indexOf(commentId) != -1) {
        commentLikeSet.splice(commentLikeSet.indexOf(commentId), 1);
      } else {
        commentLikeSet.push(commentId);
      }
    },
    articleLike(state, articleId) {
      let articleLikeSet = state.articleLikeSet;
      if (articleLikeSet.indexOf(articleId) != -1) {
        articleLikeSet.splice(articleLikeSet.indexOf(articleId), 1);
      } else {
        articleLikeSet.push(articleId);
      }
    },
    saveLoginUrl(state, url) {
      state.loginUrl = url; // 三方授权登录路径保存
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
