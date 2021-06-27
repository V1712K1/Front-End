<template>
    <v-app>
        <v-container>
            <h1>Bla</h1>
            <div v-for="vet in vets" :key="vet">
                <h2>{{vet.data}}</h2>
            </div>
        </v-container>
    </v-app>
</template>

<script>
import axios from "axios";
export default ({
    data() {
        return {
            vets : []
        }
        
    },

    methods:{

    api(){
      axios
      .get("https://projeto-veterinario-default-rtdb.europe-west1.firebasedatabase.app/")
      .then(response => (this.vets = response.data.veterinario));
      console.log(this.vets);
    },
    }
})

</script>
