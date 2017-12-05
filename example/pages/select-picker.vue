<template>
  <div class="box">
    <h1 class="page-title">Infinite Scroll</h1>
    <div class="body" style="padding: 100px;">
      <bl-button @click="clichHandle">点我</bl-button>
      <bl-select-picker ref="selectRef" :value="defaultselect" :selectSlots="selectSlots" valueKey="nm" @selectConfirm="confirm"></bl-select-picker>
      <div v-if="defaultselect">
        <span v-for="item in defaultselect">{{ item.nm }}-</span>
      </div>
    </div>
  </div>
</template>

<script>
const data1 = [{
  nm: '福建省',
  id: '1274'
}, {
  nm: '泉州市',
  id: '1319'
}, {
  nm: '洛江区',
  id: '1323'
}]
export default {

  name: 'SelectPickerDemo',

  data () {
    return {
      show: false,
      selectSlots: [{
        values: data1,
        defaultIndex: 0
      }],
      defaultselect: [{
        nm: '泉州市',
        id: '1319'
      }]
    };
  },
  methods: {
    clichHandle() {
      this.$refs.selectRef.open()
    },
    confirm(data) {
      this.defaultselect = JSON.parse(JSON.stringify(data))
    }
  }
};
</script>
