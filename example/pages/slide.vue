<template>
  <div class="page-slide">
    <h1 class="page-title">Slide</h1>
    <bl-slide :autoPlay="true" class="mustbuy-swipe" :slides="allSildes"></bl-slide>
    <p>基本用法</p>
    <bl-slide :autoPlay="true" :pagination="false" class="mustbuy-swipe" :slides="allSildes"></bl-slide>
    <p>隐藏显示器</p>
    <bl-slide :autoPlay="false" class="mustbuy-swipe" :slides="allSildes"></bl-slide>
    <p>取消自动播放</p>
    <bl-slide :autoPlay="false" effect="left" class="mustbuy-swipe" :slides="allSildes"></bl-slide>
    <p>取消自动循环</p>
    <bl-slide :autoPlay="false" class="mustbuy-swipe" :slides="allSildesSimple"></bl-slide>
    <p>单个幻灯片</p>
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
      ],
      allSildesSimple: [
        {
          mediaUrl:'http://img5.imgtn.bdimg.com/it/u=3494017525,2753667644&fm=27&gp=0.jpg',
          deployName:'pic01'
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
    margin: rem(20) 0;
  }
</style>
