<template>
  <div class="container mx-auto">
    <ul class="w-full steps my-4 md:my-8 text-sm">
      <li class="step step-primary">اطلاعات ارسال</li>
      <li class="step step-primary">روش ارسال</li>
      <li class="step">پرداخت</li>
    </ul>

    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-4 md:col-span-3 md:space-y-6 space-y-8 pb-8 md:pb-0 md:pt-0">
        <ShopPaymentItem v-for="(payment, index) in payments" :key="index" :number="index" :payment="payment"></ShopPaymentItem>
      </div>
      <div class="hidden md:block col-span-1 text-sm">
        <div class="border p-4 rounded-lg flex flex-col space-y-4">
          <div class="flex justify-between text-gray-500">
            <div>پلاستیک اسماعیلی (12)</div>
            <div>16000000 تومان</div>
          </div>
          <div class="divider-h"></div>
          <div class="flex justify-between text-gray-500">
            <div>موبایل فروشی وحدت (12)</div>
            <div>5000000 تومان</div>
          </div>
          <div class="divider-h"></div>
          <div class="flex justify-between font-bold">
            <div>جمع سبد خرید</div>
            <div>21000000 تومان</div>
          </div>
          <div class="text-xs text-gray-500">هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی شما‌
            محاسبه و به این مبلغ اضافه خواهد شد
          </div>
          <NuxtLink to="/checkout/finalize" class="btn btn-primary">ادامه فرآیند خرید</NuxtLink>
        </div>
      </div>
      <div class="md:hidden fixed bottom-14 px-4 py-2 bg-white w-full flex justify-between border-t border-t-2">
        <NuxtLink to="/checkout/finalize" class="btn btn-primary">ادامه فرآیند خرید</NuxtLink>
        <div class="flex flex-col items-end justify-between p-1">
          <div class="text-xs text-gray-400">مجموع قابل پرداخت</div>
          <div class="text-sm font-bold">19000000 تومان</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleProductList from "../../components/product/GridProductList";
import SimpleProductItem from "../../components/product/SimpleProductItem";
import CheckoutProductItem from "../../components/chckout/CheckoutProductItem";
import ShopPaymentItem from "../../components/chckout/ShopPaymentItem";

export default {
  name: "payment",
  components: {ShopPaymentItem, CheckoutProductItem, SimpleProductItem, SimpleProductList},
  data() {
    return {
      payments: Array
    }
  },
  async asyncData({$axios, route}) {
    const payments = await $axios.get(`/customer/cart/shipping-payment-options`)
    return {
      payments: payments.data.data,
    }
  }
}
</script>

<style scoped>

</style>
