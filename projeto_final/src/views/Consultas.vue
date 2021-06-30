<template>
<v-app>
<v-container>
<h1>Consultas Marcadas</h1>
<div v-for="(item, index) in consultas" :key="index" :item="consultas">
<table>
    <tr>
        <th>Animal</th>
        <th>Cliente</th>
        <th>Data_Hora</th>
        <th>Estabelecimento</th>
        <th>Preço</th>
        <th>Vetenário</th>
    </tr>
    <tr>
        <th>{{item.animal}}</th>
        <th>{{item.cliente}}</th>
        <th>{{item.data_hora}}</th>
        <th>{{item.estabelecimento}}</th>
        <th>{{item.preco}}€</th>
        <th>{{item.veterinario}}</th>
    </tr>
</table>
</div>
   
</v-container>   
</v-app>
</template>

<style scoped>
table {
  margin-top: 50px;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #8C9EFF;
}
</style>

<script>
import axios from "axios";
export default ({
    data() {
        return {
            consultas : []
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
      .then(response => (this.consultas = response.data.consulta));
    },
    }
})

</script>