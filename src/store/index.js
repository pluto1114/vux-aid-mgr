import Vue from 'vue'
import Vuex from 'vuex'

import { api, $api } from './api'

var querystring = require('querystring')
var remote = false
const HOST=remote?"http://47.94.146.181:9100":"http://localhost:9100"

Vue.use(Vuex)


const main = {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  actions: {
    login(context, payload) {
      return api(`${HOST}/api/login`, {type:'post',params:payload})
    },
    
  }
}


const user = {
  state: {    
  },
  mutations: {
  },
  actions: {
    userinfo(context, payload) {
      return api('/api/user/one',{type:"post",params:payload})
    },
    settings(context, payload) {
      return api('/api/user/settings',{type:"post",params:payload})
    },
   
  }
}




const store = new Vuex.Store({
  modules: {
    main,

    user
  }
})

export default store