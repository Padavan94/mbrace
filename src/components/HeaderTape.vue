<template>
  <header class="c-header-tape">
    <div class="container c-header-tape__container">
      <div class="c-header-tape__logo">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores aspernatur atque dignissimos dolores doloribus est ex impedit laborum magnam, mollitia nam optio praesentium quas quia tempora voluptatibus! Dolores, voluptatum.
      </div>
      <div class="c-header-tape__info">
        <div class="c-header-tape__order">

        </div>
        <div class="c-header-tape__phone">
          <a href="tel:(048) 937 99 92">(048) 937 99 92</a>
        </div>
        <div class="c-header-tape__cart">
          <svg v-svg
               symbol="shopping-cart"
               size="0 0 24 24"
               role="presentation"
               class="icon--inline"
          ></svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTape',
  data () {
    return {
      header: {
        logo: '',
        orderText: '',
        phones: [
          '(048) 937 99 92',
          '(050) 937 99 92'
        ]

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .c-header-tape {
    padding: 18px 0;
    background-color: #0e0e0e;

    &__container {

    }

    &__logo {

    }

    &__phone {

    }

    &__cart {

      svg:hover g {
        fill: red !important;
      }
    }


  }
</style>
