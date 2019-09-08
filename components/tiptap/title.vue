<template>
  <div class="editor">
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import { Placeholder } from 'tiptap-extensions'
import Title from './components/Title'

export default {
  components: {
    EditorContent
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      autoFocus: true,
      extensions: [
        new Title(),
        new Placeholder({
          showOnlyCurrent: false,
          emptyNodeText: (node) => { return 'This Is Title' }
        })
      ],
      content: 'This is Title'
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
