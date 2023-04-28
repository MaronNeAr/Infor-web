<template>
    <div>
        <div class="banner1">
            <div class="certificate">
                <div class="certificate-title" style="display: flex;">
                    <div class="certificate-title-1" style="font-size: 80px;z-index:1 !important;">笔记</div>
                    <div class="certificate-title-2" style="font-size: 80px;z-index:3 !important;">整理</div>
                </div>
                <div class="certificate-icon">
                    <img src="@/assets/img/banner_note.png" alt="Certificate Icon" />
                </div>
            </div>
            <div class="purple-circle"></div>
            <div class="top-right-element yellow-glass"></div>
        </div>
        <!-- 内容 -->
        <v-row class="card-container">
            <v-col md="1" cols="12">
            </v-col>
            <v-col md="7" cols="12">
                <!-- 评论 -->
                <v-list two-line class="note-list">
                    <v-header>
                        <h2 class="ml-2 float-left">笔记总览</h2>
                        <v-btn color="primary" @click="$router.push('/editor');" class="upload float-right mr-2">上传</v-btn>
                        <div style="clear:both"></div>
                    </v-header>
                    <template v-for="(group, index) in groupedItems"> 
                        <v-subheader v-text="group.header" class="ml-3"></v-subheader>
                        <v-list-item-group class="ml-3">
                            <v-list-item v-for="(item, i) in group.items" :key="i">
                                <v-list-item-avatar>
                                    <v-img :src="item.avatar" ></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-subtitle class="note-time">
                                        <v-icon small>mdi-calendar-month-outline</v-icon>
                                        {{item.time}}
                                    </v-list-item-subtitle>
                                    <v-list-item-title class="note-title">
                                        <h4>{{item.title}}</h4>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </template>
                </v-list>
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
                            <span style="margin-left:10px">Tag</span>
                        </div>
                        <div class="tag-list">
                            <!-- <v-chip class="ma-2" v-for="(count, label) in labelCounts" :key="label" color="green" text-color="white">
                                <v-avatar left class="green darken-4">
                                    {{count}}
                                </v-avatar>
                                
                            </v-chip> -->
                        </div>
                    </v-card>
                </div>
            </v-col>
            <v-col md="1" cols="12">
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import tocbot from "tocbot"
    import moment from 'moment';
    export default {
        components: {
            // Comment
            // ckeditor: CKEditor.component
        },
        created() {},
        data() {
            return {
                dialog: false,
                tagshow: true,
                dates: [],
                items: [{
                        title: 'Tomcat安装及配置',
                        time: '2023-03-10',
                        avatar: 'https://via.placeholder.com/4',
                        html:''
                    }, {
                        title: 'Hexo-零基础搭建个人博客(详解)',
                        time: '2023-03-20',
                        avatar: 'https://via.placeholder.com/9',
                    }, {
                        title: 'GitHub Copilot最详细教程',
                        time: '2023-04-01',
                        avatar: 'https://via.placeholder.com/10',
                    }, {
                        title: 'MySQL 数据库 增删查改、克隆、外键 等操作',
                        time: '2023-04-15',
                        avatar: 'https://via.placeholder.com/7',
                    }, {
                        title: 'SpringBoot解决用户重复提交订单（方式二：通过Redis实现）',
                        time: '2023-04-17',
                        avatar: 'https://via.placeholder.com/60',
                    },
                    {
                        title: '用vscode写C/C++，fs_path.h报错',
                        time: '2023-05-15',
                        avatar: 'https://via.placeholder.com/46',
                    },
                    {
                        title: '知行杯社会调研',
                        time: '2023-03-15',
                        avatar: 'https://via.placeholder.com/22',
                    },
                    {
                        title: '上海市罕见病人群调研结果',
                        time: '2023-04-15',
                        avatar: 'https://via.placeholder.com/33',
                    },
                    {
                        title: '国际罕见病',
                        time: '2023-12-15',
                        avatar: 'https://via.placeholder.com/24',
                    },
                ],
                groupedItems: [],
            };
        },
        methods: {
            isRight() {
                return function (index) {
                    if (index % 2 == 0) {
                        return "article-cover left-radius";
                    }
                    return "article-cover right-radius";
                };
            },
            groupItemsByMonth(items) {
                const groups = {};
                items = Array.from(items);
                items.sort((a, b) => new Date(a.time) - new Date(b.time));
                items.forEach((item) => {
                    const month = moment(item.time).format('YYYY-MM');
                    if (!groups[month]) {
                        groups[month] = {
                            header: moment(item.time).format('YYYY年M月'),
                            items: [],
                        };
                    }
                    groups[month].items.push(item);
                });
                return Object.values(groups);
            },
            init() {
                tocbot.init({
                    tocSelector: "#toc", //要把目录添加元素位置，支持选择器
                    contentSelector: ".note-list", //获取html的元素
                    headingSelector: "h2,h4", //要显示的id的目录
                    hasInnerContainers: true,
                });
            }
        },
        computed: {
            blogInfo() {
                return this.$store.state.blogInfo;
            },
            cover() {
                var cover =
                    "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtT?ver=b795";
                // this.$store.state.blogInfo.pageList.forEach(item => {
                //   if (item.pageLabel == "link") {
                //     cover = item.pageCover;
                //   }
                // });
                return "background: url(" + cover + ") center center / cover no-repeat";
            },
            dateRangeText() {
                return this.dates.join(' ~ ')
            },
            filteredCategories() {
                if (this.dates.length < 2)
                    return this.category_list
                return this.category_list.filter((category) => {
                    return category.card_list.some((card) => {
                        return (
                            new Date(card.date) >= new Date(this.dates[0]) &&
                            new Date(card.date) <= new Date(this.dates[1])
                        );
                    });
                });
            },
            labelCounts() {
                const counts = {};
                for (const category of this.category_list) {
                    for (const card of category.card_list) {
                        for (const label of card.labels) {
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
            },
            headers() {
                const headers = {};
                this.items.forEach((item) => {
                    if (!headers[item.time]) {
                        headers[item.time] = true;
                    }
                });
                return Object.keys(headers);
            },

        },
        mounted() {
            this.groupedItems = this.groupItemsByMonth(this.items);
            this.init()
        },
    };
</script>

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
    .note-time {
        font-size: 10px;
    }

    .note-title {
        font-size: 16px;
        /* font-weight: 500; */
        color: #000;
        transition: transform 0.3s ease-in-out;
    }

    .note-title:hover {
        color: purple;
        transform: translateX(10px);
    }

    .card-container {
        min-height: 70vh;
        margin-bottom: 20px;
    }
    .certificate-icon {
        position: relative;
        z-index: 2;
        margin-left: 50px;

    }

    .certificate-icon img {
        width: 250px;
        height: auto;
    }

    .certificate-title {
        position: relative;
        margin-left: 50px;
    }

</style>