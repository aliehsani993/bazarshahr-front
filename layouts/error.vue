<template>
  <div class="container m-auto">
    <div class="flex flex-col md:flex-row items-center md:items-start justify-center my-24 my-32">
      <img :src="error.image" class="w-72 md:w-96"/>
      <div class="mt-16 md:ms-16 font-bold flex flex-col items-center md:items-start">
        <div class="text-xl md:text-3xl">{{ error.code }} - {{ error.message }}</div>
        <NuxtLink class="btn btn-outline btn-primary btn-xl font-bold text-lg mt-8" to="/">بازگشت به خانه</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default',// you can set a custom layout for the error page,
}
</script>
