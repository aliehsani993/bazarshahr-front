<template>
  <div>
    <EmptyState v-if="!orders.length" :empty-list="emptyList" class="flex h-screen"></EmptyState>
    <div class="grid md:grid-cols-2 md:gap-4">
      <OrderItem v-for="(order, index) in orders" :key="index" :order="order"></OrderItem>
    </div>
  </div>
</template>

<script>
import OrderItem from "../components/orders/OrderItem";
import EmptyState from "../components/common/EmptyState";

export default {
  name: "orders",
  components: {OrderItem, EmptyState},
  layout: "profile",
  data() {
    return {
      orders: Array,
      emptyList: Object
    }
  },
  async asyncData({$axios, route}) {
    const orders = await $axios.get(`/user/orders`)
    return {
      orders: orders.data.data,
      emptyList: orders.data.empty_list
    }
  },
}
</script>

<style scoped>

</style>
