<template>
  <div class="page-slide">
    <h1 class="page-title">Slide</h1>
    <bl-slide :autoPlay="true" class="mustbuy-swipe" :slides="allSildes"></bl-slide>
  </div>
</template>

<script>

export default {

  name: 'slide',

  data () {
    return {
      allSildes:[
        {
          mediaUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3242709860,2221903223&fm=27&gp=0.jpg',
          deployName:'pic01'
        },
        {
          mediaUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3431156110,1779604982&fm=27&gp=0.jpg',
          deployName:'pic02'
        },
        {
          mediaUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2095807035,495047869&fm=27&gp=0.jpg',
          deployName:'pic03'
        }
      ]
    }
  }
}
</script>

<style>
</style>