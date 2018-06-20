<template>
  <article class="c-product">
    <img class="c-product__image" @click="showProductDetails(product)" :src="product.picture" />
    <div class="c-product__name">{{ product.name }}</div>
    <div class="c-product__price">
      <div class="c-product__price-old">{{ product.price * 1.2 }} UAH</div>
      <div class="c-product__price-new">{{ product.price }} UAH</div>
    </div>
    <div class="c-product__actions">
      <button class="button" @click="showProductDetails(product)">Подробнее</button>
      <button class="button" @click="addToCart(product)">В корзину!</button>
    </div>
  </article>

</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
      name: 'Product',
      props: ['product'],
      methods: {
        ...mapMutations([
          'addToCart',
          'showProductDetails'
        ])
      }
    }
</script>

<style lang="scss" scoped>
  @import '../assets/styles/variables';

  .c-product {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(50% - 20px);
    height: 460px;
    margin-bottom: 40px;
    background-position: center;
    background-size: cover;
    text-align: center;
    color: #fff;
    overflow: hidden;
    cursor: pointer;
    padding: 20px;
    background-color: #000;

    &:hover & {

      &__image {
        transform: translate3d(0,-90px,0);
        filter: opacity(60%);
      }

      &__name {
        transform: translate3d(0,-90px,0);
      }

      &__price {
        filter: opacity(100%);
        transform: translate3d(0,-50px,0);
      }

      &__actions {
        transform: translate3d(0,0,0);
      }
    }

    &__image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      transition: all 0.35s;
    }

    &__name {
      text-transform: uppercase;
      font-size: 34px;
      transition: transform 0.35s;
    }

    &__price {
      display: flex;
      filter: opacity(0);
      transform: translate3d(0,100%,0);
      transition: all 0.35s;
      font-size: 24px;

      & > div {
        margin: 0 20px;
      }

      &-old {
        opacity: 0.7;
        text-decoration: line-through;
      }
    }

    &__actions {
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 90px;
      padding: 10px 20px;
      background-color: $brand;
      transform: translate3d(0,100%,0);
      transition: transform 0.35s;

      .button {
        width: calc(50% - 20px);
        text-align: center;

        &:hover {
          border: 1px solid #000;
          color: #fff;
          background-color: rgba(#000000, .7);
        }
      }
    }
  }

</style>
