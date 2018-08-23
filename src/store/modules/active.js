const state = {
  main: 0,
  singer: 0,
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}
const getters = {
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

const mutations = {
  REMOVE_COUNTER(state, payload) {
    // console.log(state)
    state.main--
  },

  ADD_COUNTER(state, payload) {
    // console.log(state, payload)
    state.main++
  },

  updateData(state, payload) {
    console.log(state, payload)
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break
      case 'token':
        state.temp_token = payload.value
        break
      case 'name':
        state.temp_name = payload.name
        break
      default:
        console.log('Error:Dont directly mutate Vuex store')
    }
  },

  setUser(state, payload) {
    console.log(state)
    console.log(payload)
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  }
}

const actions = {
  someAsyncTask({
    commit
  }) {
    commit('ADD_COUNTER')
  },

  login({
    commit
  }, payload) {
    console.log(payload)
    commit({
      type: 'setUser',
      email: payload.email,
      token: payload.token
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
