<template>
  <div>
    <!-- banner -->
    <div class="banner" :style="cover">
      <h1 class="banner-title">文件夹</h1>
    </div>
    <!-- 链接列表 -->
    <!-- <v-card class="editor">
      <div id="editor"></div>
    </v-card> -->
    <div class="note-box">
      <div class="left">
        <!-- 笔记基本信息 -->
        <v-card style="height:100%;padding:5px;width:100%;">
          <v-card-title class="display-1 text--primary">
            创建笔记
          </v-card-title>
          <v-card-text>
            <div class="float-right ml-1">
              <v-chip class="ml-1" color="#5cbbf6" text-color="white">
                @文件
              </v-chip>
            </div>
            <div class="float-right" style="font-size:20px"></div>
          </v-card-text>
          <el-form label-position="top" :model="formLabelAlign" style="margin:15px">
            <el-form-item label="标题">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="类别">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="创建时间">
              <el-input v-model="formLabelAlign.createtime"></el-input>
            </el-form-item>
            <el-form-item label="标签">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button style="float:right">取消</el-button>
            </el-form-item>
          </el-form>
        </v-card>
      </div>
      <div class="right">
        <!-- 笔记编辑器 -->
        <p style="margin-top:20px;font-size:24px">笔记头图</p>
        <div class="box-head">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <p style="margin-top:20px;font-size:24px">笔记内容</p>
        <div class="box">
          <div id="editor">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://cdn.ckbox.io/CKBox/1.3.2/ckbox.js"></script>
<!--
        The "super-build" of CKEditor 5 served via CDN contains a large set of plugins and multiple editor types.
        See https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/quick-start.html#running-a-full-featured-editor-from-cdn
    -->
<script src="https://cdn.ckeditor.com/ckeditor5/36.0.1/super-build/ckeditor.js"></script>

<script>
  // import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

  // import CKEDITOR from "@ckeditor/ckeditor5-vue2"
  export default {
    components: {},
    created() {},
    data() {
      return {
        name: "",
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          createtime: ""
        },
        category: [
          '文件笔记',
          '网页笔记',
          '随笔',
          '其他',
        ],
      };
    },
    methods: {},
    computed: {
      blogInfo() {
        return this.$store.state.blogInfo;
      },
      cover() {
        var cover =
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtT?ver=b795";
        // this.$store.state.blogInfo.pageList.forEach(item => {
        //   if (item.pageLabel == "link") {
        //     cover = item.pageCover;
        //   }
        // });
        return "background: url(" + cover + ") center center / cover no-repeat";
      }
    },
    mounted() {
      CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html#extended-toolbar-configuration-format
        toolbar: {
          items: [
            'ckbox', 'uploadImage', '|',
            'exportPDF', 'exportWord', '|',
            'findAndReplace', 'selectAll', '|',
            'heading', '|',
            'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript', 'removeFormat',
            '|',
            'bulletedList', 'numberedList', 'todoList', '|',
            'outdent', 'indent', '|',
            'undo', 'redo',
            '-',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'highlight', '|',
            'alignment', '|',
            'link', 'blockQuote', 'insertTable', 'mediaEmbed', 'codeBlock', 'htmlEmbed', '|',
            'specialCharacters', 'horizontalLine', 'pageBreak', '|',
            'textPartLanguage', '|',
            'sourceEditing'
          ],
          shouldNotGroupWhenFull: true
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true
          }
        },
        language: 'zh',
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html#configuration
        heading: {
          options: [{
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph'
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1'
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2'
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3'
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4'
            },
            {
              model: 'heading5',
              view: 'h5',
              title: 'Heading 5',
              class: 'ck-heading_heading5'
            },
            {
              model: 'heading6',
              view: 'h6',
              title: 'Heading 6',
              class: 'ck-heading_heading6'
            }
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/editor-placeholder.html#using-the-editor-configuration
        placeholder: ``,
        ckbox: {
          // The development token endpoint is a special endpoint to help you in getting started with
          // CKEditor Cloud Services.
          // Please note the development token endpoint returns tokens with the CKBox administrator role.
          // It offers unrestricted, full access to the service and will expire 30 days after being used for the first time.
          // -------------------------------------------------------------
          // !!! You should not use it on production !!!
          // -------------------------------------------------------------
          // Read more: https://ckeditor.com/docs/ckbox/latest/guides/configuration/authentication.html#token-endpoint

          // You need to provide your own token endpoint here
          tokenUrl: 'https://96768.cke-cs.com/token/dev/nk2ViJiDo4xlVtICIX8DZ9mJmXoBZjRTNptx?limit=10'
        },
        // The "super-build" contains more premium features that require additional configuration, disable them below.
        // Do not turn them on unless you reqd the documentation and know how to configure them and setup the editor.
        removePlugins: [
          // These two are commercial, but you can try them out without registering to a trial.
          // 'ExportPdf',
          // 'ExportWord',
          'EasyImage',
          'RealTimeCollaborativeComments',
          'RealTimeCollaborativeTrackChanges',
          'RealTimeCollaborativeRevisionHistory',
          'PresenceList',
          'Comments',
          'TrackChanges',
          'TrackChangesData',
          'RevisionHistory',
          'Pagination',
          'WProofreader',
          // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
          // from a local file system (file://) - load this site via HTTP server if you enable MathType
          'MathType'
        ],
        // styles:
        // }
      });
    }
  };
</script>

<style>
  .banner {
    position: relative !important;
    ;
    height: 400px;
  }

  .note-box {
    position: relative;
    display: flex;
    background-color: white;
    width: 80%;
    min-height: 70vh;
    margin: auto;
    margin-bottom: 3vh;
  }

  .left {
    float: left;
    width: 20%;
    height: auto;
  }

  .right {
    float: right;
    width: 75%;
    margin-left: 1%;
    min-height: 60vh;
    padding-bottom: 5%;
  }

  .right p {
    margin-left: -5%;
  }

  .box-head {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
  }

  .upload-demo {
    width: 88%;
  }
</style>