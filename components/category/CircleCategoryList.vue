<template>
  <div>
    <Swiper ref="circleCategorySwiper" :options="swiperOptions" class="flex">
      <SwiperSlide :key="index" class="circle-category-list__slide" v-for="(item, index) in categories">
        <NuxtLink :to="'/products?category=' + item.id">
          <CircleCategoryItem :id="item.id" :background="item.color" :icon="item.icon" :title="item.name"></CircleCategoryItem>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import CircleCategoryItem from "./CircleCategoryItem";

export default {
  name: "CircleCategoryList",
  components: {
    CircleCategoryItem
  },
  props: {
    categories: Array
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.circleCategorySwiper.$swiper
    }
  }
}
</script>

<style scoped lang="scss">
.circle-category-list {
  &__slide {
    width: auto;
  }
}

.swiper-slide {
  &:first-child {
    margin-right: 1rem;
  }

  &:last-child {
    margin-left: 1rem;
  }
}
</style>
