<template>
    <div>
        <!-- banner -->
        <div class="banner1">
            <div class="certificate">

                <div class="certificate-icon">
                    <img src="@/assets/img/banner-folder.png" alt="Certificate Icon" />
                </div>
                <div class="certificate-title" style="display: flex;">
                    <div class="certificate-title-1" style="font-size: 80px;z-index:1 !important;">收藏</div>
                    <div class="certificate-title-2" style="font-size: 80px;z-index:3 !important;">夹</div>
                </div>
            </div>
            <div class="purple-circle"></div>
            <div class="top-right-element yellow-glass"></div>
        </div>
        <!-- 链接列表 -->
        <div class="folder-container">
            <div id="ckbox">
            </div>
        </div>
        <v-dialog class="detail" v-model="dialog" persistent width="66%">
            <v-card>
                <v-row no-gutters class="detail-row">
                    <v-col cols="7" class="detail-left">
                        <!-- <v-img :src="data['ico']" contain></v-img> -->
                        <embed :src="viewUrl" class="file-view">
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col cols="5" class="detail-right">
                        <div class="detail-head">
                            <v-card-actions>
                                <v-avatar v-if="data['ico']" class="rounded-circle">
                                    <img :src="data['ico']">
                                </v-avatar>
                                <v-card-title>让更多罕见病“被看见” 河南已完成2万例罕见病上报</v-card-title>
                                <v-spacer></v-spacer>
                                <v-btn rounded color="primary" @click="dialog = false">
                                    已读
                                </v-btn>
                            </v-card-actions>
                            <v-divider class="my-3"></v-divider>
                        </div>
                        <div class="detail-content">
                            <p class="ml-2 mt-2" style="font-size: 15px;line-height: 18px;color: #666;">文本摘要</p>
                            <v-card-text>
                                "今年2月28日是“国际罕见病日”。目前，全世界已发现罕见病大约7000种，我国罕见病患者数量达2000多万人。“我省已经完成罕见病病例上报近2万例，涉及近100个病种。”孙莹璞教授是首批国家罕见病质控中心专家委员会成员，负责河南省罕见病医疗质量控制和数据上报。在孙莹璞看来，近年来罕见病及其患者群受到前所未有的关注。截至目前，国内共有60余种罕见病用药获批上市，已有40余种被纳入国家医保药品目录，涉及25种疾病。
                            </v-card-text>
                        </div>
                        <v-card-actions class="ml-2">
                            <v-chip-group>
                                <v-chip v-for="label in labels" :key="label.text" :color="labelColor(label.lv)">
                                    {{ label.text }}
                                </v-chip>
                            </v-chip-group>
                        </v-card-actions>
                        <v-divider></v-divider>
                        <div class="detail-note">
                            <p class="ml-2 mt-2" style="font-size: 15px;line-height: 18px;color: #666;">共3条笔记</p>
                            <div class="note">
                                <v-list two-line class="note-list">
                                    <v-list-item v-for="(item, i) in items" :key="i">
                                        <v-list-item-avatar>
                                            <v-img :src="item.avatar"></v-img>
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
                                </v-list>
                            </div>
                        </div>
                        <div class="detail-footer">
                            <v-divider></v-divider>
                            <v-card-actions style="display:flex">
                                <v-text-field placeholder="请输入" outlined class="mt-6"></v-text-field>
                                <v-btn icon @click="toggleFavorite">
                                    <v-icon :color="isFavorite ? 'yellow' : ''">mdi-star</v-icon>
                                </v-btn>
                                <v-btn icon @click="edit">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-btn icon @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import * as CKBox from 'ckbox';
    import 'ckbox/dist/styles/ckbox.css';
    import axios from 'axios';
    import {
        Base64
    } from 'js-base64';

    export default {
        components: {
            // Comment
            // ckeditor: CKEditor.component
        },
        created() {},
        data() {
            return {
                dataArr: [{
                        key: 1,
                        name: "你好",
                        type: "folder",
                        data: 1234
                    },
                    {
                        key: 2,
                        name: "hello",
                        type: "pdf",
                        data: 3456
                    }
                ],
                items: [{
                        title: '国际罕见病',
                        time: '2023-03-10',
                        avatar: 'https://via.placeholder.com/50',
                    }, {
                        title: '知行杯社会调研',
                        time: '2023-03-20',
                        avatar: 'https://via.placeholder.com/50',
                    }, {
                        title: '上海市罕见病人群调研结果',
                        time: '2023-04-01',
                        avatar: 'https://via.placeholder.com/50',
                    }
                ],
                labels: [{
                        'text': "知行杯",
                        'lv': "0",
                    },
                    {
                        'text': '新闻稿',
                        'lv': "1"
                    }
                ],
                dialog: false,
                isFavorite: false,
                chooseURL: "",
                viewUrl: "",
                link: "https://www.xiaohongshu.com/explore/640949280000000013032c63",
                data: [],
                myDate: ""
            };
        },
        methods: {
            async getViewFile(type, id) {
                await axios({
                    url: "https://ckbox.cloud/97jmjx0zNuj6jG0mMuBY/assets/" + id + "/file",
                    method: 'GET',
                    responseType: 'blob'
                }).then(response => {
                    this.uploadFile(type, id, response.data);
                    this.dialog = true;
                    const base64 = Base64.encode('http://info-api.marlon1475.top//document/' + type + '/' + id +
                        '.' + type);
                    this.viewUrl = "https://file.kkview.cn/onlinePreview?url=" + encodeURIComponent(base64);
                }).catch(error => {
                    console.log(error);
                });
            },
            async uploadFile(type, id, blob) {
                //   if (typeof fileStr == "object") fileStr = JSON.stringify(fileStr);
                //   const blob = new Blob([fileStr], { type: 'text/plain' });
                //   console.log(blob);
                const file = new File([blob], 'filename.' + type, {
                    type: blob.type
                });
                const formData = new FormData();
                formData.append("file", file);
                formData.append("type", type);
                formData.append("id", id);
                await axios.post("api/file", formData).then(response => {
                    console.log(response);
                }).catch(error => {
                    console.log(error);
                });
            },
            webDetail: function () {
                // this.axios
                //     .get(this.chooseURL)
                //     .then(res => {
                //         if (res.data) {
                //             this.data = res.data
                //             this.dialog = true
                //         }
                //     });
            },
            toggleFavorite() {
                this.isFavorite = !this.isFavorite;
            },
            edit() {
                console.log('xxx')
            },
            labelColor(lv) {
                switch (lv) {
                    case "0":
                        return 'primary'
                    case "1":
                        return 'warning'
                    case "2":
                        return 'error'
                    default:
                        return 'grey'
                }
            },
            time() {
                let myDate = new Date();
                this.myDate = myDate.toLocaleString(); //获取日期与时间
            }
        },
        computed: {},
        mounted() {
            CKBox.mount(document.querySelector('#ckbox'), {
                tokenUrl: 'https://96768.cke-cs.com/token/dev/nk2ViJiDo4xlVtICIX8DZ9mJmXoBZjRTNptx?limit=10',
                language: 'zh',
                assets: {
                    onChoose: (assets) => {
                        assets.forEach((asset) => {
                            console.log(asset.data);
                            this.getViewFile(asset.data.extension, asset.data.id);
                        });
                    }
                }
            });
            this.time()
        },

    };
