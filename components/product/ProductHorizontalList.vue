<template>
  <div>
    <div @click="createLinkable" class="cursor-pointer flex row-auto">
      <h3 class="product-horizontal__header-title font-bold">{{this.title}}</h3>
      <div class="product-horizontal__header-link mr-auto font-extrabold">مشاهده بیشتر</div>
    </div>
    <Swiper ref="horizontalProductSwiper" :options="swiperOptions" class="flex mt-4 mr-4">
      <SwiperSlide :key="index" class="product-horizontal__slide" v-for="(item, index) in products">
        <ProductItem :id="item.id" :title="item.name" :image="item.image" :price="item.price" :sale-price="item.sale_price"></ProductItem>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductHorizontalList",
  components: {
    ProductItem
  },
  props: {
    products: Array,
    title: String,
    linkType: String,
    linkId: String,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.horizontalProductSwiper.$swiper
    }
  },
  methods: {
    createLinkable() {
      return this.$handleLinkable(this, this.linkType, this.linkId)
    }
  }
}
</script>

<style scoped lang="scss">
.product-horizontal {
  &__slide {
    width: auto;
  }

  &__header-link {
    color: $color-primary;
    font-size: .875rem;
    margin-left: 1rem;
  }

  &__header-title {
    margin-right: 1rem;
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
