<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="mintui mintui-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import "src/sass/tobe/function";
  .page-demo{
    background-color: #fff;
  }
  .page-title{
    font-size: rem(48);
    text-align: center;
  }
  body{
    background-color: #fff;
  }
  .bl-button{
    margin-bottom: rem(20) !important
  }
  .page-button{
    padding: 0 rem(20);
  }
</style>

<script type="text/babel">
  export default {
    computed: {
      visible() {
        return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
      }
    }
  };
</script>
