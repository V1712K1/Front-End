<template>
  <div>
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar color="deep-purple accent-4" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon>
        <router-link to="/" class="icons_nav">
          <img class="mr-3" :src="require('../images/icon_toolbar.png')" height="35"/>
        </router-link>  
      </v-app-bar-nav-icon>    

      <v-app-bar-nav-icon>
        <router-link to="/Login" class="icons_nav"> 
          <span class="material-icons">
            account_circle
          </span>
        </router-link>  
      </v-app-bar-nav-icon>
      
      <v-app-bar-nav-icon>
        <router-link to="/Register" class="icons_nav"> 
          <span class="material-icons">
            description
          </span>
        </router-link>  
      </v-app-bar-nav-icon> 
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title
              ><router-link to="/Produto/raca"
                >Produto</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="/Produtos"
                >Produtos</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              ><router-link to="/About">About</router-link></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title>-----</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </div>
</template>
<style>

.espaco_icons{

  display: inline-block;
  justify-content: right;
}

.icons_nav{

  color: aquamarine;
}
</style>
<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
