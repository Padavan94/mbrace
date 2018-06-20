<template>
  <transition name="fade">
    <div class="popup-wrapper" v-if="detailedProductShown">
      <div class="popup">
        <div class="popup__close" @click="closeProductDetails()">
          <svg v-svg
               symbol="close"
               size="0 0 20 20"
               role="presentation"
               class="popup__close-icon"
          ></svg>
        </div>
        <div class="popup__body">
          <div class="product-details">
            <div class="product-details__image">
              <div class="product-details__image-main">
                <img id="zoom-image" :src="product.picture" alt="">
              </div>
              <div class="product-details__image-previews">
                <div class="product-details__image-preview" v-for="item in [1,2,3]">
                  <img :src="product.picture" alt="">
                </div>
              </div>
            </div>
            <div class="product-details__info">
              <div class="product-details__info-name">{{ product.name }}</div>
              <div class="product-details__info-description">{{ product.description }}</div>
              <div class="product-details__set">
                <div class="product-details__set-title">В комплекте:</div>
                <div class="product-details__set-items">
                  <div class="product-details__set-item" v-for="item in [1,2]">
                    <img :src="product.picture" alt="" class="product-details__set-item-img">
                    <div class="product-details__set-item-name">Браслет</div>
                  </div>
                </div>
                <ul class="product-details__set-item-params">
                  <li class="product-details__set-item-param"><strong>Материал</strong> Серебро</li>
                  <li class="product-details__set-item-param"><strong>Материал</strong> Серебро</li>
                  <li class="product-details__set-item-param"><strong>Материал</strong> Серебро</li>
                  <li class="product-details__set-item-param"><strong>Материал</strong> Серебро</li>
                </ul>
              </div>
              <div class="product-details__buttons">
                <button class="button _wider" @click="addToCart(product)">В корзину!</button>
                <transition name="fade">
                <button class="button _success" v-if="getAddedToCart">Оформить заказ </button>
                </transition>
              </div>
            </div>
            <social-sharing
              url="https://mbrace.space/"
              :title="product.name + ' - Mbrace' "
              :description="product.name + ' - ' + product.description"
              :quote="product.description"
              hashtags="Mbrace, Браслеты мужские, Купить браслет"
              twitter-user="mbrace.space"
              inline-template>
                   <div>
                       <network network="facebook">
                         <i class="fa fa-facebook"></i> Facebook
                       </network>
                       <network network="skype">
                         <i class="fa fa-skype"></i> Skype
                       </network>
                       <network network="sms">
                         <i class="fa fa-commenting-o"></i> SMS
                       </network>
                       <network network="telegram">
                         <i class="fa fa-telegram"></i> Telegram
                       </network>
                       <network network="twitter">
                         <i class="fa fa-twitter"></i> Twitter
                       </network>
                       <network network="vk">
                         <i class="fa fa-vk"></i> VKontakte
                       </network>
                   </div>
                 </social-sharing>
           </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ProductDetails',
  props: ['product'],
  computed: {
    ...mapState({
      detailedProductShown: state => state.product.detailedProductShown
    }),
    ...mapGetters([
      'getAddedToCart'
    ])
  },
  methods: {
    ...mapMutations([
      'addToCart',
      'closeProductDetails'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .product-details {
    display: flex;
    flex-wrap: wrap;

    &__image {
      width: 50%;
      padding-right: 35px;
      border-right: 1px solid #eaeaea;

      img {
        width: 100%;
        height: 404px;
        object-fit: cover;
      }

      &-previews {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }

      &-preview {
        width: calc(33.3% - 10px);
        height: 128px;
        overflow: hidden;
        cursor: pointer;

        &:hover {

          img {
            transform: scale(1.05);
          }
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform .35s;
        }
      }
    }

    &__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__info {
      width: 50%;
      padding-left: 35px;

      &-name {
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 30px;
      }

      &-description {
        color: #7f7e7e;
        line-height: 1.4;
        margin-bottom: 25px;
      }
    }

    &__set {

      &-title {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 20px;
      }

      &-items {
        display: flex;
        margin-bottom: 25px;
      }

      &-item {
        width: calc(25% - 10px);
        text-align: center;
        cursor: pointer;

        img {
          height: 91px;
          width: 100%;
          object-fit: cover;
        }

        & + & {
          margin-left: 10px;
        }

        &-params {
          padding: 0;
          margin: 0 0 20px 0;
        }

        &-param {
          margin: 0 0 10px 0;
          width: 100%;

          strong {
            margin-right: 15px;
          }
        }
      }
    }
  }

</style>
