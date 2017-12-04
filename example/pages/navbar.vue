<template>
  <div class="page-button">
    <h1 class="page-title">Navbar</h1>
    <div class="btn-box navbar">
      <bl-navbar v-model="tab" class="flex-c-m">
        <bl-tab-item class="flex-item" id="0">
          <span class="tac">tab1</span>
        </bl-tab-item>
        <bl-tab-item class="flex-item" id="1">
          <span class="tac">tab2</span>
        </bl-tab-item>
        <bl-tab-item class="flex-item" id="2">
          <span class="tac">tab3</span>
        </bl-tab-item>
      </bl-navbar>
      <bl-tab-container v-model="tab">
        <bl-tab-container-item id="0">
          <bl-cell title="标题文字带右箭头0"></bl-cell>
          <bl-cell title="标题文字带右箭头0"></bl-cell>
          <bl-cell title="标题文字带右箭头0"></bl-cell>
        </bl-tab-container-item>
        <bl-tab-container-item id="1">
          <bl-cell title="标题文字带右箭头1"></bl-cell>
          <bl-cell title="标题文字带右箭头1"></bl-cell>
          <bl-cell title="标题文字带右箭头1"></bl-cell>
        </bl-tab-container-item>
        <bl-tab-container-item id="2">
          <bl-cell title="标题文字带右箭头2"></bl-cell>
          <bl-cell title="标题文字带右箭头2"></bl-cell>
          <bl-cell title="标题文字带右箭头2"></bl-cell>
        </bl-tab-container-item>
      </bl-tab-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbarDemo',
    data() {
      return {
        tab: '0'
      }
    },
    methods: {
    }
  };
</script>

<style lang="scss">
  @import "src/sass/tobe/function";
  .navbar{
    .bl-tab-container{
      margin-top: rem(20);
    }
    .flex-c-m .flex-item.is-selected{
      border-bottom: rem(6) solid #26a2ff;
      color: #26a2ff;
    }
    .flex-c-m .flex-item{
      font-size: rem(32);
      border-bottom: rem(6) solid transparent;
    }
    .tac{
      text-align: center;
      display: block;
      line-height: rem(88);
    }
  }
</style>
