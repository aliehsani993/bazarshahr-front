<template>
  <div class="container m-auto grid grid-cols-1 gap-4">
    <ShopItem class="col-span-1" v-for="(shop, index) in shops" :key="index" :shop="shop"></ShopItem>
  </div>
</template>

<script>
import ShopItem from "../../components/shop/ShopItem";
export default {
  name: "index",
  components: {ShopItem},
  data: () => ({
    shops: Object
  }),
  async asyncData({$axios, route}) {
    const shops = await $axios.get(`/shops`)
    return {
      shops: shops.data.data,
    }
  }
}
</script>

<style scoped>

</style>
