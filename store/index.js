export const state = () => ({
  lastId: '',
  total: 0,
  articleList: [],
})
export const getters = {
  getLastId: (state) => {
    return state.articleList[state.articleList.length - 1].articleId
  },
}
export const mutations = {
  setLastId(state, lastId) {
    state.lastId = lastId
  },
  setArticleList(state, articleList) {
    state.articleList = articleList
  },
  addArticleList(state, articleList) {
    for (const article of articleList) {
      state.articleList.push(article)
    }
  },
  setTotal(state, total) {
    state.total = total
  },
}
