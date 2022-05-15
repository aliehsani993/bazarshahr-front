<template>
  <div>
    <div class="grid grid-cols-4 gap-4 p-4 md:p-0">
      <Banner :banner="banners[0]" class="col-span-4 md:col-span-2"></Banner>
      <Banner :banner="banners[1]" class="col-span-4 md:col-span-2"></Banner>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";

export default {
  name: "DualBanner",
  components: {Banner},
  props: {banners: Array}
}
</script>

<style scoped>

</style>
