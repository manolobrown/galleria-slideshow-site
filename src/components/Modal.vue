<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__dialog">
        <div class="modal__header">
          <slot name="header" />
          <button type="button" class="modal__close" @click="closeModal()">
            Close
          </button>
        </div>

        <div class="modal__body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
};
</script>
<style lang="scss" scoped>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    position: relative;
    z-index: 2;
  }
  &__header {
    text-align: right;
    padding: 0 rem(24);
    margin-block-end: rem(40);
    @media (min-width: rem(768)) {
      padding: 0 rem(40);
    }
  }
  &__close {
    color: #fff;
    letter-spacing: rem(3);
    padding: rem(10);
    margin-right: rem(-10);
  }
  &__close:hover {
    opacity: 0.25;
  }
  &__body {
    padding: 0 rem(24);
    @media (min-width: rem(768)) {
      padding: 0 rem(40);
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
