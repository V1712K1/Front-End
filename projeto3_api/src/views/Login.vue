<template>
<div class="container-fluid">
    <div class="formulario">
        <v-form class="form_style" ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required>
            </v-text-field>

            <v-text-field v-model="password" :rules="passRules" label="Password" required>
            </v-text-field>

            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree with the terms?" required>
            </v-checkbox>

            <v-btn :disabled="!valid" :color="success" class="mr-4" style="margin-right:10px;" @click="validate">
                Validate
            </v-btn>
            <v-btn :color="error" class="mr-4" @click="reset">
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
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>