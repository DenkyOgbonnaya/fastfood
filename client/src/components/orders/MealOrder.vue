<template>
  <tr>
    <td class="meal-name">
      <figure>
        <img src="@/assets/images/banner-2.jpg" alt="" />
        <figcaption>
          <span>Toasty Burn Burger</span>
          <span>Chicken Republic</span>
        </figcaption>
      </figure>
    </td>
    <td>6</td>
    <td>$5.00</td>
    <td><span class="badge badge-warning">Delivered</span></td>
    <td>
      <button class="btn btn-outline-warning btn-sm">
        <font-awesome-icon icon="edit" style="color: rgb(255, 153, 0)" />
      </button>
    </td>
    <td>
      <button class="btn btn-outline-warning btn-sm">
        <font-awesome-icon icon="trash" style="color: rgb(255, 153, 0)" />
      </button>
    </td>
    <td>
      <button class="btn btn-warning btn-sm">Accept</button>
    </td>
  </tr>
</template>

<style lang="scss" scoped>
tr {
  width: 100%;
}
.meal-name {
  display: flex;
  figure {
    display: flex;
    img {
      max-width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    figcaption span {
      display: block;
    }
    figcaption span:first-child {
      font-weight: bold;
    }
    figcaption span:last-child {
      font-size: 13px;
    }
  }
}
</style>
