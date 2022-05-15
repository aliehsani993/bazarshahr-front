<template>
  <div>
    <EmptyState v-if="!addresses.length" :empty-list="emptyList" class="flex h-screen"></EmptyState>
    <div>
      <div class="justify-between items-center hidden md:flex">
        <div class="text-xl font-bold">آدرسهای من</div>
        <NuxtLink to="add-address" class="btn btn-primary">افزودن آدرس جدید</NuxtLink>
      </div>
      <div class="grid md:grid-cols-2 md:gap-4 md:mt-8 mb-12">
        <AddressItem v-for="(address, index) in addresses" :key="index" :address="address"></AddressItem>
      </div>
      <button class="btn btn-primary fixed bottom-16 end-4 rounded-full md:hidden">افزودن آدرس جدید</button>
    </div>
  </div>
</template>

<script>
import AddressItem from "../components/address/ProfileAddressItem";
import EmptyState from "../components/common/EmptyState";

export default {
  name: "addresses",
  components: {AddressItem, EmptyState},
  layout: "profile",
  data() {
    return {
      addresses: Array,
      emptyList: Object
    }
  },
  async asyncData({$axios, route}) {
    const addresses = await $axios.get(`/user/profile/delivery-addresses`)
    return {
      addresses: addresses.data.data,
      emptyList: addresses.data.empty_list
    }
  },
  methods: {
    deleteAddress() {

    },
    editAddress() {

    }
  }
}
</script>

<style scoped>

</style>
