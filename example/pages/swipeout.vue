<template>
  <div class="page-swipeout">
    <div class="page-title">Swipeout</div>
    <bl-swipeout>
      <bl-swipeout-item>
        <div slot="right-menu">
          <bl-swipeout-button class="swipe-button">按钮1</bl-swipeout-button>
          <bl-swipeout-button class="swipe-button grey">按钮2</bl-swipeout-button>
        </div>
        <div slot="content" class="demo-content">JavaScript is the best language</div>
      </bl-swipeout-item>
      <bl-swipeout-item>
        <div slot="right-menu">
          <bl-swipeout-button class="swipe-button">按钮1</bl-swipeout-button>
          <bl-swipeout-button class="swipe-button grey">按钮2</bl-swipeout-button>
        </div>
        <div slot="content" class="demo-content">JavaScript is the best language</div>
      </bl-swipeout-item>
      <bl-swipeout-item>
        <div slot="right-menu">
          <bl-swipeout-button class="swipe-button">按钮1</bl-swipeout-button>
          <bl-swipeout-button class="swipe-button grey">按钮2</bl-swipeout-button>
        </div>
        <div slot="content" class="demo-content">JavaScript is the best language</div>
      </bl-swipeout-item>
      <bl-swipeout-item>
        <div slot="right-menu">
          <bl-swipeout-button class="swipe-button">按钮1</bl-swipeout-button>
          <bl-swipeout-button class="swipe-button grey">按钮2</bl-swipeout-button>
        </div>
        <div slot="content" class="demo-content">JavaScript is the best language</div>
      </bl-swipeout-item>
    </bl-swipeout>
  </div>
</template>

<style lang="scss">
  @import "src/sass/tobe/function";
  .page-swipeout {
    .demo-content{
      padding: rem(24) rem(20);
      border-bottom: 1px solid #d9d9d9;
    }
    .swipe-button{
      font-size: rem(32);
      background: red;
      padding: 0 rem(20);
      &.grey{
        background-color: #ccc;
      }
    }
  }
</style>
<script>
export default {
  name: 'SwipeoutDemo',

  data() {
    return {
    };
  },

  methods: {
  }
};
</script>

