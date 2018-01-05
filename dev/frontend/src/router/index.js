import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import RecordSelectTopic from '@/components/pages/Record_Select_Topic'
import RecordRecordStory from '@/components/pages/Record_Record_Story'
import RecordFinishedRecording from '@/components/pages/Record_Finished_Recording'
import ListenSelectTopic from '@/components/pages/Listen_Select_Topic'
import ListenOtherStories from '@/components/pages/Listen_Other_Stories'
import SendYourStory from '@/components/pages/Send_Your_Story'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recording/topics',
      name: 'recording-topics',
      component: RecordSelectTopic
    },
    {
      path: '/recording/start',
      name: 'recording-start',
      component: RecordRecordStory
    },
    {
      path: '/recording/finish',
      name: 'recording-finish',
      component: RecordFinishedRecording
    },
    {
      path: '/listening/topics',
      name: 'listening-topics',
      component: ListenSelectTopic
    },
    {
      path: '/listening/watch',
      name: 'listening-watch',
      component: ListenOtherStories
    },
    {
      path: '/send-us-your-story',
      name: 'send-us-your-story',
      component: SendYourStory
    }
  ]
})
