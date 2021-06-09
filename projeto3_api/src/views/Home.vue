<template>
<v-app>
  <div class="container-fluid" :style="{'background-image': 'url(' + require('@/assets/background_doge.jpg') + ')'}" style="height:1000px; ">
    <div class="container">
      <v-row class="espaco_logo">
        <div class="hover_image">
          <v-img :src="require('/images/logo_vuetify.png')" max-height="200" max-width="200">
        <div class="middle">
          <div class="text"> Vuetify</div>
        </div>
        </v-img>
        </div>
        <div class="hover_image">
          <v-img :src="require('/images/logo_vue.png')" max-height="150" max-width="150">
        <div class="middle">
          <div class="text"> Vue</div>
        </div>
        </v-img>
        </div>
        <div class="hover_image">
          <v-img :src="require('/images/dog-api-logo.svg')" max-height="150" max-width="130">
        <div class="middle">
          <div class="text">Dog API</div>
        </div>
        </v-img>
        </div>
      </v-row>
    </div>

    <div class="container">
      <v-row class="espaco_logo">
        <div class="hover_image">
          <v-img :src="require('/images/w3schools.png')" max-height="200" max-width="200">
        </v-img>
        </div>
        <div class="hover_image">
          <v-img :src="require('/images/outras_linguagens.png')" max-height="200" max-width="200">
        </v-img>
        </div>
      </v-row>
    </div>   
  </div> 
  
</v-app> 
</template>

<style scoped>

.container{

  margin-top: 20px;
  background-color: #FF7043;
  border-radius: 20px;
}

.espaco_logo{

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1px;
}
.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.hover_image:hover .middle {
  opacity: 1;
}

.text {
  background-color: #E0E0E0;
  color: #FF7043;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 20px;
}
</style>

<script>

export default {
  name: 'Home',
  components: {
  }, 
}
</script>