<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

<!-- Hier muss dann die Moeglichkeit bestehen, dass man eigene Bilder einfügen kann -->
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

  
    <v-card-title>Pflanzen-/Gruppenname</v-card-title>

    <v-card-text class="left">
      Kurze Beschreibung Pflanze/Gruppe
    </v-card-text>

    <v-card-text class="left">
        Aktuelle Werte:
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    
    <!-- Actions edit, delete, show data -->
    <v-card-actions>
     
     <v-btn
      class="mx-2"
      fab
      dark
      small
      color="cyan"
      @click="Edit"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>
     
      <v-btn
      class="mx-2"
      fab
      dark
      small
      color="primary"
      @click="Delete"
    >
    
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      small
      color="teal"
      @click="data"
    >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>

    </v-card-actions>
   
  </v-card>
</template>

<script>
  export default {
     name: 'Card',
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      edit () {
        
      },

    delete () {

    },

    data () {

    }

    },
  }
</script>

<style>

.left{
    text-align: left;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>