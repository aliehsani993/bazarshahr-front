<template>
  <div>
    <EmptyState v-if="!products.length" :empty-list="emptyList" class="flex h-screen"></EmptyState>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      <ProductItem v-for="(product, index) in products" :key="index" :image="product.image" :price="product.price" :id="product.id" :sale-price="product.sale_price"></ProductItem>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/product/ListProductItem";
import EmptyState from "../components/common/EmptyState";

export default {
  name: "product-view-histories",
  components: {ProductItem, EmptyState},
  layout: "profile",
  data() {
    return {
      products: Array,
      emptyList: Object
    }
  },
  async asyncData({$axios, route}) {
    const products = await $axios.get(`user/activity/product-views`)
    return {
      products: products.data.data,
      emptyList: products.data.empty_list
    }
  }
}
</script>

<style scoped>

</style>
