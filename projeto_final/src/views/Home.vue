<template>
<v-app>
  <div class="container">
    <v-row>
    <v-carousel class="imagem_carosel">
      <v-carousel-item  width="1200" 
        v-for="(imagem,i) in imagens"
        :key="i"
        :src="imagem.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    </v-row>
    <br>
    <br>
    <hr>
    <hr>
    <v-row>
    <div class="under_carousel_stuff">
    <div class="fitment_middle">
      <h2>O que podemos fazer neste site?</h2>
      <div class="fitment_middle">
        <p>
        Podemos fazer registo e login(cliente e administrador), como também consultar as consultas marcadas e os veterinários. Ainda dentro das consultas, pode consultar os animais e devidos clientes que deram entrada.
        No administrador, pode adicionar mais consultas!
        </p>
      </div>
    </div>
    </div>     
  </v-row>
  <div class="linguagens">
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
          <v-img :src="require('/images/firebase.png')" max-height="200" max-width="200">
        <div class="middle">
          <div class="text"> Firebase</div>
        </div>
        </v-img>
        </div>
      </v-row>
    </div>
    <div class="linguagens">
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
  <hr>
  <hr>
  
    </div>  
</v-app>
</template>

<style scoped>

.container-fluid{

  display: flex;
  justify-content: center;
}

.imagem_carosel{
  height:750px;
  border-radius: 20px;
  box-shadow: 4px 5px 9px  #8C9EFF;
}

.under_carousel_stuff{

      margin-top: 50px;
      margin-bottom: 50px;
      border: 2px solid #8C9EFF;
      border-radius: 20px;
}

.fitment_middle{
      display: flex;
      margin: 1rem;
      
    }
.linguagens{

  margin-top: 20px;
  background-color: #8C9EFF;
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
  color: #8C9EFF;
  font-size: 16px;
  padding: 16px 32px;
  border-radius: 20px;
}


</style>

<script>

  export default {
    data () {
      return {
        imagens: [
          {
            src: 'https://casa.abril.com.br/wp-content/uploads/2020/10/pets-decoracao-cachorros-sofa.jpg?quality=95&strip=info',
          },
          {
            src: 'https://todaysveterinarybusiness.com/wp-content/uploads/sites/2/2019/12/Vet-Visit.jpg',
          },
          {
            src: 'https://www.vanislevet.com/wp-content/uploads/sites/4/2018/12/vet-dog.jpg',
          },
          {
            src: 'https://www.lolipet.com.br/blog/wp-content/uploads/2015/09/VetComfortingDog.jpg',
          },
        ],
      }
    },
  }
</script>
