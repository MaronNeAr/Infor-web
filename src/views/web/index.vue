<template>
    <div>
        <!-- banner -->
        <div class="banner1">
            <div class="certificate">
                <div class="certificate-icon">
                    <img src="@/assets/img/banner_web.png" alt="Certificate Icon" />
                </div>
                <div class="certificate-title" style="display: flex;">
                    <div class="certificate-title-1" style="font-size: 80px;z-index:1 !important;">网页</div>
                    <div class="certificate-title-2" style="font-size: 80px;z-index:3 !important;">收藏</div>
                </div>
            </div>
            <div class="web-search">
                <div class="search-input-wrapper">
                    <svg class="icon" aria-hidden="true" style="margin-right: 4px">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                    <input v-model="newhttp" placeholder="输入网页链接...." @keyup.enter="changehttp" />
                </div>
            </div>
            <div class="purple-circle"></div>
            <div class="top-right-element yellow-glass"></div>
        </div>
        <div class="scroll-down" @click="scrollDown">
            <v-icon color="#fff" class="scroll-down-effects" style="font-size: 60px">
                mdi-chevron-down
            </v-icon>
        </div>
        <div class="web-container">
            <v-card class="webuploud" v-if="http">
                <v-row>
                    <v-col cols="8">
                        <iframe :src="http" frameborder="0"
                            style="width:98%;margin:10px;height:auto;min-height:85vh;overflow-x:hidden;"></iframe>
                    </v-col>
                    <v-col cols="4">
                        <v-card class="webdetail">
                            <!-- 标题 -->
                            <div class="detail-head">
                                <v-card-actions>
                                    <v-avatar class="rounded-circle">
                                        <img :src="logo">
                                    </v-avatar>
                                    <div>
                                        <v-card-title>{{title}}</v-card-title>
                                        <v-card-subtitle class="text-url">{{http}}</v-card-subtitle>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <v-btn rounded color="primary" @click="addWeb()">
                                        收藏
                                    </v-btn>
                                </v-card-actions>

                                <v-divider class="my-3"></v-divider>
                            </div>
                            <!-- 添加标签 -->
                            <div class="webtag" style="margin-left:20px">
                                <h3 style="margin-bottom:20px">
                                    网页分类
                                </h3>
                                <v-combobox v-model="cate" :items="categorylist" label="点击选择分类" outlined dense
                                    style="width:50%;margin-left:10px">
                                </v-combobox>
                                <v-text-field v-if="cate=='添加分类'" v-model="newcate" label="点击输入分类名称"
                                    @keydown.enter="addCate" style="width:50%;margin-left:10px"></v-text-field>
                            </div>
                            <div class="webtag" style="margin-left:20px">
                                <h3>
                                    网页标签
                                </h3>
                                <v-text-field v-model="tag" label="点击输入标签内容" @keydown.enter="addTag"
                                    style="width:50%;margin-left:10px"></v-text-field>
                                <div class="tag-list">
                                    <v-chip v-for="(tag, index) in addtags" :key="index" label close color="blue light"
                                        style="margin:2px;" text-color="white" @click:close="removeTag(index)">
                                        {{ tag }}
                                    </v-chip>
                                </div>
                            </div>
                            <!-- 相似推荐 -->
                            <v-divider class="my-3"></v-divider>
                            <div class="webrecommend" style="margin-left:20px;height:50vh">
                                <h3>
                                    相似推荐
                                </h3>
                                <v-row>
                                    <v-col cols="12">
                                        <v-expansion-panels popout style="margin-top:25px">
                                            <v-expansion-panel v-for="(page, index) in pages" :key="index"
                                                v-if="matchTags(page.tags)">
                                                <v-expansion-panel-header>
                                                    <v-avatar class="rounded-circle" size="20"
                                                        style="margin-left:-14px;">
                                                        <img :src="page.logo" :href="page.url" target="_blank">
                                                    </v-avatar>
                                                    <div>
                                                        <h4>{{ page.title }}</h4>
                                                        <p
                                                            style="max-width: 200px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">
                                                            {{ page.url }}
                                                        </p>
                                                    </div>
                                                    <v-chip v-for="(tag, index) in page.tags" :key="index" label
                                                        color="blue light" style="margin:2px;" text-color="white">
                                                        {{ tag }}
                                                    </v-chip>
                                                </v-expansion-panel-header>
                                                <v-expansion-panel-content>
                                                    {{page.detail}}
                                                </v-expansion-panel-content>
                                            </v-expansion-panel>
                                        </v-expansion-panels>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
            <v-row class="web-list" v-else>
                <v-col md="1" cols="12">
                </v-col>
                <v-col md="7" cols="12">
                    <v-card class="article-wrapper">
                        <!-- 评论 -->
                        <div class="category-list" v-for="category in filteredCategories" :key="category.title">
                            <h2 class="category">{{ category.title }}</h2>
                            <div class="card-list">
                                <Card class="card" v-for="card in category.card_list" :key="card.title"
                                    :title="card.title" :uploadTime="card.date" :pic_src="card.logo" :label="card.tags"
                                    :details="card.detail" :url="card.url">
                                </Card>
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <!-- 侧边功能 -->
                <v-col md="3" cols="12" class="d-md-block d-none">
                    <div style="position: relative;margin-left:50px;">
                        <!-- 文章目录 -->
                        <v-card class="right-container">
                            <div class="right-title">
                                <svg class="icon" aria-hidden="true" style="font-size: 14px">
                                    <use xlink:href="#icon-mulu"></use>
                                </svg>
                                <span style="margin-left:10px">时间</span>
                            </div>
                            <v-date-picker v-model="dates" range full-width style="margin-top:10px" locale="zh-cn">
                            </v-date-picker>
                            <v-text-field v-model="dateRangeText" label="时间范围" prepend-icon="mdi-calendar" readonly
                                style="margin-top:10px">
                            </v-text-field>
                        </v-card>
                    </div>
                    <div style="position: relative;margin-left:50px;margin-top:10px ;">
                        <!-- 文章目录 -->
                        <v-card class="right-container">
                            <div class="right-title">
                                <svg class="icon" aria-hidden="true" style="font-size: 14px">
                                    <use xlink:href="#icon-mulu"></use>
                                </svg>
                                <span style="margin-left:10px">标签</span>
                            </div>
                            <v-chip class="ma-2" v-for="(count, label) in labelCounts" :key="label"
                                :color="labelColor(count.lv)" text-color="white" @click="change_tag(label)">
                                <v-avatar left :class="labelColor(count.lv) +' darken-4'">
                                    {{count.count}}
                                </v-avatar>
                                {{label}}
                            </v-chip>
                        </v-card>
                    </div>
                    <div style="position:sticky;margin-left:50px;margin-top:10px; top:20px">
                        <!-- 文章目录 -->
                        <v-card class="right-container">
                            <div class="right-title">
                                <svg class="icon" aria-hidden="true" style="font-size: 14px">
                                    <use xlink:href="#icon-mulu"></use>
                                </svg>
                                <span style="margin-left:10px">目录</span>
                            </div>
                            <div id="toc" />
                        </v-card>
                    </div>
                </v-col>
                <v-col md="1" cols="12">
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/Card-web.vue"
    import tocbot from "tocbot";
    // import axios from 'axios';
    export default {
        components: {
            // Comment
            // ckeditor: CKEditor.component
            Card,
        },
        data() {
            return {
                http: "",
                newhttp: "",
                title: "Vuex是什么？",
                logo: "https://vuejs.org/images/logo.png",
                tag: '',
                tags: [],
                addtags:[],
                dialog: false,
                tagshow: true,
                dates: [],
                cate: "",
                newcate: "",
                tag_name: "图像识别",
                categorylist: [
                    '前端',
                    '后端',
                    '算法',
                    '生活',
                    '旅行',
                    '游戏',
                    '添加分类'
                ],
                pages: [{
                        logo: "https://www.antdv.com/favicon.ico",
                        title: 'Ant-Design-Vue',
                        url: 'https://www.antdv.com/',
                        tags: ['前端', '组件'],
                        detail: ""
                    },
                    {
                        logo: "https://v2.vuetifyjs.com/favicon.ico",
                        title: 'Vuetify',
                        url: 'https://v2.vuetifyjs.com/page2',
                        tags: ['前端', '组件', '在用'],
                        detail: ""
                    },
                    {
                        logo: "https://spring.io/favicon.ico",
                        title: 'Springboot',
                        url: 'https://spring.io/projects/spring-boot',
                        tags: ['后端', '在用'],
                        detail: ""
                    },
                    {
                        logo: "https://opencv.org/favicon.ico",
                        title: 'Opencv',
                        url: 'https://opencv.org/',
                        tags: ['算法', '图像识别', '在用'],
                        detail: ""
                    },
                    {
                        logo: "https://www.bilibili.com/favicon.ico",
                        title: '吹爆！浙大大佬【NLP...',
                        url: 'https://www.bilibili.com/video/BV18B4y157Lt/?spm_id_from=333.337.search-card.all.click&vd_source=5f0612d1aad2a88c44a6b2acbd78d956',
                        tags: ['算法', 'NLP', '在用'],
                        detail: "学到第八讲"
                    },
                ],
                category_list: [{
                        title: "前端",
                        card_list: [{
                                title: "React",
                                date: "2023/04/23",
                                logo: "https://reactjs.org/favicon.ico",
                                url: "https://reactjs.org/",
                                detail: "A JavaScript library for building user interfaces",
                                tags: [{
                                    text: "前端",
                                    lv: 0
                                }]
                            },
                            {
                                title: "Node.js",
                                date: "2023/04/20",
                                logo: "https://nodejs.org/static/favicon.ico",
                                url: "https://nodejs.org/",
                                detail: "An asynchronous event-driven JavaScript runtime",
                                tags: [{
                                    text: "打包工具",
                                    lv: 0
                                }]
                            },
                            {
                                title: "Bootstrap",
                                date: "2023/04/17",
                                logo: "https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon.ico",
                                url: "https://getbootstrap.com/",
                                detail: "The world's most popular front-end open source toolkit",
                                tags: [{
                                    text: "前端",
                                    lv: 0
                                }, {
                                    text: "框架",
                                    lv: 1
                                }, {
                                    text: "响应式",
                                    lv: 2
                                }]
                            },
                            {
                                title: "Vue.js",
                                date: "2023/04/25",
                                logo: "https://vuejs.org/images/logo.png",
                                url: "https://cn.vuejs.org/",
                                detail: "一套用于构建用户界面的渐进式框架",
                                tags: [{
                                        text: "前端",
                                        lv: 0
                                    },
                                    {
                                        text: "框架",
                                        lv: 1
                                    },
                                    {
                                        text: "易用",
                                        lv: 2
                                    }
                                ]
                            },
                            {
                                title: "Flutter",
                                date: "2023/04/23",
                                logo: "https://flutter.dev/assets/favicon.ico",
                                url: "https://flutter.dev/",
                                detail: "用单个代码库构建漂亮的原生应用",
                                tags: [{
                                        text: "前端",
                                        lv: 0
                                    },
                                    {
                                        text: "框架",
                                        lv: 1
                                    },
                                    {
                                        text: "跨平台",
                                        lv: 2
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        title: "算法",
                        card_list: [{
                                title: "TensorFlow",
                                date: "2023/04/15",
                                logo: "https://www.tensorflow.org/images/apple-touch-icon-180x180.png",
                                url: "https://www.tensorflow.org/",
                                detail: "An open source machine learning framework",
                                tags: [{
                                    text: "AI",
                                    lv: 0
                                }, {
                                    text: "框架",
                                    lv: 1
                                }]
                            },
                            {
                                logo: "https://www.baidu.com/favicon.ico",
                                date: "2023/4/10",
                                title: '基于NLP的对话机器人11',
                                url: 'https://www.example.com/page1',
                                tags: [{
                                        'text': "nihao",
                                        'lv': 0,
                                    },
                                    {
                                        'text': 'zaijiannnnn',
                                        'lv': 1,
                                    },
                                    {
                                        'text': 'zzzzzzzzzz',
                                        'lv': 2,
                                    }
                                ],
                                detail: null
                            },
                            {
                                logo: "https://www.baidu.com/favicon.ico",
                                date: "2023/4/10",
                                title: '基于NLP的对话机器人',
                                url: 'https://www.example.com/page1',
                                tags: [{
                                    'text': "AI",
                                    'lv': 0,
                                }, ],
                                detail: null
                            },
                        ]
                    },
                    {
                        title: "后端",
                        card_list: [{
                            title: "Express.js",
                            date: "2023/04/12",
                            logo: "https://expressjs.com/images/favicon.png",
                            url: "https://expressjs.com/",
                            detail: "A fast, unopinionated, minimalist web framework for Node.js",
                            tags: [{
                                text: "Backend",
                                lv: 0
                            }, {
                                text: "框架",
                                lv: 1
                            }, {
                                text: "Flexible",
                                lv: 2
                            }]
                        }, {
                            title: "Django",
                            date: "2023/04/22",
                            logo: "https://www.djangoproject.com/favicon.ico",
                            url: "https://www.djangoproject.com/",
                            detail: "The web framework for perfectionists with deadlines",
                            tags: [{
                                text: "Backend",
                                lv: 0
                            }, {
                                text: "框架",
                                lv: 1
                            }, {
                                text: "Python",
                                lv: 2
                            }]
                        }, {
                            title: "Spring Boot",
                            date: "2023/04/24",
                            logo: "https://spring.io/img/favicon.png",
                            url: "https://spring.io/projects/spring-boot",
                            detail: "快速构建基于 Spring 的应用程序的框架",
                            tags: [{
                                    text: "后端",
                                    lv: 0
                                },
                                {
                                    text: "框架",
                                    lv: 1
                                },
                                {
                                    text: "简化",
                                    lv: 2
                                }
                            ]
                        }]
                    },
                    {
                        title: "其他",
                        card_list: [{
                                title: "Git",
                                date: "2023/04/19",
                                logo: "https://git-scm.com/favicon.ico",
                                url: "https://git-scm.com/",
                                detail: "用于版本控制的免费开源软件",
                                tags: [{
                                        text: "开发工具",
                                        lv: 0
                                    },
                                    {
                                        text: "版本控制",
                                        lv: 1
                                    },
                                    {
                                        text: "流行",
                                        lv: 2
                                    }
                                ]
                            },
                        ],
                    },
                ],
            };
        },
        mounted() {
            tocbot.init({
                tocSelector: "#toc", //要把目录添加元素位置，支持选择器
                contentSelector: ".article-wrapper", //获取html的元素
                headingSelector: "h1, h2, h3", //要显示的id的目录
                hasInnerContainers: true,
            });
        },
        methods: {
            // webjs
            scrollDown() {
                window.scrollTo({
                    behavior: "smooth",
                    // top: document.documentElement.clientHeight / 2
                    top: 400
                });
            },
            changehttp() {
                this.http = this.newhttp
                this.newhttp = ""
                window.scrollTo({
                    behavior: "smooth",
                    // top: document.documentElement.clientHeight / 2
                    top: 400
                });
            },
            change_tag(tag) {
                if (this.tags.includes(tag)) {
                    const index = this.tags.indexOf(tag);
                    this.tags.splice(index, 1);
                } else {
                    this.tags.push(tag);
                }
                this.filteredCategories;
            },
            addTag() {
                if (this.tag.trim()) {
                    this.addtags.push(this.tag.trim());
                    this.tag = '';
                }
            },
            addCate() {
                if (this.newcate.trim()) {
                    this.categorylist.push(this.newcate.trim());
                    this.cate = this.newcate;
                    this.newcate = '';
                }
            },
            addWeb() {
                let D = new Date()
                let date = D.getDate()
                let T = this.addtags
                let newTags = T.map((T) => {
                    return {
                        text: T,
                        lv: 1
                    };
                });
                let card = {
                    title: this.title,
                    date: date,
                    logo: this.logo,
                    url: this.http,
                    tags: newTags,
                    detail: null
                }
                console.log(card)
                let category = this.category_list.find((category) => {
                    return category.title === this.cate;
                });
                if (!category) {
                    category = {
                        title: this.cate,
                        card_list: []
                    };
                    this.category_list.push(category);
                }
                category.card_list.push(card);
                this.http = ""
            },
            removeTag(index) {
                this.addtags.splice(index, 1);
            },
            matchTags(pageTags) {
                for (let i = 0; i < this.addtags.length; i += 1) {
                    if (pageTags.includes(this.addtags[i])) {
                        return true;
                    }
                }
                return false;
            },
            labelColor(lv) {
                switch (lv) {
                    case 0:
                        return 'success'
                    case 1:
                        return 'primary'
                    case 2:
                        return 'error'
                    default:
                        return 'grey'
                }
            },

        },
        computed: {
            cover() {
                var cover =
                    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtT?ver=b795";
                return "background: url(" + cover + ") center center / cover no-repeat";
            },
            dateRangeText() {
                return this.dates.join(' ~ ')
            },
            filteredCategories() {
                if (this.tags.length === 0 && this.dates.length === 0) {
                    return this.category_list;
                }
                return this.category_list.filter((category) => {
                    return category.card_list.some((card) => {
                        const tagMatches = this.tags.every((tag) => card.tags.some((t) => t.text ===
                            tag));
                        const dateMatches = (this.dates.length === 0) || (new Date(card.date) >=
                            new Date(this.dates[0]) && new Date(card.date) <= new Date(this.dates[
                                1]));
                        return tagMatches && dateMatches;
                    });
                });
            },
            labelCounts() {
                const counts = {};
                for (const category of this.category_list) {
                    for (const card of category.card_list) {
                        for (const label of card.tags) {
                            if (counts[label.text]) {
                                counts[label.text].count++;
                            } else {
                                counts[label.text] = {
                                    count: 1,
                                    lv: label.lv
                                };
                            }
                        }
                    }
                }
                return counts;
            }

        }
    };
</script>

<style scoped>
    .markdown-browse {
        position: relative;
        width: 95%;
        left: 5%;
    }

    .mouble-name {
        line-height: 0px;
    }

    .mouble-detail {
        font-size: 12px;
        color: #969696;
    }

    .scroll-down {
        cursor: pointer;
        position: absolute;
        top: 240px;
        width: 100%;
        text-align: center;
    }

    .scroll-down i {
        font-size: 2rem;
    }

    .scroll-down-effects {
        color: rgb(228, 219, 231) !important;
        text-align: center;
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(131, 31, 213, 0.15);
        line-height: 1.5;
        display: inline-block;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        animation: scroll-down-effect 1.5s infinite;
    }

    @keyframes scroll-down-effect {
        0% {
            top: 0;
            opacity: 0.4;
            filter: alpha(opacity=40);
        }

        50% {
            top: -16px;
            opacity: 1;
            filter: none;
        }

        100% {
            top: 0;
            opacity: 0.4;
            filter: alpha(opacity=40);
        }
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
</style>

<!-- card的样式 -->
<style scoped>
    @media (min-width: 760px) {
        .banner {
            color: #eee !important;
        }

        .article-info span {
            font-size: 95%;
        }

        .article-info-container {
            position: absolute;
            bottom: 6.25rem;
            padding: 0 8%;
            width: 100%;
            text-align: center;
        }

        .second-line,
        .third-line {
            display: inline;
        }

        .article-title {
            font-size: 35px;
            margin: 20px 0 8px;
        }
    }

    .banner {
        position: relative;
    }

    .card-list {
        display: flex;
        flex-wrap: wrap;
    }

    .category {
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .card {
        margin: 10px;
    }

    .right-container {
        padding: 20px 24px;
        font-size: 14px;
    }

    .right-title {
        display: flex;
        align-items: center;
        line-height: 2;
        font-size: 16.8px;
        margin-bottom: 6px;
    }

    .right-title i {
        font-weight: bold;
    }

    .article-wrapper {
        margin-bottom: 20px;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
    }
</style>

<style scoped>
    .web-search {
        width: 100%;
        display: flex;
        margin: auto;
        justify-content: center;
    }

    .web-container {
        margin: 5%;
        min-height: 80%;
        margin-top: 1%;
    }

    .web-upload {
        min-height: 80%;
    }

    .webdetail {
        width: 98%;
        height: 100%;
    }

    .text-url {
        font-size: 10px;
        color: #888888;
        max-width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .certificate-icon {
        position: relative;
        z-index: 2;
        margin-left: -350px;
    }

    .certificate-icon img {
        width: 300px;
        height: auto;
    }

    .certificate-title {
        position: relative;

        margin-left: 50px;
    }

    .certificate-title-1 {
        margin-bottom: -10px;

    }
</style>