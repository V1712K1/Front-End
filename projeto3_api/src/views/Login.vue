<template>
<div class="container-fluid">
    <div class="formulario">
        <v-form class="form_style" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required>
            </v-text-field>

            <v-text-field v-model="password" :rules="passRules" label="Password" type="password" required>
            </v-text-field>

            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree with the terms?" required>
            </v-checkbox>

            <v-btn :disabled="!valid" :color="success" class="mr-4" style="margin-right:10px;" @click="validate" >
                Validate
            </v-btn>

            <v-btn :disabled="!valid" :color="success" class="mr-4"  style="margin-right:10px;">
              Register
            </v-btn>
            <v-btn :color="error" class="mr-4" @click="reset">
                Reset Form
            </v-btn>

            <div v-if="alerta">
              <v-alert
                outlined
                type="warning"
                prominent
                border="left"
              >
                Problema de autenticacao
              </v-alert>
            </div>
        </v-form>
    </div>
</div>    
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

</style>

<script>

import firebase from 'firebase';
 
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      passRules: [
        v => !!v || 'Password is required',
      ],
      checkbox: false,
      alerta: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
  
        firebase.auth().signInWithEmailAndPassword(this.name, this.password)
        .then((userCredential) => {
          // Signed in
          this.$router.push("/");
          var user = userCredential.user;
          console.log("user " + user);
          this.alerta = false;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("errorCode " + errorCode);
          console.log("errorMessage " + errorMessage);
          this.alerta = true;
          this.$router.push("/Register");
        });

      },
      
      reset () {
        this.$refs.form.reset()
      },

    },



  }
</script>