<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <bl-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</bl-button>
      <br />
      <bl-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</bl-button>
    </div>
    <bl-actionsheet :actions="actions" v-model="sheetVisible"></bl-actionsheet>
    <bl-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></bl-actionsheet>
  </div>
</template>

<style>
  @component-namespace page {
    @component actionsheet {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);

        button:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>

<script>
  export default {
    name: "actionsheetDemo",
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      }
    },

    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>
