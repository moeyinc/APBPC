/* =================================================
 state
================================================== */
const state = {
  selectedTopic: '',
  uploadedFileURL: ''
}

/* =================================================
 mutations
================================================== */
const mutations = {
  resetTopic (state) {
    console.log('resetting the selected topic')
    state.selectedTopic = ''
  },
  setTopic (state, {topic}) {
    console.log('set selectedTopic: ', topic)
    state.selectedTopic = topic
  },
  setFileURL (state, {fileURL}) {
    console.log('set uploadedFileURL', fileURL)
    state.uploadedFileURL = fileURL
  }
}

/* =================================================
 actions
================================================== */
const actions = {
}

/* =================================================
 getters
================================================== */
const getters = {
}

/* =================================================
 export
================================================== */
export default {
  state,
  mutations,
  actions,
  getters
}
