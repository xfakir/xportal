<template>
  <div
    v-infinite-scroll="loadMore"
    class="container"
    infinite-scroll-disabled="switchForMore"
    infinite-scroll-distance="10"
  >
    <button @click="test()">aaa</button>
    <article-card
      v-for="(article, index) in $store.state.articleList"
      :key="index"
      :article="article"
    ></article-card>
    <div class="clear"></div>
  </div>
</template>

<script>
import ArticleCard from '~/components/ArticleCard/ArticleCard.vue'

export default {
  watchQuery: ['lastId'],
  components: { ArticleCard },
  async fetch({ $axios, store }) {
    const { data } = await $axios.get('/article/limit', {
      params: {
        pageNum: 1,
        pageSize: 5,
        lastId: '',
      },
    })
    store.commit('setArticleList', data.list)
    store.commit('setTotal', data.total)
  },
  /* async asyncData({ app }) {
    const res = await app.$axios.get('/article/limit', {
      params: {
        pageSize: 3,
        lastId: '5f335ad24e459e43d4d1b13b',
      },
    })
    return {
      list: res.data.list,
    }
  }, */
  data() {
    return {
      switchForMore: false,
    }
  },
  methods: {
    getList() {
      console.log(process.env.BASE_URL)
      this.$axios.get('/test/noparams').then((res) => {
        console.log(res.data)
      })
    },
    async loadMore() {
      if (this.$store.state.total !== this.$store.state.articleList.length) {
        const { data } = await this.$axios.get('/article/limit', {
          params: {
            pageNum: 2,
            pageSize: 3,
            lastId: this.$store.getters.getLastId,
          },
        })
        this.$store.commit('addArticleList', data.list)
      } else {
        this.switchForMore = true
      }
    },
    test() {
      console.log(this.$store.state.total)
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
