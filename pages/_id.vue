<template>
  <div class="container">
    <basic-info :basicInfo="basicInfo" :name="name" :mainImg="mainImg">
      <BasicInfo class="basicInfo" />
    </basic-info>
    <careers :careersInfo="careersInfo">
      <Careers class="careers" />
    </careers>
    <articles :articlesInfo="articlesInfo">
      <Artciles class="artciles" />
    </articles>
  </div>
</template>

<script>
import BasicInfo from "~/components/container/BasicInfo";
import Articles from "~/components/container/Articles";
import Careers from "~/components/container/Careers";
export default {
  components: {
    BasicInfo,
    Articles,
    Careers,
  },
  data: function () {
    return {
      mainImg:"",
      name: "",
      basicInfo: {},
      articlesInfo: [],
      careersInfo: [],
    };
  },
  methods: {},
  computed: {},
  async mounted() {
   
    let result = this.$route.params.id.split(".id");
 
    let key = result[0];
    let profileInfo = {};



    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name == key) {
        profileInfo = this.data[i];
        break;
      }
    }

    
    for (let i = 0; i < profileInfo.articles.length; i++) {
      this.articlesInfo.push(profileInfo.articles[i]);
    }
    for (let i = 0; i < profileInfo.careers.length; i++) {
      let date = profileInfo.careers[i].date;
      let school = profileInfo.careers[i].text;
      this.careersInfo.push({ date: date, school: school });
    }
 
    this.name = profileInfo.name;
    this.mainImg = profileInfo.thumbnail.url.split('?')[0]
  

    // delete profileInfo.articles;
    // delete profileInfo.careers;
    // delete profileInfo.header_image;
    // delete profileInfo.is_enable;
    // delete profileInfo.thumbnail;
    // delete profileInfo.user_id;
    // console.log(this.basicInfo)
    // console.log(profileInfo)
  
    this.basicInfo = profileInfo   


    // console.log(typeof this.basicInfo)
  },
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    await store.dispatch("fetch");
    return { data: store.getters.data };
  },
};
</script>