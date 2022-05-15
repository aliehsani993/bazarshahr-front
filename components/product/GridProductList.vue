<template>
  <div>
    <div class="p-4 md:hidden">
      <div @click="createLinkable" class="cursor-pointer flex row-auto mb-4">
        <h3 class="simple-product-list__header-title font-bold">{{title}}</h3>
        <div class="simple-product-list__header-link mr-auto font-extrabold">مشاهده بیشتر</div>
      </div>
      <div class="simple-product-list grid grid-cols-3">
        <div :key="index" class="col-span-1" v-for="(item, index) in products">
          <SimpleProductItem :image="item.image"></SimpleProductItem>
        </div>
      </div>
    </div>
    <ProductHorizontalList  :title="title" :products="products" class="hidden md:block"></ProductHorizontalList>
  </div>
</template>

<script>
import SimpleProductItem from "./../product/SimpleProductItem";
import ProductHorizontalList from "./../product/ProductHorizontalList";

export default {
  name: "SimpleProductList",
  components: {ProductHorizontalList, SimpleProductItem},
  props: {
    products: Array,
    title: String,
    linkType: String,
    linkId: String,
  },
  methods: {
    createLinkable() {
      return this.$handleLinkable(this, this.linkType, this.linkId)
    }
  }
}
</script>

<style scoped lang="scss">
.simple-product-list {
  &__slide {
    width: auto;
  }

  &__header {
    &-image {
      width: 10rem;
      height: auto;
    }

    &-link {
      color: $color-primary;
      font-size: .875rem;
    }

    &-title {
    }
  }

  div:nth-child(3n) {
    border-left: none;
  }

  div:nth-child(6) ~ div {
    border-bottom: none;
  }

  div {
    border-left: 1px solid $color-gray-light;
    border-bottom: 1px solid $color-gray-light;
  }
}
</style>
