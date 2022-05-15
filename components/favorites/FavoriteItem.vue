<template>
  <div class="border-b md:border p-4 md:rounded-2xl">
    <div class="flex">
      <img :src="favorite.image"/>
      <div class="ms-6 mt-2 flex flex-col w-full">
        <div>{{ favorite.name }}</div>
        <div class="text-sm mt-2">دسته بندی: <span class="text-primary">{{ favorite.category.name }}</span></div>
        <a href="#delete-favorite-modal" class="btn btn-sm btn-link text-error ms-auto">حذف</a>
      </div>
    </div>
    <div id="delete-favorite-modal" class="modal">
      <div class="modal-box">
        <p>آیا از حذف این محصول از لیست علاقه مندیهای خود مطمئن هستید؟</p>
        <div class="modal-action">
          <a class="btn btn-primary" @click="deleteFavorite">بله</a>
          <a class="btn" href="#">خیر</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderItem",
  props: {
    favorite: Object
  },
  methods: {
    deleteFavorite() {
      this.$axios.delete(`customer/user/profile/favorites/${this.favorite.product_id}`)
        .then(() => this.$el.parentNode.removeChild(this.$el))
    }
  }
}
</script>

<style scoped>
img {
  height: auto;
  width: 6rem;
}
</style>
