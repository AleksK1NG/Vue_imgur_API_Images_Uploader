import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
};

const getters = {
  isLoggedIn: state => !!state.token
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  login: () => {
    api.login();
  },

  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
  },

  // use window.location.hash
  finalizeLogin: ({ commit }, hash) => {
    // replace hash # to ''  and parse it
    // query contains
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);

    // Set localStorage token
    window.localStorage.setItem('imgur_token', query.access_token);

    // Router push
    router.push('/');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
