<template>
  <div class="advantages">
    <div class="advantages__title">Наши преимущества</div>
    <div class="advantages__outer">
      <div class="container advantages__container">
      <div class="advantages__inner">
        <div class="advantages__row">
          <div class="advantages__item">
            <i class="advantages__item-icon"></i>
            <div class="advantages__item-title _ok">Уникальный дизайн</div>
            <div class="advantages__item-description">
              Уникальный дизайн Браслет, поражающий своими формами и неповторимым видом каждого! Объединяет в себе брутальность и статусность.
            </div>
          </div>
          <div class="advantages__item">
            <i class="advantages__item-icon"></i>
            <div class="advantages__item-title _star">Уникальный дизайн</div>
            <div class="advantages__item-description">
              Уникальный дизайн Браслет, поражающий своими формами и неповторимым видом каждого! Объединяет в себе брутальность и статусность.
            </div>
          </div>
        </div>
        <div class="advantages__row">
          <div class="advantages__item">
            <i class="advantages__item-icon"></i>
            <div class="advantages__item-title _free">Уникальный дизайн</div>
            <div class="advantages__item-description">
              Уникальный дизайн Браслет, поражающий своими формами и неповторимым видом каждого! Объединяет в себе брутальность и статусность.
            </div>
          </div>
          <div class="advantages__item">
            <i class="advantages__item-icon"></i>
            <div class="advantages__item-title _hi">Уникальный дизайн</div>
            <div class="advantages__item-description">
              Уникальный дизайн Браслет, поражающий своими формами и неповторимым видом каждого! Объединяет в себе брутальность и статусность.
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Advantages',
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

  .advantages {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 850px;
    background-image: url('../assets/advantages.jpg');
    background-size: cover;
    background-position: center;

    &__title {
      text-align: center;
      margin-bottom: 80px;
      font-size: 40px;
      font-family: 'Open Sans Condensed', sans-serif;
    }

    &__row {
      display: flex;
      align-items: center;

      & + & {
        margin-top: 80px;
      }
    }

    &__item {
      width: 50%;
      font-size: 16px;

      &:nth-child(even) {
        color: #fff;
        padding-left: 82px;
      }

      &:nth-child(odd) {
        text-align: right;
        padding-right: 82px;
      }

      &-title {
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 30px;
        padding-top: 100px;
        background-repeat: no-repeat;

        &._ok {
          background-image: url('../assets/ok.png');
          background-position: right bottom 50px;
        }

        &._hi {
          background-image: url('../assets/hi.png');
          background-position: left bottom 50px;
        }

        &._free {
          background-image: url('../assets/free.png');
          background-position: right bottom 50px;
        }

        &._star {
          background-image: url('../assets/star.png');
          background-position: left bottom 50px;
        }
      }

      &-description {
        line-height: 1.5;
      }
    }

    &__outer {
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 670px;
      background-image: url('../assets/advantages2.jpg');
      background-position: right center;
      background-repeat: no-repeat;
      background-size: 50% 100%;
    }

    &__inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

</style>
