<template>
  <div>
    <div class="m-4 md:m-0 grid grid-cols-9">
      <div class="col-span-9 md:col-span-6">
        <Swiper ref="MainSlider" :options="swiperOptions" class="swiper flex">
          <SwiperSlide :key="slider.id" v-for="slider in desktopSlider" class="hidden md:block">
            <Banner :banner="slider"></Banner>
          </SwiperSlide>
          <SwiperSlide :key="slider.id" v-for="slider in sliders" class="md:hidden">
            <Banner :banner="slider"></Banner>
          </SwiperSlide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        </Swiper>
      </div>
      <div class="col-span-3 space-y-4 mr-4 hidden md:block">
        <Banner :banner="desktopBanner1"></Banner>
        <Banner :banner="desktopBanner2"></Banner>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";

export default {
  name: "MainSlider",
  components: {
    Banner
  },
  data() {
    return {
      desktopBanner1: this.sliders[this.sliders.length - 2],
      desktopBanner2: this.sliders.lastItem,
      desktopSlider: this.sliders.slice(0, this.sliders.length - 2),
      swiperOptions: {
        slidesPerView: 1,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },
  props: {
    sliders: Array
  },
  computed: {
    swiper() {
      return this.$refs.MainSlider.$swiper
    }
  },
}
</script>

<style scoped lang="scss">
</style>
