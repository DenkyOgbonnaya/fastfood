<template>
  <div class="wrapper">
    <h5>Timings</h5>
    <h6>Select Days</h6>
    <ul>
      <li>
        <input
          type="checkbox"
          value="Mon"
          v-model="checked"
        />
        <label for="day">Mon</label>
      </li>
      <li>
        <input
          type="checkbox"
          value="Tues"
          v-model="checked"
        />
        <label for="day">Tues</label>
      </li>
      <li>
        <input
          type="checkbox"
          value="Wed"
          v-model="checked"
        />
        <label for="day">Wed</label>
      </li>
      <li>
        <input
          type="checkbox"
          value="Thr"
          v-model="currentTime.day"
        />
        <label for="dayWed">Thr</label>
      </li>
      <li>
        <input
          type="checkbox"
          value="Fri"
          v-model="checked"
        />
        <label for="day">Fri</label>
      </li>
      <li>
        <input
          type="checkbox"
          v-model="checked"
          value="Sat"
        />
        <label for="day">Sat</label>
      </li>
      <li>
        <input
          type="checkbox"
          value="Sun"
          v-model="checked"
        />
        <label for="day">Sun</label>
      </li>
    </ul>
    <div class="row">
      <div class="col">
        <label for="hrsFrom">From</label>
        <input
          type="text"
          name="hrsFrom"
          v-model="currentTime.from"
          class="form-control"
          placeholder="eg 6am"
        />
      </div>
      <div class="col">
        <label for="hrsTo">To</label>
        <input
          type="text"
          name="hrsFrom"
          v-model="currentTime.to"
          class="form-control"
          placeholder="11pm"
        />
      </div>
      <div class="col">
        <button @click="addTime" id="btn" class="btn btn-warning">
          Add Time
        </button>
      </div>
    </div>
    <ul v-if="timings.length">
      <li
        v-for="(timing, index) in timings"
        :key="index"
        class="timing"
      >
      <span>{{timing.day}}</span>
      <span>{{timing.from}} to {{timing.to}}</span>
      <span @click="removeDay(timing.day)">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OpeningTime',
  data () {
    return {
      timings: [],
      currentTime: {},
      checked: []
    }
  },
  methods: {
    addTime () {
      let current = this.checked.length - 1
      let day = this.checked[current]
      this.timings.push({ ...this.currentTime, day })
    },
    removeDay (day) {
      this.timings = this.timings.filter(timing => timing.day !== day)
      let index = this.checked.indexOf(day)
      this.checked.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
  .wrapper {
    ul {
     padding: 0;
     list-style-type: none;
     li {
            display: inline;
            margin-right: 10px;
            input {
                margin-right: 5px;
            }
        }
      li.timing {
        display: block;
        margin-top: 2%;
        span {
         margin-right: 30px;
         color: grey;
        }
        span:first-child {
            color: #212121;
        }
        span:last-child {
          &:hover {
            cursor: pointer;
            color: red;
          }
        }
      }
    }
    h5 {
     font-weight: bold;
    }
    .btn {
      margin-top: 27%;
      @include desktop(){
        margin-top: 17%;
      }
    }
  }
</style>
