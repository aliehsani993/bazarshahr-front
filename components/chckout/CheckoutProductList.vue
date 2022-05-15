<template>
  <div class="simple-product-list grid gap-2 grid-cols-4 xl:grid-cols-12 lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-4">
    <div :key="index" class="col-span-1" v-for="(item, index) in products">
      <CheckoutProductItem :image="item.image" :count="item.count"></CheckoutProductItem>
    </div>
  </div>
</template>

<script>
import CheckoutProductItem from "./CheckoutProductItem";
export default {
  name: "CheckoutProductList",
  components: {CheckoutProductItem},
  props: {
    products: Array
  }
}
</script>

<style scoped>

</style>
