<template>
  <div class="page-infinite">
    <h1 class="page-title">Infinite Scroll</h1>
    <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
    <div class="page-infinite-wrapper" ref="wrapper">
      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
        <bl-cell v-for="(item, index) in list" :title="'item' + (index + 1)"></bl-cell>
      </ul>
      <div v-show="showLoading" class="infinite-layer">
        <div class="infinite-preloader"></div>
        <div>加载中...</div>
      </div>
    </div>
  </div>
</template>

<style>
  .page-infinite-desc, .page-infinite-loading{
    text-align: center;
  }
</style>

<script>
  export default {
    data() {
      return {
        list: [],
        loading: false,
        showLoading: true
      };
    },

    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 15; i++) {
            this.list.push(last + i);
          }
          // 对数据进行判断
          if (this.list && this.list.length >= 10) {
            // 继续加载
            this.loading = false;
            this.showLoading = true;
          } else {
            this.showLoading = false;
          }
        }, 1500);
      }
    }
  };
</script>
