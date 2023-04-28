<template>
    <v-dialog v-model="dialog" width="500" @click:outside="cancel">
        <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
                卡证上传
            </v-card-title>
            <v-card-text>
              <v-text-field v-model="cardTitle" label="卡证名称"></v-text-field>
              <v-select v-model="cardType" :items="cardTypes" label="卡证种类"></v-select>
              <v-select v-model="side" :items="sides" label="正面/反面"></v-select>
              <v-file-input v-model="file" label="File input"></v-file-input>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="cancel">
                  取消
                </v-btn>
                <v-btn color="primary" text @click="uploadCard">
                  上传
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
    props: ['dialog'],
    data() {
        return {
            cardType: null,
            cardTitle: null,
            cardTypes: [
              {text: '身份证', value: 'idcard'},
              {text: '银行卡', value: 'bankcard'},
              {text: '驾驶证', value: 'driving_license'},
              {text: '社保卡', value: 'social_security_card'},
              {text: '护照', value: 'passort'},
              {text: '港澳台通行证',value:'hk_macau_taiwan_exitentrypermit'},
              {text: '其他', value: 'other'}
            ],
            side: "",
            sides: [
              {text: '正面', value: 'front'},
              {text: '反面', value: 'back'},
              {text: '不分正反面', value: 'null'}
            ],
            file: null 
        };
    },
    methods: {
      cancel() {
        this.$emit('cancel', this.dialog);
      },
      async uploadCard() {
        const formData = new FormData();
            formData.append('type', this.cardType);
            formData.append('title', this.cardTitle);
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
                      this.$emit('upload', this.dialog);
                      this.cardType = "";
                      this.cardTitle = "";
                      this.side = "";
                      this.file = null;
                    }
                    else this.$toast({type: 'error', message: response.data?.message});
                }).catch((error) => {
                    console.log(error);
                    this.$toast({type: 'error', message: error});
                });
      }
    },
}
</script>

<style>

</style>