<template>
  <div class="grid-cols-12">
    <div class="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col h-screen justify-center items-center p-4">
      <img src="/logo.svg" alt="logo" class="w-40">
      <h2 class="font-bold mt-4 text-lg">به بازار شهر خوش آمدید</h2>
      <p class="text-gray-500 mt-2">وارد شوید</p>
      <input type="number" class="input w-full md:w-72 mt-8" placeholder="کد تایید" v-model="code">
      <button class="btn btn-primary btn-shadow w-full md:w-72 mt-8" @click="login" :class="[isLoggingIn? 'loading' : '']" :disabled="isLoggingIn">ادامه</button>
      <a class="mt-12 text-sm" href="#">گذرواژه خود را فراموش کرده‌اید؟</a>
      <a class="mt-4 text-sm" href="#">ورود با رمز عبور</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirm",
  auth: false,
  data() {
    return {
      mobile: String,
      code: String,
      isLoggingIn: false
    }
  },
  methods: {
    async login() {
      this.isLoggingIn = true
      let loginData = {
        mobile: this.mobile,
        code: this.code
      }
      try {
        await this.$auth.loginWith('local', {data: loginData})
        // get cart badge
        await this.$store.dispatch('cart/init')
        await this.$router.push('/')
      } catch (err) {
      }
      this.isLoggingIn = false
    }
  },
  asyncData(context) {
    if (context.app.$auth.loggedIn) {
      context.redirect('/profile');
    }
  },
  mounted() {
    this.mobile = this.$route.query.mobile;
  },
}
</script>

<style scoped>
  button {
  }
</style>
