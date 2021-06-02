<template>
<v-app>
  <div class="container-fluid" :style="{'background-image': 'url(' + require('@/assets/background_doge.jpg') + ')'}" style="height:1000px;">
    <div class="container">
      <v-img :src="require('/images/logo_vuetify.png')" max-height="100" max-width="100"></v-img>
      <v-img :src="require('/images/logo_vue.png')" max-height="100" max-width="100"></v-img>
      <v-img :src="require('/images/logo_api.png')" max-height="100" max-width="100"></v-img>
    </div>  
  </div> 
  
</v-app> 
</template>


<script>

export default {
  name: 'Home',
  components: {
  }, 
}
</script>