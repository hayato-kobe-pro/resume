<template>
  <v-app >
   <v-app-bar>
    <img src="~/assets/images/logo4.png" style=" width: 210px; height: auto; margin:0 auto;" >
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
    }
  }
}
</script>
