<template>
  <section class="container">
    <b-form @submit.prevent>
      <b-form-input
        id="input-1"
        v-model="note.title"
        type="text"
        required
        placeholder="Your Title"
      />

      <b-form-textarea
        id="textarea"
        v-model="note.note"
        placeholder="Write your note here ..."
        rows="3"
        max-rows="6"
      />

      <b-button type="submit" variant="primary" @click="clicked">
        Submit
      </b-button>
    </b-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      note: {
        title: '',
        note: '',
        excerpt: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {

    },
    onReset (evt) {

    },
    clicked () {
      console.log(this.note.title)
      console.log(this.note.note)
    }
  }
}
</script>
