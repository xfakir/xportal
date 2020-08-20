<template>
  <div class="article-card">
    <xcard>
      <div class="article-box">
        <div class="article-title">
          {{ article.title }}
        </div>
        <div class="aritcle-content">
          <div class="content-wrapper">{{ article.content }} ...</div>
        </div>
      </div>
      <div class="img-box">{{ article.articleId }}</div>
      <div class="article-id" style="display: none;">
        {{ article.articleId }}
      </div>
    </xcard>
  </div>
</template>

<script>
import Xcard from '~/components/Xcard/Xcard'
export default {
  components: { Xcard },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.article-card {
  @apply mb-4;
  width: 850px;
  height: 250px;
  background-color: #f7f8fb;
  overflow: hidden;
}
.article-box {
  @apply float-left;
  width: 60%;
  height: 500px;
  transition: transform 0.8s;
}
.article-box:hover {
  transform: translateY(-250px);
}
.article-title {
  @apply align-middle text-center;
  line-height: 250px;
  height: 250px;
  background-color: #f7f8fb;
}
.aritcle-content {
  height: 250px;
  background-color: #f7f8fb;
  padding-top: 55px;
  padding-left: 50px;
}
.content-wrapper {
  text-indent: 15px;
  word-wrap: break-word;
  word-break: normal;
  height: 150px;
  width: 400px;
}
.img-box {
  @apply float-left;
  width: 40%;
  height: 250px;
  background-color: orange;
}
</style>
