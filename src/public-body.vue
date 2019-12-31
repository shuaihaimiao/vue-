<template>
  <div class="subject">
      <router-view></router-view>
     
  </div>
</template>
<script>

  export default {
    components: {
      
    }

  }
</script>

<style lang="less">
  .subject {
    width: 1200px;
    height: 588px;
    margin: 0 auto;
    padding: 30px 0;
   margin-top:30px;

  }

  .subject:before,
  .subjectt:after {
    content: "";
    display: block;
    clear: both;
  }


</style>