<template>
    <v-list two-line style="background-color:transparent">
        <v-list-item style="background-color:rgba(0,0,0,0.2)">
            <v-list-item-avatar>
                <v-icon>
                    mdi-chat-question
                </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title v-html="ask.title"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item style="background-color:rgba(0,0,0,0.1);width:100%;">
            <v-list-item-avatar>
                <v-icon>
                    mdi-message-reply-text-outline
                </v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="answer" v-if="show"
                style="white-space: pre-line;max-height:200px;overflow:scroll;text-overflow:ellipsis">
                {{answer.title}}
            </v-list-item-content>
            <v-progress-linear color="blue accent-4" indeterminate rounded height="6" v-else></v-progress-linear>
        </v-list-item>
    </v-list>
</template>
<script>
    export default {
        props: ["asks"],
        data() {
            return {
                show: false,
                ask: {
                    title: this.asks,
                },
                answer: {
                    title: `在国信证券公司信息技术部门担任后端开发实习生期间,我主要负责绩效管理业务逻辑、后台接口的开发以及账户身份验证模块的开发工作,为公司上线了一套成熟的绩效管理系统。
主要职责:
1.负责根据产品需求，实现绩效管理，流程审批模块的业务逻辑设计。
2.负责与企业微信对接，实现账户身份验证，使其只能由企业内部用户进行访问.
3.业务逻辑的开发，包括数据处理、算法设计等，使用 git 进行版本控制。
`,
                }
            }
        },
        methods: {
            gettitle: function () {
                setTimeout(() => {
                    console.log("123",this.asks)
                if (this.asks == '国信证券 实习描述') this.show = true
                else this.show = false
                }, 3000)
            }
        },
        mounted(){
            this.gettitle()
        }
    }
</script>
<style scoped>
    .answer::-webkit-scrollbar {
        display: none
    }
</style>