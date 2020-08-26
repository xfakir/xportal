<template>
  <div class="Xswitch">
    <div class="beforebox" :class="{ activeBefore: checked === false }">
      <span class="before">{{ beforeText }}</span>
    </div>
    <label class="box">
      <input
        v-model="checked"
        type="checkbox"
        class="switch"
        @change="handleChange()"
      />
      <span class="round"></span>
    </label>
    <div class="afterbox" :class="{ activeAfter: checked === true }">
      <span class="after">{{ afterText }}</span>
    </div>
    <div>
      {{ checked }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    beforeText: {
      type: String,
      default: '',
    },
    afterText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      checked: true,
    }
  },
  methods: {
    handleChange() {},
  },
}
</script>
<style scoped>
.box input {
  display: none;
}

.round {
  width: 60px;
  height: 30px;
  background-color: #ff4500;
  display: block;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 20px;
  float: left;
}
.round:before {
  content: '';
  width: 26px;
  height: 26px;
  float: left;
  margin-top: 2px;
  margin-left: 2px;
  background: white;
  border-radius: 20px;
}

.box input:checked + .round {
  background: #03a9f4;
}
.box input:checked + .round:before {
  margin-left: 30px;
}

.beforebox,
.afterbox {
  width: 30px;
  height: 30px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
}
.beforebox {
  margin-right: 5px;
}
.afterbox {
  margin-left: 5px;
}
.activeBefore {
  color: #ff4500;
}
.activeAfter {
  color: #03a9f4;
}
</style>
