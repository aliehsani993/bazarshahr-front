<template>
  <div>
    <div class="text-md">{{ this.title }}</div>
    <div class="text-xs text-gray-500 mt-2">{{ this.name }} - {{ persianDate(this.date) }}</div>
    <div class="md:border-b hidden md:block my-4 w-full"></div>
    <div class="text-sm mt-4 text-gray-600">{{ this.text }}</div>
  </div>
</template>

<script>
import moment from "moment-jalaali";

export default {
  name: "CommentItem",
  props: {
    title: String,
    text: String,
    name: String,
    date: Number,
    vote: Number
  },
  middleware: 'auth',
  methods: {
    persianDate(timestamp) {
      return moment.unix(timestamp).format("jYYYY/jM/jD");
    },
  }
}
</script>

<style scoped>
div {
  line-height: 1.75rem;
}
</style>
