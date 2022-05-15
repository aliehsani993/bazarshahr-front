<template>
  <div class="flex flex-col items-center">
    <div :id="categoryIdentifier" class="circle-category rounded-full flex w-16 h-16 md:w-24 md:h-24">
      <component is="style">
        #{{categoryIdentifier}} {
         background: {{ this.background }};
        }
      </component>
      <img :src="this.icon" class="circle-category__icon mx-auto my-auto w-14 md:w-20" alt="category-icon">
    </div>
    <div class="mt-2 text-xs w-16 md:w-24 truncate text-center">{{ this.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'CircleCategoryItem',
  data() {
    return {
      categoryIdentifier: String
    }
  },
  props: {
    id: [Number, String],
    background: String,
    title: String,
    icon: String
  },
  mounted() {
    this.categoryIdentifier = "category" + this.id;
  }
}
</script>

<style scoped lang="scss">
.circle-category {

  &__icon {
    color: #0b5244;
    height: auto;
  }
}
</style>
