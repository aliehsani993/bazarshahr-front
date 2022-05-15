<template>
  <div class="flex flex-col mx-auto items-center">
    <NuxtLink to="/search" class="w-full md:hidden">
      <Search class="pt-4 w-full"></Search>
    </NuxtLink>
    <MainSlider :sliders="home.slider" class="container"></MainSlider>
    <CircleCategoryList :categories="home.categories" class="mt-4 md:mt-12 flex content-center container"></CircleCategoryList>
    <section v-for="item in dynamicItems" :class="item.type !== 'featured_products' ? 'container' : 'w-full'" class="w-full">
      <ProductHorizontalList v-if="item.type === 'regular_products'" :title="item.title" :products="item.data" :link-id="item.link_id" :link-type="item.link_type" class="mt-8 md:mt-12"></ProductHorizontalList>
      <SingleBanner v-if="item.type === 'single_banner'" :banners="item.data" class="md:hidden"></SingleBanner>
      <FeaturedProductHorizontalList v-if="item.type === 'featured_products'" :background="item.background_color" :image="item.image" :products="item.data" class="py-0.5 mt-8 md:mt-16"></FeaturedProductHorizontalList>
      <DualBanner v-if="item.type === 'dual_banner'" :banners="item.data" class="mt-8"></DualBanner>
      <QuadBanner v-if="item.type === 'quad_banner'" :banners="item.data" class="mt-8"></QuadBanner>
      <GridProductList v-if="item.type === 'grid_products'" :title="item.title" :products="item.data" :link-id="item.link_id" :link-type="item.link_type" class="mt-8 container"></GridProductList>
    </section>
  </div>
</template>

<script>
import ProductHorizontalList from "./../components/product/ProductHorizontalList";
import FeaturedProductHorizontalList from "./../components/product/FeaturedProductHorizontalList";
import MainSlider from "./../components/slider/MainSlider";
import CircleCategoryList from "./../components/category/CircleCategoryList";
import Search from "./../components/common/Search";
import SingleBanner from "./../components/slider/SingleBanner";
import GridProductList from "./../components/product/GridProductList";
import DualBanner from "./../components/slider/DualBanner";
import QuadBanner from "../components/slider/QuadBanner";

export default {
  name: "index",
  auth: false,
  components: {
    QuadBanner,
    DualBanner,
    GridProductList,
    SingleBanner,
    Search,
    CircleCategoryList,
    MainSlider,
    ProductHorizontalList,
    FeaturedProductHorizontalList
  },
  data: () => ({
    home: Object
  }),
  async asyncData ({$axios, route}) {
    const home = await $axios.get(`/customer/index`)
    return {
      home: home.data,
      dynamicItems: home.data.dynamic_items
    }
  },
  methods: {}
}
</script>

<style>

</style>
