<template>
  <v-app-bar app :class="navClass" hide-on-scroll flat height="58">
    <!-- 手机端导航栏 -->
    <div class="d-md-none nav-mobile-container">
      <div style="font-size:18px;font-weight:bold">
        <router-link to="/">
          {{ blogInfo.websiteConfig.websiteAuthor }}
        </router-link>
      </div>
      <div style="margin-left:auto">
        <a @click="openSearch"><svg class="icon" aria-hidden="true" style="margin-bottom: 2px">
            <use xlink:href="#icon-sousuo"></use>
          </svg></a>
        <a @click="openDrawer" style="margin-left:10px;font-size:20px">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mulu"></use>
          </svg>
        </a>
      </div>
    </div>
    <!-- 电脑导航栏 -->
    <div class="d-md-block d-none nav-container">
      <div class="float-left blog-title">
        <router-link to="/">
          {{ blogInfo.websiteConfig.websiteAuthor }}
        </router-link>
      </div>
      <div class="justify-center nav-title">
        <div class=" menus-btn">
          <a @click="openSearch">
            <svg class="icon" aria-hidden="true" style="margin-right: 4px">
              <use xlink:href="#icon-sousuo"></use>
            </svg>
            <span style="color: white;font-weight: bolder">搜索</span></a>
        </div>
        <div class="menus-item">
          <router-link to="/">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-home"></use>
            </svg>
            <span style="color: white;font-weight: bolder">首页</span>
          </router-link>
        </div>
        <div class="user-btn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-guidang"></use>
          </svg>
          <span style="color: white;font-weight: bolder">归档</span>
          <ul class="user-submenu">
            <li>
              <router-link to="/card">
                <img class="icon" src="@/assets/icon/证件.svg" alt="">
                证件
              </router-link>
            </li>
            <li>
              <router-link to="/bill">
                <img class="icon" src="@/assets/icon/持有票据查询.svg" alt="">
                票据
              </router-link>
            </li>
          </ul>
        </div>
        <div class="user-btn">
          <img class="icon" src="@/assets/icon/收藏文件.svg" alt="">
          <span style="color: white;font-weight: bolder">收藏</span>
          <ul class="user-submenu">
            <li>
              <router-link to="/web">
                <img class="icon" src="@/assets/icon/Internet.svg" alt="">
                互联网
              </router-link>
            </li>
            <li>
              <router-link to="/folder">
                <img class="icon" src="@/assets/icon/文件夹.svg" alt="">
                收藏夹
              </router-link>
            </li>
          </ul>
        </div>
        <div class="user-btn">
          <img class="icon" src="@/assets/icon/pencil.svg" alt="">
          <span style="color: white;font-weight: bolder">编辑</span>
          <ul class="user-submenu">
            <li>
              <router-link to="/note">
                <img class="icon" src="@/assets/icon/新建笔记 .svg" alt="">
                笔记
              </router-link>
            </li>
            <li>
              <router-link to="/resume">
                <img class="icon" src="@/assets/icon/简历.svg" alt="">
                简历
              </router-link>
            </li>
          </ul>
        </div>
        <div class="menus-item">
          <router-link to="/rss">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-lianjie"></use>
            </svg>
            <span style="color: white;font-weight: bolder">发现</span>
          </router-link>
        </div>
        <div class="user-btn">
          <a v-if="!this.$store.state.avatar" @click="openLogin">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye_gerenzhongxinliang"></use>
            </svg>
            <span style="color: white;font-weight: bolder">登录</span>
          </a>

          <template v-else>
            <img class="user-avatar" :src="this.$store.state.avatar" height="30" width="30" alt="" />
            <ul class="user-submenu">
              <li>
                <router-link to="/user">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye_gerenzhongxinliang"></use>
                  </svg>
                  个人中心
                </router-link>
              </li>
              <li>
                <a @click="logout"><svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tuichu"></use>
                  </svg>
                  退出</a>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    mounted() {
      window.addEventListener("scroll", this.scroll);
    },
    data: function () {
      return {
        navClass: ""
      };
    },
    methods: {
      scroll() {
        const that = this;
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        that.scrollTop = scrollTop;
        if (that.scrollTop > 60) {
          that.navClass = "nav-fixed";
        } else {
          that.navClass = "nav";
        }
      },

      openSearch() {
        this.$store.state.searchFlag = true;
      },
      openDrawer() {
        this.$store.state.drawer = true;
      },
      openLogin() {
        this.$store.state.loginFlag = true;
      },

      logout() {
        //如果在个人中心则跳回上一页
        if (this.$route.path == "/user") {
          this.$router.go(-1);
        }
        this.axios.get("/api/logout").then(res => {
          const cons = res.data;
          if (cons.flag) {
            this.$store.commit("logoutBlog");
            this.$toast({
              type: "success",
              message: cons.message
            });
          } else {
            this.$toast({
              type: "error",
              message: "注销失败"
            });
          }
        });
      }
    },
    computed: {
      avatar() {
        return this.$store.state.avatar;
      },
      blogInfo() {
        return this.$store.state.blogInfo;
      }
    }
  };
