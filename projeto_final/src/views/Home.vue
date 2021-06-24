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
      <h2>Lorem ipsum dolor sit amet consectetur.</h2>
      <div class="fitment_middle">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aspernatur doloribus voluptate dolorem non? Provident, ut vero, nam enim nesciunt nulla temporibus ad eos qui aperiam molestiae esse iste similique laboriosam rerum vel facere.
        Ad nam, nesciunt, harum sapiente provident quam ex nemo, ab totam itaque vitae minima enim labore necessitatibus!
        </p>
      </div>
    </div>
    </div>
  </v-row>
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
