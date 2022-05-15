<template>
  <div class="grid-cols-12">
    <div class="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col h-screen justify-center items-center p-4">
      <img src="/logo.svg" alt="logo" class="w-40">
      <h2 class="font-bold mt-4 text-lg">به بازار شهر خوش آمدید</h2>
      <p class="text-gray-500 mt-2">شماره شما: {{ this.mobile }}</p>
      <input type="password" class="input w-full md:w-72 mt-8" placeholder="گذرواژه" v-model="password">
      <button class="btn btn-primary btn-shadow w-full md:w-72 mt-8" @click="login" :class="[isLoggingIn? 'loading' : '']" :disabled="isLoggingIn">ادامه</button>
      <a class="mt-12 text-sm" href="#">گذرواژه خود را فراموش کرده‌اید؟</a>
      <a class="mt-4 text-sm" href="#">ورود با رمز یکبار صصرف</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "password",
  data() {
    return {
      mobile: String,
      password: String,
      isLoggingIn: false
    }
  },
  auth: false,
  methods: {
    async login() {
      this.isLoggingIn = true

      let loginData = {
        mobile: this.mobile,
        password: this.password
      }

      try {
        await this.$auth.loginWith('localPassword', {data: loginData})
        // get cart badge
        await this.$store.dispatch('cart/init')
        await this.$router.push('/')
      } catch (err) {
      }
      this.isLoggingIn = false
    }
  },
  mounted() {
    this.mobile = this.$route.query.mobile;
  },
  asyncData(context) {
    if (context.app.$auth.loggedIn) {
      context.redirect('/profile');
    }
  }
}
</script>
