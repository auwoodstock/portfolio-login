new Vue({
    el: "#Login",
    data: {
        username: '',
        password: '',
        /*loginUsers: [{
            "username":"admin",
            "password":"admin"
        },
        {
            "username":"Razvan",
            "password":"parolamea"
        }]*/
    },

    methods: {
        validate() {
            alert('Entró');
            //const un = this.username;
            //const pw = this.password;
            //for(var userIndex in this.loginUsers){
                //const user = this.loginUsers[userIndex];
                //if(un==user.username && pw==user.password){
                if(this.username != ''){
                    //window.location='table.html';
                    console.log('UNO');
                    return;
                }
            //}
            console.log('DOS');
            alert("Login failed");
        }
    }
});