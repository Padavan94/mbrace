<template>
  <div class="main">
    <header-tape></header-tape>
    <losung></losung>
    <catalogue></catalogue>
    <advantages></advantages>
    <reviews></reviews>
     <cart></cart>
    <toast position="se"></toast>
  </div>
</template>

<script>

import HeaderTape from './HeaderTape'
import Losung from './Losung'
import Cart from './Cart'
import Catalogue from './Catalogue'
import Advantages from './Advantages'
import Reviews from './Reviews'
import { Carousel, Slide } from 'vue-carousel'
import { Toast } from 'vuex-toast'

export default {
  components: {HeaderTape, Losung, Cart, Catalogue, Carousel, Slide, Advantages, Reviews, Toast},
  name: 'MainComp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
