<template>
  <div class="wrapper">
    <h4>Add Meal</h4>
    <form>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="category">Select Meal*</label>
            <select
              name="category"
              id="category"
              class="form-control"
            >
              <option value="Breakfast">Rice</option>
              <option value="Lunch">Swallow</option>
              <option value="Dinner">Drinks</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="name">Meal Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Meal name"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-group">
            <label for="price">Meal Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="N0"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="extras">Add Extras</label>
        <MealExtraForm />
      </div>
      <button class="btn btn-outline-dark" >
         <font-awesome-icon icon="images" style="color: grey, max-width:10px" />
         Add Photo
      </button>
      <input
        type="file"
        hidden
      >
      <div class="photo-preview">
          <figure>
              <span class="badge badge-dark">x</span>
              <img src="/images/banner-1.jpg" alt="meal preview" />
          </figure>
      </div>
      <button
        type="submit"
        class="btn btn-warning">Add Meal</button>
    </form>
  </div>
</template>

<script>
import MealExtraForm from './MealExtraForm'
export default {
  name: 'mealForm',
  components: {
    MealExtraForm
  }
}
</script>

<style lang="scss" scoped>
  form {
    padding: 2%;
    .photo-preview {
      margin-top: 2%;
      figure {
          display: flex;
          flex-direction: column;
          margin-right: 20px;
        max-width: 100px;
        max-height: 100px;
        img {
          max-width: 100%;
          height: 100%;
        }
        span {
          align-self: flex-end;
          position: relative;
          top: 10px;
          left: 10px;
          font-weight: bold;
        }
      }
    }
  }
</style>
