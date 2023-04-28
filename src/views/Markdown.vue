<template>
<div>
    <!-- banner -->
    <div class="banner" :style="cover">
        <h1 class="banner-title">Markdown实时编辑器</h1>
    </div>
    <!-- 分类列表 -->
    <v-card class="blog-container">
        <v-row>
            <v-col :cols="6">
                <v-textarea v-model="markdownText" placeholder="请键入markdown..." rows="10" auto-grow></v-textarea>
            </v-col>
            <v-col :cols="6">
                <div v-html="compiledMarkdown" class="markdown-browse"></div>
            </v-col>
        </v-row>        
    </v-card>
</div>
</template>

  
<script>
import marked from 'marked'
export default {
    data() {
        return {
            categoryList: [],
            count: 0,
            markdownText: ''
        };
    },
    computed: {
        cover() {
            var cover = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtT?ver=b795";
            // this.$store.state.blogInfo.pageList.forEach(item => {
            //   if (item.pageLabel == "category") {
            //     cover = item.pageCover;
            //   }
            // });
            return "background: url(" + cover + ") center center / cover no-repeat";
        },
        compiledMarkdown() {
            return marked.marked(this.markdownText)
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
</style>
