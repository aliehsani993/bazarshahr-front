<template>
  <div class="chip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Chip"
}
</script>

<style scoped lang="scss">
.chip {
  font-size: .875rem;
  background: $color-gray-light;
  border-radius: .25rem;
  width: fit-content;
  margin: 0 0 .5rem .5rem;
  padding: .375rem 1rem;
}
</style>
