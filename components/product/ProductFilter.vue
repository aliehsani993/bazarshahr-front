<template>
  <div>
    <div class="border border-gray-300 w-full p-4 rounded-lg">
      <div class="font-bold">دسته بندی</div>
      <div class="divider-h my-4"></div>
      <ChipGroup></ChipGroup>
    </div>

    <div class="border border-gray-300 w-full p-4 rounded-lg mt-4">
      <div class="font-bold">رنگ‌ها</div>
      <div class="divider-h my-4"></div>
      <ChipGroup></ChipGroup>
    </div>

    <div class="border border-gray-300 w-full p-4 rounded-lg mt-4">
      <div class="font-bold">برندها</div>
      <div class="divider-h my-4"></div>
      <ChipGroup></ChipGroup>
    </div>

    <div class="border border-gray-300 w-full p-4 rounded-lg mt-4">
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text font-bold text-base">موجود بودن کالا</span>
          <input type="checkbox" class="toggle toggle-primary" @change="checkInStock">
        </label>
      </div>
    </div>

    <div class="border border-gray-300 w-full p-4 rounded-lg mt-4">
      <div class="form-control">
        <label class="cursor-pointer label">
          <span class="label-text font-bold text-base">محصول ایران</span>
          <input type="checkbox" class="toggle toggle-primary" @change="checkMadeInIran">
        </label>
      </div>
    </div>

    <div class="border border-gray-300 w-full p-4 rounded-lg mt-4">
      <div class="font-bold">محدوده قیمت</div>
      <div class="divider-h my-4"></div>
      <input type="range" max="100" value="50" min="10" class="range range-primary">
    </div>
  </div>
</template>

<script>
import ChipGroup from "./../chip/ChipGroup";

export default {
  name: "ProductFilter",
  components: {
    ChipGroup
  },
  methods: {
    checkMadeInIran() {
      this.$parent.changeMadeInIran()
    },
    checkInStock() {
      this.$parent.changeInStock()
    },
  }
}
</script>

<style scoped>

</style>
