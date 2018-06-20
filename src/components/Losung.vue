<template>
  <div class="c-losung">
    <div class="container c-losung__container">
      <div class="c-losung__image">
        <div class="c-losung__title">
          <h1>Уникальные браслеты</h1>
          <span>эксклюзивно на MBRACE!</span>
        </div>
        <div class="c-losung__price">
          <div class="c-losung__price-old">500</div>
          <div class="c-losung__price-new"><span class="c-losung__price-new-value">199</span> <span>гривен</span></div>
        </div>

      </div>
      <div class="c-losung__coundown">
        <div class="c-losung__coundown-text">До конца акции осталось:</div>
        <Countdown deadline="February 28, 2018"></Countdown>
        <div class="c-losung__form">
          <div class="c-losung__form-title">
            Оставьте заявку и успейте купить браслет
            по акционной цене!
          </div>
          <div class="c-losung__form-body">
            <div class="c-losung__form-input">
              <input type="text" placeholder="Ваше имя">
            </div>
            <div class="c-losung__form-input">
              <masked-input mask="\+\380 (11) 111-1111" placeholder="Номер телефона" type="tel" />
            </div>
            <div class="c-losung__form-input">
              <input type="email" placeholder="E-mail">
            </div>
            <div class="c-losung__form-input">
              <input type="text" placeholder="Интересующий товар">
            </div>
            <div class="c-losung__form-button">
              <button>Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'
import MaskedInput from 'vue-masked-input'

export default {
  components: {Countdown, MaskedInput},
  name: 'Losung',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/styles/variables";

  .c-losung {
    position: relative;
    background-image: url('../assets/losung-bg.png');
    background-position: left top;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    border: 15px solid $brand2;
    overflow: hidden;

    &:before {
      content: "";
      position: absolute;
      right: -37px;
      top: -10%;
      width: calc(54%);
      height: calc(120%);
      background-color: $brand;
      transform: rotate(5deg);
      box-shadow: -20px 0 20px rgba(0,0,0,.30);
    }

    &__form {
      width: 70%;
      margin: 0 auto;

      &-title {
        margin-bottom: 40px;
      }

      &-input {

        & + & {
          margin-top: 20px;
        }

        input {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(#816e1e, 0.26);
          width: 100%;
          height: 40px;

          &:focus {
            outline: none;
            border-color: $brand2;
          }
        }
      }

      &-button {
        margin-top: 35px;

        button {
          padding: 12px 16px;
          border-radius: 4px;
          background-color: #000;
          color: #fff;
          font-size: 15px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          min-width: 200px;

          &:hover {
            background-color: #fff;
            color: #000;
          }
        }
      }
    }

    &__container {
      display: flex;
      min-height: 650px;
    }

    &__title {
      padding: 20px 60px 20px 20px;
      color: #fff;
      background: linear-gradient(to left, rgba(0,0,0,.65), rgba(0,0,0,.05));

      h1 {
        margin: 0 0 10px 0;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 45px;
      }

      span {
        font-size: 22px;
      }
    }

    &__price {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 315px;
      height: 149px;
      padding-bottom: 42px;
      background-image: url('../assets/mark.png');
      background-position: right 0;
      background-repeat: no-repeat;
      color: #fff;

      &-old {
        font-size: 30px;
        text-decoration: line-through;
      }

      &-new {
        display: flex;
        flex-direction: column;
        margin-left: 20px;

        &-value {
          color: #fff;
          font-family: 'Open Sans Condensed', sans-serif;
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 5px;
        }
      }

    }

    &__image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      text-align: center;
      width: 50%;
    }

    &__coundown {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 50px;
      align-items: center;
      z-index: 9;
      width: 50%;
      text-align: center;

      &-text {
        font-size: 2rem;
        font-family: 'Open Sans Condensed', sans-serif;
        margin-bottom: 20px;
        color: #272727;
      }

      & /deep/ .vue-countdown {
        margin-bottom: 50px;

        .digit {
          padding: 0 10px;
          margin-bottom: 6px;
          background-color: #fff;
        }

        .text {
          font-size: 14px;
        }
      }
    }
  }



</style>
