<template>
  <div class="test">
    <div>
      <date-picker v-model="time3" range></date-picker>
    </div>
    <div>
      <datepicker2 :inline="true"></datepicker2>
    </div>
    <xswitch :before-text="before" :after-text="after"></xswitch>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import Xswitch from '../components/Xswitch/Xswitch'
// import Xswitch from '../components/Xswitch/Xswitch'
export default {
  name: 'Test',
  components: {
    Xswitch,
    // Xswitch,
    DatePicker,
  },
  data() {
    return {
      time3: null,
      before: 'before',
      after: 'after',
    }
  },
}
</script>

<style scoped></style>
