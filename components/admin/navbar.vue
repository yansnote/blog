<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand href="#">
          Yan's Notes
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-for="link in links" v-bind:key="link" href="link.route">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                class="mr-2"
                v-html="link.icon"
              />
              {{ link.name }}
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
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
          icon: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34l-3.75-3.75-2.53 2.54 3.75 3.75 2.53-2.54z"/>'
        },
        {
          name: 'Tags',
          route: '#',
          icon: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M22.83 12.99L11.83 2H2v9.83l10.99 10.99 9.84-9.83zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>'
        },
        {
          name: 'Settings',
          route: '#',
          icon: '<path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>'
        }
      ]
    }
  }
}
</script>
