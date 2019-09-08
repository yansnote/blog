<template>
  <main class="container">
    <p>This is note writing page</p>
    <TipTapTitle />
    <TipTap />
  </main>
</template>

<script>
import TipTapTitle from '~/components/tiptap/title.vue'
import TipTap from '~/components/tiptap/standard.vue'
export default {
  layout: 'admin',
  components: {
    TipTapTitle,
    TipTap
  }
}
</script>
