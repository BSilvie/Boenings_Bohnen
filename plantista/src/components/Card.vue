<template>
  <v-container fluid>
      <v-row>
        <v-col
          v-for="(plant, plantIndex) in plants"
          :key="plantIndex"
        >

        <v-card>
            <!-- Hier muss dann die Moeglichkeit bestehen, dass man eigene Bilder einfügen kann -->
            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            />

            <status-light
                :status="plant.status"
                class="statusLight"
            />

            <v-card-title>{{plant.name}}</v-card-title>

            <v-btn
                fab
            >
                {{plant.moisturization}}
            </v-btn>

          <v-divider/>
          
          <!-- Actions edit, delete, show data -->
          <v-card-actions>
            <v-spacer />

            <v-btn
              icon
              fab
              small
              @click="showData"
            >
              <v-icon dark>mdi-chart-areaspline</v-icon>
            </v-btn>

            <v-btn
              fab
              icon
              small
              @click="editPlant"
            >
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
              icon
              fab
              small
              @click="deletePlant"
            >
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions> 
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StatusLight from './StatusLight.vue';

export default {
    name: 'Card',
    components: {
        StatusLight
    },
    data()
    {
        return {
            loading: false,
            selection: 1,
            plants: [
                {
                    name: "Jan",
                    moisturization: 525,
                    status: 0
                },
                {
                    name: "Silvie",
                    moisturization: 221,
                    status: 2
                },
                {
                    name: "Melanie",
                    moisturization: 432,
                    status: 2
                },
                {
                    name: "Alex",
                    moisturization: 531,
                    status: 2
                },
                {
                    name: "Manuel",
                    moisturization: 553,
                    status: 1
                }
            ]
        }
    },
    methods: {
        editPlant()
        {
        
        },
        deletePlant()
        {

        },
        showData()
        {
        
        }
    }
}
</script>

<style>
.statusLight {
    position: absolute;
    right: 10px;
    top: 10px;
}

.left{
    text-align: left;
}
.group {
  display: flex;
  flex: 1;
  justify-content: space-around;
}
</style>