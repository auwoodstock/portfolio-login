<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import global_ from './globalVars.vue';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
      custName: String
    }
  }
  global_.customerName = 'AAA';
  //alert(globals.customerName)
  //this.msg = globals.customerName;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@1,600&display=swap');

  ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
    color: white;
  }
  a {
    color: #fff; /*#42b983;*/
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  h1{
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    animation: moveToRight 4.5s ease-in;
  }
  h2{
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    
  }
  h4{
    margin: 40px 0 0;
    color: white;
  }


</style>
