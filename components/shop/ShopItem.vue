<template>
  <div class="border-b-2 md:border-2 rounded-xl">
    <div class="flex  p-4 md:border-b-2">
      <img class="w-20 h-20 rounded-lg border-2 " :src="shop.logo"/>
      <div class="flex flex-col ms-4">
        <div class="text-lg">{{ shop.name }}</div>
        <div class="text-sm mt-2" v-if="shop.score.count !== 0">
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          {{ shop.score.value }} امتیاز از {{shop.score.count}} رای
        </div>
      </div>
    </div>
    <GridProductList  class="p-4 bg-white" :products="shop.top_products"></GridProductList>
  </div>
</template>

<script>
import SimpleProductList from "../product/GridProductList";
import GridProductList from "../product/GridProductList";
export default {
  name: "ShopItem",
  components: {SimpleProductList, GridProductList},
  props: {
    shop: Object
  }
}
</script>

<style scoped lang="scss">
</style>
