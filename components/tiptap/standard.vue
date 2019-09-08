<template>
  <div class="editor">
    <editor-floating-menu v-slot="{ commands, isActive, menu }" :editor="editor">
      <div
        class="editor__floating-menu"
        :class="{ 'is-active': menu.isActive }"
        :style="`top: ${menu.top}px`"
      >
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <i class="material-icons">
            format_list_bulleted
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <i class="material-icons">
            format_list_numbered
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <i class="material-icons">
            format_quote
          </i>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          code
        </button>
      </div>
    </editor-floating-menu>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorFloatingMenu } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  Heading,
  ListItem,
  OrderedList,
  Bold,
  Code,
  Italic,
  Link
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorFloatingMenu
  },
  data () {
    return {
      keepInBounds: true,
      editor: null
    }
  },
  mounted () {
    this.editor = new Editor({
      extensions: [
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new Heading({ levels: [1, 2] }),
        new ListItem(),
        new OrderedList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic()
      ],
      content: `
        <h2>
          Floating Menu
        </h2>
        <p>
          This is an example of a medium-like editor. Enter a new line and some buttons will appear.
        </p>
      `
    })
  }
}
</script>

<style lang="scss">
$color-black: #000000;
$color-white: #ffffff;
$color-grey: #dddddd;

.editor {

  position: relative;

  &__floating-menu {
    position: absolute;
    z-index: 1;
    margin-top: -0.25rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;

    &.is-active {
      opacity: 1;
      visibility: visible;
    }
  }

}
</style>
