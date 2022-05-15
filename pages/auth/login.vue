<template>
  <div class="grid-cols-12">
    <div class="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col h-screen justify-center items-center p-4">
      <img src="/logo.svg" alt="logo" class="w-40">
      <h2 class="font-bold mt-4 text-xl">به بازار شهر خوش آمدید</h2>
      <p class="text-gray-500 mt-2">وارد شوید</p>
      <input class="input w-full md:w-72 mt-8" placeholder="تلفن" v-model="mobile" required>
      <button class="btn btn-primary btn-shadow w-full md:w-72 mt-8" @click="checkPassword" :class="[isCheckingPassword? 'loading' : '']" :disabled="isCheckingPassword">ورود به بازارشهر</button>
      <a class="mt-12 text-sm">گذرواژه خود را فراموش کرده‌اید؟</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  auth: false,
  data() {
    return {
      mobile: '',
      isCheckingPassword: false
    }
  },
  methods: {
    checkPassword() {
      let mobile = this.mobile.toString().replace(/^0/, "98")
      this.isCheckingPassword = true
      this.$axios.post(`/auth/login/check-password`, {
        "mobile": mobile
      }).then(response => {
        const userHasPassword = response.data.data.has_password;
        if (userHasPassword) {
          this.$router.push({path: '/auth/password', query: {mobile: mobile}})
        } else {
          this.$axios.post(`/auth/login/otp`, {
            "Fe6g4rw": mobile
          })
          this.$router.push({path: '/auth/confirm', query: {mobile: mobile}})
        }
      }).finally(() => this.isCheckingPassword = false)

    }
  },
  asyncData(context) {
    if (context.app.$auth.loggedIn) {
      context.redirect('/profile');
    }
  }
}
</script>
