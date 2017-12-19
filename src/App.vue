<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import HeaderTape from './components/HeaderTape'
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Main,
    HeaderTape
  }
}
</script>

<style lang='scss'>
  @import 'assets/styles/normalize.scss';

  .container {
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
  }

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
