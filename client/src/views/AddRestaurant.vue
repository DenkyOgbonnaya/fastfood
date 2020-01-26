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
        <form
          @submit.prevent="addRestaurant"
          class="basic-info">
          <div class="form-group">
            <h5>Basic Info</h5>
            <label for="name">Restaurant name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter restaurant name"
              class="form-control"
              required
            />
            <label for="city">City*</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              class="form-control"
              required
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
          </div>
          <div class="form-group">
            <h5>Contact Info*</h5>
            <label for="address">Address*</label>
            <input
              type="text"
              name="address"
              placeholder="Enter the address"
              class="form-control"
              required
            />
            <label for="email">Email address*</label>
            <input
              type="email"
              name="email"
              placeholder="Eestaurant Email Address"
              class="form-control"
              required
            />
            <label for="phone">Phone Number*</label>
            <input
              type="text"
              name="phone"
              placeholder="owner/manger phone"
              class="form-control"
              required
            />
            <label for="restPhone">Restaurant Phone Number</label>
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
          </div>
          <div class="form-group">
            <h5>Timings*</h5>
            <label for="daysOpen">Opening days*</label>
            <input
              type="text"
              name="daysOpen"
              placeholder="eg Mon-Sun"
              class="form-control"
              required
            />
            <label for="hoursOpen">Opening hours*</label>
            <input
              type="text"
              name="hoursOpen"
              placeholder="eg 6am-12pm"
              class="form-control"
              required
            />
          </div>
          <button class="btn btn-warning text-ligth">Next</button>
        </form>
      </section>
      <section>
        <HowToPartner />
      </section>
    </main>
    <AppModal
      v-if="isAddMenuModalVisible"
      @close="closeAddMenuModal"
    >
      <template v-slot:body>
        <AddMenu/>
      </template>
    </AppModal>
  </div>
</template>

<script>
import HowToPartner from '@/components/HowToPartner'
import AddMenu from '@/components/restaurants/AddMenu'
import AppModal from '@/components/AppModal'
export default {
  name: 'AddRestauarant',
  data () {
    return {
      isAddMenuModalVisible: false
    }
  },
  components: {
    HowToPartner,
    AddMenu,
    AppModal
  },
  methods: {
    addRestaurant () {
      this.isAddMenuModalVisible = true
    },
    closeAddMenuModal () {
      // do nothing
    }
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
    margin-bottom: 3%;
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
