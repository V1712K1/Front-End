<template>
<div class="container-fluid">
    <div class="formulario">
    <v-form class="form_style" ref="form" v-model="valid" lazy-validation>
        
    <v-text-field v-model="name" :counter="20" :rules="nameRules" label="Name" required>
    </v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
    </v-text-field>

    <v-text-field v-model="Data" label="Data" :rules="dataRules" type="date" required>
    </v-text-field>

    <v-text-field v-model="telefone" :counter="9" :rules="telefoneRules" label="Telefone" required>
    </v-text-field>

    <v-text-field v-model="password" :rules="passRules" label="Password" type="password" required>
    </v-text-field>

    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required>
    </v-checkbox>

    <v-btn href="/Login" :disabled="!valid" :color="success" class="mr-4"  style="margin-right:10px;" @click="validate">
      Validate
    </v-btn>

    <v-btn :color="error" class="mr-4"  @click="reset">
      Reset Form
    </v-btn>
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
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      data: '',
      dataRules : [
        v => !!v || 'Date is required',
      ],
      telefone: '',
      telefoneRules: [
        v => !!v || 'Number is required',
        v => (v && v.length <= 9) || 'Insira um numero real!',
      ],
      password: '',
      passRules: [
        v => !!v || 'Password is required',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate();

        firebase.auth().createUserWithEmailAndPassword(this.name, this.email, this.data, this.telefone, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("user " + user);
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log("errorCode " + errorCode);
          console.log("errorMessage " + errorMessage);
          // ..
        });

      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>
