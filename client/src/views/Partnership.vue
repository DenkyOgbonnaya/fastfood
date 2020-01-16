<template>
  <div class="wrapper">
    <header>
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Partner
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <h4>Partner With Us</h4>
      <p class="intro">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            qui odio ducimus earum sunt ipsa illo, suscipit, numquam odit in
      </p>
      <div class="card-container">
        <div class="partner-card">
          <figure>
            <img src="~@/assets/images/img_1.svg" alt="parner" />
          </figure>
          <h6>For Restaurant</h6>
          <p>
            Lorem ipsum, dolor sit amet consectetur
          </p>
          <button class="btn btn-warning">Add Restaurant</button>
        </div>
        <div class="partner-card">
          <figure>
            <img src="~@/assets/images/img_1.svg" alt="parner" />
          </figure>
          <h6>For Driver</h6>
          <p>
             Lorem ipsum, dolor sit amet consectetur
          </p>
          <button class="btn btn-warning">Add Vehicle</button>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: map-get($margins, top);
  .card-container {
    padding: 1%;
    @include desktop(){
      display: flex;
      justify-content: center;
    }
    .partner-card {
      display: flex;
      flex-direction: column;
      border: 1px solid #cccccc;
      margin-bottom: 10px;
      padding: 10%;
      max-width: 100%;
      h6 {
        font-weight: bold;
        align-self: center;
        justify-self: center;
      }
      .btn {
        align-self: center;
        justify-self: center;
      }
      @include desktop(){
      max-width: 250px;
      padding: 3%;
      margin-right: 15px;
      }
      figure img {
        max-width: 50px;
        max-height: 50px;
        justify-self: center;
      }
    }
  }
  & h4, .intro {
    text-align: center;
    padding: 1%;
    margin-bottom: 3%;
  }
  h4 {
      font-weight: bold;
  }
  p {
      color: grey;
  }
  @include desktop() {
    .intro {
         padding: 0 20%;
    }
  }
}
</style>
