<template>
  <div id="app">
  <v-app id="inspire">
    <v-card>
      <v-card-text>
        <v-layout wrap>
          <v-flex xs12 md12>
            <v-subheader class="pa-0">What type of request is this?</v-subheader>
          </v-flex>
          <v-flex xs3 md3>
              <v-autocomplete
                v-model="product"
                :items="products"
                label="Product"
                prepend-icon="work"
                chips
                color="blue"
              >
              </v-autocomplete>
            </v-flex>

        </v-layout>
      </v-card-text>
    </v-card>

    <div v-for="(item, index) in info" :key="index">
      <ul>
          <h3>{{index}}</h3>                    
      </ul>                        
  </div>
    
  </v-app>
</div>
</template>

<script>
import axios from "axios";

  export default {
    data () {
    return {
      model: null,
      product: null,
      category: null,
      purpose: null,
      products: [],
      info: null,
    }
  },
  computed: {
    categories() {
      return Object.keys(this.categoriesPurposes)
    },
  }, 
  methods:{
    api(){
      axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => (this.products = response.data.message).then(
        this.products = Object.keys(response.data.message).map((key) => {
          return response.data.message[key]
        })
      ));
    },

  },
  mounted() {  // retorna as raças dos caes
    this.api();
    
  },

  }
</script>