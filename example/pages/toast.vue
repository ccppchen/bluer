<template>
  <div class="page-button">
    <h1 class="page-title">Toast</h1>
    <div class="btn-box">
      <bl-button @click="toast">点我</bl-button>
      <br />
      <bl-button @click="toastBottom">toast底部</bl-button>
      <br />
      <bl-button @click="toastLoading">toast loading</bl-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toastDemo',
  data() {
    return {
      loading: null
    }
  },
  methods: {
    toast() {
      this.$toast('toast点击了')
    },
    toastBottom() {
      this.$toast({
        message: 'toast底部',
        position: 'bottom'
      })
    },
    toastLoading() {
      this.loading = this.$toast({
        iconClass: 'preloader white',
        duration: 'loading',
        className: 'loading-bg'
      })
      setTimeout(() => {
        this.loading.close()
      }, 2000)
    }
  }
};
</script>
