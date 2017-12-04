<template>
  <div class="page-button">
    <h1 class="page-title">Bar</h1>
    <div class="page-content">
      <bl-bar>
        <div class="button" slot="left-button" v-back><div class="iconfont arrow-back"></div></div>
        <div slot="title">固定定位</div>
      </bl-bar>
      <bl-bar relative>
        <div class="button" slot="left-button" v-back><div class="iconfont arrow-back"></div></div>
        <div slot="title">相对定位</div>
      </bl-bar>
      <bl-bar relative>
        <div class="button" slot="left-button" v-back><div class="iconfont arrow-back"></div></div>
        <div slot="title">右侧多个图标</div>
        <div slot="right-button" class="button">
          <div class="iconfont shop-car"></div>
        </div>
        <div slot="right-button" class="button">
          <div class="iconfont phome"></div>
        </div>
      </bl-bar>
      <bl-bar relative nav>
        <div class="button" slot="left-button" v-back><div class="iconfont arrow-back"></div></div>
        <div slot="title">相对定位 显示右侧点点点</div>
      </bl-bar>
      <bl-bar relative nav barStyle="bar-dark">
        <div class="button" slot="left-button" v-back><div class="iconfont arrow-back"></div></div>
        <div slot="title">黑色背景</div>
      </bl-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'barDemo',
  methods: {
  }
};
</script>
