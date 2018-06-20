<template>
  <transition name="fade">
    <div class="cart-wrapper" v-if="isOpened">
      <div class="cart">
        <div class="cart__close" @click="closeCart()">
          <svg v-svg
               symbol="close"
               size="0 0 20 20"
               role="presentation"
               class="cart__close-icon"
          ></svg>
        </div>
        <div class="cart__title">корзина</div>
        <div class="cart__body" v-if="addedToCart.length">
          <div class="cart__items">
            <div class="cart__items-head">
              <div class="cart__items-col _name">Наименование</div>
              <div class="cart__items-col">Цена</div>
              <div class="cart__items-col">Количество</div>
              <div class="cart__items-col">Итого</div>
            </div>
            <div class="scroll-area">
            <div class="cart__item" v-for="product in addedToCart">
              <div class="cart__item-row">
                <div class="cart__item-col _name">
                  <div class="cart__item-img" @click="showProductDetails(product)">
                    <img :src="product.picture" alt="">
                  </div>
                  <div class="cart__item-name">
                    <h4>{{product.name}}</h4>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                </div>
                <div class="cart__item-col">
                  <p class="cart__item-price _old">{{product.price}} ГРН</p>
                  <p class="cart__item-price _new">{{product.price}} ГРН</p>
                </div>
                <div class="cart__item-col">
                  <div class="cart__item-counter">
                    <span>{{product.quantity}}</span>
                    <button class="cart__item-counter-inc" @click="increseQuantity(product)"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
                    <button class="cart__item-counter-dec" @click="decreaseQuantity(product)"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
                  </div>
                </div>
                <div class="cart__item-col">
                  <p class="cart__item-price _new">{{product.price * product.quantity}} ГРН</p>
                </div>
                <button class="cart__item-remove" @click="deleteFromCart(product._id)">
                  <svg v-svg
                       symbol="close"
                       size="0 0 14 14"
                       role="presentation"
                       class="cart__item-remove-icon"
                  ></svg>
                </button>
              </div>
            </div>
            </div>
          </div>
          <div class="cart__total">
            <div class="cart__total-inner">
              <span>Итого: <strong>{{getTotalSum}} ГРН</strong></span>
            </div>
          </div>
          <div class="cart__footer">
            <button @click="closeCart()" class="button _bordered">Вернуться к покупкам</button>
            <button class="button _success">Оформить заказ</button>
          </div>
        </div>

        <div class="cart__empty" v-else>
          <div class="cart__empty-title">Ваша корзина пуста!</div>
          <div>
            <img src="../assets/cry-icon.png" alt="">
          </div>
          <div class="cart__empty-button">
            <button class="button _bordered" @click="closeCart()">Выбрать браслет!</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState({
      addedToCart: state => state.cart.addedToCart,
      isOpened: state => state.cart.isOpened
    }),
    ...mapGetters([
      'getTotalProducts',
      'getAddedToCart',
      'getTotalSum'
    ])
  },
  methods: {
    ...mapMutations([
      'deleteFromCart',
      'showProductDetails',
      'closeCart',
      'increseQuantity',
      'decreaseQuantity'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/variables";
  .scroll-area {
    position: relative;
    max-height: 266px;
    overflow-y: auto;
  }

  .cart {
    position: relative;
    padding: 65px 50px;
    background-color: #fff;
    width: 950px;
    overflow: hidden;

    &-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99;

      table {
        td {
          border-color: #fff;
          color: #fff;
        }
      }
    }

    &__total {
      display: flex;
      justify-content: flex-end;
      &-inner {
        padding: 20px 20px 20px 75px;
        background-color: #ebebeb;

        strong {
          font-size: 22px;
          text-transform: uppercase;
        }
      }
    }

    &__footer {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__items {

      &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 700;
        font-size: 20px;
        padding-bottom: 25px;
        border-bottom: 1px solid #d7d7d7;
      }

      &-col {
        width: 20%;
        &._name {
          width: 40%;
        }
      }
    }

    &__item {
      padding: 30px 0;
      border-bottom: 1px solid #d7d7d7;
      font-size: 16px;

      &-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
      }

      &-col {
        width: 20%;
        &._name {
          display: flex;
          align-items: center;
          width: 40%;
        }
      }

      &-counter {
        position: relative;
        width: 80px;
        height: 40px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        border: 1px solid #7f7e7e;
        overflow: hidden;

        span {
          font-weight: 700;
          padding: 0 30px 0 2px;
          text-align: center;
          display: block;
          width: 100%;
        }

        button {
          position: absolute;
          right: 0;
          background-color: transparent;
          height: 50%;
          width: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid #7f7e7e;
          cursor: pointer;

          &:hover {
            background-color: $brand;
          }
        }

        &-dec {
          bottom: 0;
          border-top: 1px solid #7f7e7e;
        }

        &-inc {
          top: 0;
        }
      }

      &-price {
        font-weight: 700;
        margin: 0;

        &._old {
          color: #7f7e7e;
          text-decoration: line-through;
          margin-bottom: 5px;
        }
      }

      &-remove {
        background-color: transparent;

        &-icon {
          fill: #db0000;
          cursor: pointer;

          &:hover {
            transform: scale(1.1);
          }
        }
      }

      &-name {
        h4 {
          text-transform: uppercase;
          margin: 0 0 12px;
          font-size: 16px;
        }

        span {
          color: #7f7e7e;
          font-size: 15px;
          margin: 0;
        }
      }

      &-img {
        width: 70px;
        height: 70px;
        border: 1px solid #d7d7d7;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 35px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &-remove {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &__empty {
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;

      &-title {
        margin-bottom: 30px;
      }

      &-button {
        margin-top: 30px;
      }
    }

    &__title {
      font-size: 25px;
      text-transform: uppercase;
      font-weight: 900;
      position: relative;
      margin-bottom: 50px;

      &:after {
        content: "";
        position: absolute;
        right: calc(100% + 15px);
        top: 50%;
        height: 2px;
        background-color: #000;
        width: 100px;
      }
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
