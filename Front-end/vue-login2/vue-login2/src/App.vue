<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <!--v-img v-bind:src="'@/images/symbol.png'" height="30px" width="40px" ></v-img -->
  <nav>
    <router-link to="/" exact>Landing page</router-link>
    <router-link to="/login" exact>Login page</router-link>
    <router-link to="/openAccount" exact>Open an account</router-link>
    <router-link to="/accountMovement" exact>Account transactions</router-link>

    <div class="logo" align="right">
      <table id="menutable" align="right">
        <tr>
          <td>
            <h2>Auwoodstock Industries</h2>
            <!--h3 v-if="globals.customerName != '' ">{{ globals.customerName }}</h3 -->
            <!--v-img src="'../components/images/symbol.png'"></v-img -->
            <!--img :src="'../src/symbol.png'" / -->
          </td>
        </tr>
      </table>
    </div>
  </nav>
  <router-view/>
    <!--router-link to="/construction" exact>Move your money</router-link -->
  <!--div class="logo">
    <img src="../components/images/404.png" />
  </div -->
    <!--footer alignment="bottom">
      <div class="wave">
          <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.99 C150.00,150.00 349.21,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
      </div>
    </footer -->
</template>

<!--script>
  //import { defineComponent } from '@vue/composition-api'
  import globals from './globals.js';
  export default{
    clientName
  }
</script-->

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    body{
      padding: 0;
      margin: 0;
      background: #0575E6;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #021B79, #0575E6);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #021B79, #0575E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    nav {
      /*padding: 30px;*/
      /*background: #000;*/
      background: #0575E6;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #021B79, #0575E6); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #021B79, #0575E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      padding: 30px 10px;
      margin-bottom: 40px;
      align-items: center;
    }

    nav a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      padding: 15px 14px;
      border-radius: 30px;
      float: right;
      text-align: center;
    }

    nav a:hover{
      background: #ddd;
      color: #333;
    }

    nav a.router-link-exact-active {
      color: #000; /*#42b983;*/
    }

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
      text-decoration: none;
    }
    a {
      color: #fff; /*#42b983;*/
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 10px;
    }

    .router-link-active{
      background: #eee;
      color: #444;
    }

    .logo{
      display: flex;
      padding: 0px 0px;
      align-items: top;
    }

    h1{
    font-family: 'IBM Plex Sans', sans-serif;
    color: #000;
    animation: moveToRight 3.5s ease-in;
    }

    h2, h3, h4{
    font-family: 'IBM Plex Sans', sans-serif;
    /*color: white; */
    /*animation: moveToRight 4.5s ease-in;*/
    }

    h2{
      font-size: 32px;
      color: white;
    }

    @keyframes moveToRight {
      0%{
        opacity: 0;
        transform: translateX(-100px);
      }

      100%{
        opacity: 1;
        transform: translateX(0);
        }	
    }

    .wave{
      background: #0575E6;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #021B79, #0575E6);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #021B79, #0575E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

      height: 100px;
      width: 100%;
      align-self: bottom;
    }

</style>
