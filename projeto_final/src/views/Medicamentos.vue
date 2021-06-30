<template>
    <v-app>
        <v-container>
            <h1>Medicamentos</h1>

            <div v-for="(item, index) in medicamentos" :key="index" :item="medicamentos" class="dispor_cards">
                   <v-card class="mx-auto" width="344">
                   <v-img
                        :src="item.imagens"
                        height="344px"
                    ></v-img>

                    <v-card-title style="display:inline-flex;">
                        {{item.nome}}:
                        {{item.preco}} euros
                    </v-card-title>

                    <v-card-subtitle>
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="indigo accent-1" elevation="4" style="margin-bottom:10px;" text @click="show = !show">
                            Mais Informações
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn color="indigo accent-1" class="alinha_card_btn"  @click="carrinho_compra(item)">
                            <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>

                    </v-card-actions>

                    <v-expand-transition style="display:flex;">
                        <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text >
                            Caracteristicas: {{item.caracteristica}}
                        </v-card-text>
                        <v-card-text >
                            Farmaceutica: {{item.farmaceutica}}
                        </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
               </div> 

               <hr>
               <hr> 

               <div class="colunaFav">
                <div v-if="compras.length>0">
                  <h3>Carrinho de Compras </h3>
                  <div v-for="(compra, index) in compras" :key="index">
                      {{compra.nome}}, {{compra.preco}}euros <v-icon color="red" small @click="removeCompra(compra)">mdi-close-circle-outline</v-icon>
                  </div>
                </div>

          </div>
        </v-container>
    </v-app>
</template>

<style scoped>
.dispor_cards{
    display: inline-flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 30px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom:25px;
    box-shadow: 4px 5px 9px  #8C9EFF;
    border-radius: 10px;
}
</style>

<script>
import axios from "axios";
export default ({
    data() {
        return {
            medicamentos: [],
            compras: [],
            show: false,
            carrrinho_compra: {
                imagem: '',
                nome: '',
                preco: ''
            }
        };
        
    },
    mounted(){
        this.api();
    },
    methods:{
    api(){
      axios
      .get("https://projeto-veterinario-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then(response => (this.medicamentos = (response.data.medicamento)));
    },

    carrinho_compra(item) {
      if(this.compras.indexOf(item) === -1){
        this.compras.push(item);
      } else {
          this.snackbar = true;
      }
        
    },

    removeCompra(item){
      this.compras.splice(item, 1);
    },


    }
})
</script>