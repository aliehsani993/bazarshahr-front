<template>
  <div>
    <EmptyState v-if="!favorites.length" :empty-list="emptyList" class="flex h-screen"></EmptyState>
    <div class="grid md:grid-cols-2 md:gap-4">
      <FavoriteItem v-for="(favorite, index) in favorites" :key="index" :favorite="favorite"></FavoriteItem>
    </div>
  </div>
</template>

<script>
import FavoriteItem from "../components/favorites/FavoriteItem";
import EmptyState from "../components/common/EmptyState";

export default {
  name: "favorites",
  components: {FavoriteItem, EmptyState},
  layout: "profile",
  data() {
    return {
      favorites: Array,
      emptyList: Object
    }
  },
  async asyncData({$axios, route}) {
    const favorites = await $axios.get(`/customer/user/profile/favorites`)
    return {
      favorites: favorites.data.data,
      emptyList: favorites.data.empty_list
    }
  }
}
</script>

<style scoped>

</style>
