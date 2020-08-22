<template>
  <div class="test">
    <datepicker :date="startTime" :option="option" :limit="limit"></datepicker>
  </div>
</template>

<script>
/*eslint-disable*/
import datepicker from 'vue-datepicker/vue-datepicker-es6.vue'
export default {
  name: 'Date',
  components: { datepicker },
  data() {
    return {
      // for Vue 2.0
      startTime: {
        time: '',
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        format: 'YYYY-MM-DD',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F',
        },
        limit: [
          {
            type: 'weekday',
            available: [1, 2, 3, 4, 5],
          },
          {
            type: 'fromto',
            from: '2016-02-01',
            to: '2016-02-20',
          },
        ],
      },
    }
  },
}
</script>

<style scoped></style>
