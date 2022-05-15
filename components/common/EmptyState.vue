<template>
  <div class="flex flex-col m-auto items-center">
    <img class="md:w-80 w-64" :src="this.emptyList.image" alt="banner-image"/>
    <div class="mt-8 md:text-xl">{{ this.emptyList.message }}</div>
  </div>
</template>

<script>
export default {
  name: "EmptyState",
  props: {
    emptyList: {
      image: String,
      message: String
    }
  }
}
</script>

<style scoped>

</style>
