<template>
 <div class="conta"></div>
</template>
<script>
export default {
  data: function () {
    return {
     
    };
  },
  methods: {
    
  },
  computed: {},
  async mounted() {
   
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