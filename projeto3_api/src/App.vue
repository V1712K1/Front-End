<template>
  <div>
    <v-app>

    <v-app-bar color="teal" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon>
        <router-link to="/">
          <img :src="require('../images/icon_toolbar.png')" height="37"/>
        </router-link>  
      </v-app-bar-nav-icon>    

      <v-app-bar-nav-icon>
        <router-link to="/Login"> 
          <span class="material-icons">
            account_circle
          </span>
        </router-link>  
      </v-app-bar-nav-icon>
      
      <v-app-bar-nav-icon>
        <router-link to="/Register">
          <span class="material-icons">
            description
          </span>
        </router-link>  
      </v-app-bar-nav-icon> 
    </v-app-bar>

    <v-navigation-drawer color="deep-orange lighten-2"  v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="shades white--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link to="/Produto/raca">
                 Produto
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/Produtos">
                Produtos
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <router-link to="/About" >
                About
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>-----</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon id="">
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
  </div> 
</template>
<style>

.material-icons{

  color: white;
}

</style>
<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
