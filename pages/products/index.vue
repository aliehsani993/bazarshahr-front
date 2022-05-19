<template>
  <div class="drawer">
    <input id="filter-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <div class="container mx-auto">
        <Search class="md:hidden mt-4"></Search>
        <div class="md:hidden mt-4 px-4">
          <div class="flex items-start space-x-4 rtl:space-x-reverse">
            <div>
              <button class="btn btn-ghost btn-sm ps-0 drawer-button">
                <font-awesome-icon
                  class="text-gray-600 me-1"
                  icon="filter"
                ></font-awesome-icon>
                <label for="filter-drawer" class="drawer-button">فیلتر</label>
              </button>
            </div>
            <div>
              <a
                class="btn btn-ghost btn-sm ps-0"
                @click="sortModalOpen = !sortModalOpen"
              >
                <font-awesome-icon
                  class="text-gray-600 me-1"
                  icon="sort-amount-down"
                ></font-awesome-icon>
                <label>مرتب‌سازی</label>
              </a>
              <div
                class="modal pt-4 pb-12"
                :class="sortModalOpen ? 'modal-open' : ''"
              >
                <div dir="rtl" class="modal-box">
                  <div
                    class="modal-action mt-2 flex flex-wrap flex-row-reverse space-y-4 rtl:space-y-reverse space-x-4"
                  >
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'popular'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('popular')"
                    >
                      محبوب‌ترین
                    </button>
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'best_selling'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('best_selling')"
                    >
                      پرفروش‌ترین
                    </button>
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'least_price'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('least_price')"
                    >
                      ارزان‌ترین
                    </button>
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'most_price'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('most_price')"
                    >
                      گران‌ترین
                    </button>
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'highest_discount'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('highest_discount')"
                    >
                      پرتخفیف‌ترین
                    </button>
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'newest'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('newest')"
                    >
                      جدیدترین
                    </button>
                    <button
                      class="btn btn-outline btn-sm"
                      :class="
                        sort === 'oldest'
                          ? 'rounded-lg bg-primary text-white'
                          : ''
                      "
                      @click="changeSortMobile('oldest')"
                    >
                      قدیمی‌ترین
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4">
          <div class="mt-6 hidden md:col-span-1 md:block">
            <ProductFilter></ProductFilter>
          </div>
          <div class="col-span-4 md:col-span-3 p-4 flex flex-col items-center">
            <div class="container">
              <div class="text-sm breadcrumbs">
                <ul class="text-sm md:text-xs">
                  <li><a class="text-gray-700">بازارشهر</a></li>
                  <li><a class="text-gray-700">کالای دیجیتال</a></li>
                  <li><a class="text-gray-700">موبایل</a></li>
                </ul>
              </div>
            </div>
            <div class="container my-4 hidden md:block">
              <div
                class="font-bold text-sm text-gray-500 flex flex-row items-center"
              >
                <div class="w-36">مرتب‌سازی بر اساس:</div>
                <ul
                  class="menu horizontal w-full space-x-2 rtl:space-x-reverse text-xs"
                >
                  <li
                    :class="
                      sort === 'popular'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('popular')"
                  >
                    <a>محبوب‌ترین</a>
                  </li>
                  <li
                    :class="
                      sort === 'best_selling'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('best_selling')"
                  >
                    <a>پرفروش‌ترین</a>
                  </li>
                  <li
                    :class="
                      sort === 'least_price'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('least_price')"
                  >
                    <a>ارزان‌ترین</a>
                  </li>
                  <li
                    :class="
                      sort === 'most_price'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('most_price')"
                  >
                    <a>گران‌ترین</a>
                  </li>
                  <li
                    :class="
                      sort === 'highest_discount'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('highest_discount')"
                  >
                    <a>پرتخفیف‌ترین</a>
                  </li>
                  <li
                    :class="
                      sort === 'newest'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('newest')"
                  >
                    <a>جدیدترین</a>
                  </li>
                  <li
                    :class="
                      sort === 'oldest'
                        ? 'rounded-lg bg-primary text-white'
                        : ''
                    "
                    @click="changeSort('oldest')"
                  >
                    <a>قدیمی‌ترین</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <EmptyState
                v-if="!products.length"
                :empty-list="emptyList"
                class="flex h-screen"
              ></EmptyState>
              <div>
                <div
                  class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2"
                >
                  <list-product-item
                    v-for="product in products"
                    :id="product.id"
                    :key="product.id"
                    :image="product.image"
                    :price="product.price"
                    :title="product.name"
                    :sale-price="product.sale_price"
                  ></list-product-item>
                </div>
                <Pagination :pagination="pagination"></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="filter-drawer" class="drawer-overlay"></label>
      <ProductFilter
        class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content"
      ></ProductFilter>
    </div>
  </div>
</template>

<script>
import ListProductItem from '../../components/product/ListProductItem'
import Pagination from '../../components/common/Pagination'
import ChipGroup from '../../components/chip/ChipGroup'
import Range from '../../components/common/Range'
import Search from '../../components/common/Search'
import Filter from '../../components/product/ProductFilter'
import ProductFilter from '../../components/product/ProductFilter'
import EmptyState from '../../components/common/EmptyState'

export default {
  name: 'Index',
  components: {
    ProductFilter,
    Filter,
    Search,
    Range,
    ChipGroup,
    Pagination,
    ListProductItem,
    EmptyState
  },
  auth: false,
  async asyncData({ $axios, route }) {
    const products = await $axios.get(`/api/products`, {
      params: route.query
    })
    return {
      products: products.data,
      sort: route.query.sort,
      pagination: products.data.pagination,
      emptyList: products.data.empty_list
    }
  },
  data: () => ({
    products: Array,
    pagination: Object,
    sort: '',
    sortModalOpen: false,
    page: null,
    madeInIran: null,
    inStock: null,
    emptyList: Object
  }),
  watch: {
    '$route.query': {
      handler() {
        this.$nuxt.refresh()
      },
      immediate: true
    }
  },
  watchQuery: ['page'],
  methods: {
    async changeSortMobile(sort) {
      this.sortModalOpen = false
      await this.changeSort(sort)
    },
    async changeMadeInIran() {
      this.madeInIran = this.madeInIran === true ? null : true
      await this.$router.push('/products' + this.buildParams())
    },
    async changeInStock() {
      this.inStock = this.inStock === true ? null : true
      await this.$router.push('/products' + this.buildParams())
    },
    async changePage(page) {
      this.page = page
      await this.$router.push('/products' + this.buildParams())
    },
    async changeSort(sort) {
      this.sort = sort
      await this.$router.push('/products' + this.buildParams())
    },
    buildParams() {
      let params = ''
      if (this.sort !== '') {
        params = this.addParam(params, `sort=${this.sort}`)
      }
      if (this.inStock !== null) {
        params = this.addParam(params, `in_stock=${this.inStock.toString()}`)
      }
      if (this.madeInIran !== null) {
        params = this.addParam(
          params,
          `made_in_iran=${this.madeInIran.toString()}`
        )
      }
      if (this.page !== null) {
        params = this.addParam(params, `page=${this.page.toString()}`)
      }
      return params
    },
    addParam(params, param) {
      if (params === '') {
        return `?${param}`
      } else {
        return params + `&${param}`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.menu a {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}
@media only screen and (min-width: 768px) {
  .drawer-content {
    overflow-y: hidden;
    max-height: none;
  }
}
</style>
