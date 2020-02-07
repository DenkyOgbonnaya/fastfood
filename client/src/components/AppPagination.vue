<template>
  <nav aria-label="Page navigation example">
    <ul
      class="pagination justify-content-end pagination-sm"
      v-if="pageNumbers.length"
    >
      <li
        class="page-item"
        :class="currentPage==1 ? 'disabled': ''"
      >
        <a
          @click.prevent="changePage(currentPage - 1)"
          class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        v-for="pageNumber in pageNumbers"
        :key="pageNumber"
        class="page-item">
        <a
          class="page-link" href="#"
          @click.prevent="changePage(pageNumber)"
          :class="currentPage == pageNumber ? 'active': ''"
        >
          {{ pageNumber }}
      </a></li>
      <li
        class="page-item"
        :class="currentPage==pages ? 'disabled': ''"
      >
        <a
          @click.prevent="changePage(currentPage + 1)"
          class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "appPagination",
  data () {
    return {
      pageNumbers: [],
      currentPage: 1
    };
  },
  props: {
    pages: Number
  },
  mounted () {
    const pages = this.pages || 0;
    if (pages >= 1) {
      for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
        this.pageNumbers.push(pageNumber);
      }
    }
  },
  methods: {
    changePage (pageNumber) {
      this.$emit("changePage", pageNumber);
      this.currentPage = pageNumber;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
  li a.active {
    background: $danger-color;
    color: $light-color;
  }
</style>
