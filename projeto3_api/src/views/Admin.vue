<template>
<v-app>
  <div class="alinhadmin"> 
    <form @submit.prevent="submeterFormulario" class="form">

      <div class="input-control">
        <label>  Raça </label>
        <input type="text"  v-model="novoRaca.raca">
      </div>

      <br>
      <div class="input-control">
        <label>  Preço </label>
        <input type="text" v-model="novoRaca.valor">
      </div> 

      <br>
      <v-btn type="submit" class="button" > Enviar </v-btn>
    </form>
  </div>
</v-app>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      novoRaca:{
        raca:'',
        valor:''
      }
    }
  },

  methods:{
    submeterFormulario(){
       
      return axios.post('https://projetoapi-f1c69-default-rtdb.firebaseio.com/.json',  this.novoRaca)
    },
    
  }


}
</script>
<style scoped>

.alinhadmin{

  display: flex;
 justify-content: center;
}

.form {
 max-width:550px;
 box-sizing: border-box;
 margin-top: 30px;
 margin: 30px;
 padding: 30px;
 text-align: justify;
 box-shadow: 0 0 24px rgba(0,0,0,0.3);
 width: 100%;
 
}
.button {
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #F4511E;
  color: #F4511E;
  text-decoration: none;
  padding: 10px 30px;
}

.button:hover,
.button:active {
  color: #fff;
  background-color: #F4511E;
}
.inupt-control {
  margin: 10px 0;
}
.input-control label {
  display: block;
  font-weight: bold;
  color: #F4511E;
}
.input-control input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;

}
.input-control input:focus {
  background-color: #eee;
  outline: none;
}
</style>

