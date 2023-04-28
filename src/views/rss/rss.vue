<template>
  <div>
    <div class="banner1">
      <div class="certificate">

        <div class="certificate-icon">
          <img src="@/assets/img/banner-rss.png" alt="Certificate Icon" />
        </div>
        <div class="certificate-title" style="display: flex;">
          <div class="certificate-title-1" style="font-size: 80px;z-index:1 !important;">RSS</div>
          <div class="certificate-title-2" style="font-size: 80px;z-index:3 !important;">收藏</div>
        </div>
      </div>
      <div class="purple-circle"></div>
      <div class="top-right-element yellow-glass"></div>
      <div class="web-search">
        <div class="search-input-wrapper">
          <svg class="icon" aria-hidden="true" style="margin-right: 4px">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
          <input v-model="url" placeholder="输入RSS源...." @keyup.enter="addrss(url)" />
        </div>
      </div>
    </div>
    <div class="rss-box">
      <div class="left">
        <v-card style="height:100%">
          <v-card-title>
            <h1> RSS源</h1>
          </v-card-title>
          <v-divider></v-divider>
          <!-- <v-list>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item,i) in rss" :key="i" @click="httpchange(item.http)">
                <p>{{item.title}}</p>
              </v-list-item>
            </v-list-item-group>
          </v-list> -->
          <v-expansion-panels  v-model="active" accordion>
            <v-expansion-panel  v-for="category in categories" :key="category.title">
              <v-expansion-panel-header>{{ category.title }}</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item v-for="item in category.items" :key="item.title" @click="httpchange(item.http)">
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                      <a>{{ item.http }}</a>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>
      <div class="right">
        <rss-widget v-model="http" :feed="'https://api.rss2json.com/v1/api.json?rss_url='+http" :key="http">
          <template v-slot:feed_header="slotProps">
            <h2 class="rsslist-header">{{slotProps.rssfeed.title}}</h2>
            <!-- <h2></h2> -->
          </template>
          <template v-slot:feed_body="slotProps">
            <div class="rss-right">
              <v-card class="card" v-for="(item,i) in slotProps.items" :key="i">
                <v-card-title>
                  <h4><a :href="item.link">{{item.title}}</a></h4>
                </v-card-title>
                <v-card-subtitle>
                  {{item.pubDate}}
                </v-card-subtitle>
                <v-card-text class="card-body" v-html="item.description">
                </v-card-text>
              </v-card>
            </div>
          </template>
        </rss-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import RssWidget from "vue-rss-widget"

  export default {
    components: {
      RssWidget
    },
    data() {
      return {
        selectedItem: 0,
        http: "https://rsshub.app/cnki/journals/JSJX",
        url: "",
        active:0,
        categories: [{
            title: '科学期刊',
            items: [
              {
                title:"计算机学报",
                http:"https://rsshub.app/cnki/journals/JSJX"
              },
              {
                title: 'Accounts of Chemical Research期刊最新论文- X-MOL',
                http: 'https://rsshub.app/x-mol/paper/0/9'
              },
              {
                title: 'Meixia Tao on IEEE Xplore ',
                http: 'https://rsshub.app/ieee/author/37283006000/newest/10'
              },
              {
                title: 'Science',
                http: 'https://rsshub.app/science/current/science'
              },
              {
                title: '南开管理评论',
                http: 'https://rsshub.app/cnki/journals/LKGP'
              } 
            ]
          },
          {
            title: '编程',
            items: [{
                title: '10天推荐排行 - 博客园',
                http: 'https://rsshub.app/cnblogs/aggsite/topdiggs'
              },
              {
                title: 'LeetCode 每日一题',
                http: 'https://rsshub.app/leetcode/dailyquestion/cn'
              },
              {
                title: 'LeetCode 每日一题题解',
                http: 'https://rsshub.app/leetcode/dailyquestion/solution/cn'
              }
            ]
          },
          {
            title: '博客',
            items: [{
                title: 'LaTeX 开源小屋',
                http: 'https://rsshub.app/latexstudio/home'
              },
              {
                title: '财新博客 - 张五常',
                http: 'https://rsshub.app/caixin/blog/zhangwuchang'
              },
            ]
          },
          {
            title: '社交媒体',
            items: [{
                title: 'b站|马督工',
                http: 'https://rsshub.app/bilibili/user/dynamic/316568752'
              },
              {
                title: '微博|热搜',
                http: 'https://rsshub.app/weibo/search/hot'
              },
              {
                title: 'Github|kimoji777',
                http: 'https://rsshub.app/github/repos/kimoji777'
              }
            ]
          },
          {
            title: '金融',
            items: [{
                title: '天天基金-马哥价值投基的主页',
                http: 'https://rsshub.app/eastmoney/ttjj/user/6551094298949188'
              },
              {
                title: '滚动新闻-财经网',
                http: 'https://rsshub.app/caijing/roll'
              },
              {
                title: 'McKinsey Greater China - 宏观经济 ',
                http: 'https://rsshub.app/mckinsey/cn/18'
              }
            ]
          },
        ],
        rss: [{
            "title": "博客园|十天热榜",
            "http": "https://rsshub.app/cnblogs/aggsite/topdiggs"
          },
          {
            "title": "b站|马督工",
            "http": "https://rsshub.app/bilibili/user/dynamic/316568752"
          },
          {
            "title": "知网期刊|南开管理评论",
            "http": "https://rsshub.app/cnki/journals/LKGP"
          },
          {
            "title": "美团|技术组",
            "http": "https://rsshub.app/meituan/tech/home"
          },
        ]
      }
    },
    watch: {
      http(o, v) {
        this.$forceUpdate()
      }
    },
    methods: {
      addrss: async function (url) {
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://api.rss2json.com/v1/api.json?rss_url=' + url,
          headers: {}
        };
        var title = "新增rss"
        axios.request(config)
          .then((response) => {
            console.log(response.data);
            title = response.data.feed.title
            console.log(title)
            this.http = url
            this.rss.push({
              title: title,
              http: url
            })
          })
          .catch((error) => {
            console.log(error);
          });
      },
      httpchange: function (e) {
        this.http = e
        console.log(this.http)
      }
    }
  }
</script>

<style scoped>
  .rss-box {
    display: flex;
    background-color: white;
    width: 85%;
    margin: auto;
    margin-bottom: 20px;
  }

  .left {
    float: left;
    width: 20%;
    height: auto;
  }

  .right {
    float: right;
    width: 79%;
    margin-left: 1%;
  }

  .banner {
    position: relative;
  }

  .card {
    margin-bottom: 5px;
    overflow-x: hidden;
    max-width: 90%
  }

  .rsslist-header {
    margin: 4px;
  }

  .certificate-icon {
    position: relative;
    z-index: 2;
    margin-left: -250px;

  }

  .certificate-icon img {
    width: 250px;
    height: auto;
  }

  .certificate-title {
    position: relative;
    margin-left: 50px;
  }

  .search-input-wrapper {
    position: absolute;
    top: 15.5rem;
    /* width: 100%; */
    display: flex;
    padding: 5px;
    height: 50px;
    width: 400px;
    align-content: center;
    border: 2px solid #8e8cd8;
    border-radius: 2rem;
    background-color: azure;
  }

  .search-input-wrapper input {
    width: 100%;
    margin-left: 5px;
    outline: none;
  }

  .search-wrapper {
    padding: 1.25rem;
    height: 100%;
  }

  .web-search {
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
  }
</style>

<style>
  .card-body img {
    max-width: 50% !important;
    height: auto !important;;
  }
</style>