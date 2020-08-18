<template>
  <div
    v-infinite-scroll="loadMore"
    class="container"
    infinite-scroll-disabled="false"
    infinite-scroll-distance="10"
  >
    <article-card
      v-for="(article, index) in list"
      :key="index"
      :article="article"
    ></article-card>
    <div class="clear"></div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard/ArticleCard.vue'

export default {
  components: { ArticleCard },
  async asyncData({ app }) {
    const res = await app.$axios.get('/article/list')
    return {
      list: res.data,
    }
  },
  methods: {
    getList() {
      console.log(process.env.BASE_URL)
      this.$axios.get('/test/noparams').then((res) => {
        console.log(res.data)
      })
    },
    loadMore() {
      alert('触发loadMore，请求下一页的信息')
    },
  },
}
</script>

<style>
.container {
  @apply flex flex-col items-center mx-auto;
}
.clear {
  clear: both;
}
</style>
