<template>
  <div class="md:border md:border-gray-300 rounded-2xl p-4">
    <div class="flex justify-between items-center">
      <h1 class="text-lg font-bold">ویرایش آدرس</h1>
      <button class="btn btn-primary hidden md:block" @click="addAddress">ذخیره آدرس</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 mt-8 mb-10 gap-4">
      <input class="input col-span-1" placeholder="نام" v-model="address.transferee_first_name">
      <input class="input col-span-1" placeholder="نام خانوادگی" v-model="address.transferee_last_name">
      <input class="input col-span-1" placeholder="کد پستی" v-model="address.postal_code">
      <input class="input col-span-1" placeholder="تلفن ثابت" v-model="address.phone">
      <input class="input col-span-1" placeholder="شماره موبایل" v-model="address.mobile">
      <input class="input col-span-1" placeholder="استان">
      <input class="input col-span-1" placeholder="شهر">
      <input class="input col-span-2" placeholder="آدرس" v-model="address.address">
    </div>
    <button class="btn btn-primary fixed bottom-20 end-4 btn-shadow rounded-full md:hidden" @click="addAddress">ذخیره آدرس</button>
  </div>
</template>

<script>
export default {
  name: "edit-address",
  layout: "profile",
  data() {
    return {
      id: Number,
      address: {
        transferee_first_name: String,
        transferee_last_name: String,
        postal_code: '3713811554',
        phone: String,
        mobile: String,
        address: String
      }
    }
  },
  async asyncData({$axios, route}) {
    // todo: load states and cities
    const addressId = route.params.id
    const address = await $axios.get(`/user/profile/delivery-addresses/${addressId}`)
    return {
      id: addressId,
      address: address.data.data
    }
  },
  methods: {
    addAddress() {
      // todo: use real data for country, state and city
      const fakeData = Object.assign(this.address, {country: 1, state: 19, city: 599})
      this.$axios.put(`/user/profile/delivery-addresses/${this.id}`, fakeData).then(function () {
        this.$router.back()
      }.bind(this))
    }
  }
}
</script>

<style scoped>

</style>
