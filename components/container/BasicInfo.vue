<template>
<div>
 <v-row >
 <v-col cols="12" sm="12" md="6" >
   <img class="profile-photo" src="~/assets/images/hayato-min.jpg" alt />
  </v-col>
   <v-col cols="12" sm="12" md="6">
     
      <v-card class="mt-2 main-back-color">
        <v-card-text>
      <div class="main-font-color">Engineer</div>
      <p  class="main-font-color text-h3" style="text-align:center; letter-spacing: 3px !important;"  >
        {{name}}
      </p>
    </v-card-text>

      </v-card>
      <div style="padding-top:40px;">
        <v-card>
          <div class="card-title"><p class="table-title">誕生日</p></div>
          <div class="card-value"><p class="table-value">{{basicInfo.birthday}}</p></div>
           <div class="card-title"><p class="table-title">住所</p></div>
          <div class="card-value"><p class="table-value">{{basicInfo.address}}</p></div>
           <div class="card-title"><p class="table-title">自己紹介</p></div>
          <div class="card-value"><p class="table-value">{{basicInfo.introduction}}</p></div> 
    </v-card>
      </div >


  </v-col>
   
 </v-row>
 </div>
</template>

<script>
export default {
   props: {
   basicInfo: {
    type: Object,
  },
  name:""
   },
 data: function () {
    return {
          simpleInfo:[]
    };
  },
  async mounted() { 
      console.log(this.basicInfo.birthday)

    

  }
};
</script>










