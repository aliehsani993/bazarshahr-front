<template>
  <div class="flex flex-col mx-auto items-center mt-4">
    <button
      class="btn fixed bottom-16 end-4 btn-primary rounded-full md:hidden z-50"
      @click="addToCart"
    >
      افزودن به سبد خرید
    </button>

    <div class="container p-4">
      <div class="text-sm breadcrumbs">
        <ul class="text-sm md:text-xs">
          <li><a class="text-gray-700">بازارشهر</a></li>
          <li v-for="category in product.categories">
            <a class="text-gray-700">{{ category.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container grid grid-cols-4">
      <ProductSlider
        :images="product.media"
        class="col-span-4 md:col-span-1 py-8"
      ></ProductSlider>
      <div class="flex flex-col col-span-4 md:col-span-2 md:me-4">
        <div class="relative">
          <h1 class="font-bold p-4 ml-12 text-xl">
            {{ product.name }}
          </h1>
          <svg
            v-if="customerProduct !== null && customerProduct.is_favorite"
            class="absolute end-4 top-5 product-detail__favorite cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="toggleFavorite"
          >
            <path
              d="M472.096 270.486L278.946 470.196C266.304 483.268 245.616 483.268 232.974 470.196L39.824 270.486C-16.197 212.517 -13.104 116.653 49.041 62.862C103.316 15.884 186.371 24.359 236.32 75.925L256.007 96.249L275.694 75.925C325.641 24.36 408.694 15.884 462.969 62.859C525.118 116.649 528.212 212.515 472.096 270.486Z"
            />
          </svg>
          <svg
            v-else
            class="absolute end-4 top-5 product-detail__not-favorite cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            @click="toggleFavorite"
          >
            <path
              d="M462.969 62.859C438.777 41.92 408.871 31.998 378.724 32C341.236 32 303.379 47.344 275.693 75.924L256.008 96.248L236.32 75.924C208.633 47.34 170.783 32 133.291 32C103.148 32 73.23 41.926 49.041 62.861C-13.104 116.652 -16.197 212.516 39.824 270.484L232.974 470.195C239.295 476.732 247.627 480 255.961 480C264.293 480 272.625 476.732 278.947 470.195L472.096 270.484C528.211 212.516 525.117 116.648 462.969 62.859ZM437.594 237.115L255.961 424.918L74.34 237.129C42.098 203.765 34.459 138.971 80.455 99.154C120.359 64.615 175.047 81.659 201.842 109.32C231.279 139.709 210.354 118.108 256.008 165.238C293.767 126.256 282.996 137.375 310.172 109.32C336.59 82.047 391.433 64.427 431.557 99.152C477.123 138.59 470.518 203.101 437.594 237.115Z"
            />
          </svg>
        </div>
        <div class="hidden md:divider-h md:block mt-4"></div>

        <div
          v-if="isPurchasable"
          class="flex self-end md:self-start md:ps-4 me-4"
        >
          <div class="product-detail__final-price mt-2 me-1">
            {{ product.price }}
          </div>
          <svg
            class="product-detail__final-price-tooman"
            width="14"
            height="23"
            viewBox="0 0 14 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.59722 19.0545H2.26994C2.00085 19.0545 1.75964 19.0073 1.54631 18.9127C1.38388 18.8424 1.24206 18.7467 1.12085 18.6255C0.99964 18.5042 0.903883 18.3624 0.83358 18.2C0.739034 17.9867 0.691761 17.7455 0.691761 17.4764V13.8109H1.88085V17.4764C1.88085 17.6242 1.90873 17.7261 1.96449 17.7818C2.01782 17.8352 2.11964 17.8618 2.26994 17.8618H2.59722V19.0545ZM5.36545 18.0109C5.39697 17.9236 5.41273 17.8291 5.41273 17.7273C5.41273 17.7006 5.41152 17.6739 5.40909 17.6473C5.39697 17.4606 5.34242 17.2994 5.24545 17.1636C5.14606 17.0255 5.03091 16.9564 4.9 16.9564C4.72061 16.9564 4.57273 17.063 4.45636 17.2764C4.41515 17.3491 4.37758 17.4388 4.34364 17.5455C4.33152 17.5794 4.31818 17.6206 4.30364 17.6691L4.28909 17.7236L4.27455 17.7709C4.41515 17.8921 4.59455 17.9927 4.81273 18.0727C4.99212 18.1358 5.13515 18.1673 5.24182 18.1673C5.28545 18.1673 5.32667 18.1152 5.36545 18.0109ZM4.9 15.7636C5.46242 15.7636 5.89152 15.9988 6.18727 16.4691C6.30121 16.6509 6.38727 16.857 6.44545 17.0873C6.49394 17.2836 6.51818 17.4703 6.51818 17.6473C6.51818 18.2364 6.3703 18.6776 6.07455 18.9709C5.96303 19.0848 5.83212 19.1721 5.68182 19.2327C5.56061 19.2812 5.43818 19.3091 5.31455 19.3164C5.2903 19.3188 5.25636 19.32 5.21273 19.32C4.9097 19.32 4.58727 19.2448 4.24545 19.0945C4.12909 19.0461 4.00424 18.9842 3.87091 18.9091L3.79091 18.8655L3.71818 18.8255C3.66242 18.7915 3.62242 18.7685 3.59818 18.7564C3.39939 18.9552 3.06848 19.0545 2.60545 19.0545H2.40909V17.8618H2.55818C2.80303 17.8618 2.96424 17.8109 3.04182 17.7091C3.07576 17.663 3.14364 17.4812 3.24545 17.1636C3.25273 17.1418 3.26 17.1212 3.26727 17.1018C3.27455 17.0752 3.28424 17.0485 3.29636 17.0218C3.32061 16.9539 3.34848 16.8885 3.38 16.8255C3.46242 16.6485 3.55939 16.4921 3.67091 16.3564C3.99333 15.9612 4.40303 15.7636 4.9 15.7636ZM9.16858 17.8655V17.4909C9.16858 17.2679 9.12131 17.0909 9.02676 16.96C8.93222 16.8315 8.80373 16.7673 8.64131 16.7673C8.47646 16.7673 8.34555 16.8315 8.24858 16.96C8.15888 17.0788 8.11403 17.2327 8.11403 17.4218C8.11403 17.4436 8.11525 17.4667 8.11767 17.4909C8.12494 17.6194 8.18312 17.7164 8.29222 17.7818C8.38434 17.8376 8.5007 17.8655 8.64131 17.8655H9.16858ZM8.64131 15.5745C9.17706 15.5745 9.60373 15.7697 9.92131 16.16C10.2146 16.5164 10.3613 16.96 10.3613 17.4909V17.8655H10.7213V19.0545H10.3504C10.2898 19.8085 9.92131 20.3479 9.24494 20.6727C8.9807 20.7988 8.67161 20.8897 8.31767 20.9455C8.03888 20.9915 7.73706 21.0145 7.41222 21.0145V19.8218C8.01828 19.8218 8.47403 19.737 8.77949 19.5673C9.02676 19.4315 9.1504 19.2606 9.1504 19.0545H8.64131C8.20979 19.0545 7.84252 18.9382 7.53949 18.7055C7.17585 18.4242 6.99403 18.0194 6.99403 17.4909C6.99403 16.9891 7.11525 16.5636 7.35767 16.2145C7.651 15.7879 8.07888 15.5745 8.64131 15.5745ZM13.6983 17.2073C13.7177 17.3236 13.7274 17.4352 13.7274 17.5418C13.7274 17.8715 13.6328 18.1673 13.4437 18.4291C13.1407 18.8461 12.6474 19.0545 11.9637 19.0545H10.5419V17.8618H11.9383C12.1564 17.8618 12.3104 17.8327 12.4001 17.7745C12.4922 17.7188 12.5383 17.6303 12.5383 17.5091C12.5383 17.4727 12.5334 17.4327 12.5237 17.3891C12.4995 17.2655 12.4752 17.1394 12.451 17.0109C12.4413 16.9624 12.4316 16.9103 12.4219 16.8545L12.4074 16.7855L12.3964 16.7164C12.3601 16.5176 12.3322 16.3758 12.3128 16.2909L13.451 15.9455C13.5237 16.2873 13.6061 16.7079 13.6983 17.2073ZM12.9492 15.3927L12.2364 14.6727L12.9419 13.9455L13.6692 14.6727L12.9492 15.3927ZM11.4255 15.3964L10.7128 14.6764L11.4146 13.9491L12.1419 14.6764L11.4255 15.3964Z"
              fill="#40BFFF"
            />
            <path
              d="M5.81997 9.80727C5.81997 10.4473 5.6624 10.9503 5.34724 11.3164C5.14846 11.5442 4.89027 11.7176 4.5727 11.8364C4.26967 11.9479 3.91209 12.0036 3.49997 12.0036H2.95088C2.53391 12.0036 2.15815 11.9273 1.82361 11.7745C1.443 11.6 1.14603 11.3467 0.932699 11.0145C0.702396 10.6461 0.587244 10.2182 0.587244 9.73091C0.587244 9.6703 0.588456 9.6097 0.590881 9.54909C0.619972 8.98424 0.793305 8.35758 1.11088 7.66909L2.19452 8.16727C1.93997 8.71515 1.80179 9.19636 1.77997 9.61091C1.77755 9.65212 1.77634 9.69333 1.77634 9.73455C1.77634 9.99394 1.83088 10.2061 1.93997 10.3709C2.04664 10.5406 2.21149 10.6618 2.43452 10.7345C2.51937 10.7636 2.61149 10.7842 2.71088 10.7964C2.78846 10.8061 2.86846 10.8109 2.95088 10.8109H3.49997C3.95331 10.8109 4.26118 10.7273 4.42361 10.56C4.56179 10.417 4.63088 10.1661 4.63088 9.80727V7.54182H5.81997V9.80727ZM2.61997 7.25455L3.37634 6.49091L4.14724 7.26182L3.37997 8.02545L2.61997 7.25455Z"
            />
          </svg>
        </div>
        <div class="divider-h md:hidden mt-2"></div>

        <div
          v-if="isPurchasable && product.sizes.length !== 0"
          class="p-4 flex flex-col md:flex-row md:items-center"
        >
          <h2 class="text-lg font-bold">سایز</h2>
          <div class="flex space-x-4 rtl:space-x-reverse mt-2 md:mt-0 md:ms-8">
            <div
              v-for="(size, index) in product.sizes"
              class="rounded-full border-2 w-12 h-12 text-lg font-bold flex items-center justify-center"
            >
              <span>{{ size.name }}</span>
            </div>
          </div>
        </div>
        <div
          v-if="isPurchasable && product.sizes.length !== 0"
          class="divider-h md:hidden mt-2"
        ></div>

        <div
          v-if="isPurchasable && product.colors.length !== 0"
          class="p-4 flex flex-col md:flex-row md:items-center"
        >
          <h2 class="text-lg font-bold">رنگ</h2>
          <div class="flex space-x-4 rtl:space-x-reverse mt-2 md:mt-0 md:ms-8">
            <div
              v-for="(color, index) in product.colors"
              class="rounded-xl w-12 h-12 text-lg font-bold flex items-center justify-center product-detail__color-item"
            >
              <component is="style">
                .product-detail__color-item { background-color: {{ color.hex }};
                }
              </component>
            </div>
          </div>
        </div>
        <div
          v-if="isPurchasable && product.colors.length !== 0"
          class="divider-h md:hidden mt-2"
        ></div>

        <div class="p-4 mt-2 md:hidden">
          <a class="flex justify-between" href="#comment-modal">
            <h2 class="text-lg font-bold">مشخصات</h2>
            <font-awesome-icon
              class="text-gray-500"
              icon="chevron-left"
            ></font-awesome-icon>
          </a>
          <div id="comment-modal" class="modal">
            <div class="modal-box h-full w-full rounded-none overflow-y-scroll">
              <div class="flex items-center">
                <a href="#" class="flex items-center">
                  <font-awesome-icon
                    class="text-black text-xl"
                    icon="arrow-right"
                  ></font-awesome-icon>
                </a>
                <h3 class="text-lg ms-4">مشخصات محصول</h3>
              </div>
              <ProductAttributes></ProductAttributes>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isPurchasable">
        <div
          class="flex flex-col text-sm hidden md:block md:col-span-1 rounded-xl bg-gray-100 px-4 py-6"
        >
          <div class="flex justify-between">
            <div>فروشنده</div>
            <a href="#" class="text-xs hidden">4 فروشنده دیگر</a>
          </div>
          <div class="mt-8 flex items-center">
            <font-awesome-icon
              class="text-gray-800 text-base"
              icon="store"
            ></font-awesome-icon>
            <div class="text-sm font-bold ms-4">
              {{ product.sellers[0].shop_name }}
            </div>
          </div>
          <div
            v-if="selectedShopProduct.variations[2]"
            class="md:border-b hidden md:block my-4 w-full"
          ></div>
          <div
            v-if="selectedShopProduct.variations[2]"
            class="flex items-center"
          >
            <font-awesome-icon
              class="text-gray-800 text-base"
              icon="check"
            ></font-awesome-icon>
            <div class="text-sm font-bold ms-4">
              گارانتی {{ selectedShopProduct.variations[2].value }}
            </div>
          </div>
          <div
            v-if="selectedShopProduct.variations[1]"
            class="md:border-b hidden md:block my-4 w-full"
          ></div>
          <div
            v-if="selectedShopProduct.variations[1]"
            class="flex items-center"
          >
            <font-awesome-icon
              class="text-gray-800 text-base"
              icon="check"
            ></font-awesome-icon>
            <div class="text-sm font-bold ms-4">
              سایز: {{ selectedShopProduct.variations[1].value }}
            </div>
          </div>
          <div
            v-if="selectedShopProduct.variations[0]"
            class="md:border-b hidden md:block my-4 w-full"
          ></div>
          <div
            v-if="selectedShopProduct.variations[0]"
            class="flex items-center"
          >
            <font-awesome-icon
              class="text-gray-800 text-base"
              icon="pen"
            ></font-awesome-icon>
            <div class="text-sm font-bold ms-4">
              رنگ:<span> {{ selectedShopProduct.variations[0].value }}</span>
            </div>
          </div>
          <button
            class="btn w-full border-2 mt-8 btn-primary"
            @click="addToCart"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="isPurchasable"
      class="container w-full p-4 md:p-0 md:mt-12 text-sm hidden md:block"
    >
      <h3 class="text-base font-bold mb-8">لیست فروشندگان</h3>
      <div
        v-for="seller in product.sellers"
        class="flex items-center justify-between rounded-lg px-4"
      >
        <div class="flex items-center">
          <font-awesome-icon class="text-base" icon="store"></font-awesome-icon>
          <div class="text-sm ms-4">{{ seller.shop_name }}</div>
        </div>
        <div class="flex items-center">
          <font-awesome-icon
            class="text-gray-800 text-base"
            icon="check"
          ></font-awesome-icon>
          <div class="text-sm ms-4">گارانتی 18 ماهه سلامان</div>
        </div>
        <div>{{ seller.price }} تومان</div>
        <button class="btn border-2 btn-outline btn-primary" @click="addToCart">
          افزودن به سبد خرید
        </button>
      </div>
      <div class="md:border-b hidden md:block my-4 w-full"></div>
    </div>
    <div class="border-b md:hidden my-2 w-full"></div>
    <div class="container mb-4 mt-8 md:mt-12">
      <ProductHorizontalList
        title="محصولات مشابه"
        :products="product.related_products"
        class="mt-8 md:-ms-4"
      ></ProductHorizontalList>
    </div>
    <div class="container z-10  sticky top-0 mb-8 mt-8 hidden md:block">
      <div
        class="bg-white w-full font-bold text-sm text-gray-500"
        :class="{ scrolled: !view.atTopOfPage }"
      >
        <ul class="menu border-b horizontal w-full">
          <li>
            <a>توضیحات</a>
          </li>
          <li class="bordered">
            <a>مشخصات فنی</a>
          </li>
          <li>
            <a>دیدگاه کاربران</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container w-full p-4 md:p-0">
      <h3 class="text-lg">توضیحات</h3>
      <p class="text-md text-gray-600 mt-4" v-html="product.description"></p>
      <div class="md:border-b hidden md:block mt-16 w-full"></div>
    </div>

    <div class="container w-full md:mt-8 p-4 md:p-0 hidden md:block mt-4">
      <h3 class="text-lg">مشخصات محصول</h3>
      <ProductAttributes :attributes="productAttribute"></ProductAttributes>
      <div class="md:border-b hidden md:block mt-8 w-full"></div>
    </div>
    <div class="container w-full mt-8 hidden md:block">
      <h3 class="text-lg">نظرات کاربران</h3>
      <div class="flex">
        <div class="mt-8 flex-shrink-0">
          <CommentsTotalStat></CommentsTotalStat>
        </div>
        <div class="flex-1">
          <EmptyState
            v-if="!productComments.length"
            :empty-list="emptyList"
            class="flex h-auto"
          ></EmptyState>
          <CommentList
            :pagination="productCommentsPagination"
            :comments="productComments"
            class="ms-8"
          ></CommentList>
        </div>
      </div>
      <div class="md:border-b hidden md:block mt-8 w-full"></div>
    </div>
  </div>
</template>

<script>
import ProductSlider from '../../components/slider/ProductSlider'
import ProductHorizontalList from '../../components/product/ProductHorizontalList'
import CommentsTotalStat from '../../components/comment/CommentsTotalStat'
import CommentList from '../../components/comment/CommentList'
import ProductAttributes from '../../components/product/ProductAttributes'
import EmptyState from '../../components/common/EmptyState'

export default {
  name: 'Product',
  components: {
    ProductAttributes,
    CommentList,
    CommentsTotalStat,
    ProductHorizontalList,
    ProductSlider,
    EmptyState
  },
  auth: false,
  async asyncData({ $axios, route }) {
    const productId = route.params.id
    const customerProduct = await $axios.get(`/customer/products/${productId}`)
    const product = await $axios.get(`/products/${productId}`)
    const productAttribute = await $axios.get(
      `/products/${productId}/attributes`
    )
    const productComments = await $axios.get(
      `customer/products/${productId}/comments`
    )
    return {
      product: product.data.data,
      customerProduct: customerProduct.data.data,
      productAttribute: productAttribute.data.data,
      productAttributePagination: productAttribute.data.pagination,
      productComments: productComments.data.data,
      productCommentsPagination: productComments.data.pagination,
      emptyList: productComments.data.empty_list,
      selectedShopProduct: product.data.data.shop_products[0],
      variationsMeta: product.data.data.variations_meta,
      isPurchasable: product.data.data.shop_products.length !== 0
    }
  },
  data() {
    return {
      view: {
        atTopOfPage: true
      },
      customerProduct: Object,
      product: Object,
      productAttribute: Object,
      productAttributePagination: Object,
      productComments: Object,
      productCommentsPagination: Object,
      emptyList: Object,
      selectedShopProduct: Object,
      variationsMeta: Array,
      isPurchasable: Boolean
    }
  },
  // a beforeMount call to add a listener to the window
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    // change favorite status of this product
    toggleFavorite() {
      if (this.customerProduct.is_favorite) {
        this.$axios
          .delete(`/customer/user/profile/favorites/${this.product.id}`)
          .then(() => {
            this.customerProduct.is_favorite = false
          })
      } else {
        this.$axios
          .post(`/customer/user/profile/favorites/${this.product.id}`)
          .then(() => {
            this.customerProduct.is_favorite = true
          })
      }
    },
    addToCart() {
      if (this.customerProduct.count_in_cart !== 0) {
        this.$router.push('/cart')
      }
      this.$axios
        .post(`/customer/cart`, {
          shop_product_id: this.selectedShopProduct.shop_product_id,
          count: 1
        })
        .then(() => {
          this.$router.push('/cart')
        })
    }
  }
}
</script>

<style scoped lang="scss">
.product-detail {
  width: 9.5rem;

  &__title {
    width: 8rem;
    font-size: 0.875rem;
  }

  &__price {
    font-size: 0.875rem;
    color: $color-gray;

    &-tooman {
      width: 2rem;
      height: auto;

      path {
        fill: $color-gray;
      }
    }
  }

  &__favorite path {
    fill: $color-primary;
  }

  &__not-favorite path {
    fill: $color-gray-dark;
  }

  &__final-price {
    color: $color-primary;
    font-size: 1.5rem;
    font-weight: bold;

    &-tooman {
      width: 1.25rem;
      height: auto;

      & path {
        fill: $color-primary;
      }
    }
  }

  &__discount {
    font-size: 0.75rem;
  }
}

.bordered {
  color: $color-primary;
}

.scrolled {
  @apply shadow-sm;
  border-bottom: 0;
}
</style>
