<template>
  <div class="p-4">
    <Banner :banner="banners[0]"></Banner>
  </div>
</template>

<script>
import Banner from "./Banner";

export default {
  name: "SingleBanner",
  components: {Banner},
  props: {
    banners: Array
  }
}
</script>

<style scoped>

</style>
