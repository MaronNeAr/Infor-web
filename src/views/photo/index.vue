<template>
    <div>
        <div class="banner" :style="cover">
            <h1 class="banner-title">图片整理</h1>
        </div>
        <!-- 内容 -->
        <v-row class="card-container">
            <v-col md="1" cols="12">
            </v-col>
            <v-col md="7" cols="12">
                <v-card class="article-wrapper">
                    <!-- 评论 -->
                    <!-- <div class="category-list" v-for="(cate, i) of category_list" :key="i">
                        <h2 class="category">{{ cate.title }}</h2>
                        <div class="card-list">
                            <card class="card" v-for="(item, i) of cate.card_list" :key="i" :title="item.title"
                                :uploadTime="item.uploadTime" :pic_src="item.pic_src" :labels="item.labels">
                            </card>
                        </div>
                    </div> -->
                    <div class="category-list" v-for="category in filteredCategories" :key="category.title">
                        <h2 class="category">{{ category.title }}</h2>
                        <div class="card-list">
                            <card class="card" v-for="card in category.card_list" :key="card.title" :title="card.title"
                                :uploadTime="card.uploadTime" :pic_src="card.pic_src"
                                :label="card.labels">
                            </card>
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
                            <span style="margin-left:10px">Tag</span>
                        </div>
                        <div class="tag-list">
                            <v-chip class="ma-2" v-for="(count, label) in labelCounts" :key="label"
                                :color="labelColor(count.lv)" text-color="white">
                                <v-avatar left :class="labelColor(count.lv) +' darken-4'">
                                    {{count.count}}
                                </v-avatar>
                                {{label}}
                            </v-chip>
                        </div>
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
</template>

<script>
    import card from "./card.vue"
    import tocbot from "tocbot";
    export default {
        components: {
            // Comment
            // ckeditor: CKEditor.component
            card
        },
        created() {},
        data() {
            return {
                tagshow: true,
                dates: [],
                selectlables: "",
                category_list: [{
                        title: "身份证件",
                        card_list: [{

                            title: "身份证",
                            uploadTime: "2023/4/9",
                            pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                            labels: [{
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
                            ]
                        }, ]
                    },
                    {
                        title: "银行卡",
                        card_list: [{
                            title: "身份证",
                            uploadTime: "2023/4/10",
                            pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                            labels: [{
                                    'text': "nihao",
                                    'lv': 0,
                                },
                                {
                                    'text': 'zaijian',
                                    'lv': 1
                                }
                            ]
                        }, ]
                    },
                    {
                        title: "会员卡",
                        card_list: [{
                            title: "身份证",
                            uploadTime: "2023/4/10",
                            pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                            labels: [{
                                    'text': "nihao",
                                    'lv': 0,
                                },
                                {
                                    'text': 'zaijian',
                                    'lv': 1
                                }
                            ]
                        }, ]
                    },
                    {
                        title: "其他证件",
                        card_list: [{
                                title: "身份证",
                                uploadTime: "2023/4/12",
                                pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                                labels: [{
                                        'text': "nihao",
                                        'lv': 0,
                                    },
                                    {
                                        'text': 'zaijian',
                                        'lv': 1
                                    }
                                ]
                            },
                            {
                                title: "身份证",
                                uploadTime: "2023/4/10",
                                pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                                labels: [{
                                        'text': "nihao",
                                        'lv': 0,
                                    },
                                    {
                                        'text': 'zaijian',
                                        'lv': 1
                                    }
                                ]
                            },
                            {
                                title: "户口本",
                                uploadTime: "2023/4/10",
                                pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                                labels: [{
                                        'text': "nihao",
                                        'lv': 0,
                                    },
                                    {
                                        'text': 'zaijian',
                                        'lv': 1
                                    }
                                ]
                            },
                            {
                                title: "护照",
                                uploadTime: "2023/4/10",
                                pic_src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                                labels: [{
                                        'text': "nihao",
                                        'lv': 0,
                                    },
                                    {
                                        'text': 'zaijian',
                                        'lv': 0
                                    }
                                ]
                            },
                        ],
                    },
                ],
                labels: [{
                        'text': "nihao",
                        'lv': 0,
                    },
                    {
                        'text': 'zaijian',
                        'lv': 1
                    }
                ]
            };
        },
        methods: {
            labelColor(lv) {
                switch (lv) {
                    case 0:
                        return 'primary'
                    case 1:
                        return 'warning'
                    case 2:
                        return 'error'
                    default:
                        return 'grey'
                }
            },
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
            filteredCategories() {
                if (this.dates.length < 2)
                    return this.category_list
                return this.category_list.filter((category) => {
                    return category.card_list.some((card) => {
                        return (
                            new Date(card.uploadTime) >= new Date(this.dates[0]) &&
                            new Date(card.uploadTime) <= new Date(this.dates[1])
                        );
                    });
                });
            },
        },
        mounted() {
            tocbot.init({
                tocSelector: "#toc", //要把目录添加元素位置，支持选择器
                contentSelector: ".article-wrapper", //获取html的元素
                headingSelector: "h1, h2, h3", //要显示的id的目录
                hasInnerContainers: true,
            });
        }
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