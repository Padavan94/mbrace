<template>
  <div class="main">
    <header-tape></header-tape>
  </div>
</template>

<script>

import HeaderTape from './HeaderTape'

export default {
  components: {HeaderTape},
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
