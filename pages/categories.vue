<template>
  <div class="flex flex-col items-center">
    <div class="container px-4">
      <div class="text-sm breadcrumbs">
        <ul class="text-sm md:text-xs">
          <li><a class="text-gray-700">بازارشهر</a></li>
          <li><a class="text-gray-700">کالای دیجیتال</a></li>
          <li><a class="text-gray-700">موبایل</a></li>
        </ul>
      </div>
    </div>
    <CategoryHorizontalList v-for="(category, index) in categories" :key="index" class="container mb-4"
                            v-if="category.children.length !== 0" :category="category"></CategoryHorizontalList>
  </div>
</template>

<script>
import CategoryItem from "../components/category/CategoryItem";
import CategoryHorizontalList from "../components/category/CategoryHorizontalList";

export default {
  name: "categories",
  components: {CategoryHorizontalList, CategoryItem},
  auth: false,
  data: () => ({
    categories: Object
  }),
  async asyncData({$axios, route}) {
    const categories = await $axios.get(`/categories`)
    return {
      categories: categories.data.data,
    }
  }
}
</script>

<style scoped>

</style>
