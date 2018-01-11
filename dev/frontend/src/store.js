import axios from 'axios'
import CONSTANTS from '@/../static/constants'

/* =================================================
 state
================================================== */
const state = {
  selectedTopic: '',
  uploadedFileURL: '',
  currentView: 'a',
  nextView: 'b'
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
  },
  switchView (state) {
    let keep = state.currentView
    state.currentView = state.nextView
    state.nextView = keep
  }
}

/* =================================================
 actions
================================================== */
const actions = {
  getVideos (context) {
    return new Promise((resolve, reject) => {
      axios.post(CONSTANTS.VIDEO_SERVER_HOST + CONSTANTS.DOWNLOAD_API_PATH, {
        topic: context.state.selectedTopic
      })
      .then((res) => {
        console.log('videos fetched', res.data)
        resolve(res.data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
    })
  }
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
