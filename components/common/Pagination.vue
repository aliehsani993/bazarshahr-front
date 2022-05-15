<template>
  <div class="pagination-group btn-group space-x-2 mt-8" v-if="pagination.total_pages > 1">
    <button @click="changePagination(pagination.current_page - 1)"
            v-if="pagination.current_page !== 1 && pagination.total_pages > 2"
            class="pagination-item btn btn-outline"><
    </button>
    <button @click="changePagination(1)" v-if="pagination.total_pages > 2"
            class="pagination-item btn"
            :class="pagination.current_page === 1 ? 'btn-primary' : 'btn-outline'">1
    </button>
    <button @click="changePagination(2)"
            v-if="pagination.total_pages > 2" class="pagination-item btn"
            :class="pagination.current_page === 2 ? 'btn-primary' : 'btn-outline'">2
    </button>
    <button
      v-if="pagination.current_page > 4 && pagination.current_page < pagination.total_pages / 2"
      class="pagination-item btn btn-disabled bg-gray-200 text-gray-700">...
    </button>
    <button @click="changePagination(pagination.current_page - 1)"
            v-if="pagination.current_page > 3 && pagination.current_page <= pagination.total_pages / 2"
            class="pagination-item btn btn-outline">{{ pagination.current_page - 1 }}
    </button>
    <button
      v-if="pagination.current_page > 2 && pagination.current_page > 2 && pagination.current_page <= pagination.total_pages / 2"
      class="pagination-item btn"
      :class="pagination.current_page <= pagination.total_pages / 2 ? 'btn-primary' : 'btn-outline'">{{ pagination.current_page }}
    </button>
    <button @click="changePagination(pagination.current_page  + 1)"
            v-if="pagination.current_page > 1  && pagination.current_page <= pagination.total_pages / 2"
            class="pagination-item btn btn-outline">{{ pagination.current_page + 1 }}
    </button>
    <button class="pagination-item btn btn-disabled bg-gray-200 text-gray-700">...</button>
    <button @click="changePagination(pagination.current_page - 1)"
            v-if="pagination.current_page <= pagination.total_pages - 1 && pagination.current_page > 2 && pagination.current_page > pagination.total_pages / 2"
            class="pagination-item btn btn-outline">{{ pagination.current_page - 1 }}
    </button>
    <button
      v-if="pagination.current_page <= pagination.total_pages - 2 && pagination.current_page > 2 && pagination.current_page > pagination.total_pages / 2"
      class="pagination-item btn"
      :class="pagination.current_page > pagination.total_pages / 2 ? 'btn-primary' : 'btn-outline'">{{ pagination.current_page }}
    </button>
    <button @click="changePagination(pagination.current_page + 1)"
            v-if="pagination.current_page <= pagination.total_pages - 3 && pagination.current_page > 2 && pagination.current_page > pagination.total_pages / 2"
            class="pagination-item btn btn-outline">{{ pagination.current_page + 1 }}
    </button>
    <button
      v-if="pagination.current_page < pagination.total_pages - 3 && pagination.current_page > 2 && pagination.current_page > pagination.total_pages / 2"
      class="pagination-item btn btn-disabled bg-gray-200 text-gray-700">...
    </button>
    <button @click="changePagination(pagination.total_pages - 1)"
            v-if="pagination.total_pages > 2" class="pagination-item btn"
            :class="pagination.current_page === pagination.total_pages - 1 ? 'btn-primary' : 'btn-outline'">{{ pagination.total_pages - 1 }}
    </button>
    <button @click="changePagination(pagination.total_pages)"
            v-if="pagination.total_pages > 2" class="pagination-item btn"
            :class="pagination.current_page === pagination.total_pages ? 'btn-primary' : 'btn-outline'">{{ pagination.total_pages }}
    </button>
    <button @click="changePagination(pagination.current_page + 1)"
            v-if="pagination.current_page !== pagination.total_pages && pagination.total_pages > 2"
            class="pagination-item btn btn-outline">>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagination: {
      current_page: Number,
      total_pages: Number
    }
  },
  methods: {
    changePagination(pageNumber) {
      this.$parent.changePage(pageNumber)
    }
  }
}
</script>

<style scoped>
.pagination-item {
  border-radius: .5rem !important;
  padding: .375rem 1rem;
  min-height: 2.5rem;
  height: 2.5rem;
  border: none;
}
</style>
