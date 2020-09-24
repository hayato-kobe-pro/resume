<template>
<div class="mt-7">

  <v-card class="main-back-color "><p class="main-font-color pa-2">学歴</p></v-card>
  <v-card class="mb-10">
    <div style="margin-top:15px;">
    <v-simple-table height=auto  style="border: solid 0.5px #373841;">
    <template v-slot:default >
      <thead>
        <tr>
          <th class="text-left text-h5" style="color:#424242">年月</th>
    
          <th class="text-left text-h5" style="color:#424242">学校名</th>
         
        </tr>
      </thead>  
      <tbody>
        <tr v-for="(career, index) in careersInfo" :key="index">
          <td class="text-h6">{{career.date}}</td>
          <td class="text-h6">{{career.school}}</td>
         
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </div>
  </v-card>
</div>
</template>

<script>
  export default {
     props: {
   careersInfo: {
    type: Array,
  }
   },
    data () {
      return {
        desert:[]
      }
    },
  }
</script>