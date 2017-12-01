<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <bl-cell
        v-for="item in group.list"
        :title="item.name"
        @click.native="go(item)">
      </bl-cell>
    </div>
  </section>
</template>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },

    created() {
      this.navs = navs;
    },

    methods: {
      go(item) {
        this.$router.push(item.path);
      }
    }
  };
</script>
