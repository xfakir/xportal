<template>
  <div class="home">
    <div class="navbar-wrapper">
      <div class="nav-title">xportal</div>
      <div class="nav-menu">
        <ul>
          <li class="float-left m-1">
            <a href="#">aaa</a>
          </li>
          <li class="float-left m-1"><a href="#">bbb</a></li>
          <li class="float-left m-1"><a href="#">ccc</a></li>
        </ul>
      </div>
    </div>
    <div class="main-wrapper">
      <profile class="profile"></profile>
      <div class="main-content">
        <Nuxt></Nuxt>
      </div>
      <toolbar class="toolbar"></toolbar>
      <div class="clear"></div>
    </div>
    <xfooter class="footer-wrapper"></xfooter>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.home {
  min-height: 100vh;
}
.navbar-wrapper {
  height: 90px;
  width: 100%;
  border-bottom: #e0e0e0 1px solid;
}
.main-wrapper {
  margin-top: 10px;
}
.footer-wrapper {
  margin-top: 15px;
  height: 100px;
  width: 100%;
  border-top: #e0e0e0 1px solid;
}
.profile {
  margin-top: 5px;
  margin-left: 100px;
  height: 500px;
  width: 240px;
  float: left;
}

.main-content {
  margin-top: 5px;
  margin-left: 5px;
  width: 900px;
  float: left;
}

.toolbar {
  margin-top: 5px;
  margin-left: 5px;
  height: 500px;
  width: 240px;
  float: left;
}

.clear {
  clear: both;
}
.nav-title {
  float: left;
  height: 100%;
  line-height: 100%;
  text-align: center;
  padding: 20px;
  font-size: 30px;
}
.nav-menu {
  float: right;
  height: 100%;
  padding: 20px;
}
</style>
<script>
import Profile from '../components/Profile/Profile'
import Toolbar from '../components/Toolbar/Toolbar'
import Xfooter from '../components/Xfooter/Xfooter'
export default {
  components: { Xfooter, Toolbar, Profile },
}
</script>
