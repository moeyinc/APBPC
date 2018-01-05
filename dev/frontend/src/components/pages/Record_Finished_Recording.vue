<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <page-aside
      :has-back-button="false"
    />
    <header>
      <h2>RECORD YOUR OWN STORY</h2>
    </header>
    <hr class="top-divider"/>
    <main>
      <div class="main-inner">
        <div class="thank-you-wrapper">
          <p class="thank-you">
            Thank you for telling us your story!
          </p>
          <text-button
            class="text-button"
            :width="'350px'"
            :height="'50px'"
            :border-radius="'15px'"
            :font="'bold 30px Arquitecta'"
            :letter-spacing="'3px'"
            :text-content="'BACK TO HOME'"
            :regular-bg-color="'#47673b'"
            :regular-text-color="'#efdfd4'"
            :active-bg-color="'#efdfd4'"
            :active-text-color="'#47673b'"
            @clicked="jumpTo('home')"
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
export default {
  name: 'record-finished-recording',
  components: {
    PageAside, TextButton
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
  text-align: center;
}

main .thank-you-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}

main .thank-you {
  font-family: 'HoeflerText Regular';
  font-size: 50px;
  margin-top: 100px;
  margin-bottom: 50px;
}

main .text-button {
  display: inline-block;
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
