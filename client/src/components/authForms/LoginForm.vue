<template>
  <div class="wrapper">
    <section>
      <figure>
        <img src="~@/assets/images/auth_img2.jpg" alt="" />
      </figure>
    </section>
    <section>
      <h3>FastFood</h3>
      <button class="btn btn-danger">Continue with Google</button>
      <h6>Or</h6>
      <form action="">
        <input
          type="text"
          name="email"
          required
          placeholder="Enter email address"
          class="form-control"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          class="form-control"
        />
        <button class="btn btn-warning">Login Now</button>
      </form>
      <div>Forgot password?</div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  @include desktop() {
    flex-direction: row;
  }
  section:first-child {
    figure img {
      max-width: 100%;
      height: 100%;
      font-size: 12px;
    }
  }
  section:last-child {
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h6 {
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    padding: 10px;
  }
  h6:before,
  h6:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 50%;
    height: 1px;
    content: "\a0";
    background-color: #212121;
  }
  h6:before {
    margin-left: -50%;
    text-align: right;
  }
  form {
    input {
      margin: 10% 0;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
