export const state = () => ({
  megaMenu: null
})

export const mutations = {
  SET_MEGA_MENUS(state, megaMenus) {
    state.megaMenu = megaMenus
  }
}

export const actions = {
  async init({ commit }) {
    let data = null
    await this.$axios
      .get('/api/mega-menu')
      .then(response => (data = response.data.data))
    commit('SET_MEGA_MENUS', data)
  }
}
