<template>
  <footer>
    <section>
      <div>
        <h5><span>Fast</span><span>Food</span></h5>
        <p>
          FastFood is a network of restaurants and bars in your city, making
          meals and drinks easy, assessible for everyone. It is not just about
          bringing great meals from your favorite restaurants directly to you,
          it is about making a connection which is why we allow you build your
          meal, the way you want it and how you want it. Try Us today!
        </p>
      </div>
      <div>
        <h5>Business</h5>
        <ul>
          <li>
            <a href="/#">Contact us</a>
          </li>
          <li>
            <a href="/#">About us</a>
          </li>
          <li>
            <a href="/#">Terms and Conditions</a>
          </li>
          <li>
            <a href="/#">Privacy Statement</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Partner With Us</h5>
        <ul>
          <li>
            <a href="/#">For Restaurant</a>
          </li>
          <li>
            <a href="/#">Contact us: admin@fastfood.com</a>
          </li>
          <li>
            <a href="/#">Suggest a Restaurant</a>
          </li>
          <li>
            <a href="/#"> <img src="~@/assets/images/meal-2.svg" alt=""/></a>
            <a href="/#"> <img src="~@/assets/images/meal-2.svg" alt=""/></a>
          </li>
        </ul>
      </div>
    </section>
    <section>
      (c) Copyright 2019. All Rigths Reserved
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";

footer {
  background: $dark-color;
  color: $light-color;
  padding: 10px;
  margin-top: map-get($margins, top);
  @include desktop() {
    margin-top: map-get($margins-desktop, top);
  }
  & > section div {
    margin-top: 10%;
    @include desktop() {
      margin: 3% 0;
      margin-right: 10px;
    }
  }
  & > section > div h5 {
    span:first-child {
      color: $danger-color;
    }
    span:last-child {
      color: $warning-color;
    }
  }
  @include desktop() {
    font-size: 14px;
    & > section {
      display: flex;
      padding: 0 5%;
      div {
        flex: 1;
      }
    }
  }
}
h5 {
  text-align: left;
  font-weight: bold;
}
p {
  text-align: left;
  margin-top: 8%;
}
ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
  li a {
    color: $light-color;
    img {
      width: 50px;
      height: 50px;
      clip-path: circle(50%);
      background: #424242;
      padding: 10px;
      margin-top: 2%;
      margin-right: 10px;
      &:hover {
        background: $warning-color;
      }
    }
  }
}
</style>
