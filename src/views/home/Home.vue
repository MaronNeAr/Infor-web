<template>
  <div>
    <div class="home">
      <div class="water-ripple"></div>
      <div class="ripple-background">
        <div class="circle xxlarge shade1"></div>
        <div class="circle xlarge shade2"></div>
        <div class="circle large shade3"></div>
        <div class="circle medium shade4"></div>
        <div class="circle small shade5"></div>
      </div>
      <div class="content">
        <div class="title" style="font-size: 32px !important;">
          票证通
        </div>
        <div class="subtitle" style="font-size: 56px !important;">
          个人文档管理系统
        </div>
      </div>
      <div class="scroll-down" @click="scrollDown">
        <v-icon color="#fff" class="scroll-down-effects" style="font-size: 60px">
          mdi-chevron-down
        </v-icon>
      </div>
    </div>
    <!-- 主页文章 -->
    <v-row class="home-container">
      <v-col cols="9">
        <!-- <v-card class="animated zoomIn article-card" style="border-radius: 12px 8px 8px 12px">
        </v-card> -->
        <v-row>
          <!-- 信息速查 -->
          <v-col cols="6">
            <div class="gpt animated zoomIn article-card" style="border-radius: 12px 8px 8px 12px;margin:2px">
              <div class="head">
                <svg width="14" height="14" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"
                  stroke-width="1.5" class="item-avatar">
                  <path
                    d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z"
                    fill="currentColor"></path>
                </svg>
                信息速查
              </div>
              <div>
                <gpt :asks="message" v-model="message" v-if="message"></gpt>
              </div>
              <v-text-field class="input" v-model="newmessage" label="请输入....." @keyup.enter="addmessage()" clearable>
              </v-text-field>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="rss-last animated zoomIn article-card" style="border-radius: 12px 8px 8px 12px ;margin:2px">
              <div class="head">
                <svg t="1681965001620" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="19497" width="200" height="200">
                  <path
                    d="M924.8 337.6c-22.6-53.4-54.9-101.3-96-142.4-41.1-41.1-89-73.4-142.4-96C631.1 75.8 572.5 64 512 64S392.9 75.8 337.6 99.2c-53.4 22.6-101.3 54.9-142.4 96-41.1 41.1-73.4 89-96 142.4C75.8 392.9 64 451.5 64 512s11.8 119.1 35.2 174.4c22.6 53.4 54.9 101.3 96 142.4 41.1 41.1 89 73.4 142.4 96C392.9 948.2 451.5 960 512 960s119.1-11.8 174.4-35.2c53.4-22.6 101.3-54.9 142.4-96 41.1-41.1 73.4-89 96-142.4C948.2 631.1 960 572.5 960 512s-11.8-119.1-35.2-174.4zM512 896c-211.7 0-384-172.3-384-384s172.3-384 384-384 384 172.3 384 384-172.3 384-384 384z"
                    p-id="19498"></path>
                  <path
                    d="M544 498.7V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v301.3l169.4 169.4c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L544 498.7z"
                    p-id="19499"></path>
                </svg>
                上次读到
              </div>
              <rss-widget v-model="http" :feed="'https://api.rss2json.com/v1/api.json?rss_url='+http" :key="http">
                <template v-slot:feed_header="slotProps">
                  <h4 class="rsslist-header"></h4>
                </template>
                <template v-slot:feed_body="slotProps">
                  <div style="color:#000;font-weight:400">
                    <a :href="slotProps.items[0].link"
                      style="color:#F3E99F;font-weight:600;font-size:18px ">{{slotProps.items[0].title}}</a>
                    <p style="font-size:10px ">
                      {{slotProps.items[0].pubDate}} | {{slotProps.items[0].author}}
                    </p>
                    <p v-html="slotProps.items[0].description" style="font-size:13px ">
                    </p>
                  </div>
                </template>
              </rss-widget>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="widget animated zoomIn article-card" style="border-radius: 12px 8px 8px 12px ;margin:2px">
              <div class="head">
                <svg t="1681964879176" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="15625" width="200" height="200">
                  <path
                    d="M396.205229 627.804493c17.667382 17.666358 26.479071 38.671765 26.479071 62.903655 0 24.733311-8.724709 45.736671-26.195615 63.207577-17.361413 17.362436-38.47529 26.108634-63.099107 26.108634-24.733311 0-45.824675-8.746198-63.208601-26.108634-17.469883-17.469883-26.194592-38.474266-26.194592-63.207577s8.723685-45.824675 26.194592-63.187111c17.382902-17.492396 38.47529-26.216081 63.208601-26.216081C357.622492 601.304955 378.537847 610.138134 396.205229 627.804493zM500.025783 524.07092c-31.103392-31.101345-68.006883-55.726186-110.691031-74.003458-42.792619-18.23327-87.548962-27.371394-134.442992-27.371394-3.25002 0-5.888104 0.981351-7.851828 2.944052-2.071172 2.070148-3.052522 4.623297-3.052522 7.850805l0 75.858712c0 3.14155 0.981351 5.802146 3.052522 7.764847 1.963725 2.050706 4.601808 3.032056 7.851828 3.032056 68.879764 0 127.659495 24.231891 176.25426 72.826656 48.463782 48.464805 72.695672 107.267049 72.695672 176.25426 0 3.227508 1.089821 5.779633 3.053546 7.742335 2.049682 2.050706 4.601808 3.053546 7.851828 3.053546l75.749218 0c3.25002 0 5.801123-1.00284 7.851828-3.053546 1.962701-1.962701 3.052522-4.514827 3.052522-7.742335 0-46.916543-9.138124-91.75782-27.39493-134.464481C555.773458 591.990822 531.040147 555.088354 500.025783 524.07092zM518.563998 314.446645c-80.46052-47.0025-168.292937-70.448492-263.388782-70.448492-3.337002 0-5.976108 1.088798-8.04728 3.139503-2.072195 2.050706-3.140527 4.711302-3.140527 8.048303l0 78.104869c0 3.357468 1.068332 6.083555 3.140527 8.156774 2.071172 2.050706 4.711302 3.053546 8.04728 3.053546 57.515948 0 112.457258 11.166317 165.06543 33.545 52.499701 22.269189 97.647971 52.41272 135.532813 90.189092 37.864376 37.883819 67.898413 83.120093 90.276073 135.620817 22.290679 52.498678 33.456996 107.549481 33.456996 164.978449 0 3.335978 1.090844 5.976108 3.140527 8.134261 2.072195 2.050706 4.711302 3.053546 8.048303 3.053546l78.127382 0c3.337002 0 6.084579-1.00284 8.135284-3.053546 2.071172-2.158153 3.052522-4.798283 3.052522-8.134261 0-95.097892-23.468504-182.930309-70.362534-263.301801C662.647557 425.049672 598.937536 361.363188 518.563998 314.446645zM958.70846 243.998153l0 536.025183c0 98.715279-79.980589 178.696892-178.696892 178.696892L243.987409 958.720228c-98.629321 0-178.696892-79.981612-178.696892-178.696892L65.290517 243.998153c0-98.629321 80.06757-178.718381 178.696892-178.718381l536.02416 0C878.727871 65.279772 958.70846 145.368832 958.70846 243.998153zM869.414761 288.643979c0-74.003458-60.067051-133.941572-134.050042-133.941572L288.634258 154.702408c-73.982992 0-133.941572 59.937091-133.941572 133.941572l0 446.709995c0 74.005504 59.95858 133.963061 133.941572 133.963061l446.731484 0c73.982992 0 134.050042-59.957557 134.050042-133.963061L869.415784 288.643979z"
                    p-id="15626"></path>
                </svg>
                Rss最近更新
              </div>
              <rss-widget v-model="http" :feed="'https://api.rss2json.com/v1/api.json?rss_url='+http" :key="http">
                <template v-slot:feed_header="slotProps">
                  <h2 class="rsslist-header"></h2>
                  <!-- <h2></h2> -->
                </template>
                <template v-slot:feed_body="slotProps">
                  <ul class="links">
                    <li v-for="(item,i) in slotProps.items" :key="i" class="hot-item" style="font-weight:400">
                      <a :href="item.link" target="_blank" :title="item.title" style="width:80%">
                        <span v-text="item.title" style="color: #fff;"></span>
                      </a>
                      <a :href="item.link" style="color: #fff;float:right;">
                        <small v-text="item.pubDate" style="color: #fff;"></small>
                      </a>
                    </li>
                  </ul>
                </template>
              </rss-widget>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="function animated zoomIn article-card"
              style="border-radius: 12px 8px 8px 12px;margin:2px;background: linear-gradient(to bottom right, #dcdcdc, #ffffff);">
              <div class="head">
                <svg t="1681965044911" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="20716" width="200" height="200">
                  <path
                    d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m-158.1056 88.1664c37.1712 0 67.2768 30.1056 67.2768 67.2768s-30.1056 67.2768-67.2768 67.2768c-37.1712 0-67.2768-30.1056-67.2768-67.2768s30.0032-67.2768 67.2768-67.2768z m0 145.3056c52.1216 0 94.5152 37.888 94.5152 84.3776 0 11.6736-9.4208 21.0944-21.0944 21.0944-11.6736 0-21.0944-9.4208-21.0944-21.0944 0-22.8352-23.9616-42.1888-52.3264-42.1888s-52.3264 19.3536-52.3264 42.1888c0 11.6736-9.4208 21.0944-21.0944 21.0944s-21.0944-9.4208-21.0944-21.0944c0-46.592 42.3936-84.3776 94.5152-84.3776z m240.9472 344.8832H354.2016c-11.5712 0-21.0944-9.5232-21.0944-21.0944s9.5232-21.0944 21.0944-21.0944H669.696c11.5712 0 21.0944 9.5232 21.0944 21.0944 0.1024 11.5712-9.4208 21.0944-20.992 21.0944z m0-106.8032H354.2016c-11.5712 0-21.0944-9.5232-21.0944-21.0944s9.5232-21.0944 21.0944-21.0944H669.696c11.5712 0 21.0944 9.5232 21.0944 21.0944s-9.4208 21.0944-20.992 21.0944z m-48.128-287.232c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072l97.1776 97.1776h-89.9072z"
                    p-id="20717"></path>
                  <path
                    d="M428.8512 351.744c16.7936 0 30.4128-13.6192 30.4128-30.4128s-13.6192-30.4128-30.4128-30.4128-30.4128 13.6192-30.4128 30.4128 13.6192 30.4128 30.4128 30.4128z"
                    p-id="20718"></path>
                </svg>
                简历导出
              </div>
              <div>
                <v-card outlined style="margin-top:20px">
                  <v-card-actions>
                    <v-card-subtitle>最后编辑时间：2023/4/7</v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-btn text color="deep-purple accent-4">
                      更多
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <p class="display-1 text--primary ml-4">
                      国企类简历
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn>
                      编辑
                    </v-btn>
                    <v-btn>
                      导出
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-card outlined style="margin-top:20px">
                  <v-card-actions>
                    <v-card-subtitle>最后编辑时间：2023/4/7</v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-btn text color="deep-purple accent-4">
                      更多
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <p class="display-1 text--primary ml-2">
                      私企类简历
                    </p>
                    <v-spacer></v-spacer>
                    <v-btn>
                      编辑
                    </v-btn>
                    <v-btn>
                      导出
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div elevation="0" class="function animated zoomIn"
              style="border-radius: 12px 8px 8px 12px;margin:2px;background: linear-gradient(to bottom right, #B9EDDD, #87CBB9);">
              <div class="head">
                <svg t="1681965075521" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="20887" width="200" height="200">
                  <path
                    d="M512 0a512 512 0 0 0-512 512 512 512 0 0 0 512 512 512 512 0 0 0 512-512 512 512 0 0 0-512-512z m81.472 628.864a39.424 39.424 0 1 1 0-78.912 39.424 39.424 0 1 1 0 78.912zM510.016 332.352c-100.864 0-182.912 78.272-182.912 174.72 0 96.192 82.048 174.656 182.912 174.656a52.48 52.48 0 1 1 0 105.088c-158.848 0-288-125.44-288-279.808 0-154.24 129.152-279.744 288-279.744 158.912 0 288.128 125.44 288.128 279.616a52.48 52.48 0 1 1-105.152 0c0.192-96.256-82.048-174.528-182.976-174.528z m218.048 465.92a76.032 76.032 0 1 1 0-152.064 76.032 76.032 0 0 1 0 152.064z"
                    fill="#000000" p-id="20888"></path>
                </svg>
                快应用
              </div>
              <div class="function-body">
                <div class="mt-4 mb-4" style="height: 60% !important;width:95%">
                  <h3>最近使用</h3>
                  <v-row class="function-box">
                    <v-col cols="5">
                      <div class="function-app animated zoomIn">
                        <v-card min-width="150" max-width="240" class="webCard" max-height="110">
                          <v-card-actions>
                            <v-avatar @click="$router.push('/card')">
                              <img class="icon" src="@/assets/icon/证件.svg" alt="">
                            </v-avatar>
                            <div>
                              <v-card-title>
                                <div v-if="true" class="text-small">
                                  身份证
                                </div>
                                <div v-else class="text-normal">身份证</div>
                              </v-card-title>
                            </div>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="5">
                      <div class="function-app animated zoomIn">
                        <v-card min-width="150" max-width="240" class="webCard" max-height="110">
                          <v-card-actions>
                            <v-avatar @click="$router.push('/editor')">
                              <img class="icon" src="@/assets/icon/新建笔记 .svg" alt="">
                            </v-avatar>
                            <div>
                              <v-card-title>
                                <div v-if="true" class="text-small">
                                  创建笔记
                                </div>
                                <div v-else class="text-normal">创建笔记</div>
                              </v-card-title>
                            </div>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </v-col>
                    <v-col cols="5">
                      <div class="function-app animated zoomIn">
                        <v-card min-width="150" max-width="240" class="webCard" max-height="110">
                          <v-card-actions>
                            <v-avatar @click="$router.push('/web')">
                              <img class="icon" src="@/assets/icon/Internet.svg" alt="">
                            </v-avatar>
                            <div>
                              <v-card-title>
                                <div v-if="true" class="text-small">
                                  网页收藏
                                </div>
                                <div v-else class="text-normal">网页收藏</div>
                              </v-card-title>
                            </div>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="5">
                      <div class="function-app animated zoomIn">
                        <v-card min-width="150" max-width="240" class="webCard" max-height="110">
                          <v-card-actions>
                            <v-avatar @click="$router.push('/folder')">
                              <img class="icon" src="@/assets/icon/文件夹.svg" alt="">
                            </v-avatar>
                            <div>
                              <v-card-title>
                                <div v-if="true" class="text-small">
                                  收藏夹
                                </div>
                                <div v-else class="text-normal">收藏夹</div>
                              </v-card-title>
                            </div>
                          </v-card-actions>
                        </v-card>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-divider></v-divider>
                <div style="height:20%;width:95%;min-height:100px">
                  <div class="mb-4">
                    <h3>速记</h3>
                    <v-text-field class="input" v-model="newItem" label="请输入....."
                      style="bottom:5px;margin-left:20px;width:80%" clearable @keyup.enter="addItem">
                    </v-text-field>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="home-item">
          <div>
            <div class="category" style="float:left">
              <h1>待报销票据</h1>
              <v-divider></v-divider>
            </div>
          </div>
          <div style="clear:both"></div>
          <div class="animated zoomIn card-list">
            <card class="card" v-for="item in card_list" :key="item.title" :title="item.title" :uploadTime="item.uploadTime"
              :pic_src="item.pic_src" :labels="item.labels" :id="item.id" :details="item.detail">
            </card>
          </div>

          <div>
            <div class="category" style="float:left">
              <h1>近期笔记</h1>
              <v-divider></v-divider>
            </div>
          </div>
          <div style="clear:both"></div>

        </div>
        <v-card class="animated zoomIn article-card" style="border-radius: 12px 8px 8px 12px;display:flex;"
          v-for="(item, index) in articleList" :key="item.articleId">
          <!-- 文章封面图 -->
          <div :class="isRight(index)">
            <router-link :to="'/articles/' + item.articleId">
              <v-img class="on-hover" width="100%" height="100%" :src="item.articleCover" />
            </router-link>
          </div>
          <!-- 文章信息 -->
          <div class="article-wrapper">
            <div style="line-height:1.4">
              <router-link :to="'/articles/' + item.articleId">
                {{ item.articleTitle }}
              </router-link>
            </div>
            <div class="article-info">
              <!-- 是否置顶 -->
              <span v-if="item.isTop == 1">
                <span style="color:#ff7242">
                  <i class="iconfont iconzhiding" /> 置顶
                </span>
                <span class="separator">|</span>
              </span>
              <!-- 发表时间 -->
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
              </svg>
              {{ item.createTime | date }}
              <span class="separator">|</span>
              <!-- 文章分类 -->
              <router-link :to="'/category/' + item.categoryId">
                <svg class="icon" aria-hidden="true" style="size: 12px">
                  <use xlink:href="#icon-fenlei"></use>
                </svg>
                {{ item.categoryName }}
              </router-link>
              <span class="separator">|</span>
              <!-- 文章标签 -->
              <router-link style="display:inline-block" :to="'/tag/' + tag.tagId" class="mr-1"
                v-for="tag of item.tagList" :key="tag.tagId">
                <svg class="icon" aria-hidden="true" style="size: 12px">
                  <use xlink:href="#icon-biaoqian"></use>
                </svg>{{ tag.tagName }}
              </router-link>
            </div>
            <!-- 文章内容 -->
            <div class="article-content">
              {{ item.articleContent }}
            </div>
          </div>
        </v-card>
        <!-- 无限加载 -->
        <!-- -->
      </v-col>
      <v-divider vertical></v-divider>
      <!-- 博主信息 -->
      <v-col cols="3" class="d-md-block d-none" style="margin-top:-20px">
        <div class="blog-wrapper">
          <v-card class="animated zoomIn blog-card mt-5">
            <div class="author-wrapper">
              <!-- 博主头像 -->
              <v-avatar size="110">
                <img class="author-avatar" :src="blogInfo.websiteConfig.websiteAvatar" alt="" />
              </v-avatar>
              <div style="font-size: 1.375rem">
                {{ blogInfo.websiteConfig.websiteAuthor }}
              </div>
            </div>
            <!-- 博客信息 -->
            <div class="blog-info-wrapper">
              <div class="blog-info-data">
                <router-link to="/archives">
                  <div style="font-size: 0.875rem;font-weight: bolder">
                    归档
                  </div>
                  <div style="font-size: 1.25rem">
                    {{ blogInfo.articleCount }}
                  </div>
                </router-link>
              </div>
              <div class="blog-info-data">
                <router-link to="/categories">
                  <div style="font-size: 0.875rem;font-weight: bolder">
                    收藏
                  </div>
                  <div style="font-size: 1.25rem">
                    {{ blogInfo.categoryCount }}
                  </div>
                </router-link>
              </div>
              <div class="blog-info-data">
                <router-link to="/tags">
                  <div style="font-size: 0.875rem;font-weight: bolder">
                    编辑
                  </div>
                  <div style="font-size: 1.25rem">{{ blogInfo.tagCount }}</div>
                </router-link>
              </div>
            </div>
            <!-- 收藏按钮 -->
            <a class="collection-btn" @click="tip = true">
              <v-icon color="#fff" size="18" class="mr-1">mdi-bookmark</v-icon>
              加入书签
            </a>
            <!-- 社交信息 -->
            <div class="card-info-social">
              <a v-if="isShowSocial('qq')" class="mr-5" target="_blank" :href="
                  'http://wpa.qq.com/msgrd?v=3&uin=' +
                    blogInfo.websiteConfig.qq +
                    '&site=qq&menu=yes'
                ">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-QQ"></use>
                </svg>
              </a>
              <a v-if="isShowSocial('github')" target="_blank" :href="blogInfo.websiteConfig.github" class="mr-5">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-github"></use>
                </svg>
              </a>
              <a v-if="isShowSocial('gitee')" target="_blank" :href="blogInfo.websiteConfig.gitee">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-gitee"></use>
                </svg>
              </a>
            </div>
          </v-card>
          <!-- 网站信息 -->
          <v-card class="blog-card animated zoomIn mt-5 big" v-for="(item,i) in items" :key="i">
            <div class="web-info-title" style="display:flex">
              <v-icon size="18" style="margin-bottom: 3px">mdi-bell</v-icon>
              <span style="font-weight: bolder">速记</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="deleteItem(i)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
            <div style="font-size:0.875rem">
              {{item}}
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <!-- 提示消息 -->
    <v-snackbar v-model="tip" top color="#49b1f5" :timeout="2000">
      按CTRL+D 键将本页加入书签
    </v-snackbar>
  </div>
