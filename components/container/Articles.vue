<template>
  <div class="mt-7">
    <v-card class="main-back-color "><p class="main-font-color pa-2">記事</p></v-card>

    <v-container>
      <v-row v-for="(article, index) in articlesInfo" :key="index">
        <v-card class="mt-4" style="width:100%;">
          <v-col cols="12">
            <div class="overline mb-4" v-if="article.category =='j'">受賞歴</div>
             <div class="overline mb-4" v-else-if="article.category =='p'">ポートフォリオ</div>
              <div class="overline mb-4" v-else>資格</div>
            
            <v-list-item-title class="headline mb-1" style=" color: #373841;
  text-decoration : underline; font-weight: bold;">{{article.title}}</v-list-item-title>
            <div class="explanation-product text-h6 pt-10">{{article.text}}</div>
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    articlesInfo: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>



