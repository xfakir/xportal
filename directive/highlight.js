// highlight.js
import Hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
const Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}
export default Highlight
