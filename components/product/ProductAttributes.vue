<template>
  <div class="mt-8 text-sm">
    <div v-for="attribute in attributes" class="grid grid-cols-6 space-y-8 rtl:space-y-reverse">
      <div class="col-span-3 md:col-span-1 text-gray-500">
        {{ attribute.name }}
      </div>
      <div class="col-span-3 md:col-span-5">
        {{attribute.value}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductAttributes",
  props: {
    attributes: Array
  }
}
</script>

<style scoped>

</style>
