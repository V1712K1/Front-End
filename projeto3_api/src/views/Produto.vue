<template>
    <v-container class="fonts_pag"> 
        <br />
          <div class="barrapesquisa">
            <v-text-field label="Insira o nome de uma raça" :rules="rules" hide-details="auto" class="inputpesquisa" v-model="raca"></v-text-field>            
            <v-btn class="ma-2" outlined color="green" @click="procuraRaca(raca)">Pesquisa</v-btn>
          </div>  
            <v-row class="rowimagem">
              <div class="polaroid">
                <v-img :src="imagem" alt="1_img" style="width:500px; height:400px;"></v-img>
                  <div class="container">
                    <p>{{index}}</p>
                  </div>
              </div>

              <div class="polaroid">
                <v-img :src="imagem" alt="2_img" style="width:500px; height:400px;"></v-img>
                  <div class="container">
                    <p>{{index}}</p>
                  </div>
              </div>
            </v-row>

            <hr><hr>

            <div v-for="(item, index) in info" :key="index">
                <ul>
                    <h3>{{index}}</h3>                    
                </ul>                        
            </div>
   </v-container>
</template>

<style>

.fonts_pag{

  font-family: 'Original Surfer', cursive;
}

div.polaroid {
  width: 500px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  margin-right:25px;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}

.barrapesquisa{
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
}

.inputpesquisa{

  border: 2px solid green;
  margin-right: 10px; 
  width: 50%;
}

.rowimagem{

    display: flex;
    justify-content: space-between;
    padding: 15px;
}



</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      imagem: null,
      rules: [
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => (this.info = response.data.message));
    console.log(that.info);
  },
  methods: {
    procuraRaca(raca){
        var that = this;
        axios
        .get("https://dog.ceo/api/breed/" + raca + "/images/random")
        .then(response =>(this.imagem = response.data.message));
        console.log(that.imagem);
    }
  },
};
</script>