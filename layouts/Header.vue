<template>
  <div class="shadow mb-8">
    <div class="navbar container m-auto text-neutral-content rounded-box">
      <div class="navbar-start">
        <div class="flex-none hidden lg:flex">
          <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="flex-1 hidden px-2 mx-2 lg:flex">
          <NuxtLink to="/" exact><span class="text-lg font-bold text-gray-700">بازارشهر</span></NuxtLink>
        </div>
      </div>

      <div class="px-2 mx-2 navbar-center flex">
        <div class="flex items-stretch text-black">
          <NuxtLink v-for="(category, index) in categories" :key="index" :to="`/products?category=` + category.id"
                    class="btn btn-ghost btn-sm rounded-btn text-xs">
            {{ category.name }}
          </NuxtLink>
        </div>
      </div>

      <div class="navbar-end">
        <div class="flex-none">
          <NuxtLink to="/search" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </NuxtLink>
        </div>
        <div class="flex-none">
          <NuxtLink to="/cart" class="btn btn-square btn-ghost">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="inline-block mb-1">
              <path
                d="M3.75 6H20.1014C20.2113 6 20.3198 6.02413 20.4193 6.07068C20.5188 6.11724 20.6068 6.18508 20.6772 6.26941C20.7476 6.35374 20.7986 6.45251 20.8266 6.55872C20.8546 6.66494 20.859 6.77601 20.8393 6.88409L19.2039 15.8841C19.1725 16.0569 19.0814 16.2132 18.9466 16.3258C18.8117 16.4383 18.6417 16.5 18.466 16.5H6.29237C6.11679 16.5 5.94678 16.4384 5.81195 16.3259C5.67713 16.2135 5.58603 16.0573 5.55453 15.8845L3.18041 2.86545C3.14892 2.69273 3.05782 2.53652 2.92299 2.42406C2.78817 2.3116 2.61816 2.25 2.44258 2.25H0.75"
                stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M6.75 21C7.16421 21 7.5 20.6642 7.5 20.25C7.5 19.8358 7.16421 19.5 6.75 19.5C6.33579 19.5 6 19.8358 6 20.25C6 20.6642 6.33579 21 6.75 21Z"
                stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M18 21C18.4142 21 18.75 20.6642 18.75 20.25C18.75 19.8358 18.4142 19.5 18 19.5C17.5858 19.5 17.25 19.8358 17.25 20.25C17.25 20.6642 17.5858 21 18 21Z"
                stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M6.75 21.5625C7.47487 21.5625 8.0625 20.9749 8.0625 20.25C8.0625 19.5251 7.47487 18.9375 6.75 18.9375C6.02513 18.9375 5.4375 19.5251 5.4375 20.25C5.4375 20.9749 6.02513 21.5625 6.75 21.5625Z"
                fill="#9098B1"/>
              <path
                d="M18 21.5625C18.7249 21.5625 19.3125 20.9749 19.3125 20.25C19.3125 19.5251 18.7249 18.9375 18 18.9375C17.2751 18.9375 16.6875 19.5251 16.6875 20.25C16.6875 20.9749 17.2751 21.5625 18 21.5625Z"
                fill="#9098B1"/>
            </svg>
          </NuxtLink>
        </div>
        <div class="flex-none">
          <NuxtLink to="/profile" class="avatar">
            <div class="rounded-full w-10 h-10 m-1">
              <img src="/img/profile.png">
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/common/Search";

export default {
  name: "Header",
  components: {Search},
  data: () => ({
    categories: Object,
  }),
  async beforeMount() {
    await this.$store.dispatch('menu/init')
    if (this.$auth.loggedIn) {
      await this.$store.dispatch('cart/init')
    }
    this.categories = this.$store.state.menu.megaMenu
  }
}
</script>

<style scoped lang="scss">
svg path {
  stroke: $color-gray-dark;
}
</style>
