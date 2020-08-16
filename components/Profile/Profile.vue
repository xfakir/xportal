<template>
  <div class="Profile">
    <xcard>
      <div class="avatar">
        <img src="https://kodo.xfakir.cn/blog/img/avatar.jpg" alt="avatar" />
      </div>
      <div class="intro">
        <div class="intro-name">
          <p class="font-serif">xfakir</p>
        </div>
        <div class="intro-brief">
          <p class="font-serif">Nanjing University</p>
        </div>
        <div class="contact">
          <div style="display: inline-block;">
            <a href="#">
              <svg class="icon" aria-hidden="true" width="22" height="22">
                <use xlink:href="#icon-mail"></use>
              </svg>
            </a>
          </div>
          <div style="display: inline-block;">
            <a href="#">
              <svg class="icon" aria-hidden="true" width="22" height="22">
                <use xlink:href="#icongithub"></use>
              </svg>
            </a>
          </div>
          <div style="display: inline-block;">
            <a href="#">
              <svg class="icon" aria-hidden="true" width="22" height="22">
                <use xlink:href="#icontwitter"></use>
              </svg>
            </a>
          </div>
          <div style="display: inline-block;">
            <a href="#">
              <svg class="icon" aria-hidden="true" width="22" height="22">
                <use xlink:href="#iconzhihu"></use>
              </svg>
            </a>
          </div>
        </div>
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
.avatar {
  width: 240px;
  height: 240px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  background-color: #7f828b;
}
.avatar img {
  @apply rounded-full;
  display: inline-block;
  width: 200px;
  height: 200px;
}
.intro {
  text-align: center;
}
.intro-name {
  margin-bottom: 3px;
}
.intro-brief {
  margin-bottom: 8px;
}
</style>