</template>

<script>
  import EasyTyper from "easy-typer-js";
  import card from "@/views/card/card.vue"
  import * as CKBox from 'ckbox';
  import 'ckbox/dist/styles/ckbox.css';
  import gpt from "./components/gpt.vue"
  import RssWidget from "vue-rss-widget"
  export default {
    components: {
      card,
      gpt,
      RssWidget
    },
    created() {
      this.init();
      this.timer = setInterval(this.runTime, 1000);

    },
    mounted() {
      CKBox.mount(document.querySelector('#ckbox'), {
        tokenUrl: 'https://96768.cke-cs.com/token/dev/nk2ViJiDo4xlVtICIX8DZ9mJmXoBZjRTNptx?limit=10',
        assets: {
          onChoose: (assets) => {
            assets.forEach((asset) => {
              this.chooseURL = asset.getUrl();
              if (asset.data.extension == "json")
                this.webDetail()
            })
          }
        }
      });
    },
    data: function () {
      return {
        card_list: [{
            id:1,
            detail:"",
            title: "3月22号的票据",
            uploadTime: "2023/4/10",
            pic_src: "http://info-api.marlon1475.top//img/59dd3810-7711-44f6-9271-4bbe98d8bb08.jpg",
            labels: [{
                'text': "nihao",
                'lv': 0,
              },
              {
                'text': 'zaijian',
                'lv': 1
              }
            ]
          },
          {
            id:2,
            title: "财务票据",
            detail:"",
            uploadTime: "2023/4/10",
            pic_src: "http://info-api.marlon1475.top//img/d6568cef-8c2a-4b9c-a32c-32172aed00d4.jpg",
            labels: [{
                'text': "nihao",
                'lv': 0,
              },
              {
                'text': 'zaijian',
                'lv': 1
              }
            ]
          },
          {
            id:3,
            title: "医疗票据",
            detail:"",
            uploadTime: "2023/4/10",
            pic_src: "http://info-api.marlon1475.top//img/c476584c-851c-4331-9731-65d873df7784.jpg",
            labels: [{
                'text': "nihao",
                'lv': 0,
              },
              {
                'text': 'zaijian',
                'lv': 1
              }
            ]
          }
        ],
        tip: false,
        time: "",
        obj: {
          output: "",
          isEnd: false,
          speed: 300,
          singleBack: false,
          sleep: 0,
          type: "rollback",
          backSpeed: 40,
          sentencePause: true
        },
        newestArticleList: [], // 最新文章
        articleList: [{
            articleId: 1,
            articleCover: "https://img-blog.csdnimg.cn/20210622143309745.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png",
            articleTitle: "Tomcat安装及配置",
            isTop: 0,
            createTime: "2023/4/9",
            categoryId: 1,
            categoryName: "服务器",
            tagList: {
              tagId: 1,
              tagName: "推荐"
            },
            articleContent: `配置
配置Tomcat环境变量前一定要配置好java的环境变量，尤其是JAVA_HOME

以下环境变量均在系统环境变量中设置。

新建 CATALINA_HOME 环境变量，变量：CATALINA_HOME 值：D:\DevelopmentTool\apache-tomcat-9.0.43
修改 Path ，在 Path 后添加(新建)： %CATALINA_HOME%\lib、%CATALINA_HOME%\bin、%CATALINA_HOME%\lib\servlet-api.jar
环境变量中，环境变量名对大小写不敏感，可将CATALINA_HOME小写，但需要保持一致
注意：在环境变量中，如果新建有两个相同仅大小写不同的的变量名，会覆盖设置。如：path和PATH`
          },
          {
            articleId: 1,
            articleCover: "https://img-blog.csdnimg.cn/cab9798293a84540a14d4ab49e582546.jpeg?x-oss-process=image/resize,m_fixed,h_300,image/format,png",
            articleTitle: "Hexo-零基础搭建个人博客(详解)",
            isTop: 0,
            createTime: "2023/4/9",
            categoryId: 1,
            categoryName: "前端",
            tagList: {
              tagId: 1,
              tagName: "推荐"
            },
            articleContent: `Hexo是一个基于 node.js的快速生成静态博客的开源框架,支持 Markdown和大多数 Octopress
插件,一个命令即可部署到 Github页面、 Giteee、 Heroku等,强大的APl,可无限扩展,拥有
数百个主题和插件。简单来说就是一个不用你写代码，就能搭建一套属于你自己的个人博客网站 应用（零基础小白也会）。

你可以在上面编写文章，做笔记，写日记，码代码。（一个属于你的世界！一个可供别人访问的个人世界）

另外Hero还提供了大量主题模版供用户下载。你的博客网站将可以时不时的换一种主题风格，赏心悦目，简直完美！

一、环境准备
1、安装Node.js
直接到官网上下载安装即可https://nodejs.org/en/download/`
          },
          {
            articleId: 1,
            articleCover: "https://img-blog.csdnimg.cn/7168703b4b254eda94e1a22c127d9d2a.png?x-oss-process=image/resize,m_fixed,h_300,image/format,png",
            articleTitle: "GitHub Copilot最详细教程",
            isTop: 0,
            createTime: "2023/4/9",
            categoryId: 1,
            categoryName: "人工智能",
            tagList: {
              tagId: 1,
              tagName: "推荐"
            },
            articleContent: `注：GitHub Copilot将要收费！可以有两个月的试用期，之后订阅价格为每月10美元，每年100美元，如果有需要可以订阅。但是请慎重考虑！毕竟有一点贵！

GitHub Copilot是什么？自己去搜一下，我估计没人会不知道。这里就不说了，这里是提供给想要体验GitHub Copilot的人的一个如何能试用到GitHub Copilots的教程。对于一个新手，可能会遇到很多坑，其实我也遇到了，但是经过研究和网友的帮助下，终于成功用上GitHub Copilot了，所以在这就把一些坑说出来，让新手能少触坑。

1.在GitHub Copilot注册

网址：GitHub Copilot · Your AI pair programmer

点击红圈内的Sign up`
          },
        ],
        current: 1,
        message: "",
        newmessage:"",
        datas: [{
            link: "www.baidu.com",
            title: "文心一言",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "大打出手，沈阳一小伙见义勇为",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "你好，旧时光",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "青椒的八种吃法",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "测试数据",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "白色涂装",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "测试数据",
            id: 12798,
            pubDate: "2023/4/15"
          },
          {
            link: "www.baidu.com",
            title: "测试数据",
            id: 12798,
            pubDate: "2023/4/15"
          },
        ],
        items: ["下午7点半计赛会议", "买牙膏", "考研数学第七讲"],
        newItem: "",
        http: "https://rsshub.app/cnblogs/aggsite/topdiggs",
      };
    },
    methods: {
      // 初始化
      init() {
        // 一言Api进行打字机循环输出效果
        fetch("https://v1.hitokoto.cn?c=i")
          .then(res => {
            return res.json();
          })
          .then(({
            hitokoto
          }) => {
            this.initTyped(hitokoto);
          });
      },
      initTyped(input, fn, hooks) {
        const obj = this.obj;
        // eslint-disable-next-line no-unused-vars
        const typed = new EasyTyper(obj, input, fn, hooks);
      },

      // 初始化
      scrollDown() {
        window.scrollTo({
          behavior: "smooth",
          top: document.documentElement.clientHeight
        });
      },
      runTime() {
        let timeold = new Date().getTime() - new Date("July 30,2022").getTime();
        let msPerDay = 24 * 60 * 60 * 1000;
        let daysold = Math.floor(timeold / msPerDay);
        let str = "";
        let day = new Date();
        str += daysold + "天";
        str += day.getHours() + "时";
        str += day.getMinutes() + "分";
        str += day.getSeconds() + "秒";
        this.time = str;
      },
      addItem() {
        if (this.newItem) {
          this.items.push(this.newItem);
          this.newItem = "";
        }
      },
      deleteItem(index) {
        this.items.splice(index, 1)
      },
      addmessage(){
        this.message=this.newmessage
        this.newmessage=""
      }
    },
    computed: {
      isShowSocial() {
        return function (social) {
          return this.blogInfo.websiteConfig.socialUrlList.indexOf(social) != -1;
        };
      },
      blogInfo() {
        return this.$store.state.blogInfo;
      },
      isRight() {
        return function (index) {
          if (index % 2 == 0) {
            return "article-cover left-radius";
          }
          return "article-cover right-radius";
        };
      },
      cover() {
        var cover =
          "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wwtT?ver=b795";
        // this.$store.state.blogInfo.pageList.forEach(item => {
        //   if (item.pageLabel == "home") {
        //     cover = item.pageCover;
        //   }
        // });
        return "background: url(" + cover + ") center center / cover no-repeat";
      }
    }
  };
