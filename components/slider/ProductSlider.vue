<template>
  <div class="m-4 md:m-0">
    <Swiper ref="ProductSlider" :options="swiperOptions" class="swiper flex">
      <SwiperSlide  :key="image.src" v-for="image in images" class="flex items-center justify-center">
        <img class="rounded-xl" :src="image.src"  alt="banner-image"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>

export default {
  name: "ProductSlider",
  components: {},
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },
  props: {
    images: Array
  },
  computed: {
    swiper() {
      return this.$refs.ProductSlider.$swiper
    }
  },
}
</script>

<style scoped lang="scss">
img {
  height: 16rem;
  width: auto;
}
</style>
