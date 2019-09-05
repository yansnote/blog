<template>
  <nav class="navigation d-flex justify-content-center border-bottom">
    <li v-for="link in links" :key="link">
      <a href="link.route">{{ link.name }}</a>
    </li>
    <b-button>Button</b-button>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'Notes',
          route: '#',
          icon: '..'
        },
        {
          name: 'Tags',
          route: '#',
          icon: '..'
        },
        {
          name: 'Settings',
          route: '#',
          icon: '..'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.navigation {
  li {
    list-style: none;
  }
}
</style>
