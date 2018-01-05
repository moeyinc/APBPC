<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="true"
      :back-to="'home'"
    />
    <header>
      <h2>LISTEN OTHER VISITORS’ STORIES</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div>
          <p class="lead-text">
            Select from the topics below to hear other people's thoughts and opinions on the Pine Bush.
          </p>
        </div>
        <div class="text-button-container">
          <text-button
            v-for="topic in getTopics"
            :key="topic.id"
            class="text-button"
            :width="'680px'"
            :height="'170px'"
            :border-radius="'40px'"
            :padding="'0 50px'"
            :font="'40px Arquitecta'"
            :letter-spacing="'1px'"
            :text-align="'left'"
            :text-content="topic.q"
            :regular-bg-color="'#47673b'"
            :regular-text-color="'#efdfd4'"
            :active-bg-color="'#efdfd4'"
            :active-text-color="'#47673b'"
            @clicked="setTopic(topic.id, topic.q)"
           />
        </div>

      </div>
    </main>
    <hr class="bottom-divider"/>
    <footer>
    </footer>
  </div>
</template>


<!-- =================================================
 Vue Script
================================================== -->
<script>
import PageAside from '@/components/page-components/PageAside'
import TextButton from '@/components/reusables/TextButton'
import topics from '../../../static/topics.js'
export default {
  name: 'listen-select-topics',
  components: {
    PageAside, TextButton
  },
  computed: {
    getTopics () {
      return topics
    }
  },
  methods: {
    setTopic (topicId, question) {
      this.$store.commit('setTopic', {topicId: topicId, question: question})
      this.jumpTo('listening-watch')
    }
  }
}
</script>


<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
.page-wrapper {
  height: 100%;
  position: relative;
}

header {
  position: absolute;
  top: 0px;
  left: 200px;
  width: 1520px;
  height: 230px;
  /* background-color: darkgreen; */
}

header h2 {
  padding-top: 45px;
  font-size: 55px;
  letter-spacing: 3px;
  font-weight: bold;
  text-align: center;
}

hr.top-divider {
  background-color: #efdfd4;
  position: absolute;
  top: 135px;
  left: 200px;
  width: 1520px;
}

main {
  position: absolute;
  top: 135px;
  left: 200px;
  width: 1520px;
  height: 745px;
  /* background-color: brown; */
}

main div.main-inner {
  padding: 50px;
}

main p.lead-text {
  font-size: 40px;
  line-height: 1.3em;
  text-align: center;
  margin-bottom: 50px;
}

main .text-button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

main .text-button {
  margin-bottom: 50px;
}

hr.bottom-divider {
  background-color: #efdfd4;
  position: absolute;
  top: 960px;
  left: 200px;
  width: 1520px;
}

footer {
  position: absolute;
  top: 980px;
  left: 200px;
  height: 200px;
  width: 1520px;
  text-align: center;
  padding: 70px;
  /* background-color: purple; */
}

</style>
