<template>
  <div class="page-button">
    <h1 class="page-title">Modal</h1>
    <div class="btn-box">
      <bl-button @click="modal">点我</bl-button>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'modalDemo',
  methods: {
    modal() {
      this.$modal({
        title: '提示',
        content: '内容',
        buttons: [{
          text: '按钮1',
          onClick: () => {
            this.$toast('按钮1点击了')
          }
        }, {
          text: '按钮2',
          onClick: () => {
            this.$toast('按钮2点击了')
          }
        }]
      })
    }
  }
};
</script>
