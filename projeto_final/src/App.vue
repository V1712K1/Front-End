<template>
  <div>
    <v-app>

    <v-app-bar color="indigo accent-1" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-app-bar-nav-icon>
        <router-link to="/">
          <img :src="require('@/assets/home_logo.png')" height="25">
        </router-link>  
      </v-app-bar-nav-icon>


      <v-app-bar-nav-icon>
        <router-link to="/Admin_Login">
          <span class="material-icons">
            admin_panel_settings
          </span>
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


    

    <v-navigation-drawer color="indigo accent-1"  v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="shades white--text text--accent-4"
        >
        
          <router-link to="/Tratamentos">
            <v-list-item>
                <v-list-item-title>
                 Tratamentos        
                </v-list-item-title>              
            </v-list-item>
          </router-link>  
     

          <router-link to="/Consultas">
            <v-list-item>
                <v-list-item-title>
                 Consultas         
                </v-list-item-title>              
            </v-list-item>
          </router-link>  

           <router-link to="/Staff">
            <v-list-item>
              <v-list-item-title>
                 Staff           
              </v-list-item-title>              
            </v-list-item>
          </router-link>

          <router-link to="/Contactos">
            <v-list-item>
              <v-list-item-title>
                 Contactos            
              </v-list-item-title>              
            </v-list-item>
          </router-link> 
          
         <router-link to="/about">
            <v-list-item>
                <v-list-item-title>
                 Acerca de            
                </v-list-item-title>              
            </v-list-item>
          </router-link>    
   
          <v-list-item>
            <v-list-item-title>-----</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
    <v-footer dark padless class="cor_footer">
    <v-card class="flex" flat tile>
      <v-card-title class="indigo accent-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon id="">
          <v-icon size="24px" style="color: black;">
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
<style scoped>
.material-icons{
  color: black;
}

.subheading{
  color: black;
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