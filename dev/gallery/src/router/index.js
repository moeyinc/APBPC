import Vue from 'vue'
import Router from 'vue-router'
import Parent from '@/components/pages/Parent'
import Home from '@/components/pages/Home'
import RecordSelectTopic from '@/components/pages/Record_Select_Topic'
import RecordRecordStory from '@/components/pages/Record_Record_Story'
import RecordFinishedRecording from '@/components/pages/Record_Finished_Recording'
import ListenSelectTopic from '@/components/pages/Listen_Select_Topic'
import ListenOtherStories from '@/components/pages/Listen_Other_Stories'
import SendYourStory from '@/components/pages/Send_Your_Story'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Parent,
      children: [
        {path: '', name: 'home', component: Home},
        {path: 'recording/topics', name: 'recording-topics', component: RecordSelectTopic},
        {path: 'recording/start', name: 'recording-start', component: RecordRecordStory},
        {path: 'recording/finish', name: 'recording-finish', component: RecordFinishedRecording},
        {path: 'listening/topics', name: 'listening-topics', component: ListenSelectTopic},
        {path: 'listening/watch', name: 'listening-watch', component: ListenOtherStories},
        {path: 'send-us-your-story', name: 'send-us-your-story', component: SendYourStory}
      ]
    }
  ]
})

//
//
//

// const router = new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       meta: {test: 'test'},
//       components: {
//         a: Home,
//         b: Home
//       }
//     },
//     {
//       path: '/recording/topics',
//       name: 'recording-topics',
//       componensts: {
//         a: RecordSelectTopic,
//         b: RecordSelectTopic
//       }
//     },
//     {
//       path: '/recording/start',
//       name: 'recording-start',
//       components: {
//         a: RecordRecordStory,
//         b: RecordRecordStory
//       }
//     },
//     {
//       path: '/recording/finish',
//       name: 'recording-finish',
//       components: {
//         a: RecordFinishedRecording,
//         b: RecordFinishedRecording
//       }
//     },
//     {
//       path: '/listening/topics',
//       name: 'listening-topics',
//       components: {
//         a: ListenSelectTopic,
//         b: ListenSelectTopic
//       }
//     },
//     {
//       path: '/listening/watch',
//       name: 'listening-watch',
//       components: {
//         a: ListenOtherStories,
//         b: ListenOtherStories
//       }
//     },
//     {
//       path: '/send-us-your-story',
//       name: 'send-us-your-story',
//       components: {
//         a: SendYourStory,
//         b: SendYourStory
//       }
//     }
//   ]
// })

// router.beforeEach((to, from, next) => {
//   console.log('this', this)
//   console.log('to', to)
//   console.log('from', from)
//   console.log('=============')
//   next()
// })

export default router
