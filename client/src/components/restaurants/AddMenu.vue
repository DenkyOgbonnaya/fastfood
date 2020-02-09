<template>
  <div class="wrapper">
    <h4>Build your menu</h4>
    <p>
      Add the categories of edibles you offer. eg Rice, Beans, swallow, soup,
      drinks, water etc
    </p>
    <form @submit.prevent="addMenu">
      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <div class="form-group">
        <label for="name">Category(menu) name*</label>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder=" eg Drinks"
          class="form-control"
          required
        />
      </div>
      <div class="form-group">
        <label for="cover">Add a cover photo</label>
        <input
          type="file"
          name="coverPhoto"
          class="form-control"
          accept="image/*"
          @change="handleFileChange"
          required
        />
      </div>
      <button class="btn btn-warning text-ligth" :disabled="isLoading">
        <span v-if="!isLoading">Add</span>
        <div
          v-else
          class="spinner-border text-light  spinner-border-sm"
          role="status"
        >
          <span class="sr-only">loading...</span>
        </div>
      </button>
    </form>
    <ul v-if="menus.length">
      <li v-for="menu in menus" :key="menu.id">
        <span class="badge badge-primary">{{ menu.name }}</span>
        <span @click="removeMenu(menu.id)">x</span>
      </li>
    </ul>
    <button
      class="btn btn-danger"
      @click="closeModal"
    >Finish</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "addMenu",
  data () {
    return {
      menus: [],
      name: "",
      coverPhoto: null,
      isLoading: false,
      errorMessage: ""
    };
  },
  props: {
    restaurantId: String
  },
  methods: {
    ...mapActions(["handleMenuAdd", "handleMenuRemove"]),
    async addMenu () {
      this.toggleIsLoading();
      this.setErrorMessage(null);

      let menu = {
        name: this.name,
        photo: this.coverPhoto,
        restaurantId: this.restaurantId
      };
      try {
        const { id } = await this.handleMenuAdd(menu);
        if (id) {
          this.menus.push({ ...menu, id });
          this.toggleIsLoading();
          this.$noty.success("Menu added!")
        }
      } catch (err) {
        this.setErrorMessage(err.message);
        this.toggleIsLoading();
      }
    },
    handleFileChange ({ target }) {
      this.coverPhoto = target.files[0];
    },
    async removeMenu (id) {
      this.menus = this.menus.filter((menu) => menu.id !== id);
      await this.handleMenuRemove(id)
      this.$noty.success("Menu removed!");
    },
    toggleIsLoading () {
      this.isLoading = !this.isLoading;
    },
    setErrorMessage (msg) {
      this.errorMessage = msg;
      this.scrollToTop();
    },
    scrollToTop () {
      const el = this.$el.getElementsByClassName('top')[0];

      if (el) {
        el.scrollIntoView();
      }
    },
    closeModal () {
      this.$emit("finish");
      this.$noty.success("Restaurant registered!, wait for confirmation");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.wrapper {
  padding: 2%;
  h4,
  p {
    text-align: center;
  }
  h4 {
    color: $danger-color;
    font-weight: bold;
  }
  ul {
    padding: 0;
    list-style-type: none;
    margin-top: 10px;
    li {
      margin-right: 5px;
      font-size: 16px;
    }
    span {
      margin-right: 10px;
    }
    span:last-child {
      &:hover {
        color: orange;
        cursor: pointer;
      }
    }
  }
  .btn-finish {
    margin-top: 10px;
  }
}
</style>
