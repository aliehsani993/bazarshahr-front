<template>
  <div>
    <div class="m-4 md:m-0 grid grid-cols-9">
      <div class="col-span-9 md:col-span-6">
        <swiper ref="MainSlider" :options="swiperOptions" class="swiper flex">
          <swiper-slide
            v-for="slider in desktopSlider"
            :key="slider.id"
            class="hidden md:block"
          >
            <Banner :banner="slider"></Banner>
          </swiper-slide>
          <swiper-slide
            v-for="slider in sliders"
            :key="slider.id"
            class="md:hidden"
          >
            <Banner :banner="slider"></Banner>
          </swiper-slide>
          <div
            slot="pagination"
            class="swiper-pagination swiper-pagination-white"
          ></div>
        </swiper>
      </div>
      <div class="col-span-3 space-y-4 mr-4 hidden md:block">
        <Banner :banner="desktopBanner1"></Banner>
        <Banner :banner="desktopBanner2"></Banner>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './Banner'
import { data } from '~/static/index.json'
export default {
  name: 'MainSlider',
  components: {
    Banner
  },
  props: {
    sliders: Array
  },
  data() {
    return {
      desktopBanner1: data.sliders[data.sliders.length - 2],
      desktopBanner2: data.sliders.lastItem,
      desktopSlider: data.sliders.slice(0, data.sliders.length - 2),
      swiperOptions: {
        slidesPerView: 1,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.MainSlider.$swiper
    }
  }
}
</script>

<style scoped lang="scss"></style>
