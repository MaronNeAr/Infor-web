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
                    <v-col cols="8">
                        <v-img :src="pic_src" :aspect-ratio="4 / 3"></v-img>
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
                        <v-card-text>
                            <p>Something about the picture here.</p>
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
    export default {
        props: ["title", "pic_src", "uploadTime", "labels"],
        data() {
            return {
                tagshow: false,
                previewModal: false,
                isFavorite: false,
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
            preview() {
                this.previewModal = true;
            },
            toggleFavorite() {
                this.isFavorite = !this.isFavorite;
            },
            edit() {
                console.log('xxx')
            },
        },
    };
</script>
<style scoped>
    .text-small {
        font-size: 15px;
    }

    .text-normal {
        font-size: 18px;
    }
</style>