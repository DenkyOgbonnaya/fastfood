<template>
  <div class="wrapper">
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Add Restaurant
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <section>
        <h4>Add Restaurant</h4>
        <section class="basic-info">
          <h5>Basic Info</h5>
          <form>
            <label for="name">Restaurant name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter restaurant name"
              class="form-control"
            />
            <label for="city">City*</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              class="form-control"
            />
            <label for="owner">Owner or manager*?</label>
            <ul>
              <li>
                <input type="radio" id="owner" name="restOwner" />
                <label for="owner">Owner</label>
              </li>
              <li>
                <input type="radio" id="manager" name="restOwner" />
                <label for="manager">Manager</label>
              </li>
            </ul>
          </form>
        </section>
        <section class="contact-info">
          <h5>Contact Info*</h5>
          <form>
            <label for="email">Email address*</label>
            <input
              type="email"
              name="email"
              placeholder="Eestaurant Email Address"
              class="form-control"
            />
            <label for="phone">Phone Number*</label>
            <input
              type="text"
              name="phone"
              placeholder="owner/manger phone"
              class="form-control"
            />
            <label for="restPhone">Restaurant Phone Number*</label>
            <input
              type="text"
              name="restPhone"
              placeholder="Restaurant phone"
              class="form-control"
            />
            <label for="restWebsite">Restaurant website</label>
            <input
              type="text"
              name="restWebsite"
              placeholder="Restaurant website"
              class="form-control"
            />
            <label for="status">Open Status*</label>
            <ul>
              <li>
                <input type="radio" name="status" id="opened" />
                <label for="opend">Opened</label>
              </li>
              <li>
                <input type="radio" name="status" id="soon" />
                <label for="soon">Opening soon</label>
              </li>
            </ul>
          </form>
        </section>
        <section class="timings">
          <OpeningTime />
        </section>
        <section class="location">
          <h5>Location*</h5>
          <label for="address"></label>
          <input
            type="text"
            name="address"
            placeholder="Enter the address"
            class="form-control"
          />
        </section>
        <section class="services">
          <h5>Services*</h5>
          what meals do you offer?
          <ul>
            <li><input type="checkbox" />Breakfast</li>
            <li><input type="checkbox" />Lunch</li>
            <li><input type="checkbox" />Dinner</li>
          </ul>
          <button class="btn btn-warning">Add Restaurant</button>
        </section>
      </section>
      <section>
        <HowToPartner/>
      </section>
    </main>
  </div>
</template>

<script>
import OpeningTime from '@/components/OpeningTime'
import HowToPartner from '@/components/HowToPartner'
export default {
  name: 'AddRestauarant',
  components: {
    OpeningTime,
    HowToPartner
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
main {
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  padding: 2%;
  @include desktop() {
    flex-direction: row;
    justify-content: space-around;
  }
  & section:first-child ul {
    padding: 0;
    list-style-type: none;
    li {
      display: inline;
      margin-right: 10px;
    }
  }
  section:first-child {
    h4 {
      font-weight: bold;
    }
    h5 {
      margin-top: 7%;
      font-weight: bold;
    }
    label {
      margin: 2% 0;
    }
    input[type="checkbox"],
    input[type="radio"] {
      margin-right: 5px;
    }
  }
}
</style>
