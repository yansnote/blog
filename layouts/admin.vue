<template>
  <div id="yansnote">
    <sidebar />
    <nuxt />
  </div>
</template>

<script>

import Sidebar from '~/components/admin/sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
html {
  height: 100%
}

body {
    height: 100%;
}

</style>
