<template>
  <div class="md:border md:border-gray-300 rounded-2xl p-4">
    <div class="flex justify-between items-center">
      <h1 class="text-lg font-bold">ویرایش پروفایل</h1>
      <button class="btn btn-primary hidden md:block" @click="updateProfile">ذخیره پروفایل</button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 mt-8 mb-10 gap-4">
      <input class="input col-span-1" placeholder="نام" v-model="profile.first_name">
      <input class="input col-span-1" placeholder="نام خانوادگی" v-model="profile.last_name">
      <input class="input col-span-1" placeholder="کد ملی" v-model="profile.national_code">
      <input class="input col-span-1" placeholder="تلفن ثابت" v-model="profile.telephone">
      <input class="input col-span-1" placeholder="شماره موبایل" v-model="profile.mobile">
      <input class="input col-span-1" placeholder="تاریخ تولد">
      <input class="input col-span-1" placeholder="پست الکترونیک" v-model="profile.email">
      <input class="input col-span-1" placeholder="جنسیت">
      <input class="input col-span-1" placeholder="استان">
      <input class="input col-span-1" placeholder="شهر">
      <input class="input col-span-1" placeholder="شماره شبا" v-model="profile.sheba_code">
      <input class="input col-span-1" placeholder="بانک">
    </div>
    <button class="btn btn-primary fixed bottom-20 end-4 btn-shadow rounded-full md:hidden" @click="updateProfile">ذخیره پروفایل</button>
  </div>
</template>

<script>

export default {
  name: "edit-profile",
  layout: "profile",
  data() {
    return {
      profile: {
        first_name: String,
        last_name: String,
        national_code: String,
        email: String,
        mobile: String,
        telephone: String,
        birthdate: Number,
        gender: String,
        sheba_code: String,
        state: {
          id: Number,
          name: String
        },
        city: {
          id: Number,
          name: String
        }
      }
    }
  },
  async asyncData({$axios, route}) {
    const profile = await $axios.get('/user/profile/')
    return {
      profile: profile.data.data
    }
  },
  methods: {
    updateProfile() {
      this.$axios.put('/user/profile', this.profile).then(() => {
        this.fetchUser()
      })
    }
  }
}
</script>

<style scoped>

</style>
