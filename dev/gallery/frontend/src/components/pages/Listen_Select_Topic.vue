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
          <p class="lead-text" :style="{marginBottom: getMarginBottom}">
            Select from the topics below to hear other people's thoughts and opinions on the Pine Bush.
          </p>
        </div>
        <div class="text-button-container">
          <text-button
            v-for="(topic, index) in topics"
            :key="index"
            v-if="parseInt(topic.active)"
            :style="{marginBottom: getMarginBottom}"
            :width="getButtonWidth"
            :height="getButtonHeight"
            :border-radius="'40px'"
            :padding="getPadding"
            :font="getButtonFont"
            :letter-spacing="'1px'"
            :text-align="'left'"
            :text-title="topic.topic"
            :text-content="topic.question"
            :regular-bg-color="'#47673b'"
            :regular-text-color="'#efdfd4'"
            :active-bg-color="'#efdfd4'"
            :active-text-color="'#47673b'"
            :title-letter-spacing="'1px'"
            :title-font="getButtonTitleFont"
            :title-text-align="'left'"
            :title-font-weight="'bold'"
            :title-height="'10%'"
            :title-margin-bottom="'10px'"
            :body-height="'80%'"
            @clicked="setTopic(topic)"
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
// import topics from '../../../static/topics.js'
export default {
  name: 'listen-select-topics',
  data () {
    return {
      topics: []
    }
  },
  components: {
    PageAside, TextButton
  },
  created () {
    this.$store.dispatch('getTopics')
    .then((newTopics) => {
      this.topics = newTopics
    })
    // this.topics = topics
  },
  computed: {
    getActiveTopicCount () {
      let count = 0
      for (let i = 0; i < this.topics.length; i++) {
        if (parseInt(this.topics[i].active)) {
          count++
        }
      }
      return count
    },
    getButtonWidth () {
      if (this.getActiveTopicCount >= 4) {
        return '680px'
      } else if (this.getActiveTopicCount <= 3) {
        return '1460px'
      }
    },
    getButtonHeight () {
      if (this.getActiveTopicCount >= 7) {
        return '140px'
      } else if (this.getActiveTopicCount >= 5 || this.getActiveTopicCount === 3) {
        return '170px'
      } else if (this.getActiveTopicCount === 4 || this.getActiveTopicCount <= 2) {
        return '280px'
      }
    },
    getMarginBottom () {
      if (this.getActiveTopicCount >= 7) {
        return '30px'
      } else if (this.getActiveTopicCount <= 6) {
        return '50px'
      }
    },
    getButtonFont () {
      if (this.getActiveTopicCount >= 7) {
        return '28px Arquitecta'
      } else if (this.getActiveTopicCount >= 5) {
        return '36px Arquitecta'
      } else if (this.getActiveTopicCount >= 3) {
        return '45px Arquitecta'
      } else if (this.getActiveTopicCount <= 2) {
        return '70px Arquitecta'
      }
    },
    getButtonTitleFont () {
      if (this.getActiveTopicCount >= 5) {
        return '20px Arquitecta'
      } else if (this.getActiveTopicCount >= 3) {
        return '26px Arquitecta'
      } else if (this.getActiveTopicCount <= 2) {
        return '26px Arquitecta'
      }
    },
    getPadding () {
      if (this.getActiveTopicCount >= 5) {
        return '15px 50px'
      } else if (this.getActiveTopicCount >= 3) {
        return '30px 50px'
      } else if (this.getActiveTopicCount <= 2) {
        return '30px 50px'
      }
    }
  },
  methods: {
    setTopic (topic) {
      this.$store.commit('setTopic', {topic: topic.question})
      this.jumpTo('listening-watch', {dir: 'right'})
    }
  }
}
</script>


<!-- =================================================
 Vue Style
================================================== -->
<style scoped>
header {
  position: absolute;
  top: 0px;
  left: 200px;
  width: 1520px;
  height: 230px;
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
  /* margin-bottom: 50px; */
}

main .text-button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
