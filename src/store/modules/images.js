import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

// rootState = all Vuex state, rootState.auth.token for example
const actions = {

  // Fetch images from Imrug API
  fetchImages: async ({ commit, rootState }, images) => {

    // Auth
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);

    // Store images to API
    commit('setImages', response.data.data);
  },

  // Upload images to Imgur
  uploadImages: async ({ commit, rootState }, images) => {

    // Get access token
    const { token } = rootState.auth;

    // Upload images by API module call
    await api.uploadImages(images, token);

    // Redirect user to imageList component
    router.push('/')
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
