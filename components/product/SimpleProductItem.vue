<template>
  <a href="#" class="block  p-4">
    <img :src="this.image" alt="product-image"/>
  </a>
</template>

<script>
export default {
  name: "SimpleProductItem",
  props: {
    image: String
  }
}
</script>

<style scoped lang="scss">
img {
  height: auto;
  width: 6rem;
}
</style>
