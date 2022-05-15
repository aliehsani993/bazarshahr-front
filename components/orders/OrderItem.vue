<template>
  <div class="border-b md:border p-4 md:rounded-2xl">
    <div class="flex justify-between items-start">
      <div class="text-sm font-bold text-black flex items-center">شماره سفارش
        <span class="bg-gray-500 text-white px-4 py-1 rounded-full font-normal ms-4">{{ order.order_identifier }}</span>
      </div>
      <div class="rounded-lg bg-primary px-4 py-2 text-white text-sm" :class="order.status_color">{{order.status}}</div>
    </div>
    <div class="mt-4 text-sm font-bold text-black flex items-center"> مبلغ پرداخت شده
      <span class="bg-gray-500 px-4 py-1 rounded-full text-white font-normal ms-4">{{this.$toCurrency(order.price)}} تومان</span>
    </div>
    <div class="flex justify-between items-end mt-8">
      <div class="grid grid-cols-5 gap-2 gap-y-8">
        <img v-for="(product, index) in order.products" :src="product.image" alt="product-image"/>
      </div>
      <div class="text-sm">{{this.$persianDate(order.created_at).format('jYYYY-jM-jD')}}</div>
    </div>
  </div>
</template>

<script>
import SimpleProductItem from "../product/SimpleProductItem";

export default {
  name: "OrderItem",
  components: {SimpleProductItem},
  props: {
    order: Object
  }
}
</script>

<style scoped>
img {
  height: auto;
  width: 4rem;
}
</style>
