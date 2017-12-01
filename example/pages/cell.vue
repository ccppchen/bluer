<template>
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <bl-cell title="标题文字带右箭头"></bl-cell>
    <bl-cell title="标题文字不带右箭头" :showArrowRight="false"></bl-cell>

    <bl-cell title="标题文字" :showArrowRight="false">
      <input type="text" name="" placeholder="这里是输入框">
    </bl-cell>

    <bl-cell>
      <input type="text" name="" value="这里是内容" disabled>
    </bl-cell>

    <bl-cell title="原生跳转到 https://www.baidu.com" is-link to="https://www.baidu.com"></bl-cell>
    <bl-cell title="路由跳转到 /#/actionsheet" is-link :to="{ path: '/actionsheet' }"></bl-cell>
  </div>
</template>
