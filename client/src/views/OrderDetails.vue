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
      <h4>Order Details</h4>
    </header>
    <main>
      <section>
        <img src="@/assets/images/meal2.jpeg" alt="meal" />
        <figure>
          <img src="@/assets/images/defavatar.png" alt="order-owner" />
          <figcaption>
            <span>Denky Doe</span>
            <small class="text-muted">
              <font-awesome-icon
                icon="map-marker-alt"
                style="color: rgb(255, 153, 0)"
              />
              Nigeria
            </small>
          </figcaption>
        </figure>
      </section>
      <section class="order-details">
        <div class="order-id">order_id: #003-0</div>
        <div class="order-meal">
          <div>
            <span>meal x 1</span>
            <ul>
              <li>+chicken(1)-350</li>
              <li>+chicken(1)-350</li>
              <li>+chicken(1)-350</li>
              <li>+chicken(1)-350</li>
            </ul>
          </div>
          <div class="price">$63</div>
        </div>
        <div class="order-meal">
          <div>
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
        <div>Total: N656</div>
      </section>
      <section class="delivery-men">
        <h4>Near Delivery Men</h4>
        <div class="delivery-man">
          <figure>
            <img src="@/assets/images/defavatar.png" alt="delivery man" />
            <figcaption>
              <span>Denky Doe</span>
              <small class="text-muted">
                <font-awesome-icon
                  icon="map-marker-alt"
                  style="color: rgb(255, 153, 0)"
                />
                Nigeria
              </small>
            </figcaption>
          </figure>
          <button class="btn btn-warning btn-sm text-light">
            <font-awesome-icon icon="comments" style="color: #ffffff" />
            Chat Up
          </button>
        </div>
        <div class="delivery-man">
          <figure>
            <img src="@/assets/images/defavatar.png" alt="delivery man" />
            <figcaption>
              <span>Denky Doe</span>
              <small class="text-muted">
                <font-awesome-icon
                  icon="map-marker-alt"
                  style="color: rgb(255, 153, 0)"
                />
                Nigeria
              </small>
            </figcaption>
          </figure>
          <button class="btn btn-warning btn-sm text-light">
            <font-awesome-icon icon="comments" style="color: #ffffff" />
            Chat Up
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  padding: 3%;
  main {
    @include desktop() {
      display: flex;
      justify-content: space-around;
    }
    & > section {
      max-width: 300px;
      img {
        max-width: 100%;
      }
      figure {
        display: flex;
        margin-top: 3%;
        img {
          max-width: 50px;
          height: 50px;
          margin-right: 10px;
          clip-path: circle(50%);
        }
        figcaption span {
          display: block;
        }
      }
    }
    .order-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2%;
      width: 100%;
      .order-id {
        border: 1px solid #ccc;
        text-align: center;
        padding: 1%;
      }
      .order-meal {
        display: flex;
        justify-content: space-between;
        margin-top: 5%;
        ul {
          list-style-type: none;
          li {
            color: grey;
          }
        }
      }
    }
    .delivery-men {
      margin-top: 3%;
      @include desktop() {
        min-width: 400px;
        margin-top: 0;
      }
      .delivery-man {
        display: flex;
        justify-content: space-between;
        padding: 3%;
        border: 1px solid #ccc;
        figure {
          display: flex;
          img {
            max-width: 50px;
            height: 50px;
            margin-right: 10px;
            clip-path: circle(50%);
          }
          figcaption span {
            display: block;
          }
        }
        .btn {
          max-height: 50px;
        }
      }
    }
  }
}
</style>
