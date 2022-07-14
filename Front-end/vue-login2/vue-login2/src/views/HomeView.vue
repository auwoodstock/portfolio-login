<template>
  <div class="home">
    <HelloWorld msg="Welcome to The Fake Bank & Co." />
    <img alt="" src="../components/images/07.png" width="400" height="400" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
}

</script>

<style>
  h1, h2{
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    /*animation: moveToRight 4.5s ease-in; */
  }
#logo-td{
  align-items: center;
}
</style>
