<template>
  <div class="oauth-background">
    <div id="preloader_1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  created() {
    const that = this;
    //关闭登录框
    that.$store.state.loginFlag = false;
    // 拿到openId，accessToken传入后台
    if (QC.Login.check()) {
      QC.Login.getMe(function(openId, accessToken) {
        that.axios
          .post("/api/user/oauth/qq", {
            openId: openId,
            accessToken: accessToken
          })
          .then(res => {
            const cons = res.data;
            // console.log(cons)
            if (cons.flag) {
              //保存登录状态
              that.$store.commit("loginBlog", cons.data);
              if (cons.data.user.email == null) {
                that.$toast({
                  type: "warning",
                  message: "请绑定邮箱以便及时收到回复"
                });
              } else {
                that.$toast({ type: "success", message: cons.message });
              }
            } else {
              that.$toast({ type: "error", message: cons.message });
            }
          });
      });
    } else {
      that.$toast({ type: "error", message: "系统错误！" });
    }
    // 跳转回原页面
    const loginUrl = that.$store.state.loginUrl;
    if (loginUrl != null && loginUrl != "") {
      that.$router.push({ path: loginUrl });
    } else {
      that.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.oauth-background {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
}
#preloader_1 {
  position: relative;
  top: 45vh;
  left: 45vw;
}
#preloader_1 span {
  display: block;
  bottom: 0px;
  width: 9px;
  height: 5px;
  background: #9b59b6;
  position: absolute;
  animation: preloader_1 1.5s infinite ease-in-out;
}
#preloader_1 span:nth-child(2) {
  left: 11px;
  animation-delay: 0.2s;
}
#preloader_1 span:nth-child(3) {
  left: 22px;
  animation-delay: 0.4s;
}
#preloader_1 span:nth-child(4) {
  left: 33px;
  animation-delay: 0.6s;
}
#preloader_1 span:nth-child(5) {
  left: 44px;
  animation-delay: 0.8s;
}
@keyframes preloader_1 {
  0% {
    height: 5px;
    transform: translateY(0px);
    background: #9b59b6;
  }
  25% {
    height: 30px;
    transform: translateY(15px);
    background: #3498db;
  }
  50% {
    height: 5px;
    transform: translateY(0px);
    background: #9b59b6;
  }
  100% {
    height: 5px;
    transform: translateY(0px);
    background: #9b59b6;
  }
}
</style>
