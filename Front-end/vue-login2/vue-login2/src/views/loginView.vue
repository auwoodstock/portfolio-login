<template>
  <div class="login">
    <!-- img alt="Vue logo" src="../assets/logo.png" -->
    <loginPage /> <!--msg="Welcome to Your Vue.js App"/ -->
  </div>
</template>

<script>
// @ is an alias to /src
import loginPage from '@/components/loginvue.vue'

export default {
  name: 'loginView',
  components: {
    loginPage
  }
}
</script>
