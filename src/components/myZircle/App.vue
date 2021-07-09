<template>
  <div id="app">
    <z-canvas :views="$options.components"></z-canvas>
  </div>
</template>

<script>
  import home from './components/home'
  export default {
    components: {
      home
    },
    mounted () {
      this.$zircle.setView('home')
    }
  }
</script>
