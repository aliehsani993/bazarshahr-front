<template>
  <div class="flex md:border md:rounded-lg">
    <div class="divider divider-vertical mx-0 my-1 p-0 w-0.5 bg-primary md:hidden"></div>
    <div class="p-4 w-full">
      <div class="flex items-center">
        <font-awesome-icon class="text-xl text-gray-500 me-4" icon="store"></font-awesome-icon>
        <div class="font-bold text-center">{{ payment.shop.name }}</div>
      </div>
      <div class="divider-h my-4"></div>
      <CheckoutProductList :products="payment.products"></CheckoutProductList>
      <div class="mt-6">
        <div class="font-bold mb-2">
          روش پرداخت
        </div>
        <div class="form-control" v-for="(paymentMethod, index) in payment.payment_methods">
          <label class="cursor-pointer label justify-start">
            <input type="radio" :name="`payment` + number" checked="checked" class="radio radio-primary radio-sm"
                   value="">
            <span class="label-text ms-4">{{ paymentMethod.title }}</span>
          </label>
        </div>
      </div>
      <div class="mt-6">
        <div class="font-bold mb-2">
          روش پرداخت
        </div>
        <div class="form-control" v-for="(shippingMethod, index) in payment.shipping_methods">
          <label class="cursor-pointer label justify-start">
            <input type="radio" :name="`shipping` + number" checked="checked" class="radio radio-primary radio-sm" value="">
            <span class="label-text ms-4">{{ shippingMethod.title }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="divider divider-vertical mx-0 my-1 p-0 w-0.5 bg-primary md:hidden"></div>
  </div>
</template>

<script>
import CheckoutProductItem from "../../components/chckout/CheckoutProductItem";
import CheckoutProductList from "../../components/chckout/CheckoutProductList";

export default {
  name: "ShopPaymentItem",
  components: {CheckoutProductList, CheckoutProductItem},
  props: {
    payment: Object,
    number: Number
  }
}
</script>

<style scoped lang="scss">
.divider:after, .divider:before {
  background: $color-primary;
  border-radius: .5rem;
}
</style>
