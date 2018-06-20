<template>
  <div id="app">
    <MainComp></MainComp>
    <button @click="addProduct">добавить продукт</button>
    {{ getTotalProducts }} + Добавленно в корзину {{getAddedToCart}}
    <button @click="getProducts">Получить продукты</button>

    <div class="container-prod">
    <section>
      <h2>Каталог товаров</h2>
      <table>
        <tbody>
          <tr v-for="product in products">
            <td>{{product._id}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td><button @click="addToCart(product)">Добавить в корзину</button></td>
            <td><button @click="deleteProduct(product._id)">Удалить</button></td>
          </tr>
        </tbody>
      </table>
    </section>
    <section>
      <h2>Добавлены в корзину</h2>
      <button @click="openCart">Открыть</button>
      <button @click="closeCart">Закрыть</button>
    </section>
    </div>
  </div>
</template>

<script>
import MainComp from './components/MainComp'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    MainComp
  },
  computed: {
    ...mapState({
      products: state => state.products,
      addedToCart: state => state.cart.addedToCart,
      isOpened: state => state.cart.isOpened
    }),
    ...mapGetters([
      'getTotalProducts',
      'getAddedToCart',
      'getTotalSum'
    ])
  },
  created: function () {
    this.getProducts()
  },
  methods: {
    ...mapMutations([
      'addToCart',
      'deleteFromCart',
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

<style lang='scss'>
  @import 'assets/styles/normalize';
  @import 'assets/styles/variables';
  @import '../node_modules/vuex-toast/dist/vuex-toast.css';

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto";
    padding-top: 76px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s cubic-bezier(.84,-0.35,1,.64);
    opacity: 1;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .container-prod {
    display: flex;

    section {
      padding: 0 20px;
    }
  }

  .button,
  button,
  input,
  svg,
  a {
    transition: all .2s ease;
    appearance: none;
    border: none;
    box-shadow: none;

    &:focus,
    &:active {
      outline: none;
    }
  }

  .button {
    padding: 14px 30px;
    border-radius: 4px;
    color: #fff;
    background-color: #000;
    border: 1px solid #000;
    cursor: pointer;

    &._bordered {
      background-color: #fff;
      color: #000;

      &:hover {
        border-color: $brand;
        background-color: #fff;
      }
    }

    &._success {
      background-color: $brand3;
      border-color: $brand3;
      color: #fff;

      &:hover {
        background-color: $brand3 - 30;
        border-color: $brand3;
        color: #fff;
      }
    }

    &._wider {
      min-width: 200px;
    }

    &:hover {
      color: #000;
      background-color: $brand;
      border-color: $brand;
    }
  }

  table {
    td {
      padding: 4px 10px;
      border: 1px solid #000;
    }
  }

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

  .popup {
    position: relative;
    padding: 55px 35px;
    background-color: #fff;
    width: 950px;
    overflow: hidden;

    &-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99;
    }

    &__close {
      position: absolute;
      right: 25px;
      top: 25px;

      &-icon {
        fill: gray;
        cursor: pointer;

        &:hover {
          fill: #000;
        }
      }
    }
  }
</style>
