<template>
  <div class="Xsearch">
    <input class="xinput" type="text" />
    <a class="xbtn" href="#">
      <i>
        <img
          src="https://kodo.xfakir.cn/search.png"
          alt=""
          height="30px"
          width="30px"
        />
      </i>
    </a>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      inputToggle: false,
      buttonToggle: false,
    }
  },
  methods: {
    click() {
      this.inputToggle = !this.inputToggle
      this.buttonToggle = !this.buttonToggle
    },
  },
}
</script>

<style scoped>
.Xsearch {
  float: left;
  background-color: #edf2f7;
  height: 40px;
  border-radius: 40px;
  margin-right: 10px;
}
.xinput {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: black;
  font-size: 16px;
  transition: 0.4s;
  width: 240px;
  margin-left: 15px;
  margin-top: 8px;
}
.xbtn {
  display: flex;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
</style>
