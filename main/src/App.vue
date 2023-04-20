<template>
  <Header />
  <div class="sub-container">
    <Loading v-if="loading"/>
    <div v-if="!loading" id="micro-container">子应用内容</div>
  </div>
  <Footer />
</template>

<script>
import { ref } from 'vue'
import Header from './components/Header'
import Loading from './components/Loading'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Loading,
    Footer
  },
  setup() {
    const loading = ref(true)

    setTimeout(() => {
      loading.value = false
    }, 3000)
    
    return {
      loading
    }
  }
}
</script>

<style>
html, body, #micro_web_main_app{
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sub-container {
  min-height: 100%;
  position: relative;
}
#micro-container {
  min-height: 100%;
  width: 100%;
}
</style>
