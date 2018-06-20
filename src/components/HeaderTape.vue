<template>
  <header class="c-header-tape">
    <div class="container c-header-tape__container">
      <div class="c-header-tape__logo">
        <a href="/"><img src="src/assets/logo.png" alt=""></a>
      </div>
      <div class="c-header-tape__info">
        <div class="c-header-tape__order">
          <button>Заказать звонок</button>
        </div>
        <div class="c-header-tape__phones">
          <a v-for="phone in phones" :href="'tel:'+phone">{{phone}}</a>
        </div>
        <div class="c-header-tape__cart" @click="openCart" v-bind:class="{ '_animated-add': animationAdd, '_impulse': getAddedToCart > 0, '_animated-delete': animationDelete }"
        >
          <svg v-svg
               symbol="shopping-cart"
               size="0 0 24 24"
               role="presentation"
               class="c-header-tape__cart-icon"
          ></svg>
          <span>({{getAddedToCart}})</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'HeaderTape',
  data () {
    return {
      logo: '',
      orderText: '',
      phones: [
        '(048) 937 99 92',
        '(050) 937 99 92'
      ]
    }
  },
  computed: {
    ...mapState({
      animationDelete: state => state.cart.animationDelete,
      animationAdd: state => state.cart.animationAdd
    }),

    ...mapGetters([
      'getAddedToCart'
    ])
  },
  methods: {
    ...mapMutations([
      'openCart'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/variables";


  .c-header-tape {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 18px 0;
    background-color: #0e0e0e;
    backface-visibility: hidden;
    transform: translateY(0);
    z-index: 10;
    box-shadow: 0 10px 10px rgba(0,0,0,.3);

    &__container,
    &__info {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    &__order {
      button {
        padding: 8px 16px;
        border-radius: 4px;
        background-color: #fff;
        color: #222222;
        font-size: 15px;
        border: none;
        cursor: pointer;
        font-weight: 700;

        &:hover {
          background-color: $brand;
          color: #fff;
        }
      }
    }

    &__logo {
      margin-right: auto;

    }

    &__phones {
      display: flex;
      flex-direction: column;
      margin-left: 33px;
      font-weight: 100;

      a {
        color: rgba(255,255,255,.7);
        & + a {
          margin-top: 4px;
        }

        &:hover {
          color: $brand;
        }
      }
    }

    &__cart {
      position: relative;
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #fff;
      margin-left: 29px;
      cursor: pointer;

      &:after,
      &:before {
        content: "+1";
        position: absolute;
        left: 50%;
        bottom: 100%;
        transform: translate(-50%, 0);
        transition: all .2s ease-in;
        color: #7dff56;
        opacity: 0;
      }

      &:before {
        content: "-1";
        color: #ff1400;
      }

      &._impulse &-icon {
        animation-name: impulse;
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }

      @keyframes impulse {
          0% {fill: #fff; color: #fff;}
          50% {fill: $brand; color: $brand;}
          100% {fill: #fff; color: #fff;}
      }

      &._animated-add {
        &:after {
          animation-name: animateCartAction;
          animation-duration: .8s;
          animation-iteration-count: 1;
          animation-timing-function: ease;
          animation-fill-mode: forwards;
        }
      }
      &._animated-delete {
        &:before {
          animation-name: animateCartAction;
          animation-duration: .8s;
          animation-iteration-count: 1;
          animation-timing-function: ease;
          animation-fill-mode: forwards;
        }
      }

      &:hover &-icon {
        fill: $brand;
      }

      &-icon {
        fill: #fff;
        margin-right: 4px;
      }
    }
  }
  @-webkit-keyframes animateCartAction {
    from {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -8px);
    }
  }
</style>
