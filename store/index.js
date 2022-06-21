const state = () => ({
  token: null,
  user_id: null,
  name: null,
  email: null,
  issuperuser: null,
  title: null,
  description: null,
  stack_trace: null,
  my_logs: [],
  logs: [],
  log: [],
  logId: null,
  tags: [],
  users: [],
  user: null,
  tagTypes: [],
})

const getters = {}
const mutations = {
  setToken(state, data) {
    state.token = data.token
    state.user_id = data.id
    state.name = data.name
    state.email = data.email
    state.issuperuser = data.is_superuser
  },

setList(state, data) {
    state.logs = data
  },
  setUsers(state, data) {
    state.users = data
  },
  setTags(state, data) {
    state.tags = data
  },
  setSingleLog(state, data)
  {
      state.description = data.description,
      state.title = data.title,
      state.stack_trace = data.stack_trace
  },

  createUser(state, data) {
    state.MyUsers.unshift(data)
  },

  updateDescription(state, data) {
    state.Description = data
  },

  // updateLog(state, data) {
  //   const index = state.logs.findIndex((log) => log.id === data.id)
  //   state.logs[index].title = data.title
  // },
  updateLog(state, data) {
    console.log(data.description)
    state.description = data.description
  },

  updateUser(state, data) {
    const index = state.users.findIndex((user) => user.id === user.id)
    state.users[index].title = data.title
  },
  setLogId(state , data){
    state.logId = data

  },
  setUser(state , data){
    state.user = data
  },

  deleteTag(state, index){
    state.tags.splice(index, 1);
  },
  setTagTypes(state, data) {
    state.tagTypes = data
  },
  setLog(state, data) {
    state.log = data
  }
}

const actions = {
  async login(state, data) {
    // try {
      // Hit the backend api.
      const res = await this.$axios.post('http://localhost:5149/api/user/login', data)
      if (res.status == 200) {
        this.commit('setToken', res.data)
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token)
      }
        // Set the token after the call is success.
        // move to the homepage from login page.
        this.$router.push('/log')
      // } else {
        // alert('Invalid email or password')
      // }
    // } catch (e) {
      // console.log(' error while logging in: ' + e)
      // alert(' cannot login right now, please try again later')
    // }
  },

  async getAllLogs({ commit, state }, data) {
    const res = await this.$axios.get('http://localhost:5149/api/log',{
      params: {
        page: data.page,
        limit: data.limit,
        title: data.title,
        from: data.from,
        to: data.to,
        tag: data.tag
      }
    }
    )
    console.log(res.data);
    commit('setList', res.data)
  },
  async getAllUsers({ commit, state }, data) {
    console.log("fhs;.iufru")
    const res = await this.$axios.get('http://localhost:5149/api/user',{
      params: {
        page: data.page,
        limit: data.limit,
        title: data.title
      }
    }
    )
    console.log(res.data);
    commit('setUsers', res.data)
  },
  async userGetById({ commit, state }, id) {
    const res = await this.$axios.get('http://localhost:5149/api/user/' + id )
    console.log(res.data);
    commit('setUser', res.data)
  },
  async getSingleLog({ commit, state }, id) {
    const res = await this.$axios.get('http://localhost:5149/api/log/' + id)
    console.log(res.data);
    commit('setLog', res.data)
  },




  async deleteLog({ commit }, id) {
    const res = await this.$axios.delete('http://localhost:5149/api/log/' + id)
  },

  async createUser({ commit, state }, data) {
    const res = await this.$axios.post('http://localhost:5149/api/user', data)
  },
  async createTag({ commit, state }, data) {
    const res = await this.$axios.post('http://localhost:5149/api/tag/', data)
  },

  async updateDescription({ commit }, data) {
    // console.log(data)
    const res = await this.$axios.put('log/' + id, data)
    console.log(res, 'Updated')
    commit('updateDescription', data.Description)
  },

  async updateUser({ commit }, data) {
    await this.$axios
      .put('user/' + data.id, {
        headers: {
          Authorization: 'Bearer ' + this.state.token,
        },
      })
      .then((res) => {
        console.user(res)
        console.user('called')
        commit('updateUser', data)
      })
  },

  async addTag({ commit, state }, data) {
    const res = await this.$axios.post('tag/', {
      text: data.text,
      log_id: state.Log_id,
    })
  },

  async deleteTag({ commit, state }, id) {
    const res = await this.$axios.delete('http://localhost:5149/api/tag/' + id)
  },

  async getTags({ commit, state }) {
    const res = await this.$axios.get('http://localhost:5149/api/tag')
    commit('setTags', res.data)
  },
  async getTagTypes({ commit, state }) {
    const res = await this.$axios.get('http://localhost:5149/api/tag/types')
    commit('setTagTypes', res.data)
  },

  async updateLog({}, data) {
    await this.$axios.put('http://localhost:5149/api/log/' + data.id, {description: data.description, tag: data.tag, type: data.type})
  }

}

export default {
  state,
  getters,
  mutations,
  actions,
}