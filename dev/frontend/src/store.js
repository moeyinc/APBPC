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
  uploadVideo (context, {blob, fileName}) {
    return new Promise((resolve, reject) => {
      let file = new File([blob], fileName, {type: 'video/webm'})
      let formData = new FormData()
      formData.append('file', file)
      formData.append('fileName', fileName)
      formData.append('topic', context.state.selectedTopic)
      console.log('sending: ', formData.get('file'))
      axios.post(CONSTANTS.VIDEO_SERVER_HOST + CONSTANTS.UPLOAD_API_PATH, formData)
      .then((res) => {
        console.log('video has been uploaded')
        console.log('and received response: ', res.data)
        context.commit('setFileURL', {fileURL: res.data.fileURL})
        resolve(res.data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
    })
  },
  getVideos (context) {
    return new Promise((resolve, reject) => {
      axios.post(CONSTANTS.VIDEO_SERVER_HOST + CONSTANTS.DOWNLOAD_API_PATH, {
        topic: context.state.selectedTopic
      })
      .then((res) => {
        let fileURLs = res.data.fileURLs
        console.log('videos fetched', fileURLs)
        fileURLs.sort(function (a, b) {
          a = parseInt(a.slice(0, -5))
          b = parseInt(b.slice(0, -5))
          if (a.activity_id < b.activity_id) return -1
          if (a.activity_id > b.activity_id) return 1
          return 0
        })
        console.log('videos sorted', fileURLs)
        resolve(fileURLs)
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
