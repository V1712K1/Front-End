<template>
<v-app>
<div class="alinhadmin"> 
    <form  @submit.prevent="submeterFormulario" class="form">

    <label> Marcar Consulta </label>

      <div class="input-control">
        <label> animal </label>
        <input type="text"  v-model="consulta.animal">
      </div>

      <br>
      <div class="input-control">
        <label>  cliente </label>
        <input type="text" v-model="consulta.cliente">
      </div> 
       <br>
      <div class="input-control">
        <label>  data_hora </label>
        <input type="date" v-model="consulta.data_hora">
      </div> 
       <br>
      <div class="input-control">
        <label>  estabelecimento </label>
        <input type="text" v-model="consulta.estabelecimento">
      </div> 
       <br>
      <div class="input-control">
        <label>  preço </label>
        <input type="text" v-model="consulta.preco">
      </div> 
       <br>
      <div class="input-control">
        <label>  veterinario </label>
        <input type="text" v-model="consulta.veterinario">
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
      consulta:{
        animal:'',
        cliente:'',
        data_hora:'',
        estabelecimento:'',
        preco:'',
        veterinario:''
      }
    }
  },

  methods:{
    submeterFormulario(){
       
      return axios.post('https://projeto-veterinario-default-rtdb.europe-west1.firebasedatabase.app/consulta.json',  this.consulta)
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
  border: 1px solid #8C9EFF;
  color: #8C9EFF;
  text-decoration: none;
  padding: 10px 30px;
}

.button:hover,
.button:active {
  color: #fff;
  background-color: #8C9EFF;
}
.inupt-control {
  margin: 10px 0;
}
.input-control label {
  display: block;
  font-weight: bold;
  color: #8C9EFF;
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