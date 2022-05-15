<template>
  <div class="border rounded-lg p-3 w-24 flex flex-col items-center">
    <img alt="category-image" :src="category.image === null ? '/img/place-holder.jpg': category.image"/>
    <div class="text-xs mt-4 text-center h-8 line-clamp-2">{{category.name}}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: Object
  }
}
</script>

<style scoped>
img {
  width: 4.5rem;
  height: 4.5rem;
}
</style>
