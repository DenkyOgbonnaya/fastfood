<template>
  <div class="wrapper">
    <header>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Add Driver
          </li>
        </ol>
      </nav>
    </header>
    <main>
      <section>
        <h4>Add River</h4>
        <section class="basic-info">
          <h5>Basic Info</h5>
          <form>
            <label for="name">Driver's name*</label>
            <input
              type="text"
              name="name"
              placeholder="Enter driver's name"
              class="form-control"
            />
            <label for="city">City*</label>
            <input
              type="text"
              name="city"
              placeholder="Enter city"
              class="form-control"
            />
            <label for="owner">Owner or just driver*?</label>
            <ul>
              <li>
                <input type="radio" id="owner" name="vehOwner" />
                <label for="owner">Owner</label>
              </li>
              <li>
                <input type="radio" id="driver" name="vehOwner" />
                <label for="driver">Just Driver</label>
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
              placeholder="Enter Email Address"
              class="form-control"
            />
            <label for="phone">Phone Number*</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone"
              class="form-control"
            />
          </form>
        </section>
        <section class="timings">
          <OpeningTime />
        </section>
        <button class="btn btn-warning">Add Driver</button>
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
  name: 'AddDriver',
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
  .timings {
    margin-top: 5%;
  }
  .btn {
    margin-top: 5%;
  }
}
</style>
