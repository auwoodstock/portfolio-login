<template>
<html>
    <head>
        <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
        <meta content="utf-8" http-equiv="encoding">
        <title>Login Page</title>
        <!-- link rel="stylesheet" type="text/css" href="style.css"/ -->
        <!--script type="text/javascript" src="./assets/js/vue2.js"></script -->
        <!-- script type="text/javascript" src="libs/axios/axios.js" -->
        <!-- script src="./assets/js/login.js" defer></ -->
        <!--link rel="stylesheet" href=".assets/style.css" / -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body id="App">
        <div class="Login" id="Login">
            <div class="container">
                <div class="text-elements">
                    <br>
                    <table width="1100">
                        <tr>
                            <td width="700" align="left">
                                <h1>Welcome to The Fake Bank & Co.</h1>
                                <h3>The financial division of Auwoodstock Industries</h3>
                            </td>
                            <td align="right" width="400">
                                <img src="./images/07.png"  class="img-responsive" width="200" height="200"  />            
                            </td>
                        </tr>
                        <tr>
                            <td align="left">
                                <h4>If you are a client, please fill-in these fields to get connected</h4>
                            </td>
                        </tr>
                    </table>
                    <!--h2>Once you give us your money, you won't see it anymore...</h2 -->
                    <header id="header-login">
                        <br>
                        <div class="input-group">
                            <table width="1200">
                                <tr>
                                    <td width="400" align="left">
                                        <input type = "text" v-model="login" class="form-control form-control-lg" placeholder="Input login email: " width="600" height="100">
                                    </td>
                                    <td width="400">
                                        <input v-bind:type="[showPassword ? 'text' : 'password']" v-model="keyword" class="form-control form-control-lg" placeholder="Input login password: ">
                                    </td>
                                    <td align="right" width="150">
                                        <input type="checkbox" id="showPWD" @click="showPassword = !showPassword" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']">
                                            <font color="white">&nbsp;&nbsp;&nbsp;Show Password</font>
                                    </td>
                                    <td align="right" width="150">
                                        <div class="input-group-append">
                                            <button v-on:click="GetClientData(login, keyword)" class="btn btn-success btn-lg">Login >>></button>
                                        </div>
                                    </td>
                                    <!--td align="right" width="100">
                                        <div class="input-group-append">
                                            <button v-on:click="CancelClick()" class="btn btn-success btn-lg">Cancel</button>
                                        </div>
                                    </td -->
                                </tr>
                            </table>
                        </div>
                        <br>

                        <br>
                        <div class="row">
                            <div class="text-center">
                                <div v-if="loading === true" class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>                        
                        </div>
                        <div class="row">
                            <div> <!--class="text-danger" -->
                                <!--input type="text" v-if="error_ind === true" v-model="validation_message" -->
                                <p v-if="error_ind === true"><font color="yellow"><strong> {{ error_message }} </strong></font></p>
                                    <!--Cuenta de cliente v-model ingresada o clave no es válida. Por favor rectifique. -->
                            </div>
                        </div>

                        <div>
                            <table width="1200">
                                <tr>
                                    <td align="left">
                                        <h5>If you are not a client, please click on this button to enter to the best financial services in the world</h5>
                                    </td>
                                    <td align="right">
                                        <button v-on:click="RelocatePage(false)"  class="btn btn-success btn-lg">Become a client >>></button>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div class="row">
                            <div>
                                <!--h3> {{ token }} ></h3>
                                <h3> {{ custName }} </h3 --> <!-- Not a client yet? Please click the link below and get into the best bank ever!</h3>
                                <h4><a href="#" v-on:click="RelocatePage()">Become a client!!!</a></h4 -->
                            </div>
                        </div>
                        <div>
                            <!--app-tarea></app-tarea -->
                        </div>
                        <!--div class="row">
                                <p class="cursor">
                                    <router-link v-on:click="RelocatePage()">Go to About</router-link>
                                </p>
                                <router-view></router-view -->

                        <!--/div -->
                        <br>
                    </header>
                </div>
            </div>
        </div>
    </body> <!--indexbody-->
</html>  
</template>

