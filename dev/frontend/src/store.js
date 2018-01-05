/* =================================================
 state
================================================== */
const state = {
  selectedTopicId: '',
  selectedTopicQuestion: ''
}

/* =================================================
 mutations
================================================== */
const mutations = {
  resetTopic (state) {
    console.log('resetting the selected topic')
    state.selectedTopicId = ''
    state.selectedTopicQuestion = ''
  },
  setTopic (state, {topicId, question}) {
    console.log('set selectedTopicId: ', topicId)
    state.selectedTopicId = topicId
    state.selectedTopicQuestion = question
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
