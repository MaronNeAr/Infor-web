<template>
<v-dialog v-model="dialog" width="860" @click:outside="cancel">
    <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
            简历预览
        </v-card-title>
        <v-card-text class="card-text" ref="resume">
            <h3>基本消息</h3>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "姓名：" + parentData.name }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "意向地点：" + parentData.city }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "邮箱：" + parentData.email }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "电话：" + parentData.phone }}</h5>
                </v-col>
            </v-row>
            <h3>教育经历</h3>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "毕业院校：" + parentData.college }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "专业：" + parentData.major }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "学历：" + parentData.email }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "时间：" + parentData.startDate + "-" + parentData.endDate }}</h5>
                </v-col>
            </v-row>
            <h3>实习经历</h3>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "公司：" + parentData.company }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "职位：" + parentData.career }}</h5>
                </v-col>
                <v-col cols="12">
                    <h5 class="resume-item">{{ "时间：" + parentData.internshipStartDate + "-" + parentData.internshipEndDate }}</h5>
                </v-col>
                <v-col cols="1">
                    <h5>实习描述:</h5>
                </v-col>
                <v-col cols="11">
                    <div v-html="getContent(parentData.desc)"></div>
                </v-col>
            </v-row>
            <h3>项目经历</h3>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "项目名称：" + parentData.productName }}</h5>
                </v-col>
                <v-col cols="6">
                    <h5 class="resume-item">{{ "项目角色：" + parentData.productRole }}</h5>
                </v-col>
                <v-col cols="12">
                    <h5 class="resume-item">{{ "项目链接：" + parentData.productUrl }}</h5>
                </v-col>
                <v-col cols="1">
                    <h5>项目描述:</h5>
                </v-col>
                <v-col cols="11">
                    <div v-html="getContent(parentData.productDesc)"></div>
                </v-col>
            </v-row>
            <h3>个人技能</h3>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12">
                    <div v-html="getContent(parentData.selfSkill)"></div>
                </v-col>
            </v-row>
            <h3>自我评价</h3>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12">
                    <div v-html="getContent(parentData.selfEvaluate)"></div>
                </v-col>
            </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="cancel">
                取消
            </v-btn>
            <v-btn color="primary" text @click="downloadResume">
                下载
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
    props: ['dialog', 'parentData'],
    methods: {
        cancel() {
            this.$emit('cancel', this.dialog);
        },
        downloadResume() {
            console.log(this.$refs.resume);
            const options = {
                margin: [0, 0, 0, 0], // 设置页面边距为0
                filename: 'resume.pdf', // 设置PDF文件名
                image: {
                    type: 'jpeg',
                    quality: 1
                }, // 设置图片类型和质量
                html2canvas: {
                    dpi: 1920,
                    letterRendering: true
                }, // 设置html2canvas参数
                jsPDF: {
                    unit: 'pt',
                    format: 'a4',
                    orientation: 'portrait'
                } // 设置jsPDF参数
            };
            html2pdf().from(this.$refs.resume).set(options).save(); // 将HTML转换为PDF并下载
        },
        getContent(text) {
            //this.res.data是后端传回来的文本数据，就是要对这个数据进行处理
            let arr = text.split("");
            return arr.map((item) => {
                return item === "\n" ? "<br>" : item
            }).join("")
        }
    }
}
</script>

<style scoped>
.card-text {
    max-height: 500px;
    overflow-y: scroll;
}

.card-text * {
    padding: 0px;
    margin: 0px;
}

.blue-row {
    width: 80px;
    height: 4px;
    background-color: blue;
    border-radius: 2px;
    display: inline-block;
}
</style>