</script>

<style scoped>
  i {
    margin-right: 4px;
  }

  ul {
    list-style: none;
  }

  .nav {
    background: rgba(0, 0, 0, 0) !important;
  }

  .nav a {
    color: #eee !important;
  }

  .nav .menus-item a {
    text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  }

  .nav .blog-title a {
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  }

  .theme--light.nav-fixed {
    background: rgba(255, 255, 255, 0.8) !important;
    box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
  }

  .theme--dark.nav-fixed {
    background: rgba(18, 18, 18, 0.8) !important;
  }

  .theme--dark.nav-fixed a {
    color: rgba(255, 255, 255, 0.8) !important;
  }

  .theme--light.nav-fixed a {
    color: #4c4948 !important;
  }

  .nav-fixed .menus-item a,
  .nav-fixed .menus-btn a,
  .nav-fixed .blog-title a {
    text-shadow: none;
  }

  .nav-container {
    font-size: 20px;
    width: 100%;
    height: 100%;
  }

  .nav-mobile-container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .blog-title,
  .nav-title {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .blog-title a {
    font-size: 20px;
    font-weight: bold;
  }

  .user-btn,
  .menus-btn,
  .menus-item {
    position: relative;
    display: inline-block;
    margin: 0 0 0 0.875rem;
  }

  .menus-btn a,
  .menus-item a {
    transition: all 0.2s;
  }

  .nav-fixed .menus-btn a:hover,
  .nav-fixed .menus-item a:hover {
    color: #49b1f5 !important;
  }

  .menus-item a:hover:after {
    width: 100%;
  }

  .menus-item a:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    z-index: -1;
    width: 0;
    height: 3px;
    background-color: #80c8f8;
    content: "";
    transition: all 0.3s ease-in-out;
  }

  .user-btn a {
    transition: all 0.2s;
  }

  .user-avatar {
    cursor: pointer;
    border-radius: 50%;
  }

  .user-btn:hover .user-submenu {
    display: block;
  }

  .user-submenu {
    position: absolute;
    display: none;
    right: 0;
    width: max-content;
    margin-top: 8px;
    box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    animation: submenu 0.3s 0.1s ease both;
    font-weight: bolder;
  }

  .user-submenu:before {
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 20px;
    content: "";
  }

  .user-submenu a {
    line-height: 2;
    color: #4c4948 !important;
    text-shadow: none;
    display: block;
    padding: 6px 14px;
  }

  .user-submenu a:hover {
    background: #4ab1f4;
  }

  @keyframes submenu {
    0% {
      opacity: 0;
      filter: alpha(opacity=0);
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      filter: none;
      transform: translateY(0);
    }
  }
</style>