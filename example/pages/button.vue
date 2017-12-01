<template>
  <div class="page-button">
    <h1 class="page-title">Button</h1>
    <div class="btn-box">
      <bl-button>主要按钮</bl-button>
      <br />
      <bl-button disabled size="middle">禁用按钮</bl-button>
      <br />
      <bl-button type="secondary" size="small">次要按钮</bl-button>
      <br />
      <bl-button type="other" size="small" @click="clickFn">点击事件</bl-button>
      <br />
      <bl-button type="primary" inline size="small" ref="pupupButton">主要按钮</bl-button>
      <bl-button inline size="small" disabled>禁用按钮</bl-button>
      <bl-button type="secondary" inline size="small">次要按钮</bl-button>
      <bl-button type="other" inline size="small" @click="clickFn">点击事件</bl-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button',
  methods: {
    clickFn() {
      alert('被点击了')
    }
  }
};
</script>

<style lang="scss">
  @import "src/sass/tobe/function";
  .page-button{
    padding: 0 rem(20);
  }
</style>
