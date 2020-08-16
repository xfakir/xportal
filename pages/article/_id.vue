<template>
  <div>
    <div>
      <!--eslint-disable-next-line-->
      <div class="markdown-body" v-html="article"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
import highlight from 'highlight.js'
export default {
  name: 'Id',
  components: {},
  async asyncData({ app, params }) {
    const res = await app.$axios.get('/article/id/' + params.id)
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight(code) {
        return highlight.highlightAuto(code).value
      },
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
    })
    return {
      article: marked(res.data.content),
    }
    /* return {
      article: res.data.content,
    } */
  },
}
</script>

<style scoped></style>
