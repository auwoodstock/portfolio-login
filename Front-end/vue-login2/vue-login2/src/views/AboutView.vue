<template>
  <div class="about">
    <h5 v-if="custName != 'AAA' && logginBtn " align="left">Welcome {{ custName }} </h5>
    <h5 v-else align="left">You're not logged-in or a valid client. Please fill-in the field below in order to get recorded as a client and then, select one product to be associated to you</h5>


    <!--h1>This is probably under construction</h1 -->
    <img src="../components/images/404.png" />
  </div>
</template>

<script>
  import global_ from '../components/globalVars.vue';

  export default{
    name: "aboutView",
    data(){
      return{
        custName: global_.customerName,
        logginBtn: global_.loginButton,
      }
    },
  }

  //alert('this.custName: ' + this.custName);
  //alert('this.logginBtn: '+ this.logginBtn);
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@1,600&display=swap');

    h1{
      font-family: 'IBM Plex Sans', sans-serif;
      color: white;
    }

    h2, h3, h4, h5{
      font-family: 'IBM Plex Sans', sans-serif;
      color: white;
      /*animation: moveToRight 4.5s ease-in; */
    }
   
</style>