<template>
    <!-- kimoji -->
    <div>
        <v-card min-width="150" max-width="240" class="webCard" max-height="110" @click="go(url)">
            <v-card-actions>
                <v-avatar class="rounded-circle">
                    <img :src="pic_src" >
                </v-avatar>
                <div>
                    <v-card-title>
                        <div v-if="title.length > 5" class="text-small">
                            {{ title }}
                        </div>
                        <div v-else class="text-normal">{{ title }}</div>
                    </v-card-title>
                    <v-card-subtitle>
                        <p class="text-url">{{url}}</p>
                    </v-card-subtitle>
                </div>
            </v-card-actions>
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
                    <v-col cols="4">
                        <v-card-actions>
                            <v-card-title class="text-h5"><strong>{{ title }}</strong></v-card-title>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="toggleFavorite">
                                <v-icon :color="isFavorite ? 'yellow' : ''">mdi-star</v-icon>
                            </v-btn>
                            <v-btn icon @click="edit">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon @click="previewModal = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-card-actions>
                        <v-card-actions>
                            <v-card-title class="text-h5">{{ uploadTime }}</v-card-title><br>
                        </v-card-actions>
                        <v-card-actions>
                            <v-chip-group>
                                <v-chip v-for="label in labels" :key="label.text" :color="labelColor(label.lv)">
                                    {{ label.text }}
                                </v-chip>
                            </v-chip-group>
                        </v-card-actions>
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
                        <v-card-text>
                            <p>Something about the picture here.</p>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import DriverLicense from './cards/DriverLicense.vue';
    import IdCardBack from './cards/IdCardBack.vue';
    import IdCardFront from './cards/IdCardFront.vue';
    export default {
        components: {
            IdCardFront,
            IdCardBack,
            DriverLicense
        },
        props: ["title", "pic_src", "uploadTime", "labels", "details", "url"],
        data() {
            return {
                viewState: false,
                tagshow: false,
                previewModal: false,
                isFavorite: false,
            };
        },
        computed: {
            detail() {
               return  this.details
                
            },
        },
        methods: {
            go(url){
                window.open(url,"_blank")
            },

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
            preview() {
                this.previewModal = true;
            },
            toggleFavorite() {
                this.isFavorite = !this.isFavorite;
            },
            edit() {
                console.log('xxx')
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
        font-size: 12px;
    }

    .text-normal {
        font-size: 15px;
    }

    .text-url {
        font-size: 10px;
        color: #888888;
        max-width: 160px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
</style>