<template>
  <img
    class="cursor-pointer rounded-xl"
    :src="banner.image"
    alt="banner-image"
    @click="createLinkable"
  />
</template>

<script>
export default {
  name: 'Banner',
  props: {
    banner: Object
  },
  methods: {
    createLinkable() {
      return this.$handleLinkable(
        this,
        this.banner.link_type,
        this.banner.link_id
      )
    }
  }
}
</script>

<style scoped></style>
