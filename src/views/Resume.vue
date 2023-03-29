<template>
<div>
    <!-- banner -->
    <div class="banner" :style="cover">
        <h1 class="banner-title">简历解析</h1>
    </div>
    <v-card class="blog-container">
        <v-row>
            <v-col cols="4">
                <h3 class="mouble-name">附件简历</h3>
                <div class="blue-row"></div>
                <div></div>
            </v-col>
            <v-col cols="8">
                <v-file-input v-model="file" label="File input" @change="fileChange"></v-file-input>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <h3 class="mouble-name">基本消息</h3>
                <div class="blue-row"></div>
                <div class="mouble-detail">请填写基本信息</div>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="name" :rules="commonRules" :counter="10" label="姓名" required></v-text-field>
                <v-row>
                    <v-col cols="3" class="left-col">
                        <v-select v-model="countryCode" :items="countryCodes" label="国家/地区代码"></v-select>
                    </v-col>
                    <v-col cols="9" class="right-col">
                        <v-text-field v-model="phone" :rules="commonRules" :counter="11" label="手机号码"></v-text-field>
                    </v-col>
                </v-row>
                <v-text-field v-model="email" :rules="emailRules" :counter="30" label="邮箱" required></v-text-field>
                <v-row>
                    <v-col cols="3" class="left-col">
                        <v-select v-model="identificationType" :items="identificationTypes" label="证件类型"></v-select>
                    </v-col>
                    <v-col cols="9" class="right-col">
                        <v-text-field v-model="idcode" :rules="commonRules" :counter="18" label="身份证号"></v-text-field>
                    </v-col>
                </v-row>
                <v-select v-model="city" :items="cityItems" label="意向地点"></v-select>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <h3 class="mouble-name">教育经历</h3>
                <div class="blue-row"></div>
                <div class="mouble-detail">请填写教育经历</div>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="college" :rules="commonRules" :counter="10" label="学校" required></v-text-field>
                <v-select v-model="degree" :items="degreeItems" label="学历"></v-select>
                <v-text-field v-model="major" :rules="commonRules" :counter="11" label="专业"></v-text-field>
                <v-row>
                    <v-col cols="6" class="left-col">
                        <v-menu v-model="menu1Show" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="startDate" label="开始时间" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="startDate" @input="menu1Show = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6" class="right-col">
                        <v-menu v-model="menu2Show" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="endDate" label="结束时间" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="endDate" @input="menu2Show = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <h3 class="mouble-name">实习经历</h3>
                <div class="blue-row"></div>
                <div class="mouble-detail">请填写实习经历</div>
            </v-col>
            <v-col cols="8">
                <v-text-field v-model="company" :rules="commonRules" :counter="10" label="公司" required></v-text-field>
                <v-text-field v-model="career" :rules="commonRules" :counter="10" label="职位" required></v-text-field>
                <v-row>
                    <v-col cols="6" class="left-col">
                        <v-menu v-model="menu3Show" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="internshipStartDate" label="开始时间" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="internshipStartDate" @input="menu3Show = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="6" class="right-col">
                        <v-menu v-model="menu4Show" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y min-width="290px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="internshipEndDate" label="结束时间" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="internshipEndDate" @input="menu4Show = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-textarea v-model="desc" :counter="10" label="描述" required></v-textarea>
            </v-col>
        </v-row>
    </v-card>

</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            file: null,
            name: "",
            phone: "",
            email: "",
            idcode: "",
            city: "",
            college: "",
            degree: "",
            degreeItems: ["海外及港澳地区", "统招全日制", "统招非全日制", "自考", "其他"],
            major: "",
            startDate: "",
            endDate: "",
            company: "",
            career: "",
            desc: "",
            internshipStartDate: "",
            internshipEndDate: "",
            menu1Show: false,
            menu2Show: false,
            menu3Show: false,
            menu4Show: false,
            cityItems: ['上海市', '北京市', '杭州市', '深圳市', '广州市'],
            countryCode: '+86',
            countryCodes: [{
                    text: '+86',
                    value: '86'
                },
                {
                    text: '+1',
                    value: '1'
                },
                // 其他国家/地区代码
            ],
            identificationType: "中国——身份证",
            identificationTypes: ["中国——身份证", "中国——港澳居民来往内地通行证", "中国——台湾居民来往内地通行证", "中国——港澳居民居住证", "中国——港澳居民居住证", "护照", "其他"],
            commonRules: [
                v => !!v || 'Name is required'
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ]
        };
    },
    methods: {
        fileChange() {
            // console.log(this.file);
            this.uploadFile();
        },
        async uploadFile() {
            const formData = new FormData();
            formData.append('file', this.file);
            axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(JSON.parse(response.data.data));
                    const result = JSON.parse(response.data.data)?.result;
                    this.name = result?.name;
                    this.phone = result?.phone;
                    this.email = result?.email;
                    this.college = result?.college;
                    this.major = result?.major;
                    this.city = result?.city;
                    this.company = result?.work_company;
                    this.career = result?.expect_job;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    computed: {
        cover() {
            var cover = "https://static.ran-feiran.cn/config/46e10dc661d6b3291dce0c9b7f2c2147.jpg";
            // this.$store.state.blogInfo.pageList.forEach(item => {
            //   if (item.pageLabel == "category") {
            //     cover = item.pageCover;
            //   }
            // });
            return "background: url(" + cover + ") center center / cover no-repeat";
        }
    }
};
</script>

<style scoped>
.markdown-browse {
    position: relative;
    width: 95%;
    left: 5%;
}

.mouble-name {
    line-height: 0px;
}

.mouble-detail {
    font-size: 12px;
    color: #969696;
}

.blue-row {
    width: 20px;
    height: 4px;
    background-color: blue;
    border-radius: 2px;
    display: inline-block;
}

.left-col {
    position: relative;
    left: 5px;
}

.right-col {
    position: relative;
    right: 5px;
}
</style>
