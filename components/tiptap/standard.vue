<template>
  <editor-content :editor="editor" />
</template>

<script>
// Import the editor
import { Editor, EditorContent } from 'tiptap'
import { Placeholder } from 'tiptap-extensions'

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
      content: '<p>This is just a boring paragraph</p>',
      autoFocus: true,
      extensions: [
        new Placeholder({
          showOnlyCurrent: false,
          emptyNodeText: node => {
            if (node.type.name === 'title') {
              return 'Give me a name'
            }
            return 'Write Something'
          }
        })
      ]
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>
