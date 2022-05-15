<template>
  <div class="text-xs flex flex-col items-center space-y-4 w-max">
    <img :src="this.image" alt="product-image mb-2"/>
    <div class="font-bold">{{count}} عدد</div>
  </div>
</template>

<script>
export default {
  name: "CheckoutProductItem",
  props: {
    image: String,
    count: Number
  }
}
</script>

<style scoped>
img {
  height: auto;
  width: 4rem;
}
</style>
