<template>
  <div class="container mx-auto">
    <ul class="w-full steps my-4 md:my-8 text-sm">
      <li class="step step-primary">اطلاعات ارسال</li>
      <li class="step step-primary">روش ارسال</li>
      <li class="step step-primary">پرداخت</li>
    </ul>
    <div class="grid grid-cols-4 gap-4 mb-32">
      <div class="col-span-4 md:col-span-3 md:space-y-6 space-y-4 md:pt-0">
        <div class="border p-4 m-4 md:m-0 rounded-lg">
          <div class="font-bold">
            محصولات ارسالی به شما
          </div>
          <CheckoutProductList class="mt-4"></CheckoutProductList>
        </div>
        <div class="border p-4 m-4 md:m-0 rounded-lg">
          <div class="flex items-center justify-between">
            آیا کد تخفیف دارید؟
            <button class="text-sm btn btn-outline btn-sm btn-primary ms-4">افزودن کد تخفیف</button>
          </div>
        </div>
        <div class="border p-4 m-4 md:m-0 rounded-lg">
          <div class="font-bold">
            خلاصه خرید شما
          </div>
          <div class="flex justify-between text-sm mt-4">
            <div>
              فروشگاه: <span class="text-gray-500">پلاستیک اسماعیلی</span>
            </div>
            <div>
              روز ارسال: <span class="text-gray-500">پنجشنبه 22 مرداد</span>
            </div>
            <div>
              مبلغ سفارش: <span class="text-gray-500">5000000 تومان</span>
            </div>
          </div>
          <div class="flex justify-between text-sm mt-4">
            <div>
              فروشگاه: <span class="text-gray-500">پلاستیک اسماعیلی</span>
            </div>
            <div>
              روز ارسال: <span class="text-gray-500">پنجشنبه 22 مرداد</span>
            </div>
            <div>
              مبلغ سفارش: <span class="text-gray-500">5000000 تومان</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-4 md:col-span-1 text-sm mx-4 md:m-0">
        <div class="border p-4 rounded-lg flex flex-col space-y-4">
          <div class="flex justify-between text-gray-500">
            <div>مجموع قیمت محصولات</div>
            <div>5000000 تومان</div>
          </div>
          <div class="divider-h"></div>
          <div class="flex justify-between text-gray-500">
            <div>مجموع هزینه ارسال</div>
            <div>5000000 تومان</div>
          </div>
          <div class="divider-h"></div>
          <div class="flex justify-between text-gray-500">
            <div>سود خرید شما (میزان تخفیف)</div>
            <div>5000000 تومان</div>
          </div>
          <div class="divider-h"></div>
          <div class="flex justify-between font-bold">
            <div>مجموع هزینه قابل پرداخت</div>
            <div>19000000 تومان</div>
          </div>
          <button class="btn btn-primary hidden md:block">ثبت سفارش</button>
        </div>
      </div>
      <div class="md:hidden fixed bottom-14 px-4 py-2 bg-white w-full flex justify-between border-t border-t-2">
        <button class="btn btn-primary">ثبت سفارش</button>
        <div class="flex flex-col items-end justify-between p-1">
          <div class="text-xs text-gray-400">مجموع قابل پرداخت</div>
          <div class="text-sm font-bold">19000000 تومان</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutProductList from "../../components/chckout/CheckoutProductList";

export default {
  name: "finalize",
  components: {CheckoutProductList}
}
</script>

<style scoped>

</style>
