<template>
  <div class="Toolbar">
    <xcard>
      <div class="title">
        title
      </div>
      <div class="divide"></div>
      <div class="content">
        <ul>
          <li>aa</li>
          <li>bb</li>
          <li>cc</li>
        </ul>
      </div>
    </xcard>
  </div>
</template>

<script>
import Xcard from '../Xcard/Xcard'
export default {
  components: { Xcard },
  props: {},
}
</script>

<style scoped>
.divide {
  background-color: aqua;
  height: 1px;
}
</style>
