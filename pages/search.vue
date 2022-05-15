<template>
  <div class="search-page z-50 fixed top-0 start-0 w-screen h-screen bg-white p-4 md:p-0">
    <div class="grid grid-cols-4">
      <div class="hidden md:block md:col-span-1">

      </div>
      <div class="col-span-4 md:col-span-2 flex flex-col items-center">
        <input type="search" v-model="search" @input="debounceInput" placeholder="متن جستجوی خود را وارد کنید"
               class="search-page__input input md:mt-16 w-full" autofocus>
        <button class="btn btn-primary btn-lg btn-circle loading justify-center justify-items-center mt-32"
                :class="searching? '': 'hidden'"></button>
        <div :class="emptySearchResult? '': 'hidden'" class="text-bold text-2xl mt-16">نتیجه ای یافت نشد</div>
        <div v-if="sData.products && sData.products.length !== 0"
             class="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 w-full">
          <div class="grid-cols-1 md:col-span-2 text-2xl font-bold">
            محصولات
          </div>
          <div class="col-span-1 cursor-pointer line-clamp-1" @click="goToProductPage(product.id)"
                    v-for="product in sData.products.slice(0, 6)">{{ product.name }}
          </div>
        </div>
        <div v-if="sData.categories && sData.categories.length !== 0"
             class="grid grid-cols-2 md:grid-cols-3 mt-8 gap-4 w-full">
          <div class="col-span-2 md:col-span-3 text-2xl font-bold">
            دسته بندیها
          </div>
          <div class="col-span-1 cursor-pointer" @click="goToProductCategoryPage(category.id)"
                    v-for="category in sData.categories.slice(0, 6)">{{ category.name }}
          </div>
        </div>
        <div v-if="sData.brands && sData.brands.length !== 0" class="grid grid-cols-2 md:grid-cols-3 mt-8 gap-4 w-full">
          <div class="col-span-2 md:col-span-3 text-2xl font-bold">
            برندها
          </div>
          <div class="col-span-1 cursor-pointer" @click="goToProductBrandPage(brand.id)"
                    v-for="brand in sData.brands.slice(0, 6)">
            {{ brand.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {debounce} from "debounce";

export default {
  name: "search",
  auth: false,
  data: () => ({
    search: '',
    searchedData: [],
    searching: false,
    active: false,
    emptySearchResult: false
  }),
  methods: {
    debounceInput: debounce(function (e) {
      this.emptySearchResult = false
      if (this.search.length > 1) {
        this.searching = true
        this.$axios.get('search?q=' + this.search).then(response => {
          this.searchedData = response.data.data
          if (this.searchedData.categories.length === 0 && this.searchedData.brands.length === 0 && this.searchedData.products.length === 0) {
            this.emptySearchResult = true
          }
          this.searching = false;
        });
      } else {
        this.emptySearchResult = false
        this.searchedData = []
      }
    }, 500),
    goToProductBrandPage(brandId) {
      this.$router.replace('products?brand=' + brandId)
    },
    goToProductCategoryPage(categoryId) {
      this.$router.replace('products?category=' + categoryId)
    },
    goToProductPage(productId) {
      this.$router.replace('products/' + productId)
    }
  },
  computed: {
    sData: function () {
      return this.searchedData
    }
  }
}
</script>

<style scoped lang="scss">
svg path {
  stroke: $color-gray-dark;
}

.search-page {
  &__input {
    height: 4rem;
    font-size: 1.3rem;
    border: none;
    border-bottom: 4px solid $color-primary;

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
      border-bottom: 4px solid $color-primary;
    }
  }
}
</style>
