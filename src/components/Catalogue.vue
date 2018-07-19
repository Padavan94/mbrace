<template>
  <section class="c-catalog">
    <div class="container c-catalog__container">
      <h2 class="c-catalog__title">Каталог товаров</h2>
      <div class="c-catalog__items">
        <Product
          v-for="product in products"
          :key="product._id"
          :product="product"
        ></Product>
      </div>
    </div>
    <product-details v-bind:product="detailedProduct"></product-details>
  </section>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    import Product from './Product'
    import ProductDetails from './ProductDetails'

    export default {
      name: 'Catalogue',
      components: { Product, ProductDetails },
      computed: {
        ...mapState({
          products: state => state.products,
          detailedProduct: state => state.product.detailedProduct
        })
      },
      created: function () {
        this.getProducts()
      },
      methods: {
        ...mapMutations([
          'openCart',
          'closeCart'
        ]),

        ...mapActions([
          'deleteProduct',
          'addProduct',
          'register'
        ]),

        getProducts: function () {
          this.$store.dispatch('getProducts')
        }
      }
    }
</script>

<style scoped lang="scss">
  .c-catalog {
    padding: 30px 0;
    background-color: #f9f9f9;

    &__title {
      text-align: center;
      margin-bottom: 80px;
      font-size: 40px;
      font-family: 'Open Sans Condensed', sans-serif;
    }

    &__items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
     }
  }
</style>
