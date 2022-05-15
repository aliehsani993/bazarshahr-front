<template>
  <div class="container mx-auto">
    <ul class="w-full steps my-4 md:my-8 text-sm">
      <li class="step step-primary">اطلاعات ارسال</li>
      <li class="step">روش ارسال</li>
      <li class="step">پرداخت</li>
    </ul>

    <div class="grid grid-cols-4 gap-4">
      <div v-bind:class="{ hidden: isChangingAddress }"
           class="col-span-4 md:col-span-3 md:space-y-6 space-y-4 pb-8 md:pb-0 md:pt-0">
        <div class="border p-4 m-4 md:m-0 rounded-lg">
          <div>ارسال به</div>
          <div class="flex items-center mt-4">
            <font-awesome-icon class="text-xl text-gray-500 me-4" icon="map-marker-alt"></font-awesome-icon>
            {{selectedAddress.country.name}}, {{selectedAddress.state.name}}, {{selectedAddress.city.name}}, {{selectedAddress.district ? selectedAddress.district.name + ',' : ''}} {{selectedAddress.address}}
          </div>
          <div class="mt-4 text-sm text-gray-500">دریافت کننده: <span>{{selectedAddress.transferee_first_name}} {{selectedAddress.transferee_last_name}}</span></div>
          <div class="flex justify-start md:justify-end mt-4 w-full">
            <button class="btn btn-primary btn-outline btn-sm" v-on:click="changeAddress">تغییر یا ویرایش آدرس</button>
          </div>
        </div>
      </div>
      <div v-bind:class="{ hidden: !isChangingAddress }"
           class="col-span-5 md:col-span-3 md:space-y-6 space-y-4 pb-8 md:pb-0 md:pt-0">
        <div class="md:border md:p-4 m-4 md:m-0 md:rounded-lg">
          <div class="flex justify-between">
            آدرس تحویل سفارش را انتخاب نمایید:

            <font-awesome-icon v-on:click="changeAddress"
                               class="text-xl text-gray-500 cursor-pointer"
                               icon="times"></font-awesome-icon>
          </div>
          <div class="divider-h my-4"></div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AddressItem v-for="(address, index) in addresses" :index="index" :key="index" :address="address"></AddressItem>
          </div>
        </div>
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
          <NuxtLink to="/checkout/payment" class="btn btn-primary">ادامه فرآیند خرید</NuxtLink>
        </div>
      </div>
      <div class="md:hidden fixed bottom-14 px-4 py-2 bg-white w-full flex justify-between border-t border-t-2">
        <NuxtLink class="btn btn-primary" to="/checkout/payment">ادامه فرآیند خرید</NuxtLink>
        <div class="flex flex-col items-end justify-between p-1">
          <div class="text-xs text-gray-400">مجموع قابل پرداخت</div>
          <div class="text-sm font-bold">19000000 تومان</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddressItem from "../../components/address/AddressItem";

export default {
  name: "address",
  components: {AddressItem},
  methods: {
    changeAddress: function (event) {
      this.isChangingAddress = !this.isChangingAddress
    },
    selectAddress(index) {
      this.selectedAddress = this.addresses[index]
      this.isChangingAddress = false
    }
  },
  data() {
    return {
      isChangingAddress: false,
      addresses: Array,
      selectedAddress: Object
    }
  },
  async asyncData({$axios, route}) {
    const addresses = await $axios.get('user/profile/delivery-addresses')
    return {
      addresses: addresses.data.data,
      selectedAddress: addresses.data.data[addresses.data.data.length - 1]
    }
  },

}
</script>

<style scoped>

</style>
