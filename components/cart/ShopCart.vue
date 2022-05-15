<template>
  <div class="md:grid md:gap-4 md:grid-cols-4 md:bg-gray-100">
    <div class="hidden md:block md:col-span-1">
      <div class="border rounded-lg flex flex-col items-center p-4 bg-white">
        <div class="border rounded-full p-4 w-24 h-24 flex items-center justify-center bg-primary">
          <font-awesome-icon class="text-5xl text-white" icon="store"></font-awesome-icon>
        </div>
        <div class="text-lg text-center mt-4">{{ cart.shop_name }}</div>
        <div class="text-xs text-gray-500 mt-4">قیمت کالاها:
          <span>{{
            cart.cart_shop_products.reduce((acc, item) => acc + that.$getDelimitedPrice(item.price, item.sale_price, item.count), '')
            }} تومان
          </span></div>
        <div v-if="false" class="text-xs text-gray-500 mt-2">مجموع تخفیف: <span>150000 تومان</span></div>
        <div v-if="false" class="text-xs text-gray-500 mt-2">مجموع قابل پرداخت: <span>150000 تومان</span></div>
        <button v-if="false" class="btn btn-outline border-2 btn-primary w-full mt-4">ثبت سفارش از این فروشگاه</button>
      </div>
    </div>
    <div class="md:col-span-3">
      <div class="md:hidden flex items-center px-4">
        <font-awesome-icon class="text-xl text-gray-500 me-4" icon="store"></font-awesome-icon>
        <div class="font-bold text-center">{{ cart.shop_name }}</div>
      </div>
      <div class="md:space-y-4 mt-2 md:mt-0">
        <CartItem v-for="product in cart.cart_shop_products" :key="product.id" :product="product"></CartItem>
      </div>
    </div>
  </div>
</template>

<script>

import CartItem from "./CartItem";

export default {
  name: "ShopCart",
  components: {CartItem},
  props: {
    cart: Object
  },
  data() {
    return {
      that: this
    }
  }
}
</script>

<style scoped>

</style>
