<template>
  <div class="page-button">
    <div class="page-title">address-picekr</div>
    <div class="box" style="padding: 100px;">
      <bl-button @click="clichHandle">点我</bl-button>
      <bl-address-picker ref="addressRef" :value="defaultAddress" @addressConfirm="confirm"></bl-address-picker>
      <div v-if="defaultAddress">
        <span v-for="item in defaultAddress">{{ item.nm }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'addressPickerDemo',

  data () {
    return {
      show: false,
      defaultAddress: [{
        nm: '福建省',
        id: '1274'
      }, {
        nm: '泉州市',
        id: '1319'
      }, {
        nm: '洛江区',
        id: '1323'
      }]
    };
  },
  methods: {
    clichHandle() {
      this.$refs.addressRef.open()
    },
    confirm(address) {
      this.defaultAddress = JSON.parse(JSON.stringify(address))
    }
  }
};
</script>
