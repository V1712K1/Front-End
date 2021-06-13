<template>
 <div></div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';

  Vue.use(VueClipboard)
  export default {
    name: 'icons',
    components: {
      BaseHeader
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>
