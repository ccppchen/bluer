<template>
  <div class="page-switch">
    <div class="page-title">Switch</div>
    <div class="page-part page-switch-padding">
      <bl-switch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </bl-switch>
    </div>

    <div class="page-part page-switch-padding">
      <bl-switch v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </bl-switch>
    </div>
    <br />
    <bl-cell :title="'选项 ' + value2" :showArrowRight="false">
      <div class="flex-c-m" style="float: right">
        <bl-switch v-model="value2" @change="handleChange"></bl-switch>
      </div>
    </bl-cell>
    <bl-cell :title="'选项 ' + value3" :showArrowRight="false">
      <div class="flex-c-m" style="float: right">
        <bl-switch v-model="value3" @change="handleChange"></bl-switch>
      </div>
    </bl-cell>
  </div>
</template>

<script>
export default {
  name: 'switchDemo',

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true
    };
  },

  methods: {
    handleChange(event) {
      console.log(event);
    }
  }
};
</script>

