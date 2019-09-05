<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/admin/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import "~/assets/admin/main.scss";

</style>
