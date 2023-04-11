<template>
    <div>
        <!-- banner -->
        <div class="banner" :style="cover">
            <h1 class="banner-title">简历预览</h1>
        </div>
        <div class="scroll-down" @click="scrollDown">
            <v-icon color="#fff" class="scroll-down-effects" style="font-size: 60px">
                mdi-chevron-down
            </v-icon>
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
                    <v-text-field v-model="major" :rules="commonRules" :counter="10" label="专业"></v-text-field>
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
                    <v-textarea v-model="desc" :counter="500" label="描述" required auto-grow></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <h3 class="mouble-name">项目经历</h3>
                    <div class="blue-row"></div>
                    <div class="mouble-detail">请填写项目经历</div>
                </v-col>
                <v-col cols="8">
                    <v-text-field v-model="productName" :rules="commonRules" :counter="10" label="项目名称" required></v-text-field>
                    <v-text-field v-model="productRole" :rules="commonRules" :counter="10" label="项目角色" required></v-text-field>
                    <v-text-field v-model="productUrl" :rules="commonRules" :counter="50" label="项目链接" required></v-text-field>
                    <v-textarea v-model="productDesc" :counter="500" label="描述" required auto-grow></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4">
                    <h3 class="mouble-name">个人技能</h3>
                    <div class="blue-row"></div>
                    <div class="mouble-detail">请填写个人技能</div>
                </v-col>
                <v-col cols="8">
                    <v-textarea v-model="selfSkill" :counter="500" label="个人技能" required auto-grow></v-textarea>
                    <v-textarea v-model="selfEvaluate" :counter="200" label="自我评价" required auto-grow></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="10"></v-col>
                <v-col cols="1">
                    <v-btn color="green" dark @click="exportResume">导出</v-btn>
                </v-col>
                <v-col cols="1">
                    <v-btn color="primary" @click="saveResume">保存</v-btn>
                </v-col>
            </v-row>
        </v-card>
        <!-- <iframe src="http://127.0.0.1:8888/document/resume.pdf" class="resume-view"></iframe> -->
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
                productName: "",
                productRole: "",
                productUrl: "",
                productDesc: "",
                selfSkill: "",
                selfEvaluate: "",
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
        mounted() {
            this.getResume();
        },
        methods: {
            fileChange() {
                // console.log(this.file);
                this.uploadFile();
            },
            scrollDown() {
                window.scrollTo({
                    behavior: "smooth",
                    // top: document.documentElement.clientHeight / 2
                    top: 400
                });
            },
            async getResume() {
                const params = new URLSearchParams();
                params.append('account', 'test');
                await axios.post('/api/resume', params).then((response => {
                    console.log(response);
                    const resultData = response.data.data;
                    console.log(this.name);
                    console.log(resultData);
                    if (resultData == null) return;
                    this.name = resultData.name == "null"? "" : resultData.name;
                    this.countryCode = resultData.countryCode == "null" ? "" : resultData.countryCode;
                    this.phone = resultData.phone == "null" ? "" : resultData.phone;
                    this.email = resultData.email == "null" ? "" : resultData.email;
                    this.identificationType = resultData.identificationType == "null" ? "" : resultData.identificationType;
                    this.idcode = resultData.idCode == "null" ? "" : resultData.idCode;
                    this.city = resultData.city == "null" ? "" : resultData.city;
                    this.college = resultData.college == "null" ? "" : resultData.college;
                    this.degree = resultData.degree == "null" ? "" : resultData.degree;
                    this.major = resultData.major == "null" ? "" : resultData.major;
                    this.startDate = resultData.eduStartDate == "null" ? "" : resultData.eduStartDate;
                    this.endDate = resultData.eduEndDate == "null" ? "" : resultData.eduEndDate;
                    this.company = resultData.internCompany == "null" ? "" : resultData.internCompany;
                    this.career = resultData.internCareer == "null" ? "" : resultData.internCareer;
                    this.desc = resultData.internDesc == "null" ? "" : resultData.internDesc;
                    this.internshipStartDate = resultData.internStartDate == "null" ? "" : resultData.internStartDate;
                    this.internshipEndDate = resultData.internEndDate == "null" ? "" : resultData.internEndDate;
                    this.productName = resultData.productName == "null" ? "" : resultData.productName;
                    this.productRole = resultData.productRole == "null" ? "" : resultData.productRole;
                    this.productUrl = resultData.productUrl == "null" ? "" : resultData.productUrl;
                    this.productDesc = resultData.productDesc == "null" ? "" : resultData.productDesc;
                    this.selfSkill = resultData.selfSkill == "null" ? "" : resultData.selfSkill;
                    this.selfEvaluate = resultData.selfEvaluate == "null" ? "" : resultData.selfEvaluate;
                })).catch(error => {
                    console.log(error);
                });
            },
            async uploadFile() {
                const formData = new FormData();
                formData.append('file', this.file);
                await axios.post('/api/resume/upload', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.log(JSON.parse(response.data.data));
                        const result = JSON.parse(response.data.data) ?.result;
                        this.name = result ?.name;
                        this.phone = result ?.phone;
                        this.email = result ?.email;
                        this.college = result ?.college;
                        this.major = result ?.major;
                        this.city = result ?.city;
                        this.company = result ?.work_company;
                        this.career = result ?.expect_job;
                    }).catch((error) => {
                        console.log(error);
                    });
            },
            async saveResume() {
                const params = new URLSearchParams();
                params.append('name', this.name);
                params.append('phone', this.phone);
                params.append('countryCode', this.countryCode);
                params.append('email', this.email);
                params.append('countryCode', this.c);
                params.append('identificationType', this.identificationType);
                params.append('idCode', this.idcode);
                params.append('city', this.city);
                params.append('college', this.college);
                params.append('degree', this.degree);
                params.append('major', this.major);
                params.append('eduStartDate', this.startDate);
                params.append('eduEndDate', this.endDate);
                params.append('internCompany', this.company);
                params.append('internCareer', this.career);
                params.append('internDesc', this.desc);
                params.append('internStartDate', this.internshipStartDate);
                params.append('internEndDate', this.internshipEndDate);
                params.append('productName', this.productName);
                params.append('productRole', this.productRole);
                params.append('productUrl', this.productUrl);
                params.append('productDesc', this.productDesc);
                params.append('selfSkill', this.selfSkill);
                params.append('selfEvaluate', this.selfEvaluate);
                params.append('account', 'test');
                await axios.post('/api/resume/save', params).then(response => {
                    // console.log(response);
                    if (response.data?.success) {
                        this.$toast({type: 'success', message: response.data?.message});
                    } else this.$toast({type: 'error', message: response.data?.message});
                }).catch(error => {
                    console.log(error);
                    this.$toast({type: 'error', message: error});
                })
            },
            exportResume() {
                window.open("http://127.0.0.1:8888/document/resume.pdf");
            }
        },
        computed: {
            cover() {
                var cover = "https://static.ran-feiran.cn/config/46e10dc661d6b3291dce0c9b7f2c2147.jpg";
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
    
    .scroll-down {
        cursor: pointer;
        position: absolute;
        top: 240px;
        width: 100%;
        text-align: center;
    }
    
    .scroll-down i {
        font-size: 2rem;
    }
    
    .scroll-down-effects {
        color: rgb(228, 219, 231) !important;
        text-align: center;
        text-shadow: 0.1rem 0.1rem 0.2rem rgba(131, 31, 213, 0.15);
        line-height: 1.5;
        display: inline-block;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        animation: scroll-down-effect 1.5s infinite;
    }
    
    @keyframes scroll-down-effect {
        0% {
            top: 0;
            opacity: 0.4;
            filter: alpha(opacity=40);
        }
    
        50% {
            top: -16px;
            opacity: 1;
            filter: none;
        }
    
        100% {
            top: 0;
            opacity: 0.4;
            filter: alpha(opacity=40);
        }
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
    
    .resume-view {
        position: fixed;
        width: 50%;
        height: 800px;
        top: 0%;
    }
    </style>
    