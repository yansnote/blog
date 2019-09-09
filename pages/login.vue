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

    <div v-if="isError" class="alert alert-danger">
      <p class="mb-0">{{ errMsg }}</p>
    </div>
  </b-card>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  data () {
    return {
      credential: {
        email: '',
        password: ''
      },
      isError: false,
      errMsg: ''
    }
  },
  methods: {
    clicked () {
      this.$store.dispatch('users/login', this.account).catch((error) => {
        this.isError = true
        this.errMsg = error.code

        setTimeout(() => {
          this.isError = false
        }, 5000)
      })

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
