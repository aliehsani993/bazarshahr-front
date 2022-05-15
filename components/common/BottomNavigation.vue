<template>
  <div class="w-full">
    <!-- <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> // if shown only tablet/mobile-->
    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow-2xl">
      <div id="tabs" class="flex justify-between">
        <NuxtLink to="/" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1" exact>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1">
            <path d="M14.2495 19.4993V14.9992C14.2495 14.8003 14.1704 14.6095 14.0298 14.4689C13.8891 14.3282 13.6984 14.2492 13.4995 14.2492H10.4995C10.3005 14.2492 10.1098 14.3282 9.96912 14.4689C9.82847 14.6095 9.74945 14.8003 9.74945 14.9992V19.4993C9.74945 19.6982 9.67045 19.8889 9.52981 20.0296C9.38918 20.1702 9.19844 20.2492 8.99954 20.2493L4.50009 20.2499C4.40159 20.2499 4.30406 20.2305 4.21305 20.1928C4.12205 20.1551 4.03936 20.0999 3.9697 20.0302C3.90005 19.9606 3.8448 19.8779 3.8071 19.7869C3.7694 19.6959 3.75 19.5984 3.75 19.4999V10.8317C3.75 10.7272 3.77183 10.6239 3.8141 10.5283C3.85637 10.4328 3.91814 10.3471 3.99545 10.2768L11.4949 3.45791C11.633 3.33238 11.8129 3.26282 11.9995 3.26282C12.186 3.26281 12.3659 3.33236 12.504 3.45787L20.0045 10.2768C20.0818 10.3471 20.1436 10.4328 20.1859 10.5283C20.2282 10.6239 20.25 10.7272 20.25 10.8317V19.4999C20.25 19.5984 20.2306 19.6959 20.1929 19.7869C20.1552 19.8779 20.1 19.9606 20.0303 20.0302C19.9606 20.0999 19.878 20.1551 19.7869 20.1928C19.6959 20.2305 19.5984 20.2499 19.4999 20.2499L14.9994 20.2493C14.8005 20.2493 14.6097 20.1702 14.4691 20.0296C14.3285 19.8889 14.2494 19.6982 14.2495 19.4993V19.4993Z" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="block text-xs">خانه</span>
        </NuxtLink>
        <NuxtLink to="/categories" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1">
            <path d="M10.5 4.5H4.5V10.5H10.5V4.5Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5 4.5H13.5V10.5H19.5V4.5Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 13.5H4.5V19.5H10.5V13.5Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.5 13.5H13.5V19.5H19.5V13.5Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="block text-xs">دسته‌بندی</span>
        </NuxtLink>
        <NuxtLink to="/shops" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1">
            <path d="M4.5 13.0864V19.5C4.5 19.6989 4.57902 19.8897 4.71967 20.0303C4.86032 20.171 5.05109 20.25 5.25 20.25H18.75C18.9489 20.25 19.1397 20.171 19.2803 20.0303C19.421 19.8897 19.5 19.6989 19.5 19.5V13.0865" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.06573 3.75H18.9343C19.0973 3.75 19.2558 3.80309 19.3859 3.90124C19.516 3.99939 19.6106 4.13725 19.6554 4.29396L21 9H3L4.34458 4.29396C4.38936 4.13725 4.48396 3.99939 4.61408 3.90124C4.7442 3.80309 4.90274 3.75 5.06573 3.75Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 9V10.5C9 11.2956 8.68393 12.0587 8.12132 12.6213C7.55871 13.1839 6.79565 13.5 6 13.5C5.20435 13.5 4.44129 13.1839 3.87868 12.6213C3.31607 12.0587 3 11.2956 3 10.5V9" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 9V10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5V9" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 9V10.5C21 11.2956 20.6839 12.0587 20.1213 12.6213C19.5587 13.1839 18.7956 13.5 18 13.5C17.2044 13.5 16.4413 13.1839 15.8787 12.6213C15.3161 12.0587 15 11.2956 15 10.5V9" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="block text-xs">فروشگاه‌ها</span>
        </NuxtLink>
        <NuxtLink to="/cart" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1">
            <path d="M3.75 6H20.1014C20.2113 6 20.3198 6.02413 20.4193 6.07068C20.5188 6.11724 20.6068 6.18508 20.6772 6.26941C20.7476 6.35374 20.7986 6.45251 20.8266 6.55872C20.8546 6.66494 20.859 6.77601 20.8393 6.88409L19.2039 15.8841C19.1725 16.0569 19.0814 16.2132 18.9466 16.3258C18.8117 16.4383 18.6417 16.5 18.466 16.5H6.29237C6.11679 16.5 5.94678 16.4384 5.81195 16.3259C5.67713 16.2135 5.58603 16.0573 5.55453 15.8845L3.18041 2.86545C3.14892 2.69273 3.05782 2.53652 2.92299 2.42406C2.78817 2.3116 2.61816 2.25 2.44258 2.25H0.75" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.75 21C7.16421 21 7.5 20.6642 7.5 20.25C7.5 19.8358 7.16421 19.5 6.75 19.5C6.33579 19.5 6 19.8358 6 20.25C6 20.6642 6.33579 21 6.75 21Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18 21C18.4142 21 18.75 20.6642 18.75 20.25C18.75 19.8358 18.4142 19.5 18 19.5C17.5858 19.5 17.25 19.8358 17.25 20.25C17.25 20.6642 17.5858 21 18 21Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.75 21.5625C7.47487 21.5625 8.0625 20.9749 8.0625 20.25C8.0625 19.5251 7.47487 18.9375 6.75 18.9375C6.02513 18.9375 5.4375 19.5251 5.4375 20.25C5.4375 20.9749 6.02513 21.5625 6.75 21.5625Z" fill="#9098B1"/>
            <path d="M18 21.5625C18.7249 21.5625 19.3125 20.9749 19.3125 20.25C19.3125 19.5251 18.7249 18.9375 18 18.9375C17.2751 18.9375 16.6875 19.5251 16.6875 20.25C16.6875 20.9749 17.2751 21.5625 18 21.5625Z" fill="#9098B1"/>
          </svg>
          <span class="block text-xs">سبد خرید</span>
        </NuxtLink>
        <NuxtLink to="/profile" class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block mb-1">
            <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.90527 20.2491C3.82736 18.6531 5.15322 17.3278 6.74966 16.4064C8.34611 15.485 10.1569 15 12.0002 15C13.8434 15 15.6542 15.4851 17.2506 16.4065C18.8471 17.3279 20.1729 18.6533 21.0949 20.2493" stroke="#9098B1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="block text-xs">پروفایل</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "BottomNavigation"
}
</script>

<style scoped lang="scss">
  .nuxt-link-active svg path {
    stroke: $color-primary ;
  }
  svg path {
    stroke: $color-gray-dark ;
  }
  span {
    color: $color-gray-dark;
  }
  .nuxt-link-active span {
    color: $color-primary;
  }
</style>
