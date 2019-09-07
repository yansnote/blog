<template>
  <main class="container">
    <p>This is note writing page</p>
    <TipTap />
  </main>
</template>

<script>
import TipTap from '~/components/tiptap/standard.vue'
export default {
  layout: 'admin',
  components: {
    TipTap
  }
}
</script>
