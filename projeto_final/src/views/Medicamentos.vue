<template>
    <v-app>
        <v-container>
            <h1>Medicamentos</h1>
            <div class="input">
            <v-text-field
                label="Main input"
                :rules="rules"
                hide-details="auto"
                v-model="pesquisa"
                
            ></v-text-field>
            <v-btn color="#8C9EFF" @click="procura(pesquisa)">Pesquisar</v-btn>
            </div>
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

.input{
    display: flex;
}
</style>

<script>
import axios from "axios";
export default ({
    data() {
        return {
            medicamentos : [],
            show: false,
            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
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
      .then(response => (this.medicamentos = response.data.medicamento));
    },
    }
})
</script>