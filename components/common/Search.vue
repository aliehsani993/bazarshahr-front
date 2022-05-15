<template>
  <div class="w-full">
    <div class="search relative">
      <div class="mx-4">
        <input type="text" placeholder="جستجوی محصول" class="search__input px-12"/>
      </div>
      <font-awesome-icon icon="search" class="search__icon absolute r-0 t-0"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped lang="scss">
.search {
  margin: 0;
  position: relative;

  &__input {
    border: 1px solid $color-gray-light;
    border-radius: .375rem;
    height: 3rem;
    width: 100%;

    &:focus-visible {
      border: 2px solid $color-primary;
      outline: none;
      border-radius: .375rem;
    }
  }

  &__icon {
    position: absolute;
    top: 1rem;
    right: 2rem;
    color: $color-primary;
  }
}
</style>
