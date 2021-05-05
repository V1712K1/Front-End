<template>
    <v-container class="fonts_pag"> 
        <br />
          <div class="barrapesquisa">
           <v-text-field label="Insira o nome de uma raça" :rules="rules" hide-details="auto" class="inputpesquisa" v-model="raca" v-on:keyup.enter="procuraRaca(raca)" ></v-text-field>       
            <v-btn class="ma-2" outlined color="green" @click="procuraRaca(raca)">Pesquisa</v-btn>
          </div>  
              <v-row class="rowimagem">
                <div class="polaroid">
                  <v-img :src="imagemL" alt="1_img" style="width:500px; height:400px;"></v-img>
                    <div class="container">
                      <p>{{factos[5]}}</p>
                    </div>
                </div>

                <div class="polaroid">
                  <v-img :src="imagemR" alt="2_img" style="width:500px; height:400px;"></v-img>
                    <div class="container">
                      <p>{{factos[7]}}</p>
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
    justify-content: space-around;
    padding: 15px;
}



</style>


<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      imagemL: null,
      imagemR: null,
      factos: ["The oldest known dog bones were found in Asia and date as far back as 10,000 B.C. The first identifiable dog breed appeared about 9000 B.C. and was probably a type of Greyhound dog used for hunting.",
      "There are an estimated 400 million dogs in the world.", 
      "It is much easier for dogs to learn spoken commands if they are given in conjunction with hand signals or gestures.","Over half of dog owners include their dogs in annual holiday photos.","A dog's average body temperature is 101.2 degrees.","Some studies believe that dogs started to be domesticated 33,000 years ago.","Dogs belong to a biological family called the Canidae, a member of this family is called a canid. This is the origin of the adjective \"canine\" which means \"of or like a dog, relating to or characteristic of dogs\".","Dogs have a very good sense of smell. The part of a dog\u2019s brain that analyses smell is 40 times larger than a human\u2019s and they can smell 1,000 to 10,000 times better than us.","About one-third of a dog\u2019s brain is dedicated to smell.","The breed of dog with the best sense of smell is the bloodhound.","Dog noses are also very cute and easy to boop.","A dog could detect a teaspoon of sugar if you added it to an Olympic-sized swimming pool full of water.","Dogs can be trained to detect cancer in humans."
    ],
      rules: [
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    };
  },
  mounted() {

    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => (this.info = response.data.message));

  },
  methods: {

    procuraRaca(raca){
       
        axios
        .get("https://dog.ceo/api/breed/" + raca + "/images/random")
        .then(response =>(this.imagemL = response.data.message));

        axios
        .get("https://dog.ceo/api/breed/" + raca + "/images/random")
        .then(response =>(this.imagemR = response.data.message));
        //console.log(that.imagem);

     //   this.procuraFacto();

    },

    


  },
};
</script>