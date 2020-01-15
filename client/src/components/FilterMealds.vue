<template>
  <div>
  <b-dropdown id="dropdown-grouped" text="Filter" lazy=true variant="outline-dark" class="m-2">
    <b-dropdown-group id="dropdown-group-1" header="Type">
      <b-dropdown-form>
        <b-form-checkbox class="mb-3">Break Fast</b-form-checkbox>
        <b-form-checkbox class="mb-3">Lunch</b-form-checkbox>
         <b-form-checkbox class="mb-3">Dinner</b-form-checkbox>
      </b-dropdown-form>
    </b-dropdown-group>
    <b-dropdown-group id="dropdown-group-2" header="Category">
        <b-dropdown-form>
         <b-form-checkbox class="mb-3">Drinks & Bear</b-form-checkbox>
          <b-form-checkbox class="mb-3">Pizza</b-form-checkbox>
         <b-form-checkbox class="mb-3">Coffee</b-form-checkbox>
      </b-dropdown-form>
    </b-dropdown-group>
    <b-dropdown-item-button>
      Done
    </b-dropdown-item-button>
  </b-dropdown>
</div>
</template>
