<template>
    <v-container>
        <v-row>
            <!-- <h1 style="padding-top:75px">
                Produto
            </h1> -->
            <div style="padding-left:700px" v-if="favoritos.length > 0">
                <h3>Selecionados:</h3>
                <div v-for="(item, index) in favoritos" :key="index">
                    {{item.data[0].title}}
                </div>
            </div>
        </v-row>
  
        <div v-for="(item,index) in info" :key="index"> 
            <v-card class="mx-auto" max-width="344">
                <v-img :src="item.links[0].href" height="200px"> </v-img>
                <v-card-title>
                    {{item.data[0].title}}
                </v-card-title> 

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn class="mx-2" fab small style="color:pink; padding-right:5px" @click="addfavorito(item)"> 
                        <v-icon dark>
                            mdi-heart
                        </v-icon>
                    </v-btn>

                    <v-icon icon @click="show = !show" > 
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-icon>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            {{item.data[0].description}}
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import axios from "axios";
export default{
    props : ['id'],
    data () {
    return {
      favoritos:[], 
      show: false,
      info: null
        }
    },
    mounted () {
        axios
        .get("https://images-api.nasa.gov/search?q=" + this.id + "&media_type=image")
        .then(response => (this.info = response.data.collection.items))
        // console.log(this.info);
    },
    methods:{
        addfavorito(index){
          
            this.favoritos.push (index);
            console.log(this.favoritos);
        }
    }
}
</script>