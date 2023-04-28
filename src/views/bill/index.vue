<template>
    <div>
        <div class="banner1">
            <div class="certificate">

                <div class="certificate-icon">
                    <img src="@/assets/img/banner-bill.png" alt="Certificate Icon" />
                </div>
                <div class="certificate-title" style="display: flex;">
                    <div class="certificate-title-1" style="font-size: 80px;z-index:1 !important;">票据</div>
                    <div class="certificate-title-2" style="font-size: 80px;z-index:3 !important;">管理</div>
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
                <v-card class="article-wrapper">
                    <v-btn color="primary" @click="dialog = true" class="upload float-right">上传</v-btn>
                    <card-upload :dialog="dialog" @cancel="dialog = false" @upload="upload"></card-upload>
                    <!-- 评论 -->
                    <div class="category-list" v-for="category in filteredCategories" :key="category.title">
                        <h2 class="category">{{ category.title }}</h2>
                        <div class="card-list">
                            <Card class="card" v-for="card in category.card_list" :key="card.title" :title="card.title"
                                :uploadTime="card.date" :pic_src="'http://info-api.marlon1475.top//img/' + card.src"
                                :labels="card.tags" :details="card.detail" :id="card.id">
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
                        <div class="tag-list">
                            <v-chip class="ma-2" v-for="(count, label) in labelCounts" :key="label" color="blue"
                                text-color="white" @click="change_tag(label)">
                                <v-avatar left class="blue darken-4">
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
    import Card from "@/components/Card-bill.vue"
    import tocbot from "tocbot";
    import CardUpload from './CardUpload.vue';
    import axios from 'axios';
    export default {
        components: {
            // Comment
            // ckeditor: CKEditor.component
            Card,
            CardUpload
        },
        created() {},
        data() {
            return {
                dialog: false,
                tagshow: true,
                dates: [],
                tag: '',
                tags: "",
                category_list: [{
                        title: "智能票据",
                        card_list: []
                    }, {
                        title: "医疗票据",
                        card_list: []
                    }, {
                        title: '增值税发票',
                        card_list: []
                    },
                    {
                       title:'银行回单',
                         card_list: []
                    },
                    {
                        title: '定额发票',
                         card_list: []
                    },
                    {
                        title: '飞机行程单',
                         card_list: []
                    },
                    {
                        title: '火车票',
                         card_list: []
                    },
                ],
            };
        },
        methods: {
            upload() {
                this.getCards();
                this.dialog = false;
            },
            change_tag(tag) {
                // if (this.tags.includes(tag)) {
                //     const index = this.tags.indexOf(tag);
                //     this.tags.splice(index, 1);
                // } else {
                //     this.tags.push(tag);
                // }
                this.tags = tag
                this.filteredCategories;
            },
            async getCards() {
                const params = new URLSearchParams();
                params.append("account", "test");
                await axios.post('api/bill', params).then(response => {
                    if (response.data.success) {
                        const result = response.data.data;
                        result.forEach(item => {
                            console.log(item)
                            if (item.type == "multiple_invoice") {
                                this.category_list[0].card_list.push(item);
                            } else if (item.type == "medical_invoice") {
                                this.category_list[1].card_list.push(item);
                            } else if (item.type == "vat_invoice") {
                                this.category_list[2].card_list.push(item);
                            } else if (item.type == "bank_receipt_new") {
                                this.category_list[3].card_list.push(item);
                            } else if (item.type == "quota_invoice") {
                                this.category_list[4].card_list.push(item);
                            }else if (item.type == "air_ticket") {
                                this.category_list[5].card_list.push(item);
                            }else if (item.type == "train_ticket") {
                                this.category_list[6].card_list.push(item);
                            }
                        });
                    } else this.$toast({
                        type: 'error',
                        message: response.data.message
                    });
                }).catch(error => {
                    console.log(error);
                    this.$toast({
                        type: 'error',
                        message: error
                    });
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
                if (this.tags === "" && this.dates.length < 2)
                    return this.category_list
                return this.category_list.filter((category) => {
                    return category.card_list.some((card) => {
                        return (
                            ((new Date(card.date) >= new Date(this.dates[0]) &&
                                    new Date(card.date) <= new Date(this.dates[1])) || this.dates
                                .length < 2) &&
                            (this.tags == "" || card.tags == this.tags)
                        );
                    });
                });
            },
            labelCounts() {
                const counts = {};
                for (const category of this.category_list) {
                    for (const card of category.card_list) {
                        if (counts[card.tags]) {
                            counts[card.tags].count++;
                        } else {
                            counts[card.tags] = {
                                count: 1,
                                lv: 1
                            };
                        }
                    }
                }
                return counts;
            }
        },
        mounted() {
            tocbot.init({
                tocSelector: "#toc", //要把目录添加元素位置，支持选择器
                contentSelector: ".article-wrapper", //获取html的元素
                headingSelector: "h1, h2, h3", //要显示的id的目录
                hasInnerContainers: true,
            });
            this.getCards();
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

    .card-container {
        margin-bottom: 20px;
    }

    .certificate-icon {
        position: relative;
        z-index: 2;
        margin-left: -250px;

    }

    .certificate-icon img {
        width: 300px;
        height: auto;
    }

    .certificate-title {
        position: relative;
        margin-left: 50px;
    }
</style>