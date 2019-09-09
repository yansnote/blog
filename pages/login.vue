<template>
  <b-card title="Login">
    <b-form @submit.prevent>
      <b-form-input
        id="email"
        v-model="credential.email"
        type="text"
        required
        placeholder="Your Email"
      />

      <b-input
        id="password"
        v-model="credential.password"
        type="password"
        required
        placeholder="Your Password"
      />

      <b-button type="submit" variant="primary" @click="clicked">
        Submit
      </b-button>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      credential: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    clicked () {
      console.log('Email : ', this.credential.email)
      console.log('Password : ', this.credential.password)

      this.$router.push('/admin')
    }
  }
}
</script>

<style land="scss" scoped>
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  .card {
    width: 27%;
  }
</style>
