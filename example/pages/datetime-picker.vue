<template>
  <div class="page-button">
    <div class="page-title">datetime-picker</div>
    <div class="box" style="padding: 100px;">
      <bl-button type="other" size="middle" @click="$refs.picker.open()">bl-datetime-picker</bl-button>
      <bl-datetime-picker
        ref="picker"
        type="date"
        year-format="{value}年"
        month-format="{value}月"
        date-format="{value}日"
        :value="pickerValue"
        @confirm="confirms">
      </bl-datetime-picker>
      <div v-if="actTime">
        <span v-for="item in actTime">{{ item }}</span>
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
      pickerValue: new Date(),
      actTime: null
    };
  },
  methods: {
    confirms(val1, val2) {
      // console.log(val1, val2)
      this.pickerValue = val1
      this.actTime = val2
    }
  }
};
</script>
