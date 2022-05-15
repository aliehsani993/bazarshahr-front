<template>
  <div>
    <div v-if="!cart.cart_items.length" class="flex h-screen">
      <div class="m-auto flex flex-col items-center">
        <img :src="emptyList.image" class="w-96">
        <div class="text-2xl font-bold">سبد خرید شما خالی است</div>
      </div>
    </div>
    <div v-if="cart.cart_items.length" class="container mx-auto">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-4 md:col-span-3  md:space-y-6 space-y-4  pt-4 pb-8 md:pb-0 md:pt-0">
          <ShopCart v-for="(cartItem, index) in cart.cart_items" :key="index" :cart="cartItem"
                    class="md:p-4 md:rounded-lg md:border"></ShopCart>
        </div>
        <div class="hidden md:block col-span-1 text-sm">
          <div class="border p-4 rounded-lg flex flex-col space-y-4">
            <div v-for="shop in cart.cart_items">
              <div class="flex justify-between text-gray-500">
                <div>{{ shop.shop_name }}</div>
                <div>
                  {{
                    shop.cart_shop_products.reduce((acc, item) => acc + that.$getDelimitedPrice(item.price, item.sale_price, item.count), '')
                  }}
                  تومان
                </div>
              </div>
              <div class="divider-h"></div>
            </div>
            <div class="flex justify-between font-bold">
              <div>جمع سبد خرید</div>
              <div>{{ this.cartTotalPrice }} تومان</div>
            </div>
            <div class="text-xs text-gray-500">هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌
              محاسبه و به این مبلغ اضافه خواهد شد
            </div>
            <NuxtLink to="/checkout/address" class="btn btn-primary">ادامه فرآیند خرید</NuxtLink>
          </div>
        </div>
        <div class="md:hidden fixed bottom-14 px-4 py-2 bg-white w-full flex justify-between border-t border-t-2">
          <NuxtLink to="/checkout/address" class="btn btn-primary">ادامه فرآیند خرید</NuxtLink>
          <div class="flex flex-col items-end justify-between p-1">
            <div class="text-xs text-gray-400">مجموع قابل پرداخت</div>
            <div class="text-sm font-bold">{{ this.cartTotalPrice }} تومان</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./../components/cart/CartItem";
import ShopCart from "./../components/cart/ShopCart";

export default {
  name: "cart",
  auth: false,
  data() {
    return {
      cart: Array,
      emptyList: Object,
      that: this,
      cartTotalPrice: Number
    }
  },
  components: {ShopCart, CartItem},
  async asyncData({$axios, route}) {
    const cart = await $axios.get(`/customer/cart`)
    return {
      cart: cart.data.data,
      emptyList: cart.data.empty_list
    }
  },
  methods: {
    calculateCartTotalPrice(cart) {
      let totalPrice = 0

      cart.cart_items.forEach(cartItem => {
        cartItem.cart_shop_products.forEach(shopProduct => {
          totalPrice += this.$calculatePrice(shopProduct.price, shopProduct.sale_price, shopProduct.count)
        })
      })
      this.cartTotalPrice = this.$getDelimitedPrice(totalPrice)
    }
  },
  mounted() {
    this.calculateCartTotalPrice(this.cart)
  }
}
</script>

<style scoped>

</style>
