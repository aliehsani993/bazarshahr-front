<template>
  <div class="w-full featured-products__list">
    <component is="style">
      .featured-products__list {
        background: {{ background }};
      }
    </component>
    <div class="container mx-auto my-8 md:my-16">
      <Swiper ref="horizontalProductSwiper" :options="swiperOptions" class="flex mt-4 mr-4">
        <SwiperSlide class="product-horizontal__slide">
          <img :src="image" class="product-horizontal__header-image" alt="feature-products-image">
        </SwiperSlide>
        <SwiperSlide :key="index" class="product-horizontal__slide" v-for="(item, index) in products">
          <ProductItem :id="item.id" :title="item.name" :image="item.image" :price="item.price"
                       :sale-price="item.sale_price"></ProductItem>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem";

export default {
  name: "ProductHorizontalList",
  components: {
    ProductItem
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
  props: {
    products: Array,
    background: String,
    image: String
  },
  computed: {
    swiper() {
      return this.$refs.horizontalProductSwiper.$swiper
    }
  }
}
</script>

<style scoped lang="scss">
.product-horizontal {
  &__slide {
    width: auto;
  }

  &__header {
    &-image {
      width: 10rem;
      height: auto;
    }

    &-title {
      margin-right: 1rem;
    }
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
