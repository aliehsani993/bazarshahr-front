<template>
  <div>
    <div class="grid grid-cols-4 gap-4 p-4 md:p-0">
      <Banner :banner="banners[0]" class="col-span-2 md:col-span-1"></Banner>
      <Banner :banner="banners[1]" class="col-span-2 md:col-span-1"></Banner>
      <Banner :banner="banners[2]" class="col-span-2 md:col-span-1"></Banner>
      <Banner :banner="banners[3]" class="col-span-2 md:col-span-1"></Banner>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";

export default {
  name: "QuadBanner",
  components: {Banner},
  props: {banners: Array}
}
</script>

<style scoped>

</style>
