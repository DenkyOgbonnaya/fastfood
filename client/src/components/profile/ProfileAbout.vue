<template>
  <div class="wrapper">
    <header>
      <h4>About Profile</h4>
      <span>
        <font-awesome-icon icon="edit" style="color: grey, max-width:10px" />
        Edit Profile
      </span>
    </header>
    <form>
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input
          type="text"
          name="fullname"
          placeholder="fullname"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="phone">Mobile Number</label>
        <input
          type="telephone"
          name="phone"
          placeholder="Enter phone"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          class="form-control"
        />
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2%;
    padding-right: 20px;
    span {
      color: $orange-color;
    }
  }
  form {
    .form-group {
      border: 1px solid #ccc;
      padding: 3%;
      width: 90%;
      padding: 5px;
      margin: 0;
      @include desktop(){
        width: 80%;
      }
    }
    label {
      font-weight: bold;
      font-size: 13px;
    }
    input {
      border: none;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
