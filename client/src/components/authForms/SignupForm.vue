<template>
  <div class="wrapper">
    <section>
      <figure>
        <img src="~@/assets/images/auth_img2.jpg" alt="" />
      </figure>
    </section>
    <section>
      <h3>FastFood</h3>
      <form action="">
          <input
          type="text"
          name="name"
          required
          placeholder="Full name"
          class="form-control"
        />
        <input
          type="emai"
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
        <input type="checkbox" name="tc">
        <label for="tc">I agree to FastFood terms and conditions</label>
        <button class="btn btn-warning">Sign Up</button>
      </form>
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
  form {
    input {
      margin: 10% 0;
    }
    input[type=checkbox] {
      margin-right: 10px;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
