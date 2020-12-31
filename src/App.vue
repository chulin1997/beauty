<template>
  <div id="app">
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>
<script>
import Footer from '@/components/navigation/Footer'
export default {
  components:{
    Footer,
  }
}
</script>
<style lang="scss">

</style>
