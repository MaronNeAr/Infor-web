<template>
<div>
    <!-- banner -->
    <div class="banner" :style="cover">
        <h1 class="banner-title">证件</h1>
    </div>
    <v-card class="blog-container">
        <v-row>
            <v-col cols="6">
                <!-- <id-card-back></id-card-back> -->
                <id-card-front></id-card-front>
                <br />
                <driver-license></driver-license>
                <br />
                <v-btn color="primary" @click="dialog = true">上传</v-btn>
            </v-col>
            <v-col cols="6">
                <iframe src="http://127.0.0.1:8888/document/report.pdf" class="report-view"></iframe>
            </v-col>
        </v-row>
    </v-card>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
                卡证上传
            </v-card-title>
            <v-card-text>
              <v-select v-model="cardType" :items="cardTypes" label="卡证种类"></v-select>
              <v-select v-model="side" :items="sides" label="正面/反面"></v-select>
              <v-file-input v-model="file" label="File input"></v-file-input>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  取消
                </v-btn>
                <v-btn color="primary" text @click="uploadCard">
                  上传
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
// import IdCardBack from '../cards/IdCardBack.vue';
import IdCardFront from './cards/IdCardFront.vue';
import DriverLicense from './cards/DriverLicense.vue';
import axios from 'axios';

export default {
    components: {
        IdCardFront,
        DriverLicense
    },
    data: function () {
        return {
            dialog: false,
            cardType: null,
            cardTypes: [
              'idcard',
            ],
            side: "",
            sides: ['back', 'front', "null"],
            file: null 
        };
    },
    methods: {
      async uploadCard() {
        const formData = new FormData();
            formData.append('type', this.cardType);
            formData.append('side', this.side);
            formData.append('account', "test");
            formData.append('file', this.file);
            await axios.post('/api/card/update', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    if (response?.data?.success) {
                      this.$toast({type: 'success', message: response.data?.message});
                      this.dialog = false;
                      this.cardType = "";
                      this.side = "";
                    }
                    else this.$toast({type: 'error', message: response.data?.message});
                }).catch((error) => {
                    console.log(error);
                    this.$toast({type: 'error', message: error});
                });
      }
    },
    computed: {
        cover() {
            var cover = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtT?ver=b795";
            return "background: url(" + cover + ") center center / cover no-repeat";
        }
    }
};
</script>

<style scoped>
.report-view {
    border-radius: 15px;
    width: 100%;
    height: 654px;
}

.upload-card {
    position: fixed;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%
}
</style>
