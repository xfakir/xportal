<template>
  <div class="Xfooter">
    <div class="copyright">
      <p class="footer-font">Copyright © 2020 xfakir.All rights reserved.</p>
    </div>
    <div class="record-icp">
      <p class="footer-font">鄂ICP备19018327号-1</p>
    </div>
    <div class="record-police">
      <a
        class="record-url"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42060602000325"
        ><img src="https://kodo.xfakir.cn/beian.png" />
        <p class="footer-font">
          鄂公网安备 42060602000325号
        </p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {},
}
</script>
<style scoped>
.Xfooter {
  padding-top: 15px;
  text-align: center;
  padding-bottom: 5px;
}
.footer-font {
  height: 20px;
  line-height: 20px;
  margin: 0px 0px 0px 5px;
  color: #939393;
}
.record-url {
  display: inline-block;
}
.record-url p {
  float: left;
}
.record-url img {
  float: left;
}
</style>
