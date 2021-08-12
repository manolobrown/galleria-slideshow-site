<template>
  <button>{{ txt }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    txt: String,
  },
};
</script>

<style lang="scss" scope>
@use "sass:math";
@function rem($pixels, $context: 16) {
  @return (math.div($pixels, $context)) * 1rem;
}
:root {
  --baskerville: "Libre Baskerville", serif;
  font-display: swap;
}

button {
  background: transparent;
  border: 0;
  font-family: var(--baskerville);
  font-size: rem(12);
  line-height: rem(2.5);
  font-weight: 700;
  color: #7d7d7d;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: rem(2);

  &:hover {
    color: #000;
  }
}
</style>
