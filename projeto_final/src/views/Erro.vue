  
<template>
    <div class="container-fluid" :style="{'background-image': 'url(' + require('@/assets/erro.jpg') + ')'}" style="height:900px; ">
    <h1 class="erro">404</h1>
    <h2>UPS! Caminho nao encontrado. Retorne a página inicial</h2>
    <router-link to="/">
        <v-btn class="botao_retorna" x-large style="height=50px;"> HomePage </v-btn>
    </router-link>
    </div>

</template>
<style scoped>
.container-fluid{
   
    color: white;
}
.erro{
    font-size: 250px;
}
.botao_retorna{
    margin-top: 20px;
}
</style>