<template>
  <div class="border-primary border rounded-lg p-4">
    <div class="form-control">
      <label class="cursor-pointer label">
        <span class="label-text">به این آدرس ارسال می‌شود</span>
        <input type="radio" name="opt" checked="checked" class="radio radio-primary" :value="index" @click="selectAddress(index)">
      </label>
    </div>
    <div class="divider-h my-2"></div>
    <div class="text-sm">
      {{address.country.name}}, {{address.state.name}}, {{address.city.name}}, {{address.district ? address.district.name + ',' : ''}} {{address.address}}
      <div class="text-gray-500 flex items-center mt-4 text-xs">
        <font-awesome-icon class="text-base cursor-pointer -mt-0.5 me-2" icon="envelope"></font-awesome-icon>{{address.phone}}
      </div>
      <div class="text-gray-500 flex items-center mt-4 text-xs">
        <font-awesome-icon class="text-base cursor-pointer me-2" icon="phone"></font-awesome-icon>{{address.mobile}}
      </div>
      <div class="text-gray-500 flex items-center mt-4 text-xs">
        <font-awesome-icon class="text-base cursor-pointer -mt-0.5 me-2" icon="user"></font-awesome-icon>{{address.transferee_first_name}} {{address.transferee_last_name}}
      </div>
    </div>
    <div class="flex justify-end">
      <button class="btn btn-sm btn-link text-error">حذف</button>
      <button class="btn btn-sm btn-link text-gray-500">ویرایش</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressItem",
  props: {
    address: Object,
    index: Number
  },
  methods: {
    selectAddress(index) {
      this.$parent.selectAddress(index)
    },
  }
}
</script>

<style scoped>

</style>
