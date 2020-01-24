<template>
  <div class="wrapper">
    <div class="meal">
      <button class="btn btn-light btn-sm rounded-circle">+</button>
      <button class="btn btn-light btn-sm rounded-circle">-</button>
      <span>1x </span>
      <span>meal</span>
      <ul>
        <li>+chicken(1)-350</li>
        <li>+chicken(1)-350</li>
        <li>+chicken(1)-350</li>
        <li>+chicken(1)-350</li>
      </ul>
    </div>
    <div class="price">$63</div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 2%;
  max-width: 100%;
}
.meal {
  ul {
    list-style-type: none;
    li {
      color: grey;
    }
  }
  .btn {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    &:hover {
      background: $danger-color;
    }
  }
  span > {
    font-weight: bold;
  }
}
.price {
  font-weight: bold;
}
</style>
