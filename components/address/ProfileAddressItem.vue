<template>
  <div class="border-b md:border md:rounded-lg p-4">
    <div class="text-sm">
      {{address.country.name}}, {{address.state.name}}, {{address.city.name}}, {{address.district ? address.district.name + ',' : ''}} {{address.address}}
      <div class="text-gray-500 flex items-center mt-4 text-sm">
        <font-awesome-icon class="text-base cursor-pointer -mt-0.5 me-4" icon="envelope"></font-awesome-icon>
        {{address.mobile}}
      </div>
      <div class="text-gray-500 flex items-center mt-4 text-sm">
        <font-awesome-icon class="text-base cursor-pointer me-4" icon="phone"></font-awesome-icon>
        {{address.mobile}}
      </div>
      <div class="text-gray-500 flex items-center mt-4 text-sm">
        <font-awesome-icon class="text-base cursor-pointer -mt-0.5 me-4" icon="user"></font-awesome-icon>
        {{address.transferee_first_name}} {{address.transferee_last_name}}
      </div>
    </div>
    <div class="flex justify-end">
      <a class="btn btn-sm btn-link text-error" href="#delete-order-modal">حذف</a>
      <NuxtLink :to="'/edit-address/' + address.id" class="btn btn-sm btn-link text-gray-500">ویرایش</NuxtLink>
    </div>
    <div id="delete-order-modal" class="modal">
      <div class="modal-box">
        <p>آیا از حذف این آدرس مطمئن هستید؟</p>
        <div class="modal-action">
          <a class="btn btn-primary" @click="deleteAddress">بله</a>
          <a class="btn" href="#">خیر</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressItem",
  props: {
    address: Object
  },
  methods: {
    deleteAddress() {
      this.$axios.delete(`user/profile/delivery-addresses/${this.address.id}`)
      .then(() => this.$el.parentNode.removeChild(this.$el))
    },
  }
}
</script>

<style scoped>

</style>
