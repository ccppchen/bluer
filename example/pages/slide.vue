<template>
  <div class="page-slide">
    <h1 class="page-title">Slide</h1>
    <bl-slide :autoPlay="true" class="mustbuy-swipe" :slides="allSildes"></bl-slide>
    <p>基本用法</p>
  </div>
</template>

<script>

export default {

  name: 'slide',

  data () {
    return {
      allSildes: [
        {
          mediaUrl:'http://img1.imgtn.bdimg.com/it/u=563809593,583721596&fm=27&gp=0.jpg',
          deployName:'pic01'
        },
        {
          mediaUrl:'http://img5.imgtn.bdimg.com/it/u=3494017525,2753667644&fm=27&gp=0.jpg',
          deployName:'pic02'
        },
        {
          mediaUrl:'http://img5.imgtn.bdimg.com/it/u=3494017525,2753667644&fm=27&gp=0.jpg',
          deployName:'pic03'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "src/sass/tobe/function";
  .mustbuy-swipe {
    width: 100%;
    height: rem(400);
  }
  p {
    text-align: center;
    font-size: rem(26);
    font-weight: 600;
  }
</style>