</script>

<!-- <style lang="stylus">
  .typed-cursor opacity: 1 animation: blink 0.7s infinite @keyframes blink 0% opacity: 1 50% opacity: 0 100% opacity: 1
</style> -->

<style scoped>
  .viewCount {
    color: #ef1255;
    font-weight: bolder;
    font-size: 15px;
    position: relative;
    top: -7px;
  }

  .datetime {
    color: #1b62e5;
    font-weight: bolder;
    font-size: 15px;
    position: relative;
    top: -5px;
  }

  .uniqueVis {
    color: orangered;
    font-weight: bolder;
    font-size: 15px;
    position: relative;
    top: -5px;
  }

  .home-banner {
    position: absolute;
    top: -58px;
    left: 0;
    right: 0;
    height: 100vh;
    text-align: center;
    color: #fff !important;
    animation: header-effect 1s;
  }

  .article-item1 {
    display: flex;
    align-items: center;
    padding: 6px 0;
  }

  .article-item1:first-child {
    padding-top: 0;
  }

  .article-item1:last-child {
    padding-bottom: 0;
  }

  .article-item1:not(:last-child) {
    border-bottom: 1px dashed #f5f5f5;
  }

  .article-item1 img {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    object-fit: cover;
  }

  .article-item1 img:hover {
    transform: scale(1.1);
  }

  .content1 {
    flex: 1;
    padding-left: 10px;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  .content-cover1 {
    width: 58.8px;
    height: 58.8px;
    overflow: hidden;
  }

  .content-title1 a {
    transition: all 0.2s;
    font-size: 95%;
  }

  .content-title1 a:hover {
    color: #2ba1d1;
  }

  .content-time1 {
    color: #858585;
    font-size: 85%;
    line-height: 2;
  }

  .banner-container {
    margin-top: 43vh;
    line-height: 1.5;
    color: #eee;
  }

  .blog-contact a {
    color: #fff !important;
  }

  .card-info-social {
    line-height: 40px;
    text-align: center;
    font-size: 1.5rem;
    margin: 6px 0 -6px;
  }

  .left-radius {
    border-radius: 8px 0 0 8px !important;
    order: 0;
  }

  .right-radius {
    border-radius: 0 8px 8px 0 !important;
    order: 1;
  }

  .article-wrapper {
    font-size: 14px;
  }

  @media (min-width: 760px) {
    .blog-title {
      font-size: 2.5rem;
    }

    .blog-intro {
      font-size: 1.5rem;
    }

    .blog-contact {
      line-height: 40px;
      text-align: center;
      font-size: 1.5rem;
      margin: 6px 0 -6px;
    }

    .home-container {
      max-width: 90vw;
      margin: calc(100vh - 50px) auto 0 auto;
      margin-top: -50px;
      padding: 30px 3px;
    }

    .article-card {
      height: 380px;
      width: 100%;
      margin-top: 20px;
    }

    .article-cover {
      overflow: hidden;
      height: 100%;
      width: 45%;
    }

    .on-hover {
      transition: all 0.6s;
    }

    .article-card:hover .on-hover {
      transform: scale(1.1);
    }

    .article-wrapper {
      padding: 0 2.5rem;
      width: 55%;
    }

    .article-wrapper a {
      font-size: 1.5rem;
      transition: all 0.3s;
    }
  }

  @media (max-width: 759px) {
    .blog-title {
      font-size: 24px;
    }

    .blog-contact {
      font-size: 1.25rem;
      line-height: 2;
    }

    .home-container {
      width: 100%;
      margin: calc(100vh - 66px) auto 0 auto;
    }

    .article-card {
      margin-top: 1rem;
    }

    .article-cover {
      border-radius: 8px 8px 0 0 !important;
      height: 230px !important;
      width: 100%;
    }

    .article-cover div {
      border-radius: 8px 8px 0 0 !important;
    }

    .article-wrapper {
      padding: 1.25rem 1.25rem 1.875rem;
    }

    .article-wrapper a {
      font-size: 1.25rem;
      transition: all 0.3s;
    }
  }

  .scroll-down {
    cursor: pointer;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  .scroll-down i {
    font-size: 2rem;
  }

  .article-wrapper a:hover {
    color: #8e8cd8;
  }

  .article-info {
    font-size: 95%;
    color: #858585;
    line-height: 2;
    margin: 0.375rem 0;
  }

  .article-info a {
    font-size: 95%;
    color: #858585 !important;
  }

  .article-content {
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .blog-wrapper {
    position: sticky;
    top: 10px;
  }

  .blog-card {
    line-height: 2;
    padding: 1.25rem 1.5rem;
  }

  .author-wrapper {
    text-align: center;
  }

  .blog-info-wrapper {
    display: flex;
    justify-self: center;
    padding: 0.875rem 0;
  }

  .blog-info-data {
    flex: 1;
    text-align: center;
  }

  .blog-info-data a {
    text-decoration: none;
  }

  .collection-btn {
    text-align: center;
    z-index: 1;
    font-size: 14px;
    position: relative;
    display: block;
    background-color: #49b1f5;
    color: #fff !important;
    height: 32px;
    line-height: 32px;
    transition-duration: 1s;
    transition-property: color;
  }

  .collection-btn:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #ff7242;
    content: "";
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    transition-property: transform;
    transform: scaleX(0);
    transform-origin: 0 50%;
  }

  .collection-btn:hover:before {
    transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    transform: scaleX(1);
  }

  .author-avatar {
    transition: all 0.5s;
  }

  .author-avatar:hover {
    transform: rotate(360deg);
  }

  .web-info {
    padding: 0.25rem;
    font-size: 0.875rem;
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

  .big i {
    color: #f00;
    animation: big 0.8s linear infinite;
  }

  @keyframes big {

    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }
  }

  .label-group {
    margin-top: var(--inner-padding);
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    margin: 10px;
  }


  .category {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .box-item {
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 20px;
  }

  #ckbox {
    position: relative;
    padding: 0;
    /* max-width: 532px; */
    width: 97%;
    border: 0px;
    min-height: 55vh;
  }

  .home-item {
    margin-top: 20px
  }

  .gpt {
    background: linear-gradient(to bottom right, #05c19c, #8685ef);
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    position: relative;
  }

  .gpt .input {
    position: absolute;
    width: 90%;
    left: 5%;
    bottom: 0;
  }

  .rss-last {
    background: linear-gradient(to bottom right, rgb(95, 234, 131), rgb(65, 184, 131));
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    font-weight: 700
  }

  .widget {
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    /* grid-template-rows: 36px 1fr minmax(0, auto); */
    background: linear-gradient(to bottom right, #ff9d7f, #ff614d, #ff7f66);
    font-weight: 700
  }

  .note {
    width: 90%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>

<style lang="less" scoped>
  .links {
    padding-inline-start: 0.5em;
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;

    li {
      line-height: 2em;
    }

    a {
      color: #fff;
    }

    .hot-item {
      display: grid;
      grid-template-columns: 1fr 60px;

      a {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      a:last-child {
        text-align: right;
      }
    }

    .hot-item:hover {
      background: rgb(255, 139, 139);
    }
  }

  .btn-1 {
    color: #fff;
  }
</style>
<style scoped>
  .function {
    height: 50vh;
    /* color: rgb(174, 174, 174)!important; */
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
  }

  .function-body {
    font-weight: 400;
    font-size: 15px;
    margin: 8px;
  }

  .function-box {
    margin: auto;
  }

  .function-app {
    text-align: center;
    font-weight: 300;
    font-size: 13px;
    color: black;
    /* background-color: #f5f5f5; */
  }
</style>

<style scoped>
  .home {
    position: relative;
    height: 100vh;
    overflow: hidden;
    top: -60px;
    /*background: #78cdd1;*/
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #78cdd1, #3f90b3 100%);

    background-repeat: no-repeat;
  }

  .home:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('./home.png');
    background-size: cover;
    background-position: center right;
  }

  .water-ripple {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.05) 70%);
    background-size: 3rem 3rem;
    z-index: -1;
    animation: ripple 3s ease-in-out infinite;
  }

  .ripple-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    animation: ripple 2s infinite;
    transform: scale(0);
    opacity: 1;
  }

  .shade1 {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .shade2 {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .shade3 {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .shade4 {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .shade5 {
    background-color: rgba(255, 255, 255, 0.025);
  }

  .xxlarge {
    width: 500px;
    height: 500px;
    top: -250px;
    left: -250px;
  }

  .xlarge {
    width: 400px;
    height: 400px;
    top: -200px;
    left: -200px;
  }

  .large {
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
  }

  .medium {
    width: 200px;
    height: 200px;
    top: -100px;
    left: -100px;
  }

  .small {
    width: 100px;
    height: 100px;
    top: -50px;
    left: -50px;
  }

  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }

    100% {
      transform: scale(2.5);
      opacity: 0;
    }

  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 2;
  }

  .title {
    font-family: 'Montserrat', sans-serif;
    color: #f2f2f2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 60px;
    line-height: 1.2;
    text-shadow: 1px 1px 2px #000000;
  }

  .subtitle {
    font-family: 'Open Sans', sans-serif;
    color: #f2f2f2;
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 20px;
    line-height: 1.5;
    text-shadow: 1px 1px 2px #000000;
  }

  @keyframes typing {
    from {
      width: 0;

    }
  }

  /* 给需要实现打字机效果的元素添加动画 */
</style>