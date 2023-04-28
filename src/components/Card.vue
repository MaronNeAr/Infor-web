<template>
    <!-- kimoji -->
    <div>
        <v-card min-width="200" max-width="320">
            <v-img :src="pic_src" :aspect-ratio="16 / 9" @click="preview" height="150px"></v-img>
            <v-card-actions>
                <v-card-title>
                    <div v-if="title.length > 5" class="text-small">
                        {{ title }}
                    </div>
                    <div v-else class="text-normal">{{ title }}</div>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-download</v-icon>
                </v-btn>
                <v-btn icon @click="preview">
                    <v-icon>mdi-loupe</v-icon>
                </v-btn>
                <v-btn icon @click="tagshow = !tagshow">
                    <v-icon>mdi-tag</v-icon>
                </v-btn>
            </v-card-actions>
            <v-divider class="mx-4" v-show="tagshow"></v-divider>
            <v-card-text v-show="tagshow">
                <div id="tag"></div>
            </v-card-text>
        </v-card>

        <!-- Preview Modal -->
        <v-dialog v-model="previewModal" persistent width="80%">
            <v-card>
                <v-row no-gutters>
                    <v-col cols="8" @click="viewState = !viewState" id="card-img">
                        <id-card-front v-if="viewState && title == '身份证正面'"></id-card-front>
                        <id-card-back v-else-if="viewState && title == '身份证背面' "></id-card-back>
                        <driver-license v-else-if="viewState && title == '驾驶证' "></driver-license>
                        <v-img :src="pic_src" v-else></v-img>
                    </v-col>
                    <v-col cols="4" class="detail-right">
                        <v-card-actions>
                            <v-card-title class="text-h5"><strong>{{ title }}</strong></v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="toggleFavorite">
                                <v-icon :color="isFavorite ? 'yellow' : ''">mdi-star</v-icon>
                            </v-btn>
                            <v-btn icon @click="uploadedit">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon @click="previewModal = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <div style="margin-left:20px">
                            <h3>上传时间:</h3>
                            <p>{{ uploadTime }}</p>
                            <h3>
                                网页标签
                            </h3>
                            <v-text-field v-model="tag" label="点击输入标签内容" @keydown.enter="addTag"
                                style="width:50%;margin-left:10px"></v-text-field>
                            <div class="tag-list">
                                <v-chip v-for="(tag, index) in tags" :key="index" label close color="blue light"
                                    style="margin:2px;" text-color="white" @click:close="removeTag(index)">
                                    {{ tag }}
                                </v-chip>
                            </div>
                        </div>
                        <v-divider class="my-3"></v-divider>
                        <v-card-text id="card-details">
                            <v-list v-for="(value, key) in detail" :key="key">
                                <v-list-item>
                                    <v-list-item-title>{{key}}</v-list-item-title>
                                    <v-list-item-subtitle @click="copyText">
                                        {{value.word ? value.word : (value.words ? value.words : value)}}
                                    </v-list-item-subtitle>
                                    <v-list-item-action>
                                        <v-btn
                                            @click="copyText2(value.word ? value.word : (value.words ? value.words : value))"
                                            icon>
                                            <v-icon>mdi-content-copy</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-divider class="my-3"></v-divider>
                        <div style="margin-left:20px">
                            <h3>
                                批注
                            </h3>
                            <v-text-field class="input" v-model="newItem" label="请输入....."
                                style="bottom:5px;margin-left:20px;width:80%" clearable @keyup.enter="addItem">
                            </v-text-field>
                            <v-card class="blog-card animated zoomIn mt-5 big" v-for="(item,i) in items" :key="i">
                                <div class="web-info-title" style="display:flex">
                                    <v-icon size="18" style="margin-bottom: 3px">mdi-bell</v-icon>
                                    <span style="font-weight: bolder">速记</span>
                                    <v-spacer></v-spacer>
                                    <v-btn icon @click="deleteItem(i)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                                <div style="font-size:0.875rem">
                                    {{item}}
                                </div>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios';
    import DriverLicense from './cards/DriverLicense.vue';
    import IdCardBack from './cards/IdCardBack.vue';
    import IdCardFront from './cards/IdCardFront.vue';

    export default {
        components: {
            IdCardFront,
            IdCardBack,
            DriverLicense
        },
        props: ["title", "pic_src", "uploadTime", "labels", "details", 'id'],
        data() {
            return {
                viewState: false,
                tagshow: false,
                previewModal: false,
                isFavorite: false,
                tag: "",
                tags: [this.labels],
                items: [],
                newItem: "",
            };
        },
        computed: {
            detail() {
                const json = JSON.parse(this.details);
                console.log("标签",this.labels)
                return json ?.words_result ? json ?.words_result : json ?.result;
                // return json.words_result ? json.words_result : json.result;
            },
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
            addItem() {
                if (this.newItem) {
                    this.items.push(this.newItem);
                    this.newItem = "";
                }
            },
            deleteItem(index) {
                this.items.splice(index, 1)
            },
            preview() {
                this.previewModal = true;
            },
            toggleFavorite() {
                this.isFavorite = !this.isFavorite;
            },
            async uploadedit() {
                const formData = new FormData();
                formData.append('id', this.id);
                // formData.append('title', this.cardTitle);
                // formData.append('side', this.side);
                // formData.append('account', "test");
                // formData.append('file', this.file);
                formData.append('tags', this.tag);
                formData.append('note', this.items)
                await axios.post('/api/card/modify', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        if (response ?.data ?.success) {
                            this.$toast({
                                type: 'success',
                                message: response.data ?.message
                            });
                        } 
                        else {    
                        this.$toast({
                            type: 'error',
                            message: response.data ?.message
                            });
                        console.log(response.data)
                        }
                    }).catch((error) => {
                        console.log(error);
                        this.$toast({
                            type: 'error',
                            message: error
                        });
                    });
            },
            addTag() {
                if (this.tag.trim()) {
                    this.tags.push(this.tag.trim());
                    this.tag = '';
                }
            },
            removeTag(index) {
                this.tags.splice(index, 1);
            },
            copyText(event) {
                const textToCopy = event.target.innerText;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    console.log("Copied the text: " + textToCopy);
                }, () => {
                    console.error("Failed to copy text");
                });
            },
            copyText2(text) {
                navigator.clipboard.writeText(text).then(() => {
                    console.log("Copied the text: " + text);
                }, () => {
                    console.error("Failed to copy text");
                });
            }

        },
    };
</script>

<style scoped>
    .img-view {
        border-radius: 20px;
        border: 1px solid #888888;
        overflow: hidden;
    }

    .text-small {
        font-size: 15px;
    }

    .text-normal {
        font-size: 18px;
    }

    #card-details {
        height: 250px !important;
        overflow-y: scroll;
    }

    #card-details::-webkit-scrollbar {
        /* display: none !important; */
        width: 2px;
    }

    #card-details::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
        background-image: -webkit-linear-gradient(45deg,
                rgba(255, 255, 255, 0.4) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0.4) 75%,
                transparent 75%,
                transparent);
        border-radius: 2em;
    }

    #card-img {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
    }

    .detail-right {
        overflow-y: scroll;
        height: 640px;
    }

    .detail-right::-webkit-scrollbar {
        /* display: none !important; */
        width: 2px;
    }

    .detail-right::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
        background-image: -webkit-linear-gradient(45deg,
                rgba(255, 255, 255, 0.4) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, 0.4) 50%,
                rgba(255, 255, 255, 0.4) 75%,
                transparent 75%,
                transparent);
        border-radius: 2em;
    }
</style>