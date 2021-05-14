<template>
<v-app>
<div class="container-fluid">
    <div class="formulario">
        <v-form class="form_style" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="email" :counter="10" :rules="emailRules" label="Email" required>
            </v-text-field>

            <v-text-field v-model="password" :rules="passRules" label="Password" type="password" required>
            </v-text-field>

            <v-btn :disabled="!valid" color="success" class="mr-4" style="margin-right:10px;" @click="validate">
                Validate
            </v-btn>

            <v-btn color="warning" class="mr-4"  style="margin-right:10px;" @click="regista">
              Register
            </v-btn>
            <v-btn color="error" @click="reset">
                Reset Form
            </v-btn>

            <div class="problem" v-if="alerta">
              <v-alert outlined prominent>
                Problema de autenticacao (verifique credencias)
                {{alert}}
              </v-alert>
            </div>
        </v-form>
    </div>
</div>    
</v-app>
</template>

<style>
.container-fluid{
    padding: 30px;
    font-family: 'Original Surfer', cursive;
}

.formulario{

    display: flex;
    justify-content: stretch;

}

.form_style{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}

.problem{

  margin-top: 20px;
  background-color: orangered;
}

</style>

<script>

import firebase from 'firebase';
 
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
  
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log("user " + user);
          this.alerta = false;
          this.$router.push("/");
        })
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