</script>

<style scoped>
    .folder-banner {
        position: absolute;
        background-color: #49b1f5 !important;
        top: -60px;
        left: 0;
        right: 0;
        height: 200px;
        animation: header-effect 1s;
        margin: 0;
    }

    .folder-banner-title {
        animation: title-scale 1s;
        position: relative;
        top: -60px;
        padding: 0;
        width: 100%;
        font-size: 2.5rem;
        line-height: 200px;
        text-align: center;
        color: #eee;
    }

    .folder-container {
        position: relative;
        top: -40px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }

    #ckbox {
        position: relative;
        padding: 0;
        /* max-width: 532px; */
        width: 100%;
        min-height: 80vh;
        border: 3px;
    }

    .file-view {
        width: 100%;
        height: 640px;
        padding: 0;
    }

    .file-view * {
        padding: 0;
    }

    .detail-head {
        position: sticky;
        top: 0px;
        background: #ffffff;
    }

    .detail-title {
        width: 10vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .detail-left {
        overflow: hidden;
    }

    .detail-right {
        overflow: scroll;
        height: 640px;
    }

    .detail {
        height: 88vh;
    }

    .detail-content {
        min-height: 25%;
    }

    .detail-note {
        min-height: 30%;
    }

    .detail-content-body {
        margin: 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #333;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC, PingFang TC, PingFang HK, Microsoft Yahei, Microsoft JhengHei;
    }

    .detail-footer {
        position: sticky;
        justify-content: center;
        bottom: -1px;
        background: #ffffff;
    }

    .note {
        margin: 10px;
    }

    ::-webkit-scrollbar {
        display: none;
        /* 设置滚动条宽度 */
    }

    .card-container {
        min-height: 70vh;
        margin-bottom: 20px;
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

</style>