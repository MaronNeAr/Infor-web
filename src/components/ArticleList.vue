<template>
  <div>
    <!-- 标签或分类名 -->
    <div class="banner" :style="cover">
      <h1 class="banner-title animated fadeInDown">{{ title }} - {{ name }}</h1>
    </div>
    <div class="article-list-wrapper">
      <v-row>
        <v-col
          md="4"
          cols="12"
          v-for="item of articleList"
          :key="item.articleId"
        >
          <!-- 文章 -->
          <v-card class="animated zoomIn article-item-card">
            <div class="article-item-cover">
              <router-link :to="'/articles/' + item.articleId">
                <!-- 缩略图 -->
                <v-img
                  class="on-hover"
                  width="100%"
                  height="100%"
                  :src="item.articleCover"
                />
              </router-link>
            </div>
            <div class="article-item-info">
              <!-- 文章标题 -->
              <div>
                <router-link :to="'/articles/' + item.articleId">
                  {{ item.articleTitle }}
                </router-link>
              </div>
              <div style="margin-top:0.375rem">
                <!-- 是否置顶 -->
                <span v-if="item.isTop == 1">
                  <span style="color:#ff7242">
                    <i class="iconfont iconzhiding" /> 置顶
                  </span>
                  <span class="separator">|</span>
                </span>
                <!-- 发表时间 -->
                <svg class="icon" aria-hidden="true" style="font-size: 18px">
                  <use xlink:href="#icon-rili"></use>
                </svg>
                {{ item.createTime | date }}
                <!-- 文章分类 -->
                <router-link
                  :to="'/category/' + item.categoryId"
                  class="float-right"
                >
                  <svg class="icon" aria-hidden="true" style="font-size: 18px">
                    <use xlink:href="#icon-biaoqian1"></use>
                  </svg>
                  {{ item.categoryName }}
                </router-link>
              </div>
            </div>
            <!-- 分割线 -->
            <v-divider></v-divider>
            <!-- 文章标签 -->
            <div class="tag-wrapper">
              <router-link
                :to="'/tag/' + tag.tagId"
                class="tag-btn"
                v-for="tag of item.tagList"
                :key="tag.tagId"
              >
                {{ tag.tagName }}
              </router-link>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <!-- 无限加载 -->
      <infinite-loading @infinite="infiniteHandler">
        <div slot="no-more" />
      </infinite-loading>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const path = this.$route.path;
    if (path.indexOf("/category") != -1) {
      this.title = "分类";
    } else {
      this.title = "标签";
    }
  },
  destroyed() {
    document.title = "一个简单的技术分享页";
  },
  data() {
    return {
      current: 1,
      articleList: [],
      name: "",
      title: "",
      categoryOrTag: ""
    };
  },
  methods: {
    infiniteHandler($state) {
      const path = this.$route.path;
      let arr = path.split("/");
      // /category/* /tag/*
      this.axios
        .get("/api/" + arr[1] + "/query/" + arr[2], {
          params: {
            current: this.current
          }
        })
        .then(res => {
          const cons = res.data;
          if (cons.data.name) {
            this.name = cons.data.name;
            document.title = this.title + " - " + this.name;
          }
          if (cons.data.recordList.length > 0) {
            this.articleList.push(...cons.data.recordList);
            this.current++;
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    }
  },
  computed: {
    cover() {
      var cover = "";
      this.$store.state.blogInfo.pageList.forEach(item => {
        if (item.pageLabel == "articleList") {
          cover = item.pageCover;
        }
      });
      return "background: url(" + cover + ") center center / cover no-repeat";
    }
  }
};
</script>

<style scoped>
@media (min-width: 760px) {
  .article-list-wrapper {
    max-width: 1106px;
    margin: 370px auto 1rem auto;
  }
  .article-item-card:hover {
    transition: all 0.3s;
    box-shadow: 0 4px 12px 12px rgba(7, 17, 27, 0.15);
  }
  .article-item-card:not(:hover) {
    transition: all 0.3s;
  }
  .article-item-card:hover .on-hover {
    transition: all 0.6s;
    transform: scale(1.1);
  }
  .article-item-card:not(:hover) .on-hover {
    transition: all 0.6s;
  }
  .article-item-info {
    line-height: 1.7;
    padding: 15px 15px 12px 18px;
    font-size: 15px;
  }
}
@media (max-width: 759px) {
  .article-list-wrapper {
    margin-top: 230px;
    padding: 0 12px;
  }
  .article-item-info {
    line-height: 1.7;
    padding: 15px 15px 12px 18px;
  }
}
.article-item-card {
  border-radius: 8px !important;
  box-shadow: 0 4px 8px 6px rgba(7, 17, 27, 0.06);
}
.article-item-card a {
  transition: all 0.3s;
}
.article-item-cover {
  height: 220px;
  overflow: hidden;
}
.article-item-card a:hover {
  color: #8e8cd8;
}
.tag-wrapper {
  padding: 10px 15px 10px 18px;
}
.tag-wrapper a {
  color: #fff !important;
}
.tag-btn {
  display: inline-block;
  font-size: 0.725rem;
  line-height: 22px;
  height: 22px;
  border-radius: 10px;
  padding: 0 12px !important;
  background: linear-gradient(to right, #bf4643 0%, #6c9d8f 100%);
  opacity: 0.6;
  margin-right: 0.5rem;
}
</style>
