<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/admin/navbar.vue'

export default {
  name: 'AdminLayout',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import "~/assets/admin/main.scss";

  body {
    color: blue;
  }

</style>
