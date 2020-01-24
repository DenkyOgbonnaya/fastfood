<template>
  <div class="wrapper">
    <div class="heading">
      <h4>Rice</h4>
      <p>(Build your custom meal)</p>
    </div>
    <section>
      <ul>
        <li>
          <font-awesome-icon icon="plus-circle" style="color:grey" />
          Extra chicken(N50)
        </li>
        <li>
          <font-awesome-icon icon="plus-circle" style="color:grey" />
          chicken
        </li>
        <li>
          <font-awesome-icon icon="plus-circle" style="color:grey" />
          Extra chicken(N50)
        </li>
        <li>
          <font-awesome-icon icon="plus-circle" style="color:grey" />
          Extra chicken(N50)
        </li>
      </ul>
      <div class="additions">
        <p>Additions</p>
        <ul class="additions">
          <li>
            <button class="btn btn-light btn-sm rounded-circle btn-qty">
              +
            </button>
            <button class="btn btn-light btn-sm rounded-circle btn-qty">
              -
            </button>
            <span>1x </span>
            <span>meal   </span>
            <span>N50</span>
          </li>
        </ul>
      </div>
    </section>
    <div class="total">Total: N200</div>
    <button class="btn btn-danger btn-block">Add</button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  padding: 2% 5%;
  .heading {
    text-align: center;
    color: $danger-color;
  }
  section {
    @include desktop() {
      display: flex;
      justify-content: space-between;
    }
    ul {
      list-style-type: none;
      padding: 0;
      li {
        color: $dark-color;
        .btn-qty {
          margin-right: 5px;
          width: 25px;
          height: 25px;
          &:hover {
            background: $danger-color;
          }
        }
      }
    }
    ul.additions li {
      color: grey;
    }
    .additions p {
      color: $danger-color;
    }
  }
  div.total {
    text-align: center;
    font-weight: bold;
    color: $danger-color;
  }
}
</style>
