<template>
  <div>
    <div class="flex row-auto m-4">
      <h3 class="product-horizontal__header-title font-bold">{{category.name}}</h3>
    </div>
    <Swiper ref="horizontalProductSwiper" :options="swiperOptions" class="flex mt-4 ms-6">
      <SwiperSlide :key="index" class="product-horizontal__slide" v-for="(item, index) in category.children">
        <CategoryItem :category="item"></CategoryItem>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";

export default {
  name: "CategoryHorizontalList",
  components: {CategoryItem},
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true
      }
    }
  },
  props: {
    category: Object
  },
  computed: {
    swiper() {
      return this.$refs.horizontalProductSwiper.$swiper
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-slide {
  width: auto;

  &:first-child {
    margin-right: 1rem;
  }

  &:last-child {
    margin-left: 1rem;
  }
}
</style>
