<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >
        x
        </button>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            Default body!
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }
.modal {
  background: #ffffff;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  box-shadow: 2px 2px 20px 1px;
  flex-direction: column;
  position: relative;
  @include desktop() {
    max-width: 70%;
    max-height: 85%;
  }
}
.modal-body {
  position: relative;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
  align-self: flex-end;
}
header {
  background: red;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
