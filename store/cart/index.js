export const state = () => ({
  // get badge count when user gets in first
  cartsCount: 0
})

export const mutations = {
  getBadgesCount(state, cartsCount) {
    state.cartsCount = cartsCount
  },

  updateCartCount(state, count) {
    state.cartsCount = state.cartsCount + count
  },

  emptyCartCount(state){
    state.cartsCount = 0
  }
}


export const actions = {
  async init ({ commit }) {
    let cartCount = 0
    await this.$axios.get('/customer/index/badge').then(response => cartCount = response.data.data.cart)

    commit('getBadgesCount', cartCount)
  }
}
