<template>
  <v-container >
   <v-card class="main-back-color"><p class="text-h6 main-font-color ml-3">PICKUP LIST</p></v-card>
    <v-row >
      <template>
        <v-col  no-gutters v-for="(element, index) in profiles"  :key="index"  class="text-center" cols="12" sm="3">
          <v-card class="pa-3 ma-3" :elevation="6" style="min-height:400px; ">
            <img src="~/assets/images/hayato-min.jpg"  width="100%" height="100%" />
            <p class="text-h4 mt-3" style="letter-spacing: 3px !important; font-weight: 550; ">{{element.name}}</p>
            <p style="text-align: left !important; min-height:100px; min-height:150px; padding-top:10px;" >
              {{element.passion}}
            </p>
            <v-btn @click="changePage(element.name)" class="mb-2" color="#373841">詳細</v-btn>
          </v-card>

        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: function () {
    return {
      profiles:[]
    };
  },
  methods: {
    changePage(name) {
      this.$router.push(`${name}.id`);
    },
  },
  computed: {},
  async mounted() { 
let array = []
for(let i = 0; i < this.data.length; i++)
{
  array[i] = this.data[i]
  if(array[i].introduction.length > 60)
  {
    let str = ""
    for(let j = 0; j < 60; j++)
    {
      str += array[i].introduction[j]
    }
    array[i].passion = str
    array[i].passion += "..."
  }
  else{
    array[i].passion  = array[i].introduction
  }
}
this.profiles = array
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
