<template>
  <div class="flex">
    <div class="text-sm">
      <div class="flex items-center">
        <div class="w-4">35</div>
        <progress class="progress progress-primary w-36 ms-4" value="35" max="100"></progress>
        <div class="ms-4">
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-4">40</div>
        <progress class="progress progress-primary w-36 ms-4" value="40" max="100"></progress>
        <div class="ms-4">
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-4">12</div>
        <progress class="progress progress-primary w-36 ms-4" value="12" max="100"></progress>
        <div class="ms-4">
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-4">4</div>
        <progress class="progress progress-primary w-36 ms-4" value="4" max="100"></progress>
        <div class="ms-4">
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <div class="w-4">9</div>
        <progress class="progress progress-primary w-36 ms-4" value="9" max="100"></progress>
        <div class="ms-4">
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-gray-200" icon="star"></font-awesome-icon>
          <font-awesome-icon class="text-yellow-400" icon="star"></font-awesome-icon>
        </div>
      </div>
      <button class="btn w-full border-2 mt-8 btn-outline btn-primary">افزودن نظر</button>
    </div>

    <div class="flex flex-col items-center ms-8">
      <div class="text-4xl">4.4</div>
      <div class="text-sm text-gray-500">از مجموع 100 نظر</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsTotalStat"
}
</script>

<style scoped>

</style>
