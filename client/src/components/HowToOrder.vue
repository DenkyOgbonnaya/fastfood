<template>
  <main class="container">
    <div>
      <img :src="detail.icon" alt=" "/>
    </div>
    <div>
      <small>step {{detail.num}}</small>
      <h6>{{detail.title}}</h6>
      <p class="text-muted">{{detail.text}}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HowToOrder',
  props: {
    detail: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
  main {
      padding: 2%;
    & div:first-child {
      display: flex;
      background-image: url("~@/assets/images/order-bg.jpg");
      background-size: cover;
      width: 100%;
      height: 200px;
      img {
        height: 105px;
        width: 105px;
        clip-path: circle(50%);
        margin: auto;
        background: $light-color;
        padding: 20px;
        &:hover {
          -webkit-transform: rotateY(360deg);
          -ms-transform: rotateY(360deg);
          transform: rotateY(360deg);
          transition: transform 0.8s linear;
        }
      }
    }
    & div:last-child {
      margin-top: 2%;
      h6 {
        font-weight: bold;
      }
    }
    @include desktop(){
      display: flex;
      width: 70%;
      & div:first-child {
        width: 23%;
        flex: 1;
        margin-right: 5%;
      }
      & div:last-child {
        flex: 2;
        margin-top: 0;
      }
    }
}
</style>
