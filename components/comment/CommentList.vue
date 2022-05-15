<template>
  <div class="flex flex-col items-center w-full">
    <CommentItem class="border p-4 mt-4 rounded-lg w-full" :key="index" v-for="(item, index) in comments"
                 :title="item.title" :text="item.body" :name="item.author"
                 :date="item.created_at" :vote="item.score"></CommentItem>
    <Pagination :pagination="pagination"></Pagination>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";
import Pagination from "./../common/Pagination";

export default {
  name: "CommentList",
  components: {Pagination, CommentItem},
  props: {
    comments: Array,
    pagination: Object
  }
}
</script>

<style scoped>

</style>
