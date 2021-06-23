<template>
<v-app>
<div class="container-fluid" :style="{'background-image': 'url(' + require('/images/fundo_login.jpg') + ')'}" style="height:800px; ">
<div class="container-fluid" style="height:100%; width:100%; ">
<div class="container">
    <v-alert type="info">
      <div class="alinha_info" >
      Se nao tem registo no nosso site, por favor clique no botão register
      </div>
    </v-alert>
    <div class="formulario" v-on:keyup.enter="validate()" id="form">
        <v-form class="form_style" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :counter="255" :rules="emailRules" label="Email" required>
            </v-text-field>

            <v-text-field v-model="password" :rules="passRules" label="Password" type="password" required>
            </v-text-field>

            <div class="botoes">
            <v-btn :disabled="!valid" color="teal lighten-4" class="mr-4" style="margin-right:10px;" @click="validate" >
                Validate
            </v-btn>

            <v-btn color="orange lighten-3" class="mr-4"  style="margin-right:10px;" @click="regista">
              Register
            </v-btn>
            <v-btn color="deep-orange accent-2" @click="reset">
                Reset Form
            </v-btn>

            <div class="problem" v-if="alerta">
              <v-alert outlined :type="warning" prominent border="left" style="color:white;">
                Problema de autenticacao (verifique credencias)
                {{alert}}
              </v-alert>
            </div>
            </div>
        </v-form>
    </div>
  </div>   
</div> 
  </div>   
</v-app>
</template>

<style scoped>
.container-fluid{
    padding: 30px;
    font-family: 'Original Surfer', cursive;
}
#form{
    display: flex;
    justify-content: stretch;
    position: relative;
}
.form_style{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
.problem{
  margin-top: 20px;
  background-color: #FF6E40;
}
.botoes{
  display: flex;
  justify-content: left;
}
.alinha_info{
  display: flex;
  justify-content: left;
}
.container-fluid{
  background-size: cover;
}
.container{
  margin-top: 45px;
}
</style>

<script>
//import firebase from 'firebase';
 
  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      password: '',
      passRules: [
        v => !!v || 'Password is required',
      ],
      alerta: false,      
      alert: '',
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
  
        /*firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log("user " + user);
          this.alerta = false;
          this.$router.push("/");
        })*/
        .catch((error) => {
          
          var errorCode = error.code;
          var errorMessage = error.message;
          this.alerta = true; 
          this.alert = errorMessage;
          console.log(errorCode);
        });
      },
      
      reset () {
        this.$refs.form.reset()
      },
      regista(){        
          this.$router.push("/Register");
      }
    },
  }
</script>