<template>
    <v-app>
        <v-container>
            <h1>Os nossos veterinários!</h1>
            <div v-for="(item, index) in vets" :key="index" :item="vets" class="dispor_cards">
                   <v-card class="mx-auto" width="344">
                   <v-img
                        :src="item.imagem"
                        height="344px"
                    ></v-img>

                    <v-card-title style="display:inline-flex;">
                        {{item.nome}}
                        {{item.idade}} anos
                    </v-card-title>

                    <v-card-subtitle>
                        {{item.especialidade}}
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="indigo accent-1" elevation="4" style="margin-bottom:10px;" text @click="show = !show">
                            Mais Informações
                        </v-btn>

                        <v-spacer></v-spacer>

                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text style="display:flex;">
                            Contactos: {{item.telemovel}}, {{item.email}}
                        </v-card-text>
                        <v-card-text style="display:flex;">
                            Estabelecimento: {{item.estabelecimento}}
                        </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>
        </v-container>
    </v-app>
</template>

<style scoped>
.dispor_cards{
    display: inline-flex;
    justify-content: space-around;
    padding: 10px;
    margin-top: 30px;
    margin-right: 10px;
    margin-left: 10px;
    box-shadow: 4px 5px 9px  #8C9EFF;
    border-radius: 10px;
}
</style>

<script>
import axios from "axios";
export default ({
    data() {
        return {
            vets : [],
            show: false
        };
        
    },

    mounted(){
        this.api();
    },

    methods:{

    api(){
      axios
      .get("https://projeto-veterinario-default-rtdb.europe-west1.firebasedatabase.app/.json")
    //   .then(response => (this.vets = Object.keys(response.data.veterinario)));
      .then(response => (this.vets = response.data.veterinario));
    },
    }
})

</script>
