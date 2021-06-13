<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar class="tamanho">
      <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Front-End</h6>
      <b-nav >
          <b-nav-item

               href="https://github.com/VitorRodrigues2002/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Vitor Rodrigues</b-nav-text>
          </b-nav-item>
          <b-nav-item
          
               href="https://github.com/Ampv2002/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Afonso Vieira</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/NicolauPinto/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Nicolau Pinto</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/RubeNascimento/Front-end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Ruben Nascimento</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/DiogoR97/Exercicios-Front-end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Diogo Livramento</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/V1712K1/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Vitor Quintal</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/henriquemota02/Front-end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Henrique Mota</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/goreteleca/front_end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Maria Gorete</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/tomasgtbrazao/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Tomas Brazão</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/tiago-rgb/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Tiago Ribeiro</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/reynolds2106/Front-end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Augusto Reynolds</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/diogop2020/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Diogo Perestrelo</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/Freed-ex/Front-end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Gonçalo Chaves</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/ericacamacho/Front-end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Erica Camacho</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/afonso-ship-it/Front-End"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">João Afonso</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/YggDrasilPT?tab=repositories"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Marcelo Freitas</b-nav-text>
          </b-nav-item>
          <b-nav-item
               href="https://github.com/LuisAlmeida321/aulas-front_end"
               >
              <i class="ni ni-spaceship"></i>
              <b-nav-text class="nomes">Luis Almeida</b-nav-text>
          </b-nav-item>
       </b-nav>

    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
  /* eslint-disable no-new */
  import PerfectScrollbar from 'perfect-scrollbar';
  import 'perfect-scrollbar/css/perfect-scrollbar.css';

  function hasElement(className) {
    return document.getElementsByClassName(className).length > 0;
  }

  function initScrollbar(className) {
    if (hasElement(className)) {
      new PerfectScrollbar(`.${className}`);
    } else {
      // try to init it later in case this component is loaded async
      setTimeout(() => {
        initScrollbar(className);
      }, 100);
    }
  }

  import DashboardNavbar from './DashboardNavbar.vue';
  import ContentFooter from './ContentFooter.vue';
  import DashboardContent from './Content.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      DashboardContent,
      FadeTransition
    },
    methods: {
      initScrollbar() {
        let isWindows = navigator.platform.startsWith('Win');
        if (isWindows) {
          initScrollbar('sidenav');
        }
      }
    },
    mounted() {
      this.initScrollbar()
    }
  };
</script>
<style lang="scss">
  .tamanho{
    font-size: 15px;
  }

  .nomes{
    margin-left: 8px;
  }

</style>
