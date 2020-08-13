<template>
  <!--eslint-disable-next-line-->
  <div>
    <div>
      <div class="markdown-body" v-html="article"></div>
      <div>
        <img src="http://kodo.xfakir.cn/test.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import 'github-markdown-css/github-markdown.css'
export default {
  name: 'Id',
  components: {},
  async asyncData({ app, params }) {
    const res = await app.$axios.get('/article/' + params.id)
    marked.setOptions({
      renderer: new marked.Renderer(),
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
