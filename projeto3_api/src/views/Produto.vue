<template>
<v-app>    
    <v-container class="fonts_pag"> 
        <br />
          <div>
          <v-card class="barrapesquisa">
            <v-card-text>
              <v-layout>
                <v-flex>
                  <v-subheader style="color:#F4511E;"> Selecione o nome de uma raça e clique enter</v-subheader>
                </v-flex>
                <v-flex>
                  <v-autocomplete v-model="raca" :items="products" label="Raça" v-on:keyup.enter="procuraRaca(raca)" color="orange" 
              v-on:change='onChange'>
              
                  </v-autocomplete>
                <p v-for='(l, index) in log' :key="index">{{ l }}</p>
                  
                  
                </v-flex>
              </v-layout>
            </v-card-text>
            </v-card>
          </div>  
          <hr><hr>
          <v-row class="rowimagem" v-if="cards" >
              <div class="polaroid">
                <v-img :src="imagemL" alt="1_img" style="width:500px; height:400px;"></v-img>
                  <div class="container">
                    <p>{{factos[5]}}</p>
                  </div>
                    <v-btn color="deep-orange darken-1" class="alinha_card_btn"  @click="favorito(imagemL)">
                       <v-icon>mdi-thumb-up</v-icon>
                    </v-btn>
              </div>
              <div class="polaroid">
                <v-img :src="imagemR" alt="2_img" style="width:500px; height:400px;"></v-img>
                  <div class="container">
                    <p>{{factos[7]}}</p>
                  </div>
                     <v-btn color="deep-orange darken-1" class="alinha_card_btn"  @click="favorito(imagemR)">
                       <v-icon>mdi-thumb-up</v-icon>
                    </v-btn>
              </div>
          </v-row>
          <hr><hr>

          

          <div class="colunaFav">
                <div v-if="favoritos.length>=0">
                  <h3>Favoritos</h3>
                  <div v-for="(fav, index) in favoritos" :key="index">
                      
                      <div v-if="index%2 != 0"> 
                        <img width="100px" :src="fav"/>
                      </div>
                      <div v-if="index%2 == 0">
                      {{fav}} <v-icon x-small @click="removeFav(fav)">mdi-close-circle-outline</v-icon>
                      </div>
                  </div>
                </div>

          </div>
          <hr><hr>
   </v-container>
</v-app> 
</template>

<style scoped>

.alinha_card_btn{

   margin-bottom: 10px;
}

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
  justify-content: center;
  margin-bottom: 15px;
}
.inputpesquisa{
  border: 2px solid white;
  margin-right: 10px; 
  width: 50%;
}
.rowimagem{
    display: flex;
    justify-content: space-around;
    padding: 15px;
    margin-top: 15px;
}

.colunaFav {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>


<script>
import axios from "axios";
export default {
  data() {
    return {
      product: null,
      category: null,
      purpose: null,
      products: [],
      info: null,
      imagemL: null,
      imagemR: null,
      log: [],
      factos: ["The oldest known dog bones were found in Asia and date as far back as 10,000 B.C. The first identifiable dog breed appeared about 9000 B.C. and was probably a type of Greyhound dog used for hunting.",
      "There are an estimated 400 million dogs in the world.", 
      "It is much easier for dogs to learn spoken commands if they are given in conjunction with hand signals or gestures.","Over half of dog owners include their dogs in annual holiday photos.","A dog's average body temperature is 101.2 degrees.","Some studies believe that dogs started to be domesticated 33,000 years ago.","Dogs belong to a biological family called the Canidae, a member of this family is called a canid. This is the origin of the adjective \"canine\" which means \"of or like a dog, relating to or characteristic of dogs\".","Dogs have a very good sense of smell. The part of a dog\u2019s brain that analyses smell is 40 times larger than a human\u2019s and they can smell 1,000 to 10,000 times better than us.","About one-third of a dog\u2019s brain is dedicated to smell.","The breed of dog with the best sense of smell is the bloodhound.","Dog noses are also very cute and easy to boop.","A dog could detect a teaspoon of sugar if you added it to an Olympic-sized swimming pool full of water.","Dogs can be trained to detect cancer in humans.", "Dogs have three eyelids. The third lid, called a nictitating membrane or \"haw,\" keeps the eye lubricated and protected."
      ],
      favoritos: [],
      snackbar: false,
      vertical: true,
      rules: [
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      cards: false,
      favoriteDog: {
        image: '',
        breed: ''
      }

    };
  },
  computed: {
    categories() {
      return Object.keys(this.categoriesPurposes)
    },
  },

  mounted() {  // retorna as raças dos caes
    this.api() ;
    this.log(this.p);
    
  },
  
  methods: {

    api(){
      axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => (this.products = Object.keys(response.data.message)
      ));
    },

    procuraRaca(raca){
       
        axios
        .get("https://dog.ceo/api/breed/" + raca + "/images/random")
        .then(response =>(this.imagemL = response.data.message));
        axios
        .get("https://dog.ceo/api/breed/" + raca + "/images/random")
        .then(response =>(this.imagemR = response.data.message));
        //console.log(that.imagem);
        //   this.procuraFacto();
        this.cards = true;
    },

    favorito(item) {
      this.favoriteDog.breed = this.raca;
      if(this.favoritos.indexOf(this.raca) === -1){
        this.favoriteDog.image = item;
        this.favoritos.push(this.favoriteDog.breed);
        this.favoritos.push(this.favoriteDog.image);
        this.snackbar = true;
      } else {
        alert("Já escolheste um favorito desta raça!");
      }
        
    },

    removeFav(item){
      this.favoritos.splice(item, 2);
    },

    onChange: function (e){
      this.log.push(`Raça escolhida: "${e}"`);
    }
    
  },
};
</script>