<script>

    import axios from "axios";
    
    import global_ from './globalVars.vue';

    export default {
        name: "login-vue",
        //components:{
        //        'app-tarea': Tarea
        //},
        data(){
            return{
                useremail: '',
                userkeyword: '',
                userdata: [],
                loading: false,
                error_message: '',
                error_ind: false,
                error_color: '#FF0000',
                URL_to_process: "https://localhost:44395/api/UserBasicData/",
                showPassword: false,
                publicPath: process.env.BASE_URL,
                destPage: '',
                token: global_.token,
                custName: global_.customerName,
                loginButton: global_.loginButton,
            }
        },
        methods: {
            GetClientData(loginclient, keywordclient) {
                this.loading = true;
                this.error_ind = false;
                if(!this.PreviousValidation(loginclient)){
                    //alert('ES FALSO');
                    this.error_ind = true;
                    this.loading = false;
                }
                //alert(this.error_ind);
                if(!this.error_ind){
                    //alert(loginclient);
                    
                    if(loginclient != ''){
                        //alert('1');
                        //alert('this.URL_to_process+loginclient: ' + this.URL_to_process+loginclient);
                        axios.get(this.URL_to_process+loginclient).then(response => 
                        {
                            console.log(response);
                            this.userdata = response.data;
                            //alert('this.userdata.length' + this.userdata.length);
                            if(this.userdata.length==0){
                                alert('ES CDRO');
                                this.error_message = 'Email account provided by client: ' + loginclient +  ' - is not a valid email address. Please check it out and try again.';
                                this.error_ind = true;
                                this.loading = false;
                                this.useremail = '';
                                this.ClearFields();
                                return false;
                            }
                            else{
                                //alert('LENGTH NO ES CERO...');
                                this.useremail = this.userdata[0].userEmail;
                                this.userkeyword = this.userdata[0].userKeyword;

                                //alert('this.useremail: ' + this.useremail);
                                //alert('loginclient: ' + loginclient);
                                if(this.useremail != loginclient){
                                    //alert('USUARIO DIFERENTE AL LOGIN');
                                    this.error_message = 'Email account provided by client: ' + loginclient +  ' - is not a valid email address. Please check it out and try again.';
                                    this.error_ind = true;
                                    this.loading = false;
                                }
                                else{
                                    if(keywordclient != this.userkeyword){
                                        //alert('CLAVE DIFERENTE A LA GUARDADA');
                                        this.error_message = 'Password provided by client: ' + loginclient +  ' - is not a valid. Please check it out and try again.';
                                        this.error_ind = true;
                                        this.loading = false;
                                    }
                                    else{
                                        //alert('ELSE...');
                                        this.error_ind = false;
                                        this.loading = false;
                                        this.RelocatePage(true);
                                    }
                                }
                            }
                                /*alert('ANTES DE BORRAR LOS CAMPOS');
                                this.RelocatePage();
                                //this.ClearFields(); */
                        } ) ;
                    }
                    else{
                        //alert('2');
                        this.ClearFields();
                    }
                    //alert('ANTES DE BORRAR LOS CAMPOS');
                    //this.ClearFields();
                    //Vue.prototype.App.clientName = 'ABC';
                    //alert('token: ' + this.token);
                    this.token = "ESTE ES EL TOKEN AHORA";
                    //alert('this.useremail: ' + loginclient);
                    //alert('token: ' + this.token);
                    this.custName = loginclient; //'METEORO EL REY DE LAS PISTAS';
                    //global_.token = token;
                    //alert('this.custName: ' + this.custName);
                    global_.customerName = this.custName;
                    //alert('global_.customerName: ' + global_.customerName);

                    //this.RelocatePage();
                }
            },

            PreviousValidation(loginclient){
                var character = "@";
                //alert('loginclient: ' + loginclient);
                //alert('loginclient TYPEOF: ' + typeof(loginclient) === 'undefined');
                if(typeof(loginclient)  !== 'undefined'){ //!= 'NULL:undefined'){
                    if(!loginclient.includes(character)){
                        //alert('1');
                        this.error_message = 'Email account provided by client: ' + loginclient +  ' - is not a valid email address. Please check it out and try again.';
                        this.loading = false;
                        this.ClearFields();
                        return false;
                    }
                    else{
                        //alert('ENTRA EN EL ELSE');
                        this.loading = true;
                        return true;
                    }
                }
                else{
                        //alert('ES BLANCO');
                        this.error_message = 'Email account provided by client: ' + loginclient +  ' - is not a valid email address. Please check it out and try again.';
                        this.loading = false;
                        this.ClearFields();
                        return false;
                }
            },

            ClearFields(){
                this.login = '';
                this.keyword = '';
                this.loading = false;
            },

            RelocatePage(loginButton){
                //alert('ANTES DEL RELOCATION');
                //this.destPage = '/Tarea'; //  var targetPath = this.publicPath;
                global_.loginButton = loginButton;
                this.$router.push('about');
                //alert('targetPath: ' + targetPath);
                //this.$router.push(this.destPage);
                //window.location = 'public/404-page.html';
            }

        }
    }
</script>

<style scoped>

    h1{
        font-family: 'IBM Plex Sans', sans-serif;
        color: #fff;
        animation: moveToRight 3.5s ease-in;
    }

    h2, h3{
        font-family: 'IBM Plex Sans', sans-serif;
        color: #fff;
        animation: moveToRight 4.5s ease-in;
    }

    h4{
        font-family: 'IBM Plex Sans', sans-serif;
        color: #fff;
    }

    h5{
        font-family: 'IBM Plex Sans', sans-serif;
        color: #fff;
    }

    .showPWD{
        padding: 100px;
    }
    .cursor{
        cursor: pointer;
    }

</style>